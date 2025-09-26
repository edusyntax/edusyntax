'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Download, X, Clock, Users, Award, Calendar, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DemoBookingModal from '@/components/ui/DemoBookingModal';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [leadMode, setLeadMode] = useState<'Demo' | 'Brochure'>('Demo');

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const openModal = (track: string, mode: 'Demo' | 'Brochure') => {
    setSelectedTrack(track);
    setLeadMode(mode);
    setModalOpen(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-primary-orange shadow-2xl"
        >
          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-trust-blue text-white overflow-hidden"
              >
                <div className="container-custom px-4 py-6">
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div className="space-y-2">
                      <Users className="w-8 h-8 text-primary-orange mx-auto" />
                      <div className="text-2xl font-bold">10,000+</div>
                      <div className="text-sm opacity-90">Students Trained</div>
                    </div>
                    <div className="space-y-2">
                      <Award className="w-8 h-8 text-success-green mx-auto" />
                      <div className="text-2xl font-bold">95%</div>
                      <div className="text-sm opacity-90">Placement Rate</div>
                    </div>
                    <div className="space-y-2">
                      <Clock className="w-8 h-8 text-primary-orange mx-auto" />
                      <div className="text-2xl font-bold">6 Months</div>
                      <div className="text-sm opacity-90">Avg Job Timeline</div>
                    </div>
                    <div className="space-y-2">
                      <Calendar className="w-8 h-8 text-success-green mx-auto" />
                      <div className="text-2xl font-bold">Next Batch</div>
                      <div className="text-sm opacity-90">Starts Jan 15</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main CTA Bar */}
          <div className="container-custom px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex items-center space-x-4">
                <div className="hidden sm:block">
                  <h3 className="font-poppins font-bold text-gray-900 text-lg">
                    🚀 Transform Your Career Today!
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-primary-orange" />
                      <span className="font-semibold text-primary-orange">Limited Time: 30% Off</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-success-green" />
                      <span>Only 15 seats left</span>
                    </div>
                  </div>
                </div>
                <div className="sm:hidden">
                  <h3 className="font-poppins font-bold text-gray-900">
                    Transform Your Career!
                  </h3>
                  <p className="text-xs text-primary-orange font-semibold">30% Off - 15 seats left</p>
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openModal('Fullstack', 'Brochure')}
                  className="hidden sm:flex items-center space-x-2 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Syllabus</span>
                </Button>
                
                <Button onClick={() => openModal("Fullstack", "Demo")} className="bg-primary-orange hover:bg-primary-orange/90 text-white flex items-center space-x-2 px-4 sm:px-6 py-2">
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Book Free Demo</span>
                  <span className="sm:hidden">Demo</span>
                </Button>

                <Button onClick={() => openModal("Fullstack", "Demo")}  className="bg-success-green hover:bg-success-green/90 text-white px-4 sm:px-6 py-2">
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </Button>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronUp className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
  <DemoBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trackName={selectedTrack}
        mode={leadMode}
        brochureUrl="/brochures/fullstack.pdf"
      />
          {/* Urgency Indicator */}
          <motion.div
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 300, ease: 'linear' }}
            className="h-1 bg-gradient-to-r from-primary-orange to-success-green"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;