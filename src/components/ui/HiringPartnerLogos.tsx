import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HiringPartnerLogos() {
  const totalLogos = 42; // can increase dynamically later
  const logos = Array.from({ length: totalLogos }, (_, i) => ({
    name: `Logo ${i + 1}`,
    alt: `Logo ${i + 1}`,
    src: `/logos/${i + 1}.svg`,
  }));

  const logosRow1 = [...logos, ...logos];
  const logosRow2 = [...logos, ...logos];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Badge className="bg-gradient-to-r from-trust-blue to-success-green text-white text-sm px-6 py-2 shadow-lg mb- inline-flex items-center">
            <Sparkles className="w-4 h-4 mr-2" />
            Companies We Have Tied Up With
          </Badge>
        </motion.div>

        {/* Quotation / subtitle */}
        {/* <p className="mt-2 text-dark text-sm sm:text-base md:text-lg font-roboto">
          Trusted by top companies who hire our graduates.
        </p> */}

        {/* Row 1: Left → Right */}
        <div className="mt-10 overflow-hidden">
          <div className="flex animate-marquee space-x-6 hover:pause">
            {logosRow1.map((logo, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center justify-center flex-shrink-0 w-24 sm:w-32 md:w-36 h-10 sm:h-16 bg-secondary-beige rounded-md p-2"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-5 sm:h-8 md:h-10 object-contain w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right → Left */}
        <div className="mt-6 overflow-hidden">
          <div className="flex animate-marquee-reverse space-x-6 hover:pause">
            {logosRow2.map((logo, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center justify-center flex-shrink-0 w-24 sm:w-32 md:w-36 h-10 sm:h-16 bg-secondary-beige rounded-md p-2"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-5 sm:h-8 md:h-10 object-contain w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
