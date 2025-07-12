"use client"

import { useState } from "react"
import ShrinkingHeader from "@/components/shrinking-header"

export default function Home() {
  // Mock authentication state - replace with your actual auth logic
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentPath, setCurrentPath] = useState("/")

  const handleSignIn = () => {
    // Your Google sign-in logic here
    setIsAuthenticated(true)
  }

  const handleGetStarted = () => {
    // Your get started logic here
    console.log("Get started clicked")
  }

  const handleNavigate = (path: string) => {
    // Your navigation logic here
    setCurrentPath(path)
    console.log("Navigate to:", path)
  }

  return (
    <div className="min-h-screen">
      <ShrinkingHeader
        isAuthenticated={isAuthenticated}
        onSignIn={handleSignIn}
        onGetStarted={handleGetStarted}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center space-y-6 px-4 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">BitGuardAI</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Advanced AI-powered security solutions for the digital age
          </p>
          <button
            onClick={() => setIsAuthenticated(!isAuthenticated)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:scale-105"
          >
            {isAuthenticated ? "Sign Out (Demo)" : "Sign In (Demo)"}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Security",
                desc: "Advanced machine learning algorithms detect and prevent threats in real-time.",
              },
              {
                title: "Blockchain Protection",
                desc: "Secure your digital assets with our cutting-edge blockchain security solutions.",
              },
              {
                title: "Smart Contract Auditing",
                desc: "Comprehensive smart contract analysis to identify vulnerabilities before deployment.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">About BitGuardAI</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              BitGuardAI is at the forefront of AI-powered cybersecurity, providing cutting-edge solutions to protect
              digital assets and ensure secure transactions in the blockchain ecosystem.
            </p>
            <p className="text-lg text-gray-600">
              Our advanced algorithms and machine learning models work tirelessly to identify threats, prevent attacks,
              and maintain the integrity of your digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Demo scroll content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Scroll to see the header shrink and expand</h2>
          <p className="text-gray-600 mb-8">
            The floating header smoothly transitions and scales as you scroll. Try toggling authentication to see
            different navigation states.
          </p>
          <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
            <p className="text-2xl font-semibold text-gray-700">Demo Content Area</p>
          </div>
        </div>
      </section>
    </div>
  )
}
