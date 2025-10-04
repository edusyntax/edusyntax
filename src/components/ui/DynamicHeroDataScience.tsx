"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Play, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatCard from "@/components/ui/StatCard";
import stats from "@/data/stats";
import DemoBookingModal from "@/components/ui/DemoBookingModal";
import { dataScienceHighlights } from "@/data/highlights";

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
    <section className="relative pt-20 pb-10 overflow-hidden min-h-screen flex items-center">
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
            className="space-y-8"
          >
            <Badge gradient="blueGreen" size="md" icon={<Sparkles className="w-4 h-4" />}>
              Next-Gen Data Science Program
            </Badge>

            <motion.h1
              className="text-heading1 font-poppins leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Become a{" "}
              <motion.span
                className="text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Data Scientist with AI Superpowers
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-subtext text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Learn data science from industry experts. Build real-world ML
              projects, visualize insights, and get job-ready in 6 months.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {stats.map((stat, index) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} color={stat.color} />
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full"
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

          {/* Right Side Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {dataScienceHighlights.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-md p-4 h-[180px] flex flex-col justify-end relative overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="relative z-10">
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
