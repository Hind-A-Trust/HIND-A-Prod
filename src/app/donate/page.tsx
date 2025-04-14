"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Heart, 
  Shield, 
  CheckCircle, 
  HandHeart
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

export default function DonationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header with increased z-index */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-[1000]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-[1001]">
              <Image
                src="/hinda-logo.png"
                alt="HIND-A Foundation"
                width={120}
                height={30}
                className="md:width-[160px]"
                draggable="false"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg relative z-[1001]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#1A1A1A]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1A1A1A]" />
              )}
            </button>

            {/* Desktop Navigation Only */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="space-x-8">
                <Link href="/#what-we-do" className="text-[#333333] hover:text-[#1A1A1A] transition-colors">
                  What We Do
                </Link>
                <Link href="/#bihar" className="text-[#333333] hover:text-[#1A1A1A] transition-colors">
                  Bihar
                </Link>
                <Link href="/#secretary" className="text-[#333333] hover:text-[#1A1A1A] transition-colors">
                  Team
                </Link>
                <Link href="/donate" className="text-[#333333] hover:text-[#1A1A1A] transition-colors">
                  Contribute
                </Link>
              </nav>
              <Button className="bg-[#1A1A1A] text-white hover:bg-[#333333]">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[999]">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          <div className="fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl z-[1000]
            transform transition-transform duration-300 ease-out">
            <nav className="p-4 pt-20">
              <div className="space-y-1">
                <Link
                  href="/#what-we-do"
                  className="block px-4 py-3 text-[#333333] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  What We Do
                </Link>
                <Link
                  href="/#bihar"
                  className="block px-4 py-3 text-[#333333] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bihar
                </Link>
                <Link
                  href="/#secretary"
                  className="block px-4 py-3 text-[#333333] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/donate"
                  className="block px-4 py-3 text-[#333333] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contribute
                </Link>
              </div>

              <div className="mt-6 px-4">
                <Button
                  className="bg-[#1A1A1A] text-white hover:bg-[#333333] w-full py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate Now
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-50" /> {/* Dark overlay */}
          <Image
            src="/5.jpg"
            alt="Donation"
            fill
            className="object-cover"
            quality={100}
            priority
            draggable="false"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-20 text-center px-4 relative"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white text-balance">
            Make a Difference Today
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-[#F5F5F5] max-w-2xl mx-auto">
            Your contribution helps us empower communities across Bihar through education and healthcare initiatives.
          </p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Heart className="text-stone-400 w-8 h-8 sm:w-10 sm:h-10 mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Donation Form Section */}
      <section className="py-10 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - QR Code (Replaced Donation Form) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 order-2 md:order-1 flex flex-col items-center justify-center"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Scan to Donate</h3>
                <p className="text-gray-600">Use your preferred UPI app to make a secure donation</p>
              </div>
              
              <div className="relative w-full max-w-[300px] h-[300px] mx-auto mb-6">
                <Image
                  src="/qr_code.jpeg"
                  alt="Donation QR Code"
                  fill
                  className="object-contain rounded-lg"
                  quality={100}
                  priority
                  draggable="false"
                />
              </div>

              {/* Added UPI ID and Phone Number */}
              <div className="w-full mb-6">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center justify-center gap-2 font-medium text-gray-900">
                    <span>UPI ID:</span>
                    <span className="text-gray-700 select-all">9315943090@upi</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 font-medium text-gray-900">
                    <span>Phone Number:</span>
                    <span className="text-gray-700 select-all">9315943090</span>
                  </div>
                </div>
              </div>

              <div className="w-full mt-4">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                  <Shield className="h-4 w-4" />
                  <span>100% secure donation process</span>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg text-center text-sm text-gray-600">
                  For assistance with your donation, please contact us at
                  <div className="font-medium mt-1">contact@hind-a.in</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Impact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-center order-1 md:order-2"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Your Impact</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    amount: "₹100",
                    description: "Provides basic healthcare essentials for a child for a week",
                    icon: <HandHeart className="w-5 h-5 text-gray-700" />
                  },
                  {
                    amount: "₹500",
                    description: "Sponsors educational materials for a student for a month",
                    icon: <HandHeart className="w-5 h-5 text-gray-700" />
                  },
                  {
                    amount: "₹1,000",
                    description: "Enables skill development training for a youth",
                    icon: <HandHeart className="w-5 h-5 text-gray-700" />
                  },
                  {
                    amount: "₹5,000",
                    description: "Funds a community health awareness program",
                    icon: <HandHeart className="w-5 h-5 text-gray-700" />
                  },
                  {
                    amount: "₹10,000",
                    description: "Supports comprehensive education for a student for six months",
                    icon: <HandHeart className="w-5 h-5 text-gray-700" />
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    className="flex gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg"
                  >
                    <div className="mt-1 flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900">{item.amount}</p>
                      <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">Tax Benefits Available</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  All donations are eligible for tax deduction under Section 80G of the Income Tax Act.
                  You will receive a receipt via email after your donation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">HIND-A</h3>
              <p className="text-gray-400">
                Empowering Bihar&apos;s future through education, healthcare, and skill development.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/#about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/#programs" className="text-gray-400 hover:text-white">Programs</Link></li>
                <li><Link href="/#team" className="text-gray-400 hover:text-white">Team</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gate No 97</li>
                <li>Banskothi, Digha Ghat</li>
                <li>Patna 800011, Bihar</li>
                <li>contact@hind-a.in</li>
                <li>+91 93159 43090</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest initiatives</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 rounded-lg px-4 py-2 flex-1 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 mb-2 sm:mb-0"
                />
                <Button className="bg-white text-[#1A1A1A] hover:bg-gray-200">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 HIND-A. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}