'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Download, BookOpen, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DemoBookingModal from '@/components/ui/DemoBookingModal';

import { Card, CardContent } from '@/components/ui/card';

interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  topics?: string[];
  downloadLink?: string;
}

interface CourseCurriculumSectionProps {
  stepNumber: number;
  title?: string;
  subtitle?: string;
  modules: Module[];
  totalDuration?: string;
  className?: string;
}

export default function CourseCurriculumSection({
  stepNumber,
  title = 'Curriculum',
  subtitle = 'Comprehensive learning path designed by industry experts',
  modules,
  totalDuration = '6 Months',
  className = '',
}: CourseCurriculumSectionProps) {
  const [selectedModule, setSelectedModule] = useState<string>(modules[0]?.id || '');
  const listRef = useRef<HTMLDivElement>(null);
  const selectedModuleData = modules.find((m) => m.id === selectedModule);

  // Calculate max height for 6 items
  const itemHeight = 76; 
  const maxVisibleItems = 6;
  const leftCardHeight = itemHeight * maxVisibleItems; 

    const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [leadMode, setLeadMode] = useState<'Demo' | 'Brochure'>('Demo');
   const openModal = (track: string, mode: 'Demo' | 'Brochure') => {
    setSelectedTrack(track);
    setLeadMode(mode);
    setModalOpen(true);
  };

  return (
    <section className={`py-2 lg:py-4 ${className}`}>
      <div className="container mx-auto px-1 sm:px-0 lg:px-2 max-w-6xl">
        {/* Glassmorphism Background */}
        <div className="bg-gradient-to-br from-purple-50 via-pink-100 to-red-200 backdrop-blur-xl rounded-xl p-4 lg:p-12 shadow-lg border border-white/20 relative">
          
          {/* Header */}
          <div className="relative flex items-start gap-4 mb-4 md:mb-8">
            {/* Step Number */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-400 to-blue-600 
                backdrop-blur-lg rounded-xl flex items-center justify-center shadow-md border border-white/30">
                <span className="text-sm lg:text-xl font-bold text-white">{stepNumber}</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="flex-1">
              <h2 className="text-lg lg:text-2xl font-bold text-blue-800">{title}</h2>
              <p className="text-xs   lg:text-base mt-1">{subtitle}</p>
            </div>

            {/* Duration Badge */}
            <div className="absolute right-0 top-0">
              <Badge className="bg-blue-500/20 text-blue-900 px-2 lg:px-3 py-1 lg:py-1 text-sm lg:text-lg font-semibold flex items-center gap-1 rounded-md backdrop-blur-md border border-white/30 shadow-sm">
                <Clock className="w-2 h-3 lg:w-5 lg:h-5" />
                {totalDuration}
              </Badge>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex md:gap-4 items-stretch" style={{ height: leftCardHeight }}>
            {/* Left Module List */}
            <div className="flex-shrink-0 w-2/5 h-full">
              <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl overflow-hidden flex flex-col h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="bg-gradient-to-r from-blue-400/30 to-blue-600/30 px-4 py-2 border-b border-white/20">
                    <h3 className="font-semibold text-blue-900 flex items-center text-sm">
                      <BookOpen className="w-4 h-4 mr-1 text-blue-700" />
                      Learning Modules
                    </h3>
                  </div>
                  <div
                    ref={listRef}
                    className="overflow-y-auto overflow-x-hidden flex-1 
                      scrollbar scrollbar-thumb-blue-400/40 scrollbar-track-transparent 
                      hover:scrollbar-thumb-blue-500/60 scrollbar-thin transition-all duration-300 divide-y divide-white/20"
                    style={{ maxHeight: leftCardHeight }}
                  >
                    {modules.map((module, i) => (
                      <motion.button
                        key={module.id}
                         onClick={() => setSelectedModule(module.id)}
                        className={`w-full px-4 py-3 text-left transition-all duration-150 flex flex-col gap-1 ${
                          selectedModule === module.id
                            ? 'bg-blue-500/10 border-r-2 border-blue-500 shadow-md'
                            : 'hover:bg-blue-100/30'
                        }`}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`text-xs font-medium px-2 py-0.5 rounded ${
                                  selectedModule === module.id
                                    ? 'bg-blue-500/30 text-blue-700'
                                    : 'bg-white/50 text-gray-700'
                                }`}
                              >
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <h4 className="font-medium text-sm text-blue-900">{module.title}</h4>
                            </div>
                            <p className="text-xs text-blue-800/80 line-clamp-2">{module.description}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-blue-700/60" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Content */}
            <div className="flex-1 h-full">
              {selectedModuleData && (
                <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl overflow-hidden flex flex-col h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 px-6 py-3 text-white flex items-center justify-between">
                      <div>
                        <h3 className="text-heading3 font-bold">{selectedModuleData.title}</h3>
                        <p className="text-sm mt-1 text-white/90">{selectedModuleData.description}</p>
                      </div>
                      {selectedModuleData.downloadLink && (
                        <Button
                          className="relative bg-blue-500/80 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 overflow-hidden group"
                          onClick={() => openModal('datascience', 'Brochure')}
                        >
                          <Download className="w-3 h-3" />
                          Download
                          <span className="absolute inset-0 border-2 border-transparent rounded-md group-hover:border-white/40 animate-pulse"></span>
                        </Button>
                      )}
                    </div>

                    {/* Scrollable content */}
                    <div className="flex-1 overflow-y-auto p-4 
                      scrollbar scrollbar-thumb-blue-400/40 scrollbar-track-transparent 
                      hover:scrollbar-thumb-blue-500/60 scrollbar-thin transition-all duration-300 ease-in-out"
                      style={{ maxHeight: leftCardHeight }}
                    >
                      {selectedModuleData.topics && (
                        <ul className="space-y-1 mb-3">
                          {selectedModuleData.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-1 text-blue-900 text-sm">
                              <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden mt-2">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {modules.map((module) => (
                <motion.button
                  key={module.id}
                  onClick={() => setSelectedModule(module.id)}
                  className={`flex-shrink-0 px-3 py-2 rounded-md font-medium text-sm transition-all ${
                    selectedModule === module.id
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm'
                      : 'bg-white/30 backdrop-blur-xl border border-white/20 text-blue-900'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {module.title}
                </motion.button>
              ))}
            </div>
            <div className="mt-2">
              {selectedModuleData && (
                <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl overflow-hidden">
                  <CardContent className="p-0 flex flex-col h-[400px]">
                    <div className="p-4 border-b border-white/20 bg-gradient-to-r from-blue-400/20 to-blue-600/20">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-blue-900">{selectedModuleData.title}</h4>
                      
                      </div>
                      <p className="text-xs text-blue-800">{selectedModuleData.description}</p>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 scrollbar scrollbar-thumb-blue-400/40 scrollbar-track-transparent hover:scrollbar-thumb-blue-500/60 scrollbar-thin transition-all duration-300 ease-in-out">
                      {selectedModuleData.topics && (
                        <ul className="space-y-1 mb-2">
                          {selectedModuleData.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-1 text-blue-900 text-xs">
                              <CheckCircle className="w-3 h-3 text-blue-600 mt-1" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {selectedModuleData.downloadLink && (
                      <div className="p-3 border-t border-white/20 bg-white/30 backdrop-blur-xl">
                        <Button
                          className="relative bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-medium flex items-center gap-2 overflow-hidden group w-full justify-center"
                           onClick={() => openModal('datascience', 'Brochure')}
                        >
                          <Download className="w-3 h-3" />
                          Download
                          <span className="absolute inset-0 border-2 border-transparent rounded-md group-hover:border-blue-200 animate-pulse"></span>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
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
    </section>
  );
}
