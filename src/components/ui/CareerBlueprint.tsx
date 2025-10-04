"use client";
import React from "react";
import { motion } from "framer-motion";

export type Step = {
  id: number;
  title: string;
  image: string;
};

type BlueprintProps = {
  sectionNumber?: string | number;
  title: string;
  subtitle?: string;
  steps: Step[];
  columns?: string; // Tailwind grid columns class (default: grid-cols-2 lg:grid-cols-4)
  gradient?: string; // Tailwind gradient (default provided)
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function CareerBlueprint({
  sectionNumber = "1",
  title,
  subtitle,
  steps,
  columns = "grid-cols-2 lg:grid-cols-4",
  gradient = "from-blue-50 via-blue-100 to-blue-200",
}: BlueprintProps) {
  return (
    <section className="py-1 lg:py-3">
      <div className="container mx-auto px-1 sm:px-3 max-w-6xl">
        {/* Gradient Container */}
        <div
          className={`bg-gradient-to-br ${gradient} rounded-2xl p-4 sm:p-6 lg:p-10 shadow-lg`}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-8 sm:mb-12 ">
            {sectionNumber && (
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold px-5 py-3 rounded-lg text-xl sm:text-base shadow-md">
                {sectionNumber}
              </span>
            )}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                {title}
              </h2>
              {subtitle && (
                <p className="text-xs sm:text-sm md:text-base text-gray-700">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Steps */}
          <div className={`grid gap-4 sm:gap-6 ${columns}`}>
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="relative bg-white/30 backdrop-blur-xl border border-white/40
                           rounded-xl shadow-[0_6px_24px_rgba(0,0,150,0.15)] 
                           hover:shadow-[0_10px_32px_rgba(0,0,180,0.25)]
                           transition-all duration-400 p-4 sm:p-5 flex flex-col items-center text-center"
              >
                {/* Step Indicator */}
                <span className="absolute -top-2 left-3 bg-blue-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md shadow">
                  Step {step.id}
                </span>

                {/* Image */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 sm:mb-4 drop-shadow-md"
                />

                {/* Title */}
                <h3 className="font-semibold text-xs sm:text-sm md:text-base text-gray-900 leading-snug">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
