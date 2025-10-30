'use client';

import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>Edusyntax | Coming Soon</title>
        <meta
          name="description"
          content="Exciting updates are on the way! Stay tuned as we launch the next big thing from Edusyntax."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-2 px-6 md:px-8 bg-gradient-to-b from-blue-50 via-white to-white text-center flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto">
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-4"
          >
            Something Exciting Is Coming
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-5 leading-tight tracking-tight"
          >
           🚀We’re Launching Something{' '}
             <span className="text-blue-600">Big</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Our new experience is almost here — built for creators, learners, and
            developers. Smarter tools, AI workflows, and seamless integrations. Stay tuned.
          </motion.p>

          {/* CTA Buttons */}
 <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
  <Button  className="text-base px-6 py-5 rounded-xl">
    <a href="/">Back to Home</a>
  </Button>

  <Button
    variant="outline"
    className="text-base px-6 border rounded-xl"
    shine={true}
   
  >
    <a
      href="https://whatsapp.com/channel/0029Vb71NORFSAtCgstRBb2E"
      target="_blank"
      rel="noopener noreferrer"
    >
      Join Our WhatsApp Channel
    </a>
  </Button>
</div>


          {/* Subtle tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm mt-10"
          >
            Stay curious. Stay connected. Edusyntax 2.0 is almost here.
          </motion.p>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-8 px-6 md:px-12 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Call Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg p-8 text-center"
          >
            <div className="text-5xl mb-3">📞</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Give us a call
            </h3>
            <p className="text-gray-600">(+91) 7997245921</p>
            <p className="text-gray-600">(+91) 7731905603</p>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg p-8 text-center"
          >
            <div className="text-5xl mb-3">💬</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Chat on WhatsApp
            </h3>
            <a
              href="https://wa.me/917997245921"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Message Us
            </a>
            <p className="mt-2 text-gray-600">
              Get instant replies from our support.
            </p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg p-8 text-center"
          >
            <div className="text-5xl mb-3">📧</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Drop us an email
            </h3>
            <a
              href="mailto:admin@gmail.com"
              className="text-blue-600 hover:underline font-medium"
            >
              admin@gmail.com
            </a>
            <p className="mt-2 text-gray-600">
              We’ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
