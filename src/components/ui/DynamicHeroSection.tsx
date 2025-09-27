"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HeroRightCarousel from "@/components/ui/HeroRightCarousel";
import StatCard from "@/components/ui/StatCard";
import stats from "@/data/stats";
import DemoBookingModal from "@/components/ui/DemoBookingModal";

interface DynamicHeroSectionProps {
  onBookDemo: () => void;
}

interface Course {
  name: string;
  demoAvailable?: boolean;
  brochureUrl?: string;
}
export default function DynamicHeroSection({
  onBookDemo,
}: DynamicHeroSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("");
  const [leadMode, setLeadMode] = useState<"Demo" | "Brochure">("Demo");

  const openModal = (track: string, mode: "Demo" | "Brochure") => {
    setSelectedTrack(track);
    setLeadMode(mode);
    setModalOpen(true);
  };

  return (
    <section className="relative pt-20 pb-1 px-4 overflow-hidden min-h-screen flex items-center ">
      {/* Animated Background start */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-trust-blue/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-success-green/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-orange/5 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      {/* Animated Background end */}

      <div className="relative container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                gradient="blueGreen"
                size="md"
                icon={<Sparkles className="w-4 h-4" />}
              >
                Next-Gen development Course
              </Badge>
            </motion.div>

            <motion.h1
              className="text-heading1 font-poppins leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Become a Fullstack Web Developer with
              <motion.span
                className="block text-transparent bg-gradient-to-r from-trust-blue via-success-green to-primary-orange bg-clip-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Cloud & AI Superpowers
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-subtext font-roboto text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Transform your career with industry-relevant skills. Master modern
              development, land high-paying jobs, and build the future of
              technology.
            </motion.p>

            {/* Animated Trust Indicators */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}>
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  color={stat.color}
                  // shine={stat.shine || false}
                  // delay={0.6 + index * 0.1}
                />
              ))}
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}>
                
              {/* Book Free Demo Button */}
              <Button
                text="Book Free Demo"
                icon={<Play className="w-5 h-5" />}
                animateIcon
                variant="default"
                size="xl"
                
                className="w-full sm:w-auto flex items-center justify-center"
                onClick={() => openModal("Fullstack", "Demo")}
              />

              {/* Talk to a Counselor Button */}
              <Button
                text="Talk to a Counselor"
                icon={<Phone className="w-5 h-5" />}
                variant="outline"
                size="xl"
                shine={true}
                className="w-full sm:w-auto flex items-center justify-center"
                onClick={() => openModal("Fullstack", "Brochure")}
              />
            </motion.div>

           
          </motion.div>

          {/* Premium Video Carousel */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <HeroRightCarousel />
          </motion.div>
        </div>
      </div>
      <DemoBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trackName={selectedTrack}
        mode={leadMode}
        brochureUrl="/brochures/fullstack.pdf" // optional, only used if lead type is Brochure
      />
    </section>
  );
}
