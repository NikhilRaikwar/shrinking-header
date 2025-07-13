import { FlickeringGrid } from '@/components/magicui/flickering-grid';

export default function FooterDemo() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-black">
      <div className="flex-1 flex items-center justify-center">
        {/* Main content placeholder */}
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Footer Demo Page</h1>
      </div>
      <footer className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <FlickeringGrid className="absolute inset-0 z-0" color="#7f5af0" maxOpacity={0.25} />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <span className="text-white text-lg md:text-2xl font-semibold text-center drop-shadow-lg px-4">
            Use Secure. Analyze. Grow. <br />
          </span>
        </div>
      </footer>
    </main>
  );
} 