"use client";

import { Mail, Phone, MapPin, Clock, MessageCircle, User } from "lucide-react";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";

export default function ContactPage() {
  return (
    <div>

      {/* Section 1: Contact Intro */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
          Get in Touch
        </h1>
        <p className="text-[var(--color-foreground)] text-lg md:text-xl max-w-2xl mx-auto">
          Have questions or need support? Reach out to us and we’ll respond promptly.
        </p>
      </motion.section>

      {/* Section 2: Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Mail />, title: "Email", value: "support@mysaas.com", color: "text-[var(--color-primary)]" },
          { icon: <Phone />, title: "Phone", value: "+91 123-456-7890", color: "text-[var(--color-secondary)]" },
          { icon: <MapPin />, title: "Location", value: "Mumbai, India", color: "text-[var(--color-interactive)]" },
          { icon: <Clock />, title: "Hours", value: "Mon - Fri: 9am - 6pm IST", color: "text-[var(--color-primary-light)]" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className={`${item.color} mb-3 h-8 w-8`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-1">{item.title}</h3>
            <p className="text-[var(--color-foreground)]">{item.value}</p>
          </motion.div>
        ))}
      </section>

      {/* Section 3: Contact Form */}
      <section className="w-full py-20 bg-gray-900">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
      Send Us a Message
    </h2>
    <motion.form
      className="bg-white rounded-xl shadow-lg p-8 grid gap-6 mx-auto relative"
      style={{ maxWidth: '600px' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Name Input */}
      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-12 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all w-full"
        />
      </div>

      {/* Email Input */}
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg px-12 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all w-full"
        />
      </div>

      {/* Message Textarea */}
      <div className="relative">
        <MessageCircle className="absolute left-4 top-4 text-gray-400" />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded-lg px-12 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all w-full"
          rows={5}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold shadow-md hover:scale-105 transition-transform duration-200"
      >
        Send Message
      </button>
    </motion.form>
  </div>
</section>

      {/* Section 4: Map / Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] text-center mb-8">
          Our Location
        </h2>
        <motion.div
          className="w-full h-96 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Replace src with your Google Maps embed or custom map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.775882243047!2d72.877426!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63ef6f51f0d%3A0xdeadbeef!2sMumbai!5e0!3m2!1sen!2sin!4v1692518400000"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-24">
        <CTA />
      </section>

    </div>
  );
}
