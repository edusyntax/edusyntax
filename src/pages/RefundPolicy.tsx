'use client';

import { motion } from 'framer-motion';
import { CreditCard, AlertCircle, CheckCircle, XCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import { useEffect } from 'react';

export default function RefundPolicyPage() {
  useEffect(() => {
    document.title = 'Refund Policy | Edusyntax - Course Fee Refund Rules & Transfer Options';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Edusyntax refund policy explains our no-refund approach with exceptions for technical issues. Learn about course transfer options and our commitment to student satisfaction.');
    }
  }, []);

  const policyPoints = [
    {
      title: 'No Refund Policy',
      icon: XCircle,
      type: 'restriction',
      content: [
        'Once enrolled in any Edusyntax course, fees are non-refundable under normal circumstances.',
        'This policy ensures we can maintain high-quality resources, expert instructors, and comprehensive support systems.',
        'Course materials, mentor time, and platform resources are allocated immediately upon enrollment.',
        'All students are encouraged to attend free demo sessions and orientation programs before making enrollment decisions.'
      ]
    },
    {
      title: 'Exceptional Circumstances',
      icon: AlertCircle,
      type: 'exception',
      content: [
        'Duplicate or double payment due to technical errors will be refunded within 7-10 business days.',
        'Medical emergencies with proper documentation may be considered for course transfer to a future batch.',
        'In case Edusyntax cancels a course due to insufficient enrollment, full refund will be processed.',
        'Technical issues preventing course access for more than 7 consecutive days may qualify for partial consideration.'
      ]
    },
    {
      title: 'Course Transfer Options',
      icon: CheckCircle,
      type: 'alternative',
      content: [
        'Instead of refunds, students may request a one-time course transfer to a different program of equal or lesser value.',
        'Course transfers are subject to availability and must be requested within 7 days of original enrollment.',
        'Transfer requests require valid reasons such as schedule conflicts or career goal changes.',
        'Additional fees may apply if transferring to a higher-value course program.'
      ]
    }
  ];

  const beforeEnrolling = [
    'Attend our free demo sessions to understand the course structure and teaching methodology',
    'Speak with our career counselors to ensure the course aligns with your goals',
    'Review the complete course curriculum and time commitment requirements',
    'Understand the technical requirements and ensure you have necessary equipment',
    'Ask questions about placement assistance and career support services',
    'Read student testimonials and success stories from previous batches'
  ];

  const refundProcess = [
    {
      step: 1,
      title: 'Contact Support',
      description: 'Reach out to our support team within 48 hours of the issue with detailed information.'
    },
    {
      step: 2,
      title: 'Documentation',
      description: 'Provide necessary documentation including payment receipts and reason for refund request.'
    },
    {
      step: 3,
      title: 'Review Process',
      description: 'Our team will review your case within 5-7 business days and communicate the decision.'
    },
    {
      step: 4,
      title: 'Resolution',
      description: 'If approved, refunds are processed within 7-10 business days to the original payment method.'
    }
  ];

  return (
    <div className="bg-gray-50 text-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary-orange via-primary-orange/80 to-primary-orange">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-orange/15 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative container-custom text-center z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <CreditCard className="w-12 h-12 mx-auto text-white mb-4"/>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Refund Policy</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Understanding our refund policy helps you make informed decisions about your educational investment. 
              We prioritize transparency and student satisfaction in all our policies.
            </p>
            <div className="text-sm text-white/70 mt-2">Last Updated: September 26, 2025</div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding container-custom max-w-4xl mx-auto space-y-8 py-12">
        {/* Introduction */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-4">Our Refund Philosophy</h2>
          <p className="text-body mb-4">
            At Edusyntax, we invest significantly in creating high-quality educational experiences, including expert instructors, 
            comprehensive course materials, personalized mentorship, and career support services. Our refund policy reflects 
            our commitment to maintaining these standards while being fair to all students.
          </p>
          <p className="text-body">
            We strongly encourage prospective students to take advantage of our free demo sessions, career counseling, 
            and detailed course information before enrolling to ensure our programs align with their goals and expectations.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {policyPoints.map((section, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center mb-4 space-x-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100">
                  <section.icon className="w-6 h-6 text-gray-700"/>
                </div>
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
              <ul className="space-y-2 pl-4 list-disc text-gray-800">
                {section.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Before Enrolling */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Before You Enroll</h2>
          <p className="mb-6">To ensure you make the right decision and avoid any disappointment, we recommend taking these steps:</p>
          <div className="space-y-4">
            {beforeEnrolling.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary-orange hover:bg-primary-orange/90 text-white flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Book Free Demo</span>
            </Button>
            <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-black flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Talk to Counselor</span>
            </Button>
          </div>
        </motion.div>

        {/* Refund Process */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mt-8"
        >
          <h2 className="text-2xl font-bold mb-6">Refund Request Process</h2>
          <p className="mb-6">In exceptional circumstances where a refund may be considered, please follow this process:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {refundProcess.map((step, index) => (
              <div key={step.step} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-700 font-bold text-sm">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Need Help or Have Questions?</h2>
          <p className="mb-4">If you have questions about our refund policy or need assistance with your enrollment, our support team is here to help:</p>
          <div className="space-y-2 text-gray-800">
            <p><strong>Email:</strong> admin@edusyntax.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>WhatsApp:</strong> +91 98765 43210</p>
            <p><strong>Support Hours:</strong> Monday to Saturday, 9:00 AM to 8:00 PM IST</p>
          </div>
          <p className="text-gray-500 text-sm mt-4">We aim to respond to all refund-related inquiries within 24 hours and resolve cases within 5-7 business days.</p>
        </motion.div>

        {/* Footer Note */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          This Refund Policy is effective as of September 26, 2025. We reserve the right to modify this policy 
          with reasonable notice. Changes will not affect existing enrollments.
        </motion.div>
      </section>

      <Footer />
     
    </div>
  );
}
