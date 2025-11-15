"use client";

import { useState } from "react";

import Image from "next/image"
import logo from "../../public/logo2.png"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="xl:px-4 px-1 fixed top-0 w-full bg-[rgba(90,71,37,0.5)] backdrop-blur-md shadow-md z-50">
      <div className="px-4 md:px-10 flex justify-between items-center">
        <Link href={"#"}>
            <Image src={logo} alt="Nature Nest Official Logo" width={80} height={80} />
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-white text-sm">
            <li className="font-bold cursor-pointer hover:text-amber-200"><Link href="#">HOME</Link></li>
            <li className="font-bold cursor-pointer hover:text-amber-200"><Link href="#contact">CONTACT</Link></li>
            <li className="font-bold cursor-pointer hover:text-amber-200"><Link href="#faq">FAQ&apos;s</Link></li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[rgba(90,71,37,0.9)] px-4 py-4">
          <ul className="flex flex-col gap-4 text-white text-sm">
            <li className="font-bold cursor-pointer hover:text-amber-200"><Link href="#" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
            <li className="font-bold cursor-pointer hover:text-amber-200"><Link href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link></li>
            <li className="font-bold cursor-pointer hover:text-amber-200"><Link href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ&apos;s</Link></li>
          </ul>
        </nav>
      )}
    </section>
  );
}