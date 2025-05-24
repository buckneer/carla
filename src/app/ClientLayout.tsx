"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Car, Home, BarChart3, Users, Settings, LogOut } from "lucide-react"
import "./globals.css"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Check if user is on dashboard pages
  const isDriverDashboard = pathname?.startsWith("/dashboard/driver")
  const isOperatorDashboard = pathname?.startsWith("/dashboard/operator")
  const isDashboard = isDriverDashboard || isOperatorDashboard

  // Guest navigation (for landing, login, register pages)
  const GuestNavigation = () => (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <Link href="/" className="flex items-center justify-center">
        <div className="relative">
          <Car className="h-8 w-8 text-blue-600" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <span className="ml-2 text-xl font-bold text-gray-900">Carla</span>
      </Link>

      <nav className="hidden md:flex ml-8 gap-8">
        <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
          How It Works
        </Link>
        <Link href="#benefits" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
          Benefits
        </Link>
        <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
          Reviews
        </Link>
        <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
          FAQ
        </Link>
      </nav>

      <div className="ml-auto flex items-center gap-4">
        <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
          Sign In
        </Link>
        <Link href="/register">
          <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-md transition-all duration-200">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  )

  // Driver dashboard navigation
  const DriverNavigation = () => (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        <div className="p-6">
          <Link href="/" className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Carla</span>
          </Link>
        </div>
        <nav className="mt-6">
          <div className="px-6 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">JS</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">John Smith</p>
                <p className="text-xs text-gray-500">Driver</p>
              </div>
            </div>
          </div>
          <div className="space-y-1 px-3">
            <Link
              href="/dashboard/driver"
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/dashboard/driver"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Home className="h-5 w-5 mr-3" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/driver/vehicles"
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/dashboard/driver/vehicles"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Car className="h-5 w-5 mr-3" />
              My Vehicles
            </Link>
            <Link
              href="/dashboard/driver/activity"
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/dashboard/driver/activity"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <BarChart3 className="h-5 w-5 mr-3" />
              Activity
            </Link>
            <Link
              href="/dashboard/driver/settings"
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/dashboard/driver/settings"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </Link>
          </div>
          <div className="absolute bottom-0 w-64 p-3">
            <Link
              href="/"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors w-full"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </Link>
          </div>
        </nav>
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )

  // Operator dashboard navigation
  const OperatorNavigation = () => (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        <div className="p-6">
          <Link href="/" className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Carla</span>
          </Link>
          <p className="text-xs text-gray-500 mt-1">Operator Portal</p>
        </div>
        <nav className="mt-6">
          <div className="px-6 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold text-sm">DP</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Downtown Plaza</p>
                <p className="text-xs text-gray-500">Parking Operator</p>
              </div>
            </div>
          </div>
          <div className="space-y-1 px-3">
            <Link
              href="/dashboard/operator"
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/dashboard/operator"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Home className="h-5 w-5 mr-3" />
              Overview
            </Link>
            <Link
              href="/dashboard/operator/users"
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/dashboard/operator/users"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Users className="h-5 w-5 mr-3" />
              Users
            </Link>
            <Link
              href="/dashboard/operator/analytics"
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/dashboard/operator/analytics"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <BarChart3 className="h-5 w-5 mr-3" />
              Analytics
            </Link>
            <Link
              href="/dashboard/operator/settings"
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/dashboard/operator/settings"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </Link>
          </div>
          <div className="absolute bottom-0 w-64 p-3">
            <Link
              href="/"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors w-full"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </Link>
          </div>
        </nav>
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )

  // Render appropriate layout based on current route
  if (isDriverDashboard) {
    return (
      <html lang="en">
        <body>
          <DriverNavigation />
        </body>
      </html>
    )
  }

  if (isOperatorDashboard) {
    return (
      <html lang="en">
        <body>
          <OperatorNavigation />
        </body>
      </html>
    )
  }

  // Guest layout for landing, login, register pages
  return (
    <html lang="en">
      <body>
        <GuestNavigation />
        {children}
      </body>
    </html>
  )
}
