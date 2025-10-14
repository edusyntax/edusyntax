"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, CheckCircle, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatCard from "@/components/ui/StatCard";
import DemoBookingModal from "@/components/ui/DemoBookingModal";

const stats = [
  { value: "350+", label: "Students Trained", color: "blue" },
  { value: "95%", label: "Placement Rate", color: "green" },
  { value: "15+", label: "Hiring Partners", color: "orange" },
  { value: "4.9/5", label: "Student Rating", color: "yellow" },
];

const trustSnippets = [
  { text: "Rated 4.9/5 by 1,000+ Students", icon: <Star className="w-4 h-4 text-emerald-500" /> },
  { text: "100% Job Assistance for all graduates", icon: <CheckCircle className="w-4 h-4 text-emerald-500" /> },
  { text: "10,000+ Careers Launched", icon: <Users className="w-4 h-4 text-emerald-500" /> },
  { text: "Avg 70% Salary Hike", icon: <TrendingUp className="w-4 h-4 text-emerald-500" /> },
];

export default function HeroModern() {
  const [modalOpen, setModalOpen] = useState(false);
  const [trustIndex, setTrustIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrustIndex((prev) => (prev + 1) % trustSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 pb-1 px-3 overflow-hidden min-h-screen flex items-center">
      {/* Background */}
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
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Trust Badge */}
            <div className="flex flex-nowrap justify-center sm:justify-start gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
              <Badge
                gradient="orangePink"
                size="md"
                className="whitespace-normal text-[0.65rem] sm:text-sm px-3 py-2 text-center flex flex-wrap items-center justify-center gap-1 min-w-[140px]"
              >
                {trustSnippets[trustIndex].icon}
                <span className="text-[0.65rem] sm:text-sm">{trustSnippets[trustIndex].text}</span>
              </Badge>
            </div>

            {/* Heading */}
            <motion.h1
              className="text-4xl sm:text-4xl md:text-6xl font-poppins font-bold leading-tight text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              We Teach Skills{" "}
              <motion.span
                className="text-transparent bg-gradient-to-r from-cyan-500 via-emerald-500 to-orange-400 bg-clip-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                That the Industry Demands
              </motion.span>
            </motion.h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We do whatever it takes to make you job-ready — with practical skills, expert guidance, and real career outcomes.
            </p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} color={stat.color} />
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Explore Courses Button */}
              <Button
                text="Explore Courses"
                icon={<ArrowRight className="w-5 h-5" />}
                variant="default"
                size="2xl"
                className="w-full sm:w-auto  bg-gradient-to-r from-cyan-500 via-emerald-500 to-orange-400 text-white font-semibold hover:scale-105 transform transition-transform duration-300 shadow-lg"
              />

              {/* Book Free Demo Button */}
              <Button
                text="Book Free Demo"
                icon={<Play className="w-5 h-5" />}
                variant="outline"
                size="2xl"
                className="w-full sm:w-auto border-2  border-orange-400 text-orange-400 font-semibold hover:bg-orange-400 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-md"
                onClick={() => setModalOpen(true)}
              />
            </motion.div>
          </motion.div>
{/* RIGHT VISUAL */}

{/* RIGHT VISUAL */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center lg:justify-end"
>
  {/* Image */}
  <div className="relative w-full max-w-md lg:max-w-lg">
    <img
      src="/images/main.jpg" // replace with your generated image path
      alt="Hero Illustration"
      className="w-full h-auto rounded-xl shadow-2xl"
    />

    {/* Optional overlay motion elements */}
    <motion.div
      className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl"
      animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-300/20 rounded-full blur-3xl"
      animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
</motion.div>


          
        </div>
      </div>

      {/* Modal */}
      <DemoBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trackName="Full Stack Development"
        mode="Demo"
        brochureUrl="/brochures/fullstack.pdf"
      />
    </section>
  );
}
