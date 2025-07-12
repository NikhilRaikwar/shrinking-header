"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${500 - i * 8 * position} -${250 + i * 8}C-${
            500 - i * 8 * position
        } -${250 + i * 8} -${400 - i * 8 * position} ${300 - i * 8} ${
            200 - i * 8 * position
        } ${450 - i * 8}C${800 - i * 8 * position} ${600 - i * 8} ${
            900 - i * 8 * position
        } ${800 - i * 8} ${900 - i * 8 * position} ${800 - i * 8}`,
        color: `rgba(255,255,255,${0.1 + i * 0.03})`,
        width: 1 + i * 0.05,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-white/30"
                viewBox="0 0 1000 500"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.3 + path.id * 0.05}
                        initial={{ pathLength: 0.3, opacity: 0.8 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.5, 0.8, 0.5],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
            {/* Debug: Add a visible element to confirm background is loading */}
        </div>
    );
}
