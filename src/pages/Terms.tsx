'use client';

import { motion } from 'framer-motion';
import { FileText, Users, Shield, AlertTriangle, BookOpen, Gavel } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

import { useEffect } from 'react';

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms & Conditions | Edusyntax - Course Usage Terms & Student Responsibilities';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Edusyntax terms and conditions outline student responsibilities, platform usage rules, and our commitment to quality education. Read our comprehensive course usage terms.');
    }
  }, []);

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing and using Edusyntax services, you accept and agree to be bound by these Terms and Conditions.',
        'If you do not agree to these terms, please do not use our platform or services.',
        'These terms apply to all users, including students, visitors, and anyone who accesses our content.',
        'We reserve the right to modify these terms at any time. Continued use constitutes acceptance of updated terms.',
        'Users under 18 years must have parental consent to use our services.'
      ]
    },
    {
      title: 'Student Responsibilities',
      icon: Users,
      content: [
        'Provide accurate and complete information during registration and maintain updated profile details.',
        'Use the platform respectfully and professionally, maintaining appropriate conduct in all interactions.',
        'Attend scheduled classes, complete assignments, and actively participate in the learning process.',
        'Respect intellectual property rights and do not share course materials with unauthorized parties.',
        'Report any technical issues or concerns promptly to our support team.',
        'Take responsibility for your own learning outcomes and career development.',
        'Maintain confidentiality of login credentials and notify us immediately of any unauthorized access.'
      ]
    },
    {
      title: 'Edusyntax Rights and Services',
      icon: Shield,
      content: [
        'Update curriculum, course content, and teaching methodologies to maintain industry relevance.',
        'Modify pricing, course schedules, and program structure with reasonable notice to enrolled students.',
        'Suspend or terminate access for users who violate these terms or engage in inappropriate behavior.',
        'Use student feedback and testimonials for marketing purposes with appropriate consent.',
        'Provide career guidance, placement assistance, and industry connections as part of our services.',
        'Maintain platform security and implement necessary technical changes for optimal performance.',
        'Collaborate with industry partners to enhance learning experiences and job opportunities.'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: BookOpen,
      content: [
        'All course materials, including videos, documents, code, and assessments, are proprietary to Edusyntax.',
        'Students receive a limited, non-transferable license to access materials for personal learning purposes only.',
        'Reproduction, distribution, or commercial use of course content is strictly prohibited without written consent.',
        'Student-created projects and assignments remain the intellectual property of the student.',
        'Edusyntax may showcase student projects for educational and marketing purposes with proper attribution.',
        'Third-party content used in courses is properly licensed and students must respect those licensing terms.',
        'Violation of intellectual property rights may result in immediate termination of access and legal action.'
      ]
    },
    {
      title: 'Placement and Career Services',
      icon: Gavel,
      content: [
        'Edusyntax provides comprehensive training, skill development, and job preparation support.',
        'We offer placement assistance including resume building, interview preparation, and industry connections.',
        'Final hiring decisions rest solely with prospective employers and depend on various factors including student performance, market conditions, and company requirements.',
        'While we maintain strong industry relationships, we cannot guarantee specific job placements or salary packages.',
        'Students must actively participate in placement activities and meet minimum performance criteria to be eligible for placement support.',
        'Placement statistics shared are based on historical data and may not reflect future outcomes.',
        'Students are responsible for their own career decisions and professional conduct during interviews and employment.'
      ]
    },
    {
      title: 'Platform Usage and Conduct',
      icon: AlertTriangle,
      content: [
        'Use the platform only for legitimate educational purposes and in compliance with all applicable laws.',
        'Maintain respectful communication with instructors, mentors, and fellow students.',
        'Do not engage in harassment, discrimination, or any form of inappropriate behavior.',
        'Respect the privacy and personal information of other users on the platform.',
        'Do not attempt to hack, disrupt, or compromise the security of our systems.',
        'Report any violations of these terms or suspicious activities to our support team.',
        'Understand that violation of these terms may result in warnings, suspension, or permanent termination of access.'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 text-black min-h-screen">
      

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary-orange via-primary-orange/80 to-primary-orange">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-orange/15 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative container-custom text-center z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <FileText className="w-12 h-12 mx-auto text-white mb-4"/>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              These terms govern your use of Edusyntax platform and services. Please read carefully 
              to understand your rights and responsibilities as a student.
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
          <h2 className="text-2xl font-bold mb-4">Welcome to Edusyntax</h2>
          <p className="text-body mb-4">
            These Terms and Conditions ("Terms") govern your access to and use of Edusyntax educational platform, 
            courses, and related services. By using our services, you enter into a legally binding agreement with 
            Edusyntax and agree to comply with these terms.
          </p>
          <p className="text-body">
            Our mission is to provide high-quality education and career transformation opportunities. These terms 
            ensure a positive learning environment for all students while protecting the rights and interests of 
            both students and Edusyntax.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
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

        {/* Contact Information */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
          <p className="mb-4">If you have any questions about these Terms and Conditions or need clarification, please contact us:</p>
          <div className="space-y-2 text-gray-800">
            <p><strong>Email:</strong> legal@edusyntax.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> Tower A, Cyber City, Gurgaon, Haryana 122002, India</p>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            We recommend reviewing these terms periodically as they may be updated to reflect changes in our services or legal requirements.
          </p>
        </motion.div>

        {/* Footer Note */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          These Terms and Conditions are effective as of September 26, 2025. By continuing to use Edusyntax services 
          after any modifications, you agree to the updated terms.
        </motion.div>
      </section>

      
    </div>
  );
}
