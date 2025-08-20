"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // current route

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[var(--color-background)]/90 backdrop-blur-md shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo with subtle gradient hover */}
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:from-[var(--color-secondary)] hover:to-[var(--color-primary)] transition-all duration-300 hover:scale-105"
          >
            MySaaS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1 rounded-lg font-medium transition-all duration-200 group ${
                  pathname === link.href
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[var(--color-primary)] transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/pricing"
              className="ml-4 px-5 py-2 bg-[var(--color-interactive)] text-white rounded-lg font-semibold shadow-lg hover:scale-105 hover:bg-[var(--color-interactive)]/80 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[var(--color-primary)] focus:outline-none p-2 rounded-md hover:bg-[var(--color-primary-light)]/20 transition-all"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[var(--color-background)] overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 py-2" : "max-h-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block text-[var(--color-foreground)] px-4 py-2 rounded-lg transition-all duration-200 ${
              pathname === link.href
                ? "text-white bg-[var(--color-primary)]"
                : "hover:text-white hover:bg-[var(--color-primary-light)]"
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile CTA */}
        <Link
          href="/pricing"
          className="block mt-2 mx-4 px-4 py-2 bg-[var(--color-interactive)] text-white rounded-lg font-semibold shadow-md hover:scale-105 hover:bg-[var(--color-interactive)]/80 transition-all duration-200"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
