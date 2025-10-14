'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  gradient: string;
}

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
  illustrationSrc?: string;
  benefits: Feature[];
}

export default function WhyChooseUs({
  title = 'Why Choose Us?',
  subtitle = 'Discover the unique advantages we offer to help you succeed.',
  illustrationSrc = '/illustrations/edutech-hero.png',
  benefits
}: WhyChooseUsProps) {
  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container-custom grid lg:grid-cols-2 gap-10 items-start">

        {/* Left Illustration */}
        <div className="w-full relative h-60 sm:h-72 lg:h-96">
          <img
            src={illustrationSrc}
            alt="Illustration"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-gray-900">{title}</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl">{subtitle}</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <Card className="h-full bg-white/10 backdrop-blur-md border-l-4 border-orange-400 shadow-md flex items-center p-3 rounded-xl transition-all duration-300">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-sm mr-3 flex-shrink-0`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-sm font-poppins font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
