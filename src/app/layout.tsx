import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HIND-A Trust",
  description: "Educate, Empower, Elevate Society",
  keywords: "Bihar, education, healthcare, skill development, community development",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
              {/* Logo and description column */}
              <div>
                <div className="mb-6">
                  <Image
                    src="/hinda-logo.png"
                    alt="HIND-A Foundation"
                    width={120}
                    height={30}
                    className="mb-2"
                  />
                </div>
                <p className="text-gray-600">
                  Empowering Bihar&apos;s future through education, healthcare, and skill development.
                </p>
                {/* Social media links */}
                <div className="flex gap-4 mt-6">
                  <a href="https://www.linkedin.com/in/dr-mohsena-khalil-94678552/" 
                    className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61571722253961&mibextid=wwXIfr&mibextid=wwXIfr" 
                    className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/hinda_charitable_trust?igsh=eGV5d2RjamhlMjNp" 
                    className="text-gray-500 hover:text-pink-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links column */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-800">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="#what-we-do" className="text-gray-600 hover:text-blue-600">What We Do</Link></li>
                  <li><Link href="#bihar" className="text-gray-600 hover:text-blue-600">Bihar</Link></li>
                  <li><Link href="#secretary" className="text-gray-600 hover:text-blue-600">Team</Link></li>
                  <li><Link href="#contribute" className="text-gray-600 hover:text-blue-600">Contribute</Link></li>
                  <li><Link href="/donate" className="text-gray-600 hover:text-blue-600">Donate</Link></li>
                </ul>
              </div>

              {/* Contact column */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-800">Contact</h4>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-gray-500" />
                    <div>
                      <div>Gate No 97</div>
                      <div>Banskothi, Digha Ghat</div>
                      <div>Patna 800011, Bihar</div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-gray-500" />
                    <a href="mailto:contact@hind-a.in" className="hover:text-blue-600">contact@hind-a.in</a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-gray-500" />
                    <a href="tel:+919315943090" className="hover:text-blue-600">+91 93159 43090</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
              <p>© 2024 HIND-A. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}