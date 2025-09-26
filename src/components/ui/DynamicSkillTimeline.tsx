'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Code, Zap, Briefcase, ChevronDown, Clock, Target } from 'lucide-react';

const phases = [
  {
    phase: 1,
    title: 'Foundation',
    duration: '4-6 weeks',
    description: 'Master programming fundamentals and web development basics',
    expandedContent: 'Learn HTML5, CSS3, JavaScript ES6+, Git version control, and development environment setup. Build your first responsive websites and understand core programming concepts.',
    skills: ['HTML5 & CSS3', 'JavaScript Fundamentals', 'Git & GitHub', 'Responsive Design'],
    icon: BookOpen,
    color: 'text-trust-blue',
    bgColor: 'bg-trust-blue/10',
    borderColor: 'border-trust-blue/30',
    projects: 2
  },
  {
    phase: 2,
    title: 'Core Skills',
    duration: '8-10 weeks',
    description: 'Build full-stack applications with modern frameworks',
    expandedContent: 'Dive deep into React.js, Node.js, Express.js, and database management. Create dynamic web applications with user authentication, API integration, and state management.',
    skills: ['React.js & Hooks', 'Node.js & Express', 'MongoDB/PostgreSQL', 'REST APIs'],
    icon: Code,
    color: 'text-success-green',
    bgColor: 'bg-success-green/10',
    borderColor: 'border-success-green/30',
    projects: 4
  },
  {
    phase: 3,
    title: 'Specialization',
    duration: '6-8 weeks',
    description: 'Deep dive into cloud deployment and AI integration',
    expandedContent: 'Master AWS/Azure cloud services, Docker containerization, CI/CD pipelines, and integrate AI/ML capabilities into your applications. Learn microservices architecture.',
    skills: ['Cloud Deployment', 'Docker & Kubernetes', 'AI/ML Integration', 'DevOps Basics'],
    icon: Zap,
    color: 'text-primary-orange',
    bgColor: 'bg-primary-orange/10',
    borderColor: 'border-primary-orange/30',
    projects: 3
  },
  {
    phase: 4,
    title: 'Job Preparation',
    duration: '4-6 weeks',
    description: 'Portfolio building, interview prep, and placement support',
    expandedContent: 'Build an impressive portfolio, practice coding interviews, learn system design basics, and get personalized career guidance. Mock interviews with industry experts.',
    skills: ['Portfolio Development', 'Interview Preparation', 'System Design', 'Career Guidance'],
    icon: Briefcase,
    color: 'text-trust-blue',
    bgColor: 'bg-trust-blue/10',
    borderColor: 'border-trust-blue/30',
    projects: 1
  }
];

export default function DynamicSkillTimeline() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8  relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #10b981 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, #f97316 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container-custom relative max-w-full mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-2 py-3"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
            Your Skill Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A structured, hands-on path from beginner to job-ready fullstack developer
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative overflow-hidden py-3">
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-trust-blue  via-primary-orange to-trust-blue transform -translate-y-1/2 z-0 rounded-full" />
          <div className="grid grid-cols-4 gap-6 relative z-20">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center px-2"
                onHoverStart={() => setHoveredPhase(phase.phase)}
                onHoverEnd={() => setHoveredPhase(null)}
              >
                {/* Phase Icon */}
                <div className="relative mb-6">
                  <motion.div 
                    className={`w-20 sm:w-24 h-20 sm:h-24 ${phase.bgColor} rounded-full flex items-center justify-center mx-auto border-4 ${phase.borderColor} bg-white shadow-xl cursor-pointer`}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setExpandedPhase(expandedPhase === phase.phase ? null : phase.phase)}
                  >
                    <phase.icon className={`w-6 sm:w-10 h-6 sm:h-10 ${phase.color}`} />
                  </motion.div>
                  <motion.div 
                    className={`absolute -top-2 -right-2 w-8 sm:w-10 h-8 sm:h-10 ${phase.color.replace('text-', 'bg-')} rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg`}
                    animate={hoveredPhase === phase.phase ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {phase.phase}
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div layout className={`transition-all duration-500 ${expandedPhase === phase.phase ? 'scale-105' : ''}`}>
                  <Card className="bg-gradient-to-br from-white/70 to-white/90 backdrop-blur-xl border border-gray-200/30 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl cursor-pointer">
                    <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <div className="space-y-1 sm:space-y-2">
                        <h3 className="text-lg sm:text-xl font-poppins font-bold text-gray-900">{phase.title}</h3>
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{phase.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {expandedPhase === phase.phase ? phase.expandedContent : phase.description}
                      </p>

                      <AnimatePresence>
                        {expandedPhase === phase.phase && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2 sm:space-y-3 border-t border-gray-100 pt-3 sm:pt-4"
                          >
                            <div className="flex flex-wrap gap-1">
                              {phase.skills.map(skill => (
                                <span 
                                  key={skill} 
                                  className={`text-xs sm:text-sm px-2 py-1 rounded-full ${phase.bgColor} ${phase.color} border border-current/20`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-center space-x-2 text-sm">
                              <Target className={`w-4 h-4 ${phase.color}`} />
                              <span className="text-gray-600">{phase.projects} Projects</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.div 
                        className="flex justify-center"
                        animate={{ rotate: expandedPhase === phase.phase ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className={`w-5 h-5 ${phase.color}`} />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6 sm:space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-3 sm:space-x-4"
            >
              {/* Timeline Icon */}
              <div className="flex flex-col items-center">
                <motion.div 
                  className={`w-14 sm:w-16 h-14 sm:h-16 ${phase.bgColor} rounded-full flex items-center justify-center border-4 ${phase.borderColor} bg-white shadow-lg relative cursor-pointer`}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setExpandedPhase(expandedPhase === phase.phase ? null : phase.phase)}
                >
                  <phase.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${phase.color}`} />
                  <div className={`absolute -top-1 -right-1 w-5 sm:w-6 h-5 sm:h-6 ${phase.color.replace('text-', 'bg-')} rounded-full flex items-center justify-center text-white text-xs sm:text-xs font-bold`}>
                    {phase.phase}
                  </div>
                </motion.div>
                {index < phases.length - 1 && (
                  <div className="w-0.5 h-16 sm:h-20 bg-gradient-to-b from-gray-300 to-gray-100 mt-3 sm:mt-4" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1">
                <Card className="bg-gradient-to-br from-white/70 to-white/90 backdrop-blur-xl border border-gray-200/30 shadow-lg rounded-2xl cursor-pointer"
                      onClick={() => setExpandedPhase(expandedPhase === phase.phase ? null : phase.phase)}>
                  <CardContent className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg sm:text-xl font-poppins font-bold text-gray-900">{phase.title}</h3>
                      <motion.div
                        animate={{ rotate: expandedPhase === phase.phase ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className={`w-5 h-5 ${phase.color}`} />
                      </motion.div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{phase.duration}</span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {expandedPhase === phase.phase ? phase.expandedContent : phase.description}
                    </p>

                    <AnimatePresence>
                      {expandedPhase === phase.phase && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2 sm:space-y-3 border-t border-gray-100 pt-2 sm:pt-3"
                        >
                          <div className="flex flex-wrap gap-1">
                            {phase.skills.map(skill => (
                              <span 
                                key={skill} 
                                className={`text-xs sm:text-sm px-2 py-1 rounded-full ${phase.bgColor} ${phase.color} border border-current/20`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Target className={`w-4 h-4 ${phase.color}`} />
                            <span className="text-gray-600">{phase.projects} Projects</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
