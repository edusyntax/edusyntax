'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export type Step = {
  id: number;
  title: string;
  image?: string;
  isMore?: boolean; // for desktop 4th card "+N mini projects"
  miniProjectsCount?: number; // number to show on 4th card
};

type FancyBentoProps = {
  sectionNumber?: string | number;
  title?: string;
  subtitle?: string;
  steps: Step[];
  columns?: string; // Tailwind grid columns class for desktop
  className?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.45, ease: 'easeOut' },
  }),
};

export default function FancyBento({
  sectionNumber = '1',
  title = 'Our Journey',
  subtitle = 'Step-by-step roadmap for students',
  steps,
  columns = 'grid-cols-2 lg:grid-cols-4',
  className = '',
}: FancyBentoProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / offsetWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const maxIndex = steps.length - 1;
    const finalIndex = Math.max(0, Math.min(index, maxIndex));
    scrollRef.current.scrollTo({
      left: scrollRef.current.offsetWidth * finalIndex,
      behavior: 'smooth',
    });
    setActiveIndex(finalIndex);
  };

  const scrollNext = () => scrollToIndex(activeIndex + 1);
  const scrollPrev = () => scrollToIndex(activeIndex - 1);

  useEffect(() => {
    const ref = scrollRef.current;
    ref?.addEventListener('scroll', handleScroll);
    return () => ref?.removeEventListener('scroll', handleScroll);
  }, []);

  // Split steps for desktop: show first 3 major, 4th has mini projects
  const majorSteps = steps.slice(0, 3);
  const moreStep = steps[3];

  return (
    <section className={`py-1 lg:py-2 ${className}`}>
      <div className="container mx-auto px-2 sm:px-2 max-w-6xl">
         <div
          className={`bg-gradient-to-br   from-purple-400 to-pink-300  rounded-2xl p-4 sm:p-6 lg:p-10 shadow-lg`}
        >
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          {sectionNumber && (
            <div className="flex-shrink-0 w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
              {sectionNumber}
            </div>
          )}
          <div>
            <h2 className="text-xl lg:text-3xl font-extrabold text-gray-900">{title}</h2>
            {subtitle && <p className="mt-1 text-sm lg:text-base text-gray-700">{subtitle}</p>}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className={`hidden md:grid gap-6 ${columns}`}>
          {majorSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: '0 10px 30px rgba(128,0,255,0.35), 0 0 15px rgba(128,0,255,0.25)',
              }}
              className="relative bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex flex-col items-center text-center shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Step Number */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg">
                {step.id}
              </div>
              {step.image && (
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 sm:mb-4 drop-shadow-md"
                />
              )}
              <h3 className="font-semibold text-sm lg:text-base text-gray-900 leading-snug">
                {step.title}
              </h3>
            </motion.div>
          ))}

          {/* 4th Card: Mini Projects */}
          {moreStep && (
            <motion.div
              key={moreStep.id}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: '0 10px 30px rgba(128,0,255,0.35), 0 0 15px rgba(128,0,255,0.25)',
              }}
              className="relative bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex flex-col items-center text-center shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Step Number */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg">
                {moreStep.id}
              </div>

              {/* Image with 15+ badge */}
              {moreStep.image && (
                <div className="relative w-full flex justify-center mt-4">
                  <img
                    src={moreStep.image}
                    alt={moreStep.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md"
                  />
                  {moreStep.miniProjectsCount && (
                    <div className="absolute -top-[-30px] text-xs sm:text-sm bg-purple-600 text-white px-2 py-1 rounded-full shadow-lg">
                      {moreStep.miniProjectsCount}+ more
                    </div>
                  )}
                </div>
              )}

              <h3 className="font-semibold text-sm lg:text-base text-gray-900 leading-snug mt-4">
                {moreStep.title}
              </h3>
            </motion.div>
          )}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto flex snap-x snap-mandatory gap-4 pb-4 scroll-smooth scrollbar-thin scrollbar-thumb-purple-400/40 scrollbar-track-transparent"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                custom={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 6px 20px rgba(128,0,255,0.35), 0 0 10px rgba(128,0,255,0.25)',
                }}
                className="flex-shrink-0 w-full sm:w-80 snap-center bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-4 flex flex-col items-center text-center shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Step Number */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg mb-2">
                  {step.id}
                </div>

                {/* Image with 15+ badge */}
                {step.image && (
                  <div className="relative w-full flex justify-center mt-2">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md"
                    />
                    {step.miniProjectsCount && (
                      <div className="absolute -top-3 text-xs sm:text-sm bg-purple-600 text-white px-2 py-1 rounded-full shadow-lg">
                        {step.miniProjectsCount}+
                      </div>
                    )}
                  </div>
                )}

                <h3 className="font-semibold text-sm text-gray-900 leading-snug mt-2">{step.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Clickable Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -translate-y-1/2 left-2 text-purple-600/80 bg-white/30 hover:bg-white/50 rounded-full p-2 shadow-md z-10 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -translate-y-1/2 right-2 text-purple-600/80 bg-white/30 hover:bg-white/50 rounded-full p-2 shadow-md z-10 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Button-style Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  activeIndex === idx ? 'bg-purple-600 text-white shadow-lg' : 'bg-purple-200 text-purple-900'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
