"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavigationProps {
  // Add these props to match your existing component structure
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
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled
          ? "h-14 bg-white/80 backdrop-blur-xl border border-gray-200/50 scale-95 w-[90%] max-w-2xl shadow-lg"
          : "h-14 bg-white/60 backdrop-blur-sm w-[95%] max-w-3xl border border-gray-200/30"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate?.("/")}>
            <div
              className={`transition-all duration-300 ease-in-out ${isScrolled ? "w-7 h-7" : "w-8 h-8"} rounded-lg overflow-hidden`}
            >
              <Image
                src="/logo.png"
                alt="BitGuardAI Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="font-bold text-base">BitGuardAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
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
                className="text-sm text-gray-600 hover:text-gray-900 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => onNavigate?.("/dashboard")}
                  size="sm"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Dashboard
                </Button>
                {/* Add UserDropdown component here when available */}
              </div>
            ) : currentPath === "/auth" ? (
              <Button
                onClick={handleBackToHome}
                size="sm"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                Back to Home
              </Button>
            ) : (
              <Button
                onClick={handleGetStarted}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
              >
                Connect Wallet
              </Button>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/20 backdrop-blur-sm border border-gray-200/50"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white/95 backdrop-blur-xl">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg text-gray-600 hover:text-gray-900 transition-colors"
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

                  {isAuthenticated ? (
                    <div className="mt-4">
                      <Button
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          onNavigate?.("/dashboard")
                        }}
                        className="w-full"
                        variant="outline"
                      >
                        Dashboard
                      </Button>
                    </div>
                  ) : currentPath === "/auth" ? (
                    <Button
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        handleBackToHome()
                      }}
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 mt-4"
                    >
                      Back to Home
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        handleGetStarted()
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white mt-4"
                    >
                      Connect Wallet
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
