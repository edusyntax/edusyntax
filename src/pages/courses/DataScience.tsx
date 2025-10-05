'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DynamicFAQSection from '@/components/ui/DynamicFAQSection';
import { dataScienceFaqs } from '@/data/FAQ';
import CompanyLogoCard from '@/components/ui/CompanyLogoCard';
import { companies } from '@/data/companies';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import StickyCTA from '@/components/ui/StickyCTA';
import DynamicHeroDataScience from '@/components/ui/DynamicHeroDataScience';
import CourseCurriculumSection from '@/components/ui/CourseCurriculumSection';
import ProjectShowcase from '@/components/ui/ProjectShowcase';
import { dataScienceModules } from '@/data/courseModules';
import {
  
  dataScienceProjects,
  careerSteps,
  myBenefits,
  extraBenefits,
} from '@/data/careerSteps';
import CareerBlueprint from '@/components/ui/CareerBlueprint';
import BenefitsShowcase from '@/components/ui/Bonuses';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import DemoBookingModal from '@/components/ui/DemoBookingModal';
import CertificationSection from '@/components/ui/CertificationSection';

export default function DataSciencePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [leadMode, setLeadMode] = useState<'Demo' | 'Brochure'>('Demo');

  const openModal = (track: string, mode: 'Demo' | 'Brochure') => {
    setSelectedTrack(track);
    setLeadMode(mode);
    setModalOpen(true);
  };


  const ScrollDownArrow = () => (
   <div className="flex justify-center ">
  <img
    src="/images/arrow.svg"
    alt="Scroll Down"
    className=" w-12 animate-bounce text-green-500"
  />
</div>

  );



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <DynamicHeroDataScience onBookDemo={() => setModalOpen(true)} />

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

      {/* Curriculum Section */}
      <section className="py-1 sm:py-1 px-4 sm:px-1 lg:px-8">
         <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center space-y-3 pt-8"
                >
                  <Badge className="bg-gradient-to-r from-primary-orange to-trust-blue text-white px-6 py-2">
                    Your Dream Journey with Us
                  </Badge>

                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">Learn skills. Build projects. Launch your dream career.  </p>
                 
                </motion.div>
        <CourseCurriculumSection
          stepNumber={1}
          title="Curriculum"
          subtitle="Our course is designed by industry experts for excellent academic and industrial experience."
          modules={dataScienceModules}
          totalDuration="6 Months"
        />
      
      </section>
      <ScrollDownArrow/>
      {/* Projects Section */}
      <section className="py-1 sm:py-1 px-4 sm:px-6 lg:px-8">
        <ProjectShowcase
          sectionNumber="2"
          title="Capstone  Projects"
          subtitle="Explore real-world projects built by our Data Science students."
          steps={dataScienceProjects}
          columns="grid-cols-2 lg:grid-cols-4"
        />
      </section>
         <ScrollDownArrow/>
      {/* Career Blueprint */}
      <section className="py-1 sm:py-1 px-4 sm:px-6 lg:px-8">
        <CareerBlueprint
          sectionNumber="3"
          title="Career Success Blueprint"
          subtitle="Your roadmap to landing your dream job."
          steps={careerSteps}
          columns="grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
          gradient="from-purple-50 via-pink-100 to-red-200"
        />
      </section>

                  {/* Student Testimonials */}
      <section className="w-full py-3 sm:py-3 relative px-4 sm:px-6 lg:px-8">
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
            Hear from our learners and how our data science program helped them succeed.
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


          {/* CTA Banner */}
      <section className="py-5 sm:py-3 px-4 sm:px-6 lg:px-8">
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
                  onClick={() => openModal('Data Science', 'Demo')}
                >
                  <Play className="w-5 h-5" />
                  <span>Book Free Demo</span>
                </Button>

                <Button
                  variant="outline"
                  className="border-2 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl flex items-center justify-center space-x-2"
                  onClick={() => openModal('Data Science', 'Brochure')}
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>Talk to a Counselor</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Certification Section */}
      <section className="py-8 sm:py-8 bg-white/50 backdrop-blur-xl px-4 sm:px-6 lg:px-8">
        <CertificationSection />
      </section>

  

      {/* Benefits Section */}
      <section className="py-3 sm:py-3 px-4 sm:px-6 lg:px-8">
        <BenefitsShowcase benefits={myBenefits} extraBenefits={extraBenefits} />
      </section>



      {/* FAQs Section */}
      <section className="py-3 sm:py-3 px-4 sm:px-6 lg:px-8">
        <DynamicFAQSection faqs={dataScienceFaqs} />
      </section>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <DemoBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trackName={selectedTrack}
        mode={leadMode}
        brochureUrl="/brochures/datascience.pdf"
      />

      {/* Sticky CTA */}
      <section className="mx-2">
        <StickyCTA />
      </section>
    </div>
  );
}
