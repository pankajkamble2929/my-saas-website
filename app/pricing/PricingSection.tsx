'use client';

import { CreditCard, Star, Users, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import CTA from '@/components/CTA';

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic',
      price: '$19/mo',
      features: ['1 Project', 'Basic Analytics', 'Email Support'],
      icon: <CreditCard className="h-10 w-10 text-[var(--color-primary)]" />,
      bg: 'bg-white',
    },
    {
      name: 'Pro',
      price: '$49/mo',
      features: [
        '5 Projects',
        'Advanced Analytics',
        'Priority Support',
        'Team Collaboration',
      ],
      icon: <Users className="h-10 w-10 text-[var(--color-secondary)]" />,
      bg: 'bg-[var(--color-primary-light)] shadow-2xl scale-105',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '$99/mo',
      features: [
        'Unlimited Projects',
        'Full Analytics',
        '24/7 Support',
        'Custom Integrations',
      ],
      icon: <Star className="h-10 w-10 text-[var(--color-interactive)]" />,
      bg: 'bg-white',
    },
  ];

  const competitorComparison = [
    {
      feature: 'Projects Limit',
      Basic: '1',
      Pro: '5',
      Enterprise: 'Unlimited',
    },
    {
      feature: 'Analytics',
      Basic: 'Basic',
      Pro: 'Advanced',
      Enterprise: 'Full',
    },
    { feature: 'Support', Basic: 'Email', Pro: 'Priority', Enterprise: '24/7' },
    { feature: 'Team Collaboration', Basic: '❌', Pro: '✔️', Enterprise: '✔️' },
    {
      feature: 'Custom Integrations',
      Basic: '❌',
      Pro: '❌',
      Enterprise: '✔️',
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
          Pricing Plans
        </h1>
        <p className="text-[var(--color-foreground)] text-lg md:text-xl max-w-2xl mx-auto">
          Choose a plan that fits your business needs. No hidden fees, fully
          transparent pricing.
        </p>
      </motion.section>

      {/* Section 2: Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {plans.map((plan, idx) => {
            const isMiddle = plan.highlight;
            return (
              <motion.div
                key={idx}
                className={`rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 ${
                  isMiddle
                    ? 'bg-indigo-600 text-white shadow-2xl relative'
                    : 'bg-white text-gray-900 shadow-lg'
                } ${!isMiddle ? 'sm:mx-4' : ''}`} // spacing for side cards
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                {/* Recommended badge */}
                {isMiddle && (
                  <span className="absolute -top-3 px-3 py-1 rounded-full text-sm font-semibold bg-yellow-400 text-indigo-900">
                    Recommended
                  </span>
                )}

                <div className="mb-4">{plan.icon}</div>
                <h3
                  className={`text-2xl font-semibold mb-2 ${
                    isMiddle ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-xl mb-4 ${
                    isMiddle ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {plan.price}
                </p>
                <ul
                  className={`mb-6 text-left space-y-2 ${
                    isMiddle ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <Check
                        className={`h-4 w-4 ${
                          isMiddle ? 'text-indigo-300' : 'text-indigo-600'
                        }`}
                      />{' '}
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform duration-200 ${
                    isMiddle
                      ? 'bg-white text-indigo-600'
                      : 'bg-indigo-500 text-white'
                  }`}
                >
                  Choose Plan
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Section 3: Competitor Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Compare With Competitors
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-6 py-3 text-left">Feature</th>
                {plans.map((plan) => (
                  <th key={plan.name} className="px-6 py-3 text-center">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competitorComparison.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 bg-white hover:bg-indigo-50 transition-colors"
                >
                  <td className="px-6 py-3 text-gray-900">{row.feature}</td>
                  <td className="px-6 py-3 text-center">{row.Basic}</td>
                  <td className="px-6 py-3 text-center">{row.Pro}</td>
                  <td className="px-6 py-3 text-center">{row.Enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Testimonials / Trust */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12">
          Trusted by Leading Companies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Users className="h-10 w-10 text-[var(--color-primary)] mx-auto mb-4" />
            <p className="text-[var(--color-foreground)]">
              Over 10k active users globally.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CreditCard className="h-10 w-10 text-[var(--color-secondary)] mx-auto mb-4" />
            <p className="text-[var(--color-foreground)]">
              Secure payment and billing system.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Star className="h-10 w-10 text-[var(--color-interactive)] mx-auto mb-4" />
            <p className="text-[var(--color-foreground)]">
              High customer satisfaction rating.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Users className="h-10 w-10 text-[var(--color-secondary-light)] mx-auto mb-4" />
            <p className="text-[var(--color-foreground)]">
              Teams collaborate efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Section : CTA */}
      <CTA />
    </div>
  );
}
