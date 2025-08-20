'use client';

import Link from 'next/link';
import { Zap, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[var(--color-background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col md:flex-row items-center md:items-start">
        {/* Text content */}
        <motion.div
          className="md:max-w-xl lg:max-w-2xl text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
            Build your SaaS faster.
          </h1>
          <p className="text-[var(--color-foreground)] text-lg md:text-xl mb-8">
            Modern, interactive, and fully responsive landing pages for your
            startup or SaaS product. Everything you need to engage users and
            grow your business.
          </p>

          {/* Feature Highlights with Icons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center md:justify-start">
            {[
              {
                icon: Zap,
                text: 'Fast & Reliable',
                color: 'text-[var(--color-primary)]',
              },
              {
                icon: Users,
                text: 'User Friendly',
                color: 'text-[var(--color-secondary)]',
              },
              {
                icon: Shield,
                text: 'Secure & Safe',
                color: 'text-[var(--color-interactive)]',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className={`flex items-center gap-2 text-[var(--color-foreground)] font-medium p-3 rounded-lg hover:bg-[var(--color-background)]/20 transition-all cursor-default`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <feature.icon className={`h-5 w-5 ${feature.color}`} />
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold shadow-lg hover:scale-105 hover:bg-[var(--color-primary-light)] transition-all duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/features"
              className="px-6 py-3 bg-[var(--color-secondary)] text-white rounded-lg font-semibold shadow-lg hover:scale-105 hover:bg-[var(--color-secondary-light)] transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
        {/* Illustration / Placeholder */}
        <motion.div
          className="mt-12 md:mt-0 md:ml-12 md:flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-full h-64 md:h-96 rounded-xl shadow-2xl relative overflow-hidden"
            animate={{
              y: [0, -10, 0, 10, 0], // vertical float
              x: [0, 5, 0, -5, 0], // subtle horizontal float
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/illustrations/hero-mockup.jpg"
              alt="SaaS Mockup"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Optional: subtle animated shapes */}
            <motion.div
              className="absolute w-32 h-32 bg-white/20 rounded-full top-[-40px] left-[-40px]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-24 h-24 bg-white/10 rounded-full bottom-[-30px] right-[-30px]"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
