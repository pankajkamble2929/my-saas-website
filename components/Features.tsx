"use client";

import { Zap, Shield, TrendingUp, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Fast & Efficient",
      description: "Optimize your workflow with our fast and efficient tools.",
      icon: <Zap className="h-10 w-10 text-white" />,
      iconBg: "bg-purple-600",
    },
    {
      title: "Secure & Reliable",
      description: "Built with security in mind, keeping your data safe.",
      icon: <Shield className="h-10 w-10 text-white" />,
      iconBg: "bg-indigo-600",
    },
    {
      title: "Scalable",
      description: "Grow your business without limits using our scalable infrastructure.",
      icon: <TrendingUp className="h-10 w-10 text-white" />,
      iconBg: "bg-green-600",
    },
    {
      title: "24/7 Support",
      description: "Our team is always ready to help you when you need it.",
      icon: <MessageCircle className="h-10 w-10 text-white" />,
      iconBg: "bg-yellow-600",
    },
  ];

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Features that Empower Your SaaS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center cursor-default hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              {/* Icon with background circle */}
              <div
                className={`mb-4 flex items-center justify-center w-16 h-16 rounded-full ${feature.iconBg} shadow-md`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
