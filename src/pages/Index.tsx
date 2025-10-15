'use client';
import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Users,
  Award,
  TrendingUp,
  Clock,
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/Hero';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CompanyLogoCard from '@/components/ui/CompanyLogoCard';
import CertificationSection from '@/components/ui/CertificationSection';
import GuidanceSection from '@/components/ui/Guidance';
import CourseCard from '@/components/ui/CourseCard';
import DemoBookingModal from "@/components/ui/DemoBookingModal";
import StickyCTA from '@/components/ui/StickyCTA';
import AutoOpenDemoModal from "@/components/ui/AutoOpenDemoModal";
import { useNavigate } from "react-router-dom";

import { myFeatures } from '@/data/careerSteps';
import { companies } from '@/data/companies';
import { courses } from '@/data/courseModules';
import { testimonials } from '@/data/testimonials';

export default function HomePage() {
 
  const outcomes = [
    { icon: Users, value: '10,000+', label: 'Students Trained' },
    { icon: Award, value: '95%', label: 'Placement Rate' },
    { icon: TrendingUp, value: '300%', label: 'Average Salary Hike' },
    { icon: Clock, value: '6 months', label: 'Average Job Timeline' },
  ];

    const navigate = useNavigate();

  const handleProgramClick = (slug: string) => {
    navigate(`/courses/${slug}`); // navigates to /courses/data-science etc.
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [leadMode, setLeadMode] = useState<'Demo' | 'Brochure'>('Demo');
  const [selectedBrochure, setSelectedBrochure] = useState<string | null>(null);

  const openModal = (track: string, mode: 'Demo' | 'Brochure', brochureUrl?: string) => {
    setSelectedTrack(track);
    setLeadMode(mode);
    setSelectedBrochure(brochureUrl || null);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-x-hidden">
      <Head>
        <title>Edusyntax | Learn Today, Build Tomorrow</title>
        <meta
          name="description"
          content="Join Edusyntax and upskill for the AI-powered world. Learn full-stack, AI, cloud, and more with expert mentors and guaranteed placement support."
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Partner Companies */}
      <section className="w-full pt-12 sm:pt-16 px-4 sm:px-6 lg:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="bg-gradient-to-r from-trust-blue to-success-green text-white text-sm px-6 py-2 shadow-lg mb-4 inline-flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Companies We Work With
            </Badge>

            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              From learning to earning — our partners make your dream job a reality.
            </p>
          </motion.div>

          <TestimonialCarousel
            items={companies}
            rows={2}
            cardComponent={CompanyLogoCard}
            speed={30}
            gap={24}
          />
        </div>
      </section>

      {/* Courses Section */}
<section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex justify-center mb-6"
    >
      <Badge className="bg-gradient-to-r from-primary-orange to-trust-blue text-white text-sm px-6 py-2 shadow-lg inline-flex items-center">
        <Sparkles className="w-4 h-4 mr-2" />
        Top Popular Courses
      </Badge>
    </motion.div>

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-8 sm:mb-8"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-gray-900 leading-snug">
        Upskill for the AI-Powered World with Our Programs
      </h2>
    </motion.div>

    {/* Courses Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 p-2">
      {courses.map((course) => (
        <CourseCard
          key={course.slug}
          {...course}
          onExplore={() => handleProgramClick(course.slug!)}
          onBrochureClick={() => openModal(course.title, "Brochure", course.brochureUrl)}
        />
      ))}
    </div>

    {/* View All Courses Button */}
    {/* <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex justify-center mt-12 sm:mt-14"
    >
      <Button className="bg-primary-orange hover:bg-primary-orange/90 text-white text-lg px-8 py-4 flex items-center gap-2 rounded-xl shadow-md transition-all duration-200">
        <span>View All Courses</span>
        <ArrowRight className="w-5 h-5" />
      </Button>
    </motion.div> */}
  </div>
</section>


      {/* Guidance Section */}
      <section className="py-2 sm:py-2 px-4 sm:px-6 lg:px-8 ">
        <GuidanceSection
          headline="Confused About Where to Begin?"
          subtext="We’ll help you discover the right course based on your skills, goals, and ambitions — no guesswork."
          ctaText="💬 Get Free Guidance"
          image="/images/girl-r.png"
          onCTAClick={() => console.log('CTA Clicked')}
        />
      </section>

      {/* Testimonials */}
      <section className="py-2 sm:py-2 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-3"
          >
            <Badge className="bg-gradient-to-r from-primary-orange to-trust-blue text-white text-sm px-6 py-2 shadow-lg inline-flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Student Success Stories
            </Badge>
          </motion.div>

          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Hear from our learners on how Edusyntax transformed their careers.
          </p>

          <TestimonialCarousel
            items={testimonials}
            cardComponent={TestimonialCard}
            speed={20}
            gap={24}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
        <WhyChooseUs
          title="Why Choose Edusyntax?"
          subtitle="We're not just another course platform — we’re your career transformation partner."
          illustrationSrc="/images/girl-r.png"
          benefits={myFeatures}
        />
      </section>

      {/* Certification Section */}
      <section className="py-1 sm:py-2 bg-white/50 backdrop-blur-xl px-4 sm:px-6 lg:px-8">
        <CertificationSection />
      </section>
         {/* <section className=" mx-2">
          <StickyCTA />
         </section> */}

      {/* Footer */}
      <Footer />
      <AutoOpenDemoModal/>
          <DemoBookingModal
                  isOpen={modalOpen}
                  onClose={() => setModalOpen(false)}
                  trackName={selectedTrack}
                  mode={leadMode}
                  brochureUrl={selectedBrochure || undefined}
            />
    </div>
  );
}
