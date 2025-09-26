'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 'faq-1',
    question: 'Who can join this course?',
    answer: 'Anyone with a passion for technology can join! Whether you\'re a complete beginner, college student, working professional, or looking to switch careers - our course is designed to accommodate all skill levels. We start from the basics and gradually build up to advanced concepts.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Do I need prior coding knowledge?',
    answer: 'No prior coding experience is required! Our curriculum starts with programming fundamentals and gradually progresses to advanced topics. We have successfully trained thousands of students from non-technical backgrounds including arts, commerce, and other fields.',
    category: 'Prerequisites'
  },
  {
    id: 'faq-3',
    question: 'What is the program duration?',
    answer: 'The program duration varies by track: MERN Stack (6 months), Python Stack (6 months), Java Stack (7 months), and AI-Driven Stack (8 months). All programs include hands-on projects, mentorship, and comprehensive job placement support.',
    category: 'Duration'
  },
  {
    id: 'faq-4',
    question: 'What kind of placement support do you provide?',
    answer: 'We offer comprehensive placement support including resume building, interview preparation, mock interviews, portfolio development, and direct connections with our 1600+ hiring partner companies. Our dedicated placement team works with you until you land your dream job.',
    category: 'Placement'
  },
  {
    id: 'faq-5',
    question: 'Is certification included in the course?',
    answer: 'Yes! Upon successful completion of the course, you will receive an industry-recognized certification from Edusyntax. This certification is valued by our 1600+ hiring partners and helps validate your skills to potential employers.',
    category: 'Certification'
  },
  {
    id: 'faq-6',
    question: 'Can I switch between tracks during the course?',
    answer: 'Yes, you can switch tracks within the first 2 weeks of the course without any additional cost. Our counselors will help you choose the best track based on your interests, career goals, and market demand.',
    category: 'Flexibility'
  },
  {
    id: 'faq-7',
    question: 'What are the payment options available?',
    answer: 'We offer flexible payment options including one-time payment, EMI starting from ₹3,999/month with 0% interest, and scholarships for deserving candidates. We also have income-share agreements for eligible students.',
    category: 'Payment'
  },
  {
    id: 'faq-8',
    question: 'Do you provide job guarantee?',
    answer: 'While we cannot guarantee jobs (as hiring depends on multiple factors), we have a 96% placement rate and provide unlimited placement support until you get placed. Our strong industry connections significantly increase your chances of landing a great job.',
    category: 'Placement'
  }
];

export default function DynamicFAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"
        animate={{
          background: [
            'linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%)',
            'linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)',
            'linear-gradient(135deg, #f0fdf4 0%, #fff7ed 100%)',
            'linear-gradient(135deg, #fff7ed 0%, #f9fafb 100%)'
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <HelpCircle className="w-16 h-16 text-trust-blue mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers to help you make the right decision for your career
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(faq.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <div className={`bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  openItems.includes(faq.id) ? 'shadow-2xl scale-[1.02]' : ''
                } ${
                  hoveredItem === faq.id ? 'shadow-xl' : ''
                }`}>
                  {/* Question Header */}
                  <motion.div
                    className="px-8 py-6 cursor-pointer flex items-center justify-between group"
                    onClick={() => toggleItem(faq.id)}
                    whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.02)' }}
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      {/* Category Badge */}
                      <div className="px-3 py-1 bg-trust-blue/10 text-trust-blue text-xs font-semibold rounded-full">
                        {faq.category}
                      </div>
                      
                      <h3 className="text-lg font-poppins font-semibold text-gray-900 group-hover:text-trust-blue transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Animated Chevron */}
                    <motion.div
                      animate={{ 
                        rotate: openItems.includes(faq.id) ? 180 : 0,
                        scale: hoveredItem === faq.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-trust-blue" />
                    </motion.div>
                  </motion.div>

                  {/* Answer Content */}
                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -20 }}
                          animate={{ y: 0 }}
                          exit={{ y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="px-8 pb-8 border-t border-gray-100"
                        >
                          <div className="pt-6">
                            <p className="text-gray-600 leading-relaxed text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    animate={hoveredItem === faq.id ? {
                      boxShadow: [
                        '0 0 0 rgba(59, 130, 246, 0)',
                        '0 0 20px rgba(59, 130, 246, 0.1)',
                        '0 0 0 rgba(59, 130, 246, 0)'
                      ]
                    } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our counselors are here to help you make the right career decision
              </p>
              <motion.button
                className="bg-gradient-to-r from-trust-blue to-success-green text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Talk to a Counselor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}