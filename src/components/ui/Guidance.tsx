"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play, Phone } from "lucide-react";
import DemoBookingModal from "./DemoBookingModal";

export interface GuidanceSectionProps {
  headline: string;
  subtext: string;
  ctaText: string;
  image: string;
  onCTAClick?: () => void;
}

export default function GuidanceSection({
  headline,
  subtext,
  ctaText,
  image,
  onCTAClick,
}: GuidanceSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [leadMode, setLeadMode] = useState<'Demo' | 'Brochure'>('Demo');

  const openModal = (track: string, mode: 'Demo' | 'Brochure') => {
    setSelectedTrack(track);
    setLeadMode(mode);
    setModalOpen(true);
  };

  return (
    <section className="w-full bg-gradient-to-r from-orange-400 via-pink-400 to-violet-500 py-2 px-4 md:px-6 lg:px-6 rounded-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white text-center md:text-left order-1 md:order-1"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {headline}
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            {subtext}
          </p>

          <div className="flex justify-center md:justify-start">
            <Button
              size="2xl"
              shine={true}
              variant="outline"
              className="bg-white bg-opacity-20 text-white hover:bg-opacity-30 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg transform transition-transform duration-300 hover:scale-105"
              onClick={() => openModal('Fullstack', 'Demo')}
            >
              <Phone className="w-5 h-5 animate-pulse" />
              <span>Talk to a Counselor</span>
            </Button>
          </div>
        </motion.div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end order-2 md:order-2"
        >
          <img
            src={image}
            alt="Mentor Illustration"
            className="w-full max-w-full md:max-w-lg lg:max-w-xl object-contain"
          />
        </motion.div>
      </div>

      {/* Modal */}
      <DemoBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trackName={selectedTrack}
        mode={leadMode}
        brochureUrl="/brochures/fullstack.pdf"
      />
    </section>
  );
}
