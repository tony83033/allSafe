import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#1A1E2C] text-white py-3 px-4 flex justify-between items-center">
        <div className="text-sm font-medium">Start Your Career With Us !!</div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
            <Phone className="h-4 w-4 text-purple-400" />
            <span className="text-sm">Call: +91 8207488121</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Mail className="h-4 w-4 text-purple-400" />
            <span className="text-sm">Email: hello@defronix.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Defronix Logo" width={180} height={50} className="h-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/academy" className="font-medium text-gray-800 hover:text-gray-600">
              Academy
            </Link>
            <Link href="/verify" className="font-medium text-gray-800 hover:text-gray-600">
              Verify Your Certificates
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium text-gray-800 hover:text-gray-600 p-0 h-auto">
                  Company <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>About Us</DropdownMenuItem>
                <DropdownMenuItem>Our Team</DropdownMenuItem>
                <DropdownMenuItem>Careers</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  )
}
