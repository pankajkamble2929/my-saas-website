'use client';

import {
  Users,
  Flag,
  Heart,
  Globe,
  Star,
  CheckCircle,
  Server,
  Code,
} from 'lucide-react';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <div>
      {/* Section 1: Hero */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
          About Us
        </h1>
        <p className="text-[var(--color-foreground)] text-lg md:text-xl max-w-2xl mx-auto">
          Learn more about our mission, vision, and the team behind our modern
          SaaS platform.
        </p>
      </motion.section>

      {/* Section 2: Mission, Vision, Values, Team */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {[
          {
            icon: Flag,
            title: 'Our Mission',
            text: 'Empower businesses with modern, interactive, fully responsive SaaS solutions.',
            bg: 'from-[var(--color-primary-light)] to-[var(--color-primary)]',
          },
          {
            icon: Globe,
            title: 'Our Vision',
            text: 'Be the go-to platform for startups and enterprises looking to grow efficiently.',
            bg: 'from-[var(--color-secondary-light)] to-[var(--color-secondary)]',
          },
          {
            icon: Heart,
            title: 'Our Values',
            text: 'Innovation, transparency, and customer-first approach drive everything we do.',
            bg: 'from-[var(--color-interactive)] to-[var(--color-interactive)/80]',
          },
          {
            icon: Users,
            title: 'Our Team',
            text: 'Talented and passionate designers, developers, and strategists delivering the best SaaS experience.',
            bg: 'from-[var(--color-secondary-light)] to-[var(--color-primary-light)]',
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className={`bg-gradient-to-br ${item.bg} rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300`}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
          >
            <item.icon className="h-12 w-12 text-white mb-4 animate-bounce" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-white/90">{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Section 3: Testimonials */}
      <motion.section
        className="bg-gradient-to-r from-indigo-500 to-purple-600 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Alice', 'Bob', 'Charlie'].map((name, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-2xl transition-shadow duration-300"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-indigo-500 mr-3 animate-spin-slow" />
                  <span className="font-semibold text-gray-900">{name}</span>
                </div>
                <p className="text-gray-800 text-sm md:text-base">
                  "Working with this platform has transformed our workflow.
                  Highly recommend it!"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 4: Stats / Achievements */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Star, value: '1000+', label: 'Happy Clients' },
              {
                icon: CheckCircle,
                value: '5000+',
                label: 'Projects Delivered',
              },
              { icon: Server, value: '99.9%', label: 'Uptime' },
              { icon: Code, value: '50+', label: 'Integrations' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="h-12 w-12 text-[var(--color-primary)] mb-4 animate-pulse" />
                <span className="text-3xl font-bold text-[var(--color-foreground)]">
                  {stat.value}
                </span>
                <span className="text-[var(--color-foreground)]/80">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 5: Technology / Tools */}
      <motion.section
        className="bg-indigo-900 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Our Technology
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: 'React',
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="-10.5 -9.45 21 18.9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-brand dark:text-brand-dark w-10 h-10 flex origin-center transition-all ease-in-out"
                  >
                    <circle cx="0" cy="0" r="2" fill="currentColor" />
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                      <ellipse rx="10" ry="4.5" />
                      <ellipse rx="10" ry="4.5" transform="rotate(60)" />
                      <ellipse rx="10" ry="4.5" transform="rotate(120)" />
                    </g>
                  </svg>
                ),
              },
              {
                name: 'Node.js',
                icon: (
                  <svg
                    className="h-10 w-10 text-green-500"
                    viewBox="0 0 128 128"
                  >
                    <circle cx="64" cy="64" r="64" />
                  </svg>
                ),
              },
              {
                name: 'MongoDB',
                icon: (
                  <svg
                    className="h-10 w-10 text-green-700"
                    viewBox="0 0 128 128"
                  >
                    <path d="M64 0l32 64-32 64-32-64z" />
                  </svg>
                ),
              },
              {
                name: 'Tailwind',
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-400"
                    viewBox="0 0 128 128"
                  >
                    <path d="M0 64c32-32 64 0 128-32v96H0z" />
                  </svg>
                ),
              },
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-36 hover:scale-105 transition-transform duration-200"
                whileHover={{ scale: 1.05 }}
                variants={fadeUp}
              >
                {tech.icon}
                <span className="font-semibold text-gray-900 mt-2">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 6: CTA at the end */}
      <motion.section
        className="py-24"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <CTA />
      </motion.section>
    </div>
  );
}
