'use client';

import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import DemoBookingModal from '@/components/ui/DemoBookingModal';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import DynamicFAQSection from '@/components/ui/DynamicFAQSection';
import { successStoriesFaqs } from '@/data/FAQ';

export default function SuccessStoriesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>Edusyntax | Student Success Stories</title>
        <meta
          name="description"
          content="Discover how Edusyntax has helped students achieve their career goals through real success stories."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-3 text-center px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Our Achievements
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 leading-snug">
            Student Success Stories
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
            See how our learners transformed their careers through Edusyntax
            programs and hands-on, industry-ready training.
          </p>

          <Button
            className="bg-black text-white px-8 pb-2 border rounded-full hover:bg-gray-800 transition-all"
            onClick={() => setModalOpen(true)}
            shine={true}
          >
            Join with Us →
          </Button>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="py-2 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto text-center">
          {/* <h3 className="text-2xl font-semibold text-gray-800 mb-10">
            What Our Students Say
          </h3> */}

          <div className="relative overflow-hidden">
            <TestimonialCarousel
              items={testimonials}
              cardComponent={TestimonialCard}
              speed={20}
              gap={24}
            />
          </div>
        </div>
      </section>

      <section className="py-3 sm:py-3 px-4 sm:px-6 lg:px-8">
              <DynamicFAQSection faqs={successStoriesFaqs} />
        </section>
      

      <Footer />

      <DemoBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trackName="Success Stories"
        mode="Demo"
      />
    </div>
  );
}
