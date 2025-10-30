'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import DemoBookingModal from '@/components/ui/DemoBookingModal';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import DynamicFAQSection from '@/components/ui/DynamicFAQSection';
import { successStoriesFaqs } from '@/data/FAQ';
import { motion } from 'framer-motion';

export default function UpcomingBatchesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const courses = [
    {
      title: 'Advanced Data Science & AI',
      desc: 'Master machine learning, deep learning, and AI deployment using Python, TensorFlow, and GenAI tools. Build real-world AI solutions end-to-end.',
      start: 'November 3, 2025',
      duration: '5 Months',
      slots: 6,
      students: '150+',
      image: '/images/ds-ai.jpeg',
    },
    {
      title: 'Python & Java Full Stack Development',
      desc: 'Learn both frontend and backend with React, Spring Boot, Django, and cloud deployment. Become a true full-stack engineer ready for any stack.',
      start: 'November 3, 2025',
      duration: '4 Months',
      slots: 8,
      students: '180+',
      image: '/images/fs-ai.jpeg',
    },
    {
      title: 'Digital Marketing ',
      desc: 'Master digital growth strategies, SEO, paid ads, and marketing automation — all powered by AWS cloud scalability.',
      start: 'November 3, 2025',
      duration: '3 Months',
      slots: 10,
      students: '120+',
      image: '/images/digital.jpeg',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>Edusyntax | Upcoming Batches</title>
        <meta
          name="description"
          content="Join Edusyntax’s upcoming batches for Data Science & AI, Full Stack Development, and Digital Marketing & AWS — all starting November 3."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-20  text-center px-6 md:px-8 ">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            November 2025 Enrollments Now Open
          </h4>
          <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 mb-5 leading-tight">
            🎯 Upcoming <span className="text-orange-600">Batches</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
            Secure your slot in our most in-demand programs and accelerate your
            tech career with hands-on, mentor-led learning.
          </p>

         <Button
            className="bg-black  text-white px-16 py-2 border rounded-full hover:bg-gray-800 transition-all"

            shine={true}
          >
          <a
          href="https://whatsapp.com/channel/0029Vb71NORFSAtCgstRBb2E"
          target="_blank"
          rel="noopener noreferrer">
            Join with us →
          </a>
          </Button>
      
         
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-10 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 180 }}
              className="rounded-2xl shadow-md hover:shadow-lg bg-gray-50 overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="relative h-48 w-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {course.title}
                </h3>
                {/* <p className="text-gray-600 mb-4 flex-grow">{course.desc}</p> */}
                <div className="text-sm text-gray-600 mb-5 space-y-1">
                  <p>
                    <strong>Batch Start Date:</strong> {course.start}
                  </p>
                  <p>
                    <strong>Duration:</strong> {course.duration}
                  </p>
                  <p className="text-red-500 font-medium">
                    🔥 Hurry, only {course.slots} slots remaining!
                  </p>
                  <p className="text-blue-600 font-semibold">
                    👥 Students Registered: {course.students}
                  </p>
                </div>
                <Button
                  className="w-full  bg-gradient-to-r from-cyan-500 via-emerald-500 to-orange-400 text-white hover:bg-blue-700 transition-all rounded-full"
                  onClick={() => setModalOpen(true)}
                  shine={true}
                >
                  Enroll Now →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-10">
            What Our Students Say
          </h3>
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

      {/* FAQ Section */}
      <section className="py-3 sm:py-3 px-4 sm:px-6 lg:px-8">
        <DynamicFAQSection faqs={successStoriesFaqs} />
      </section>

      <Footer />

      {/* Modal */}
      <DemoBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trackName="Upcoming Batches"
        mode="Demo"
      />
    </div>
  );
}
