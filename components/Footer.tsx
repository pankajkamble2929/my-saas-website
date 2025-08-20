"use client";

import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-background)] border-t border-gray-200 mt-20 relative overflow-hidden">

      {/* Decorative Gradient Circle */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-tr from-[var(--color-primary-light)] to-[var(--color-secondary-light)] rounded-full opacity-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo */}
        <Link href="/" className="text-[var(--color-primary)] font-bold text-2xl hover:scale-105 transition-transform duration-200">
          MySaaS
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {["Home", "Features", "Pricing", "About", "Contact"].map((link, idx) => (
            <Link
              key={idx}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-[var(--color-foreground)]">
          {[Twitter, Linkedin, Facebook].map((Icon, idx) => (
            <Link key={idx} href="#" className="hover:text-[var(--color-primary)] transition-colors transform hover:scale-110">
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
        &copy; {new Date().getFullYear()} MySaaS. All rights reserved.
      </div>
    </footer>
  );
}
