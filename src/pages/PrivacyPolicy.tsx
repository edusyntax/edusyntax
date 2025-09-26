'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, FileText } from 'lucide-react';
import { useEffect } from 'react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | Edusyntax - Student Data Protection & Privacy Rights';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Edusyntax privacy policy explains how we collect, use, and protect student data. Learn about your privacy rights and our commitment to data security in edtech learning.');
    }
  }, []);

  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal Information: Name, email address, phone number, educational background, and professional experience when you register for courses or contact us.',
        'Technical Data: IP address, browser type, device information, and usage patterns through cookies and analytics tools.',
        'Course Data: Progress tracking, assignment submissions, quiz results, and interaction with course materials.',
        'Communication Data: Messages sent through our platform, support tickets, and feedback forms.',
        'Payment Information: Billing details processed securely through our payment partners (we do not store complete payment card details).'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Users,
      content: [
        'Course Delivery: Providing access to course materials, tracking progress, and facilitating learning experiences.',
        'Communication: Sending course updates, important announcements, and responding to your inquiries.',
        'Support Services: Offering technical support, career guidance, and placement assistance.',
        'Marketing: With your consent, sending promotional materials about new courses and special offers.',
        'Analytics: Improving our platform performance and user experience through data analysis.',
        'Legal Compliance: Meeting regulatory requirements and protecting our legitimate business interests.'
      ]
    },
    {
      title: 'Data Sharing and Disclosure',
      icon: Eye,
      content: [
        'Service Providers: Trusted third-party vendors who assist in platform operations, payment processing, and analytics.',
        'Hiring Partners: With explicit consent, sharing relevant profile information with potential employers for placement opportunities.',
        'Legal Requirements: When required by law, court orders, or to protect our rights and safety.',
        'Business Transfers: In case of merger, acquisition, or sale of assets, your data may be transferred to the new entity.',
        'We never sell your personal information to third parties for marketing purposes.'
      ]
    },
    {
      title: 'Data Security and Protection',
      icon: Lock,
      content: [
        'Encryption: All data transmission is protected using industry-standard SSL/TLS encryption.',
        'Access Controls: Strict access controls ensure only authorized personnel can access your data.',
        'Regular Audits: We conduct regular security assessments and vulnerability testing.',
        'Data Backup: Secure backup systems protect against data loss while maintaining privacy.',
        'Incident Response: Established procedures for handling any potential security breaches.',
        'Employee Training: Regular privacy and security training for all team members.'
      ]
    },
    {
      title: 'Your Rights and Choices',
      icon: Shield,
      content: [
        'Access: Request a copy of the personal information we hold about you.',
        'Correction: Update or correct any inaccurate personal information.',
        'Deletion: Request deletion of your personal data, subject to legal and contractual obligations.',
        'Portability: Receive your data in a structured, machine-readable format.',
        'Opt-out: Unsubscribe from marketing communications at any time.',
        'Complaint: Lodge a complaint with relevant data protection authorities if you believe your rights have been violated.'
      ]
    },
    {
      title: 'Cookies and Tracking Technologies',
      icon: FileText,
      content: [
        'Essential Cookies: Required for basic platform functionality and security.',
        'Analytics Cookies: Help us understand how users interact with our platform (Google Analytics).',
        'Marketing Cookies: Used for targeted advertising and measuring campaign effectiveness.',
        'Preference Cookies: Remember your settings and preferences for a better user experience.',
        'You can manage cookie preferences through your browser settings, though this may affect platform functionality.'
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
            <Shield className="w-12 h-12 mx-auto text-white mb-4"/>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Your privacy is fundamental to us. Learn how Edusyntax collects, uses, and protects your personal information while delivering exceptional learning experiences.
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
          <h2 className="text-2xl font-bold mb-4">Our Commitment to Privacy</h2>
          <p className="text-body mb-4">
            At Edusyntax, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our educational platform and services.
          </p>
          <p className="text-body">
            By using Edusyntax services, you agree to the collection and use of information in accordance with this policy. 
            We comply with applicable data protection laws, including GDPR and the Information Technology Act, 2000 of India.
          </p>
        </motion.div>

        {/* Privacy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center mb-4 space-x-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-orange/20">
                  <section.icon className="w-6 h-6 text-primary-orange"/>
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

        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Contact Us About Privacy</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, your personal data, or wish to exercise your privacy rights, please contact us:</p>
          <div className="space-y-2 text-gray-800">
            <p><strong>Email:</strong> admin@edusyntax.com</p>
            <p><strong>Phone:</strong> 7997245921</p>
          </div>
          <p className="text-sm text-gray-500 mt-4">We will respond to your privacy-related inquiries within 30 days of receipt.</p>
        </motion.div>

        {/* Footer Note */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-4"
        >
          This Privacy Policy is effective as of September 26, 2025, and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
        </motion.div>
      </section>
    </div>
  );
}
