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

import HiringPartnerLogos from '@/components/ui/HiringPartnerLogos';
import InteractiveTracksSelector from '@/components/ui/InteractiveTracksSelector';
import DynamicSkillTimeline from '@/components/ui/DynamicSkillTimeline';
import DynamicFAQSection from '@/components/ui/DynamicFAQSection';
import TrustGridSection from '@/components/ui/TrustGridSection';
import WhoCanJoin from '@/components/ui/WhoCanJoin';
import CertificationSection from '@/components/ui/CertificationSection';
import ConversionFormSection from '@/components/ui/CareerBoosterCard';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import TestimonialCard from '@/components/ui/TestimonialCard';
import DemoBookingModal from '@/components/ui/DemoBookingModal';
import DynamicHeroSection from '@/components/ui/DynamicHeroSection';
import StickyCTA from '@/components/ui/StickyCTA';

import { testimonials } from '@/data/testimonials';

interface Course {
  name: string;
  demoAvailable?: boolean;
  brochureUrl?: string;
}

export default function FullstackDevelopmentPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [leadMode, setLeadMode] = useState<'Demo' | 'Brochure'>('Demo');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Fullstack Web Development with Cloud & AI",
    "description": "Master frontend, backend, cloud deployment, and AI tool integration in one comprehensive course designed for the next generation of developers.",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* SEO & Structured Data */}
      <SEOHead
        title="Fullstack Web Development with Cloud & AI | Edusyntax - Master Modern Development"
        description="Master frontend, backend, cloud deployment, and AI tool integration. Choose from MERN, Python, Java, or AI-driven tracks. 96% placement rate with 1600+ hiring partners."
        keywords="fullstack development, cloud deployment, AI integration, MERN stack, Python fullstack, Java enterprise, web development course"
        structuredData={structuredData}
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <DynamicHeroSection onBookDemo={() => setModalOpen(true)} />

      {/* Hiring Partners */}
      <HiringPartnerLogos />

      {/* Interactive Fullstack Tracks */}
      <InteractiveTracksSelector />

      {/* Student Testimonials */}
      <section className="w-full py-16 bg-white relative">
        <div className="max-w-6xl mx-auto text-center px-4">
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

          <TestimonialCarousel
            items={testimonials}
            cardComponent={TestimonialCard}
            speed={20}
            gap={24}
          />
        </div>
      </section>

      {/* Why Choose Edusyntax */}
      <TrustGridSection />

      {/* Skill Timeline */}
      <DynamicSkillTimeline />

      {/* Who Can Join */}
      <section className="py-16 bg-white/50 backdrop-blur-xl">
        <div className="container-custom">
          <WhoCanJoin />
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 bg-white/50 backdrop-blur-xl">
        <div className="container-custom">
          <CertificationSection />
        </div>
      </section>

      {/* Big CTA Banner */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <Card className="bg-gradient-to-br from-trust-blue via-success-green to-primary-orange text-white">
              <CardContent className="p-12 space-y-6">
                <h2 className="text-3xl lg:text-5xl font-poppins font-bold leading-tight">
                  Don't just learn coding—build, deploy, and innovate with AI & Cloud!
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Join the next generation of developers who are shaping the future with cutting-edge technologies
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    className="bg-gradient-to-r from-trust-blue to-success-green text-white text-lg px-8 py-4 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group"
                    onClick={() => openModal('Fullstack', 'Demo')}
                  >
                    <Play className="w-5 h-5" />
                    <span>Book Free Demo</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="border-2 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white text-lg px-8 py-4 font-semibold rounded-xl flex items-center space-x-2 group"
                    onClick={() => openModal('Fullstack', 'Brochure')}
                  >
                    <Phone className="w-5 h-5 group-hover:animate-pulse" />
                    <span>Talk to a Counselor</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <DynamicFAQSection />

      {/* Lead Capture Form */}
      <ConversionFormSection />


      {/*StickyCTA   */}
        <StickyCTA />
      {/* Footer */}
      <Footer />


      {/* Sticky CTA */}
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
