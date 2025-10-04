'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import DemoBookingModal from '@/components/ui/DemoBookingModal';
import  FAQ from '@/data/FAQ'; // shared type

type DynamicFAQSectionProps = {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
};

export default function DynamicFAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Got questions? We've got answers to help you make the right decision for your career",
}: DynamicFAQSectionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [leadMode, setLeadMode] = useState<'Demo' | 'Brochure'>('Demo');

  const openModal = (track: string, mode: 'Demo' | 'Brochure') => {
    setSelectedTrack(track);
    setLeadMode(mode);
    setModalOpen(true);
  };

  return (
    <section className="py-3 relative overflow-hidden">
      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HelpCircle className="w-16 h-16 text-trust-blue mx-auto mb-4" />
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-gray-900">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
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
              <div
                className={`bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  openItems.includes(faq.id) ? 'shadow-2xl scale-[1.02]' : ''
                } ${hoveredItem === faq.id ? 'shadow-xl' : ''}`}
              >
                {/* Question Header */}
                <motion.div
                  className="px-8 py-6 cursor-pointer flex items-center justify-between group"
                  onClick={() => toggleItem(faq.id)}
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.02)' }}
                  role="button"
                  aria-expanded={openItems.includes(faq.id)}
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

                  {/* Chevron */}
                  <motion.div
                    animate={{
                      rotate: openItems.includes(faq.id) ? 180 : 0,
                      scale: hoveredItem === faq.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-trust-blue" />
                  </motion.div>
                </motion.div>

                {/* Answer */}
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="px-8 pb-8 border-t border-gray-100"
                      >
                        <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
          </div>
        

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 "
        >
          <div className="  border border-white/20 rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Our counselors are here to help you make the right career decision</p>
            <motion.button
              className="bg-gradient-to-r from-trust-blue to-success-green text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
               onClick={() => openModal('Fullstack', 'Demo')}
            >
              Talk to a Counselor
            </motion.button>
          </div>
        </motion.div>
      </div>
      </div>
        <DemoBookingModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              trackName={selectedTrack}
              mode={leadMode}
              brochureUrl="/brochures/fullstack.pdf"
            />
    </section>
  );
}
