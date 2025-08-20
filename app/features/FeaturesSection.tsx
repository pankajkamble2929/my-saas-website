'use client';

import {
  Cpu,
  ShieldCheck,
  BarChart2,
  Settings,
  Server,
  CloudLightning,
} from 'lucide-react';
import { motion } from 'framer-motion';
import CTA from '@/components/CTA';

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: <Cpu className="h-10 w-10 text-[var(--color-primary)]" />,
      title: 'Fast Performance',
      description:
        'Our SaaS is optimized for speed, ensuring seamless user experiences.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-[var(--color-secondary)]" />,
      title: 'Secure & Reliable',
      description:
        'We use top-notch security practices to protect your data and ensure uptime.',
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-[var(--color-interactive)]" />,
      title: 'Analytics Dashboard',
      description:
        'Get real-time insights and metrics to make informed business decisions.',
    },
  ];

  const supportIntegrations = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-[var(--color-secondary)] mt-1" />,
      title: '24/7 Support',
      description:
        'Our expert support team is available anytime to help you succeed.',
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-[var(--color-interactive)] mt-1" />,
      title: 'Integrations',
      description:
        'Connect with popular tools and services you already use seamlessly.',
    },
    {
      icon: <Server className="h-10 w-10 text-[var(--color-primary)] mt-1" />,
      title: 'Cloud Hosting',
      description:
        'Reliable cloud hosting with 99.9% uptime for your SaaS application.',
    },
    {
      icon: <CloudLightning className="h-10 w-10 text-[var(--color-secondary-light)] mt-1" />,
      title: 'Automation',
      description:
        'Automate repetitive tasks to increase productivity and efficiency.',
    },
  ];

  return (
      <div>
        {/* Section 1: Intro */}
        <motion.section
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Features
          </h1>
          <p className="text-[var(--color-foreground)] text-lg md:text-xl">
            Explore the powerful features that make our SaaS modern, interactive,
            and efficient.
          </p>
        </motion.section>

        {/* Section 2: Core Features Grid */}
        <motion.section
          className="bg-white py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {coreFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-transform duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-foreground)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 3: Customization Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500 py-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Customizable Workflows
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Tailor our SaaS to fit your business processes quickly and
            efficiently. Flexible configurations let you work the way you want.
          </p>
          <div className="mt-8">
            <Settings className="mx-auto h-12 w-12 text-white animate-bounce" />
          </div>
        </motion.section>

        {/* Section 4: Support & Integrations */}
        <motion.section
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportIntegrations.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 flex items-start gap-4 hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                {item.icon}
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-foreground)]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <CTA />
      </div>
  );
}
