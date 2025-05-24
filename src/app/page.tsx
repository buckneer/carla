import Link from "next/link"
import { Star, ArrowRight, Shield, Clock, TrendingUp, Users, Zap, CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs bg-white/50 backdrop-blur-sm">
              <Zap className="h-3 w-3 mr-1 text-yellow-500" />
              Now live in 50+ parking facilities
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Drive In. Drive Out. Done.
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
                No cards. No apps. No waiting. Carla's intelligent recognition system knows you're coming before you
                arrive.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <button className="h-12 px-8 text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-md transition-all duration-200 flex items-center">
                  Register Your Vehicle
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
              <Link href="/login">
                <button className="h-12 px-8 border border-purple-200 text-purple-700 hover:bg-purple-50 rounded-md transition-all duration-200">
                  For Parking Operators
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500 mt-8">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Free to register
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Instant activation
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Works everywhere
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full py-8 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-500">Trusted by leading parking facilities</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-lg font-bold text-gray-400">WESTFIELD</div>
              <div className="text-lg font-bold text-gray-400">CITYPARK</div>
              <div className="text-lg font-bold text-gray-400">METRO LOTS</div>
              <div className="text-lg font-bold text-gray-400">PARKTECH</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Effortless Access</h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              Advanced recognition technology that works seamlessly in the background
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 items-start">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Approach</h3>
                <p className="text-gray-500">
                  Simply drive up to any Carla-enabled parking facility. Our intelligent system detects your arrival.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Recognition</h3>
                <p className="text-gray-500">
                  Advanced visual recognition instantly identifies registered vehicles without any action required.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Access</h3>
                <p className="text-gray-500">
                  Barriers open automatically. Drive in, park, and leave whenever you're ready. It's that simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">For Drivers</h2>
                <p className="text-gray-600 md:text-lg">Experience parking the way it should be</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Zero Friction Entry</h4>
                    <p className="text-gray-500 text-sm">No cards, tickets, or apps to fumble with</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Instant Recognition</h4>
                    <p className="text-gray-500 text-sm">System knows you before you stop</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Seamless Exit</h4>
                    <p className="text-gray-500 text-sm">Leave when ready, no checkout required</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">For Parking Operators</h2>
                <p className="text-gray-600 md:text-lg">Transform your facility with intelligent automation</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Automated Access Control</h4>
                    <p className="text-gray-500 text-sm">Reduce staffing costs and human error</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Enhanced Security</h4>
                    <p className="text-gray-500 text-sm">Only authorized vehicles gain access</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Real-time Analytics</h4>
                    <p className="text-gray-500 text-sm">Track usage patterns and optimize operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              Real experiences from drivers and parking operators
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "I never have to worry about finding my parking card anymore. Just drive up and the gate opens. It's
                  like magic!"
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Sarah M.</p>
                    <p className="text-xs text-gray-500">Daily Commuter</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Carla reduced our operational costs by 40% and eliminated all the issues with lost tickets and card
                  readers."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm font-semibold">DL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">David L.</p>
                    <p className="text-xs text-gray-500">Parking Manager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "The system works flawlessly even in bad weather. Our customers love the seamless experience."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Maria R.</p>
                    <p className="text-xs text-gray-500">Facility Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powered by Intelligence</h2>
              <p className="max-w-[800px] text-gray-300 md:text-xl/relaxed">
                Cutting-edge recognition technology meets elegant simplicity. Our system learns, adapts, and improves
                with every interaction.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-4 max-w-4xl w-full">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">99.8%</div>
                <div className="text-sm text-gray-300">Recognition Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{"<2s"}</div>
                <div className="text-sm text-gray-300">Average Processing Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-300">Autonomous Operation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-300">Active Locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Proven ROI for Operators</h2>
                <p className="text-gray-600 md:text-lg">
                  See measurable results from day one with reduced costs and improved efficiency
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">40% Cost Reduction</span>
                  </div>
                  <p className="text-sm text-gray-500">Lower staffing and maintenance costs</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold">85% Faster Entry</span>
                  </div>
                  <p className="text-sm text-gray-500">Reduced wait times and congestion</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-purple-500" />
                    <span className="font-semibold">Zero Security Breaches</span>
                  </div>
                  <p className="text-sm text-gray-500">Enhanced access control and monitoring</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-orange-500" />
                    <span className="font-semibold">95% User Satisfaction</span>
                  </div>
                  <p className="text-sm text-gray-500">Improved customer experience</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Calculate Your Savings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly staffing costs</span>
                    <span className="font-semibold">$8,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Maintenance & repairs</span>
                    <span className="font-semibold">$1,200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lost revenue (tickets/cards)</span>
                    <span className="font-semibold">$800</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Potential Monthly Savings</span>
                    <span className="text-green-600">$4,000</span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Get Custom ROI Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">Everything you need to know about Carla</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold">How does the recognition system work?</h3>
              <p className="text-gray-600 text-sm">
                Our advanced visual recognition technology instantly identifies registered license plates as vehicles
                approach, automatically granting access to authorized users.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">What if my license plate is dirty or damaged?</h3>
              <p className="text-gray-600 text-sm">
                Our system is designed to work in various conditions and can recognize plates even when partially
                obscured. It maintains 99.8% accuracy across different weather and lighting conditions.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">How quickly can the system be installed?</h3>
              <p className="text-gray-600 text-sm">
                Most installations are completed within 24-48 hours with minimal disruption to your parking operations.
                Our team handles everything from setup to testing.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Is my data secure?</h3>
              <p className="text-gray-600 text-sm">
                Yes, all data is encrypted and stored securely. We comply with all privacy regulations and only store
                the minimum information necessary for system operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Experience Effortless Parking?
              </h2>
              <p className="text-gray-600 md:text-lg">
                Join thousands of drivers who never worry about parking access again. Register your vehicle and discover
                the future of urban mobility.
              </p>
              <div className="space-x-4">
                <Link href="/register">
                  <button className="h-12 px-8 text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-md transition-all duration-200 inline-flex items-center">
                    Register Your Vehicle
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Transform Your Parking Facility</h2>
              <p className="text-gray-600 md:text-lg">
                Reduce costs, enhance security, and provide an exceptional experience for your customers. Discover how
                Carla can revolutionize your operations.
              </p>
              <div className="space-x-4">
                <Link href="/login">
                  <button className="h-12 px-8 border border-purple-200 text-purple-700 hover:bg-purple-50 rounded-md transition-all duration-200 inline-flex items-center">
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Carla. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
