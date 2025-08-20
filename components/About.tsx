'use client';

import Image from 'next/image';
import { Zap, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      text: 'Fast, efficient, and reliable SaaS tools.',
      bg: 'bg-[var(--color-primary)]',
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      text: 'Secure infrastructure with enterprise-grade protection.',
      bg: 'bg-[var(--color-secondary)]',
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      text: 'Loved by thousands of happy customers worldwide.',
      bg: 'bg-[var(--color-interactive)]',
    },
  ];

  return (
    <section className="bg-[var(--color-background)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
            {' '}
            About Our SaaS{' '}
          </h2>
          <p className="text-[var(--color-foreground)] text-lg md:text-xl">
            We build modern, interactive, and scalable SaaS solutions that help
            startups and enterprises achieve their business goals efficiently.
            Our tools are designed with user experience, speed, and reliability
            in mind.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-col gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 bg-white/10 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              >
                <div
                  className={`p-2 rounded-full ${item.bg} flex items-center justify-center`}
                >
                  {item.icon}
                </div>
                <span className="text-[var(--color-foreground)] font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-[var(--color-foreground)] text-lg md:text-xl mt-6">
            Join thousands of happy customers who trust us to deliver innovative
            solutions that grow their business.
          </p>
        </div>

        {/* Illustration / Image */}
        <div className="md:w-1/2">
          <motion.div
            className="w-full h-64 md:h-96 relative rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: -10, x: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <Image
              src="/illustrations/about-mockup.jpg"
              alt="About SaaS Illustration"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
