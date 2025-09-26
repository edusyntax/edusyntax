'use client';

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
  imgSrc: string;
  overlayText: string;
  icon: string;
  title: string;
}

const slides: CarouselSlide[] = [
  { imgSrc: "/images/certification.jpeg", overlayText: "Globally Recognized Certifications", icon: "🎓", title: "Certifications" },
  { imgSrc: "/images/certification.jpeg", overlayText: "Transparent Pricing, EMI Available — No Hidden Costs", icon: "💰", title: "Course Fees" },
  { imgSrc: "/images/certification.jpeg", overlayText: "95% Students Placed • ₹6.5 LPA Avg Salary", icon: "💼", title: "Placements" },
  { imgSrc: "/images/certification.jpeg", overlayText: "From ₹3L to ₹12L in 8 months after Edusyntax", icon: "🗣️", title: "Alumni Stories" },
];

export default function HeroRightCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const x = useMotionValue(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slideWidth = carouselRef.current?.offsetWidth || 1;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipe = info.offset.x + info.velocity.x * 0.2;
    if (swipe < -50) nextSlide();
    else if (swipe > 50) prevSlide();
    else x.set(-currentSlide * slideWidth); // snap back if not enough swipe
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <motion.div
        ref={carouselRef}
        className="relative aspect-[2/1.2] rounded-2xl overflow-hidden cursor-grab"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
        onDragEnd={handleDragEnd}
      >
        <motion.div
          className="flex w-full h-full"
          animate={{ x: -currentSlide * (carouselRef.current?.offsetWidth || 0) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full relative">
              <img
                src={slide.imgSrc}
                alt={slide.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl flex flex-col justify-end p-6 text-white">
                <div className="text-2xl mb-1">{slide.icon}</div>
                <h3 className="text-lg font-bold">{slide.title}</h3>
                <p className="text-sm">{slide.overlayText}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-black/60 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-black/60 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-gradient-to-r from-blue-500 to-green-400 scale-125"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
