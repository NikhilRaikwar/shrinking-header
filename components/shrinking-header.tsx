"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavigationProps {
  isAuthenticated?: boolean
  onSignIn?: () => void
  onGetStarted?: () => void
  currentPath?: string
  onNavigate?: (path: string) => void
}

export default function ShrinkingHeader({
  isAuthenticated = false,
  onSignIn,
  onGetStarted,
  currentPath = "/",
  onNavigate,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (currentPath !== "/") {
      onNavigate?.("/")
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleGetStarted = () => {
    if (isAuthenticated) {
      onNavigate?.("/dashboard")
    } else {
      onGetStarted?.()
    }
  }

  const handleBackToHome = () => {
    onNavigate?.("/")
  }

  const navItems = []

  // Only show Features and About on landing page and when user is not authenticated
  if (currentPath === "/" && !isAuthenticated) {
    navItems.push(
      { name: "Features", href: "#features", onClick: () => scrollToSection("features") },
      { name: "About", href: "#about", onClick: () => scrollToSection("about") },
    )
  }

  // Show Dashboard link when authenticated and not on dashboard
  if (isAuthenticated && currentPath !== "/dashboard") {
    navItems.unshift({
      name: "Dashboard",
      href: "/dashboard",
      onClick: () => onNavigate?.("/dashboard"),
    })
  }

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out rounded-full ${
        isScrolled
          ? "h-14 bg-black/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-2xl shadow-2xl"
          : "h-16 bg-black/20 backdrop-blur-sm w-[95%] max-w-3xl border border-white/5"
      }`}
    >
      <div className="mx-auto h-full px-4 md:px-6">
        <nav className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate?.("/")}>
            <div className={`transition-all duration-300 ease-in-out ${isScrolled ? "w-8 h-8" : "w-10 h-10"}`}>
              <Image
                src="/logo.png"
                alt="BitGuardAI Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span
              className={`font-bold text-white transition-all duration-300 ease-in-out ${
                isScrolled ? "text-lg" : "text-xl"
              }`}
            >
              BitGuardAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  if (item.onClick) {
                    item.onClick()
                  }
                }}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}

            <Button
              onClick={handleGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
            >
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black/20 backdrop-blur-sm border border-white/10 text-white hover:bg-black/30"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black/90 backdrop-blur-xl border-white/5">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className="w-8 h-8 rounded-lg overflow-hidden">
                      <Image
                        src="/logo.png"
                        alt="BitGuardAI Logo"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                        priority
                      />
                    </div>
                    <span className="font-bold text-lg text-white">BitGuardAI</span>
                  </div>

                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg text-white/80 hover:text-white transition-colors py-2"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsMobileMenuOpen(false)
                        if (item.onClick) {
                          item.onClick()
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  ))}

                  <div className="pt-4 border-t border-white/10">
                    <Button
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        handleGetStarted()
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Connect Wallet
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
