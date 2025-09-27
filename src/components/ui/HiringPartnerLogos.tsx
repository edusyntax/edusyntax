import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HiringPartnerLogos() {
  const totalLogos = 30; // can increase dynamically later
  const logos = Array.from({ length:totalLogos }, (_, i) => ({
    name: `Logo ${i + 1}`,
    alt: `Logo ${i + 1}`,
    src: `/logos/${i}.svg`,
  }));

  // Duplicate logos for seamless marquee
  const logosRow1 = [...logos, ...logos];
  const logosRow2 = [...logos, ...logos];

  return (
    <section className="w-full  overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Badge className="bg-gradient-to-r from-trust-blue to-success-green text-white text-sm px-6 py-2 shadow-lg mb-6 inline-flex items-center">
            <Sparkles className="w-4 h-4 mr-2" />
            Companies We Have Tied Up With
          </Badge>
        </motion.div>

        {/* Row 1: Left → Right */}
        <div className="mt-1 overflow-hidden">
          <div className="flex animate-marquee space-x-4 sm:space-x-6 hover:pause">
            {logosRow1.map((logo, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center justify-center flex-shrink-0 w-20 sm:w-28 md:w-32 h-10 sm:h-14 md:h-16 bg-secondary-beige rounded-md p-2"
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
          <div className="flex animate-marquee-reverse space-x-4 sm:space-x-6 hover:pause">
            {logosRow2.map((logo, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center justify-center flex-shrink-0 w-20 sm:w-28 md:w-32 h-10 sm:h-14 md:h-16 bg-secondary-beige rounded-md p-2"
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
