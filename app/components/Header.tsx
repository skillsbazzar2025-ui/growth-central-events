'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-orange-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <div className="cursor-pointer">
            <h1 className="text-xl font-bold">Growth Central Events</h1>
            <p className="text-xs hidden sm:block">Creating Similar Interest Events</p>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-orange-200 transition">Home</Link>
          <Link href="/events" className="hover:text-orange-200 transition">Events</Link>
          <Link href="/memberships" className="hover:text-orange-200 transition">Memberships</Link>
          <Link href="/the-circle" className="hover:text-orange-200 transition">The Circle</Link>
          <Link href="/for-partners" className="hover:text-orange-200 transition">For Partners</Link>
          <Link href="/contact" className="hover:text-orange-200 transition">Contact</Link>
        </nav>

        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-orange-700 py-4 px-4 space-y-3">
          <Link href="/" className="block hover:text-orange-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/events" className="block hover:text-orange-200" onClick={() => setIsMenuOpen(false)}>Events</Link>
          <Link href="/memberships" className="block hover:text-orange-200" onClick={() => setIsMenuOpen(false)}>Memberships</Link>
          <Link href="/the-circle" className="block hover:text-orange-200" onClick={() => setIsMenuOpen(false)}>The Circle</Link>
          <Link href="/for-partners" className="block hover:text-orange-200" onClick={() => setIsMenuOpen(false)}>For Partners</Link>
          <Link href="/contact" className="block hover:text-orange-200" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  )
}
