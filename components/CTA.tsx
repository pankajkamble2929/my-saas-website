"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-indigo-700 py-28 relative overflow-hidden">
      
      {/* Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-white/10 rounded-full animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
          Ready to take your SaaS to the next level?
        </h2>
        <p className="text-white text-lg md:text-xl mb-10 animate-fadeInUp delay-100">
          Start your free trial today or explore our features. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fadeInUp delay-200">
          <Link
            href="/pricing"
            className="flex items-center justify-center px-8 py-4 bg-yellow-400 text-gray-900 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/features"
            className="flex items-center justify-center px-8 py-4 bg-green-400 text-gray-900 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
