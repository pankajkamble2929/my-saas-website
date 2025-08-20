"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$19/mo",
      features: ["1 Project", "Basic Analytics", "Email Support"],
      bgGradient: "from-purple-800 to-purple-700",
    },
    {
      name: "Pro",
      price: "$49/mo",
      features: ["5 Projects", "Advanced Analytics", "Priority Support"],
      bgGradient: "from-indigo-800 to-indigo-700",
    },
    {
      name: "Enterprise",
      price: "$99/mo",
      features: ["Unlimited Projects", "Full Analytics", "Dedicated Support"],
      bgGradient: "from-green-800 to-green-700",
    },
  ];

  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Choose the Right Plan
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`rounded-2xl shadow-2xl p-8 flex flex-col items-center text-white bg-gradient-to-br ${plan.bgGradient}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl md:text-4xl font-bold mb-6">{plan.price}</p>

              <ul className="mb-6 text-left space-y-3 w-full">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 bg-white/30 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-lg bg-white text-gray-900 font-semibold shadow-md hover:scale-105 transition-transform duration-200">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
