'use client';

import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import DemoBookingModal from '@/components/ui/DemoBookingModal';
import DynamicFAQSection from '@/components/ui/DynamicFAQSection';
import { successStoriesFaqs } from '@/data/FAQ';
import { Phone, Mail, MessageCircle, Users } from 'lucide-react';

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>Edusyntax | Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Edusyntax for course queries, partnerships, and support. We’re here to help you succeed."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-8 text-center px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Let’s Connect
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 leading-snug">
            Contact Edusyntax
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
            Have questions about our courses, corporate training, or collaboration? Reach out—we usually respond within 24 hours.
          </p>

          <Button
            className="bg-black text-white px-8 pb-2 border rounded-full hover:bg-gray-800 transition-all"
            onClick={() => setModalOpen(true)}
            shine={true}
          >
            Book a Free Demo →
          </Button>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className=" py-12 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

          {/* Call */}
          <div className="bg-white border border-purple-300 rounded-2xl shadow p-6 hover:shadow-md transition">
            <Phone className="mx-auto text-indigo-500 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Give us a call</h3>
            <p className="text-gray-600 text-sm">+91 79972 45921</p>
            <p className="text-gray-600 text-sm">+91 77319 05603</p>
            <a
              href="tel:+917997245921"
              className="inline-block mt-3 bg-indigo-500 text-white md:px-8  px-6 py-2.5 rounded-lg text-sm hover:bg-indigo-600"
             
            >
              Call Now
            </a>
          </div>

          {/* WhatsApp Chat */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition border border-purple-300">
            <MessageCircle className="mx-auto text-green-500 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Chat on WhatsApp</h3>
            <p className="text-gray-600 text-sm">Instant support & queries</p>
            <a
              href="https://wa.me/917997245921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-green-500 text-white md:px-8  px-6 py-2.5 rounded-lg text-sm hover:bg-green-600"
            >
              Message Us
            </a>
          </div>

          {/* WhatsApp Channel */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition border border-purple-300">
            <Users className="mx-auto text-emerald-500 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Join Our Official Channel</h3>
            <p className="text-gray-600 text-sm">Get updates, offers & community news</p>
            <a
              href="https://whatsapp.com/channel/0029Vb71NORFSAtCgstRBb2E"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-emerald-500 text-white md:px-8  px-6 py-2.5 rounded-lg text-sm hover:bg-emerald-600"
            >
              Join Channel
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition border border-purple-300">
            <Mail className="mx-auto text-pink-500 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Drop us a line</h3>
            <p className="text-gray-600 text-sm">admin@gmail.com</p>
            <a
              href="mailto:admin@gmail.com"
              className="inline-block mt-3 bg-pink-500  text-white md:px-8  px-6 py-2.5 rounded-lg text-sm hover:bg-pink-600"
            >
              Send Email
            </a>
          </div>

        </div>
      </section>

      {/* FAQ Section (unchanged) */}
      <section className="py-3 sm:py-3 px-4 sm:px-6 lg:px-8">
        <DynamicFAQSection faqs={successStoriesFaqs} />
      </section>

      <Footer />

      <DemoBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trackName="Contact Page"
        mode="Demo"
      />
    </div>
  );
}
