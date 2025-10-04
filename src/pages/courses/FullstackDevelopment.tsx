'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/seo/SEOHead';


import InteractiveTracksSelector from '@/components/ui/InteractiveTracksSelector';
import DynamicSkillTimeline from '@/components/ui/DynamicSkillTimeline';
import DynamicFAQSection from '@/components/ui/DynamicFAQSection';
import TrustGridSection from '@/components/ui/TrustGridSection';
import WhoCanJoin from '@/components/ui/WhoCanJoin';
import CertificationSection from '@/components/ui/CertificationSection';
import ConversionFormSection from '@/components/ui/CareerBoosterCard';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CompanyLogoCard from "@/components/ui/CompanyLogoCard";
import { companies } from '@/data/companies';
import DemoBookingModal from '@/components/ui/DemoBookingModal';
import DynamicHeroSection from '@/components/ui/DynamicHeroSection';
import StickyCTA from '@/components/ui/StickyCTA';
import { fullstackFaqs } from '@/data/FAQ';

import { testimonials } from '@/data/testimonials';

export default function FullstackDevelopmentPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [leadMode, setLeadMode] = useState<'Demo' | 'Brochure'>('Demo');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Fullstack Web Development with Cloud & AI",
    "description": "Master frontend, backend, cloud deployment, and AI tool integration in one comprehensive course.",
    "provider": {
      "@type": "Organization",
      "name": "Edusyntax",
      "url": "https://edusyntax.com"
    },
    "courseCode": "FS-CLOUD-AI-2025",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "duration": "P24W",
      "startDate": "2025-01-15"
    }
  };

  const openModal = (track: string, mode: 'Demo' | 'Brochure') => {
    setSelectedTrack(track);
    setLeadMode(mode);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-x-hidden">
      {/* SEO & Structured Data */}
      <SEOHead
        title="Fullstack Web Development with Cloud & AI | Edusyntax"
        description="Master frontend, backend, cloud deployment, and AI tool integration. 96% placement rate with 1600+ hiring partners."
        keywords="fullstack development, cloud, AI, MERN stack, Python fullstack, Java enterprise"
        structuredData={structuredData}
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <DynamicHeroSection onBookDemo={() => setModalOpen(true)} />

      {/* Hiring Partners */}
      {/* Hiring Partners */}
<section className="w-full pt-2">
  <div className="max-w-6xl mx-auto text-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Badge className="bg-gradient-to-r from-trust-blue to-success-green text-white text-sm px-6 py-2 shadow-lg mb-4 inline-flex items-center">
        <Sparkles className="w-4 h-4 mr-2" />
        Companies We Have Tied Up With
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

      {/* Interactive Fullstack Tracks */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <InteractiveTracksSelector />
      </section>

      {/* Student Testimonials */}
      <section className="w-full py-1 relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-block"
          >
            <Badge className="bg-gradient-to-r from-primary-orange to-trust-blue text-white text-sm px-6 py-2 shadow-lg inline-flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Student Success Stories
            </Badge>
          </motion.div>

          <p className="text-gray-600 text-base sm:text-lg mb-8">
            Hear from our learners and how our fullstack tracks helped them succeed.
          </p>

          <div className="overflow-x-hidden">
            <TestimonialCarousel
              items={testimonials}
              cardComponent={TestimonialCard}
              speed={20}
              gap={24}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Edusyntax */}
      <section className="pt-5 sm:py-3 px-4 sm:px-6 lg:px-8">
        <TrustGridSection />
      </section>

      {/* Skill Timeline */}
      <section className="py-12 sm:py-5 px-4 sm:px-6 lg:px-8">
        <DynamicSkillTimeline />
      </section>

      {/* Who Can Join */}
      <section className="py-3 sm:py-5 backdrop-blur-xl px-4 sm:px-6 lg:px-8">
        <WhoCanJoin />
      </section>

      {/* Certification Section */}
      <section className="py-12 sm:py-16 bg-white/50 backdrop-blur-xl px-4 sm:px-6 lg:px-8">
        <CertificationSection />
      </section>

      {/* Big CTA Banner */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-6xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-trust-blue via-success-green to-primary-orange text-white">
            <CardContent className="p-8 sm:p-12 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-poppins font-bold leading-tight break-words">
                Don't just learn coding—build, deploy, and innovate with AI & Cloud!
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                Join the next generation of developers shaping the future with cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  className="bg-gradient-to-r from-trust-blue to-success-green text-white text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={() => openModal('Fullstack', 'Demo')}
                >
                  <Play className="w-5 h-5" />
                  <span>Book Free Demo</span>
                </Button>

                <Button
                  variant="outline"
                  className="border-2 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl flex items-center justify-center space-x-2"
                  onClick={() => openModal('Fullstack', 'Brochure')}
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>Talk to a Counselor</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 sm:py-5 px-4 sm:px-6 lg:px-8">
         <DynamicFAQSection faqs={fullstackFaqs}/>
      </section>

      {/* Lead Capture Form */}
      <section className="py-5 sm:py-5 px-4 sm:px-6 lg:px-8">
        <ConversionFormSection />
      </section>

      {/* Sticky CTA */}
         <section className=" mx-2">
          <StickyCTA />
         </section>
      

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <DemoBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trackName={selectedTrack}
        mode={leadMode}
        brochureUrl="/brochures/fullstack.pdf"
      />
    </div>
  );
}
