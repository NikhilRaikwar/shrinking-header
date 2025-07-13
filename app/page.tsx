"use client"

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { BackgroundPaths } from "@/components/ui/background-paths"
import ShrinkingHeader from "@/components/shrinking-header"
import HeroVideoDialog from "@/components/magicui/hero-video-dialog"
import { SignInButton } from "@clerk/nextjs"
import { FlickeringGrid } from '@/components/magicui/flickering-grid';

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-0 relative overflow-hidden">
      {/* Shrinking header */}
      <ShrinkingHeader
        currentPath="/"
        onNavigate={(path) => {
          window.location.href = path === "/dashboard" ? "/dashboard" : path;
        }}
      />

      {/* Full-page animated background */}
      <div className="absolute inset-0 z-0">
        <BackgroundPaths />
      </div>

      {/* Hero Section */}
      <section className="relative z-30 w-full flex flex-col items-center justify-start pt-24 pb-20 px-4 md:px-8 min-h-[calc(100vh-200px)]">
        <Card className="w-full max-w-4xl mx-auto bg-transparent shadow-none border-0 flex flex-col items-center justify-center gap-8 p-0 md:p-8">
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight mb-2">
              <span className="text-white">BitGuard</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI</span>
              <span className="text-white">: Your AI Copilot for NFT Security, Analytics & Peace of Mind</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 text-center max-w-lg">
              Real-time protection, actionable insights, and AI-powered guidance for every NFT trader and collector
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center">
              <SignInButton mode="modal">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md w-full sm:w-auto flex items-center justify-center gap-2 text-base sm:text-sm max-w-[320px] min-w-[120px]">
                  <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                  Connect Wallet
                </button>
              </SignInButton>

              <HeroVideoDialog
                videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
                thumbnailSrc="/placeholder.jpg"
                animationStyle="from-center"
                className="w-full sm:w-auto"
                trigger={
                  <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 border border-white/20 shadow-md w-full sm:w-auto flex items-center justify-center gap-2 text-base sm:text-sm max-w-[320px] min-w-[120px]">
                    <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553 2.276A2 2 0 0121 14.09V17a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.91a2 2 0 01.447-1.814L8 10m7-4v4m0 0l-4 4m4-4l4 4" /></svg>
                    Learn More
                  </button>
                }
              />
            </div>
          </div>

          {/* Video Embed Inside Hero */}
          <div className="w-full flex justify-center mt-8">
            <HeroVideoDialog
              videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
              thumbnailSrc="/placeholder.jpg"
              animationStyle="from-center"
              className="w-full max-w-xl"
            />
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden z-10">
        <FlickeringGrid className="absolute inset-0 z-0" color="#7f5af0" maxOpacity={0.25} />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center drop-shadow-lg px-4 uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 select-none">
            USE SECURE. ANALYZE. GROW.
          </span>
        </div>
      </footer>
    </main>
  )
}
