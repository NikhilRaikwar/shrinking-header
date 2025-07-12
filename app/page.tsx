"use client"

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { BackgroundPaths } from "@/components/ui/background-paths"
import ShrinkingHeader from "@/components/shrinking-header"

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-0 relative overflow-hidden">
      <ShrinkingHeader
        isAuthenticated={false}
        onSignIn={() => console.log("Sign in clicked")}
        onGetStarted={() => console.log("Get started clicked")}
        currentPath="/"
        onNavigate={(path) => console.log("Navigate to:", path)}
      />

      {/* Background Paths */}
      <div className="absolute inset-0 z-0">
        <BackgroundPaths />
      </div>

      {/* White Gradient Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent" />
      </div>

      {/* Hero Section */}
      <div className="relative z-30 w-full h-screen flex items-center justify-end">
        <Card className="w-full h-full bg-black/60 relative overflow-hidden border-0 flex items-center justify-end">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          <div className="flex-1 flex items-center justify-end h-full">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </Card>
      </div>

      {/* New Features Section */}
      <section id="features" className="relative z-30 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Advanced AI Security Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your digital assets with cutting-edge AI-powered security solutions designed for the modern
              blockchain ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Real-time Threat Detection",
                description:
                  "Advanced machine learning algorithms monitor and detect suspicious activities across your blockchain transactions in real-time.",
                icon: "🛡️",
              },
              {
                title: "Smart Contract Auditing",
                description:
                  "Comprehensive analysis of smart contracts to identify vulnerabilities and security risks before deployment.",
                icon: "🔍",
              },
              {
                title: "Wallet Protection",
                description:
                  "Multi-layered security protocols to safeguard your digital wallets from unauthorized access and attacks.",
                icon: "🔐",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-30 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About BitGuardAI</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              BitGuardAI is at the forefront of AI-powered cybersecurity, providing cutting-edge solutions to protect
              digital assets and ensure secure transactions in the blockchain ecosystem.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our advanced algorithms and machine learning models work tirelessly to identify threats, prevent attacks,
              and maintain the integrity of your digital infrastructure.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
