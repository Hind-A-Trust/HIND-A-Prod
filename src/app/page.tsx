"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Award, Users, Linkedin, Activity, Shield, CheckCircle, FileText } from "lucide-react"
import { useState } from "react"
import { Menu, X } from 'lucide-react';

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // const donations = [
  //   { name: "Tata Trusts", amount: "₹50,00,000", date: "March 2024" },
  //   { name: "Anonymous Donor", amount: "₹25,00,000", date: "February 2024" },
  //   { name: "Tech For Good", amount: "₹15,00,000", date: "January 2024" },
  //   // Add more donations as needed
  // ]

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
              />
            </Link>

            {/* Desktop Navigation Only */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="space-x-8">
                <Link href="#what-we-do" className="text-[#333333] hover:text-[#1A1A1A] transition-colors">
                  What We Do
                </Link>
                <Link href="#bihar" className="text-[#333333] hover:text-[#1A1A1A] transition-colors">
                  Bihar
                </Link>
                <Link href="#secretary" className="text-[#333333] hover:text-[#1A1A1A] transition-colors">
                  Team
                </Link>
                <Link href="#contribute" className="text-[#333333] hover:text-[#1A1A1A] transition-colors">
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

      {/* Mobile Menu Button with increased z-index */}
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

      {/* Mobile Navigation Overlay with higher z-index and transition */}
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
                  href="#what-we-do"
                  className="block px-4 py-3 text-[#333333] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  What We Do
                </Link>
                <Link
                  href="#bihar"
                  className="block px-4 py-3 text-[#333333] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bihar
                </Link>
                <Link
                  href="#secretary"
                  className="block px-4 py-3 text-[#333333] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="#contribute"
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
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-50" /> {/* Dark overlay */}
          <Image
            src="/5.jpg"
            alt="Healthcare in action"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>
        <motion.div 
          style={{ opacity, scale }} 
          className="z-20 text-center px-4 relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-balance">
            Educate, Empower, Elevate Bihar
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#F5F5F5] max-w-3xl mx-auto">
            Together, we&apos;re building a stronger Bihar through healthcare education 
            and skill development initiatives.
          </p>
          <div className="space-x-4">
            <Button className="bg-stone-400 text-[#1A1A1A] hover:bg-stone-300 transition-colors text-lg px-8 py-6">
              Join Our Mission
            </Button>
            <Button variant="default" className="bg-slate-200 hover:bg-slate-100 text-black text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="text-white w-10 h-10" />
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-gray-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
              Our Mission In Action
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Transforming Bihar Through<br />
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-stone-600 to-slate-800">
                Education & Empowerment
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Since 2024, HIND-A has impacted over 100 lives through our innovative approach 
              to community development. We believe in sustainable change through education and skill enhancement.
            </p>
          </motion.div>
      
          {/* Cards Section */}
          <div className="grid md:grid-cols-2 gap-14 max-w-7xl mx-auto">
            {/* Skill Development Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Skill Development</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our data-driven approach has shown that targeted skill development can increase 
                  employment opportunities by 70%. We provide comprehensive training programs designed 
                  to meet industry demands and foster entrepreneurship.
                </p>
      
                <div className="space-y-4">
                  {[
                    {
                      title: "Digital Literacy & Technology",
                      description: "Comprehensive courses in programming, digital marketing, and data analytics"
                    },
                    {
                      title: "Entrepreneurship Development",
                      description: "Business planning, financial management, and market analysis training"
                    },
                    {
                      title: "Professional Growth",
                      description: "Communication skills, leadership development, and workplace ethics"
                    },
                    {
                      title: "Industry Certifications",
                      description: "Globally recognized certifications in high-demand sectors"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-2 h-2 rounded-full bg-gray-400 mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
      
            {/* Healthcare Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Activity className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Healthcare Education</h3>
                </div>
      
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our healthcare initiatives have reduced preventable health issues by 45% in our 
                  target communities. We focus on sustainable healthcare education that creates 
                  lasting impact through community involvement.
                </p>
      
                <div className="space-y-4">
                  {[
                    {
                      title: "Community Health Leadership",
                      description: "Training local leaders in basic healthcare and emergency response"
                    },
                    {
                      title: "Preventive Healthcare",
                      description: "Education on nutrition, hygiene, and disease prevention"
                    },
                    {
                      title: "Mental Health Support",
                      description: "Awareness programs and support group facilitation training"
                    },
                    {
                      title: "Maternal & Child Care",
                      description: "Specialized programs for mother-child health and early development"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-2 h-2 rounded-full bg-gray-400 mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* Bihar State Section */}
      <section id="bihar" className="py-28 bg-gradient-to-b from-[#1A1A1A] to-[#222222] text-white relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-96 h-96 bg-stone-400 rounded-full blur-3xl -top-48 -left-48"></div>
          <div className="absolute w-96 h-96 bg-slate-200 rounded-full blur-3xl -bottom-48 -right-48"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <span className="text-stone-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              The Challenge Before Us
            </span>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Bihar Today:<br />
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-stone-400 to-slate-200">
                A Call for Change
              </span>
            </h2>
            <p className="text-xl text-stone-300 leading-relaxed">
              While Bihar&apos;s cultural tapestry spans millennia and its people&apos;s resilience knows no bounds,
              the state faces critical challenges that require immediate, systematic intervention. 
              Together, we can transform these statistics into stories of success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                stat: "47%",
                label: "Youth Unemployment",
                description: "of Bihar's youth remain unemployed, their potential untapped and dreams unrealized, significantly higher than the national average of 23%",
                icon: "👥",
                color: "from-[#1A1A1A] to-[#212121]"
              },
              {
                stat: "33.7%",
                label: "Poverty Rate",
                description: "of the population lives below the poverty line, struggling for basic necessities, affecting over 35 million people",
                icon: "📊",
                color: "from-[#1A1A1A] to-[#212121]"
              },
              {
                stat: "62%",
                label: "Healthcare Gap",
                description: "of rural Bihar lacks access to proper healthcare facilities, leading to preventable health crises",
                icon: "🏥",
                color: "from-[#1A1A1A] to-[#212121]"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className={`h-full p-8 rounded-2xl backdrop-blur-sm border border-white/5 
                  bg-gradient-to-b ${item.color} hover:translate-y-[-4px] transition-all duration-300
                  hover:border-white/10`}
                >
                  <div className="text-5xl mb-6 opacity-75">{item.icon}</div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <h3 className="text-4xl font-bold text-white group-hover:text-stone-300 transition-colors">
                      {item.stat}
                    </h3>
                    <span className="text-sm text-stone-400 font-medium uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-stone-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-stone-400 mb-6">
              These aren&apos;t just numbers, they represent millions of lives waiting for an opportunity to thrive.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-stone-400 to-slate-200 text-[#1A1A1A] rounded-full
              hover:from-stone-300 hover:to-slate-100 transition-all duration-300 font-semibold
              shadow-lg hover:shadow-stone-400/25">
              Join Our Mission
            </button>
          </motion.div>
        </div>
      </section>
      {/* Team Section */}
            <section id="secretary" className="py-28 bg-gradient-to-b from-gray-50 to-white">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-20"
                >
                  <span className="text-gray-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                    Leadership
                  </span>
                  <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    A Message From Our<br />
                    <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-stone-600 to-slate-800">
                      Secretary
                    </span>
                  </h2>
                </motion.div>
            
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                  {/* Secretary's Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src="/secretary.jpeg"
                        alt="Dr. Mohsena Khalil"
                        fill
                        className="object-cover"
                      />
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -left-4 w-24 h-24 bg-stone-600/10 rounded-full"></div>
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-800/10 rounded-full"></div>
                    </div>
                    
                    {/* Credentials Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-gray-100"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">20+ Years</h4>
                          <p className="text-sm text-gray-600">In Social Service</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
            
                  {/* Secretary's Message */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-bold text-gray-900">Dr. Mohsena Khalil</h3>
                        <div className="h-px flex-1 bg-gray-200"></div>
                      </div>
                      <p className="text-lg font-medium text-gray-600">
                        Secretary, HIND-A Foundation
                      </p>
                    </div>
            
                    <blockquote className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                      &quot;When I look at Bihar, I see not just challenges, but immense potential waiting to be unlocked. 
                        Every young person deserves the opportunity to dream big and achieve bigger. This belief has 
                        driven our mission at HIND-A from day one.&quot;
                      </p>
                      <p>
                      &quot;Our journey began with a simple question: How can we create lasting change? The answer 
                        lay in education and healthcare, the two pillars that can transform not just individuals, 
                        but entire communities. Today, I&apos;m proud to say that we&apos;ve impacted over 100 lives, 
                        but this is just the beginning.&quot;
                      </p>
                      <p>
                      &quot;I invite you to join us in this transformative journey. Together, we can build a Bihar 
                        that leads by example - in innovation, in opportunity, and in human development.&quot;
                      </p>
                    </blockquote>
            
                    {/* Signature Area */}
                    <div className="space-y-4 pt-6">
                      <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/dr-mohsena-khalil-94678552/" 
                          className="text-gray-600 hover:text-gray-900 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

        {/* Contributions Section */}
        <section id="contribute" className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/dots.svg')] bg-repeat"></div>
          </div>
  
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="text-gray-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                Join Our Mission
              </span>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Champions of<br />
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-stone-600 to-slate-800">
                  Positive Change
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Every contribution creates ripples of transformation. Join our community of 
                changemakers who are actively shaping Bihar&apos;s future.
              </p>
            </motion.div>
  
            {/* Recent Supporters */}
            {/* <div className="mb-20 px-4 sm:px-6">
              <h3 className="text-2xl font-bold text-center mb-8 sm:mb-12 text-gray-900">Recent Champions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
                {donations.slice(0, 6).map((donation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                      border border-gray-100 hover:border-gray-200">
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-stone-600 transition-colors text-sm sm:text-base">
                            {donation.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600">{donation.date}</p>
                        </div>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl sm:text-2xl font-bold text-stone-600">{donation.amount}</span>
                        <span className="text-sm sm:text-base text-gray-600">contributed</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}
          {/* Donation Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-stone-600 to-slate-800 rounded-3xl p-12 text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-6">Be Part of the Change</h3>
            <p className="text-lg text-gray-100 mb-8 max-w-xl mx-auto">
              Your contribution, no matter the size, helps us create lasting impact. 
              Join our community of changemakers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-50 text-lg px-8 py-4 rounded-full
                shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                Make a Donation
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 
                text-lg px-8 py-4 rounded-full transition-all duration-300 font-semibold">
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex justify-center items-center gap-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm text-gray-100">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm text-gray-100">Tax Benefits</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <span className="text-sm text-gray-100">Monthly Updates</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <footer className="bg-[#1A1A1A] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">HIND-A</h3>
              <p className="text-gray-400">
                Empowering Bihar&apos;s future through education, healthcare, and skill development.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#programs" className="text-gray-400 hover:text-white">Programs</Link></li>
                <li><Link href="#team" className="text-gray-400 hover:text-white">Team</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
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
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 rounded-lg px-4 py-2 flex-1 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
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