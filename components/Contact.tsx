"use client";

import { Mail, User, MessageCircle } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">

        {/* Left: Illustration */}
        <div className="md:w-1/2">
          <motion.div
            className="w-full h-80 md:h-[32rem] relative rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: -10, x: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src="/illustrations/contact-mockup.jpg" 
              alt="Contact Illustration"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </div>
        
        {/* Right: Contact Form */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-2xl p-8 md:p-12 animate-slideInLeft">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6 text-center md:text-left">
            Get in Touch
          </h2>
          <p className="text-[var(--color-foreground)] text-lg mb-8 text-center md:text-left">
            Have questions or want to work with us? Fill out the form below and we'll get back to you promptly.
          </p>

          <form className="space-y-6 text-left">
            {/* Name */}
            <div className="relative">
              <label htmlFor="name" className="block text-[var(--color-foreground)] font-semibold mb-2">
                Name
              </label>
              <div className="relative">
                <User className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="block text-[var(--color-foreground)] font-semibold mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label htmlFor="message" className="block text-[var(--color-foreground)] font-semibold mb-2">
                Message
              </label>
              <div className="relative">
                <MessageCircle className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] transition-all"
                  rows={6}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[var(--color-interactive)] text-white rounded-lg font-semibold shadow-md hover:bg-[var(--color-interactive)]/80 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        
      </div>
    </section>
  );
}
