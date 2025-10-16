"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  Play,
  Phone,
  Megaphone,
  TrendingUp,
  Users,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatCard from "@/components/ui/StatCard";
import stats from "@/data/stats";
import DemoBookingModal from "@/components/ui/DemoBookingModal";
import { digitalMarketingHighlights } from "@/data/highlights";

const heroPoints = [
  {
    icon: <Megaphone className="w-5 h-5 text-pink-500" />,
    text: "Master SEO, Google Ads, Social Media & Analytics",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
    text: "Run Real Marketing Campaigns with Live Budgets",
  },
  {
    icon: <Users className="w-5 h-5 text-blue-500" />,
    text: "Learn from Industry Leaders and Brand Experts",
  },
  {
    icon: <Rocket className="w-5 h-5 text-green-500" />,
    text: "Launch a Rewarding Career in Digital Marketing",
  },
];

interface DynamicHeroSectionProps {
  onBookDemo: () => void;
}

export default function DynamicHeroDigitalMarketing({
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
    <section className="relative pt-20 pb-1 px-3 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <Badge
              gradient="pinkOrange"
              size="md"
              
              icon={<Sparkles className="w-4 h-4" />}
            >
              Guaranteed Job Assistance Program
            </Badge>

            <motion.h1
              className="text-heading1 font-poppins leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Build Your{" "}
              <motion.span
                className="text-transparent bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Digital Marketing & Ai Career
              </motion.span>{" "}
              in 4 Months
            </motion.h1>

            {/* Point-wise Hero Features */}
            <motion.div className="space-y-4 mt-6">
              {heroPoints.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  <span>{item.icon}</span>
                  <p className="text-gray-600 dark:text-gray-300 text-subtext leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 justify-center lg:justify-start mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  color={stat.color}
                />
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button
                text="Book Free Demo"
                icon={<Play className="w-5 h-5" />}
                animateIcon
                variant="default"
                size="2xl"
                onClick={() => openModal("Digital Marketing", "Demo")}
              />
              <Button
                text="Talk to a Counselor"
                shine={true}
                icon={<Phone className="w-5 h-5" />}
                variant="outline"
                size="2xl"
                onClick={() => openModal("Digital Marketing", "Brochure")}
              />
            </motion.div>
          </motion.div>

          {/* Right Side Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2"
          >
            {digitalMarketingHighlights.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="bg-gradient-to-br from-pink-500/20 via-orange-500/20 to-yellow-400/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-md p-4 h-[180px] flex flex-col justify-end relative overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-2xl"></div>
                <div className="relative z-10 text-center lg:text-left">
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-200 mt-1">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <DemoBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trackName={selectedTrack}
        mode={leadMode}
        brochureUrl="/brochures/digitalmarketing.pdf"
      />
    </section>
  );
}
