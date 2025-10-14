"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Play, Phone, BookOpen, Users, Briefcase, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatCard from "@/components/ui/StatCard";
import stats from "@/data/stats";
import DemoBookingModal from "@/components/ui/DemoBookingModal";
import { dataScienceHighlights } from "@/data/highlights";

const heroPoints = [
  { icon: <BookOpen className="w-5 h-5 text-blue-500" />, text:"Master Cutting-Edge AI & Data Science Tools" },
  { icon: <Users className="w-5 h-5 text-purple-500" />, text:"Build a Portfolio That Impresses Recruiters" },
  { icon: <Briefcase className="w-5 h-5 text-green-500" />, text:"Gain Hands-On Experience with Industry Use-Cases" },
  { icon: <Gift className="w-5 h-5 text-pink-500" />, text: "Unlock High-Paying Job Opportunities" },
];

interface DynamicHeroSectionProps {
  onBookDemo: () => void;
}

export default function DynamicHeroDataScience({
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
          className="absolute top-20 left-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"
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
            <Badge gradient="blueGreen" size="md" icon={<Sparkles className="w-4 h-4" />}>
             100% Placement Assistance Program
            </Badge>

            <motion.h1
              className="text-heading1 font-poppins leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Launch Your{" "}
              <motion.span
                className="text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Data Science & AI Career
              </motion.span>{" "}
              in Just 6 Months
            </motion.h1>

            {/* Point-wise Hero Features */}
            <motion.div className="space-y-4 mt-6 ms">
              {heroPoints.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  <span>{item.icon}</span>
                  <p className="text-gray-600 dark:text-gray-300 text-subtext leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 justify-center lg:justify-start mt-4 "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} color={stat.color} />
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
                size="xl"
                onClick={() => openModal("Data Science", "Demo")}
              />
              <Button
                text="Talk to a Counselor"
                icon={<Phone className="w-5 h-5" />}
                variant="outline"
                size="xl"
                onClick={() => openModal("Data Science", "Brochure")}
              />
            </motion.div>
          </motion.div>

          {/* Right Side Grid - 4 Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2"
          >
            {dataScienceHighlights.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-md p-4 h-[180px] flex flex-col justify-end relative overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-2xl"></div>
                <div className="relative z-10 text-center lg:text-left">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
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
        brochureUrl="/brochures/datascience.pdf"
      />
    </section>
  );
}
