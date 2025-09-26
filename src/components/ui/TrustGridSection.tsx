'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  BookOpen, 
  Building2, 
  Code, 
  DollarSign, 
  Briefcase, 
  Award,
  ChevronRight
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Learn from industry professionals with 10+ years of experience in top tech companies',
    expandedContent: 'Our trainers are seasoned professionals from Google, Microsoft, Amazon, and other leading tech companies. They bring real-world experience and industry insights directly to your learning journey.',
    gradient: 'from-trust-blue/10 to-trust-blue/5',
    iconBg: 'bg-trust-blue/10',
    iconColor: 'text-trust-blue',
    stats: '50+ Expert Trainers'
  },
  {
    icon: BookOpen,
    title: 'Industry-Relevant Curriculum',
    description: 'Updated curriculum based on latest industry trends and job market requirements',
    expandedContent: 'Our curriculum is updated every 3 months based on industry feedback and emerging technologies. We ensure you learn exactly what companies are looking for in 2024 and beyond.',
    gradient: 'from-success-green/10 to-success-green/5',
    iconBg: 'bg-success-green/10',
    iconColor: 'text-success-green',
    stats: 'Updated Every 3 Months'
  },
    {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Quality education at competitive prices with flexible payment options',
    expandedContent: 'We believe quality education should be accessible. Our flexible EMI options start from ₹3,999/month with 0% interest. Scholarships available for deserving candidates.',
    gradient: 'from-success-green/10 to-success-green/5',
    iconBg: 'bg-success-green/10',
    iconColor: 'text-success-green',
    stats: 'EMI from ₹3,999/month'
  },
  {
    icon: Building2,
    title: 'Company Tie-Ups',
    description: 'Direct partnerships with 1600+ companies for guaranteed placement opportunities',
    expandedContent: 'We have exclusive partnerships with startups to Fortune 500 companies. Our placement team works directly with hiring managers to match you with the perfect role.',
    gradient: 'from-primary-orange/10 to-primary-orange/5',
    iconBg: 'bg-primary-orange/10',
    iconColor: 'text-primary-orange',
    stats: '1600+ Partner Companies'
  },
  {
  icon: Users,  
  title: '1:1 Mentorship & Mock Interviews',
  description: 'Personalized mentorship and real interview practice to prepare you for top roles',
  expandedContent: 'Get paired with experienced industry mentors for 1:1 sessions, code reviews, and career guidance. Practice with mock interviews designed by FAANG-level engineers to boost your confidence and job readiness.',
  gradient: 'from-indigo-500/10 to-indigo-500/5',
  iconBg: 'bg-indigo-500/10',
  iconColor: 'text-indigo-500',
  stats: '100% Interview Preparation Support'
},
  {
    icon: Code,
    title: 'Hands-On Projects',
    description: 'Build real-world projects that showcase your skills to potential employers',
    expandedContent: 'Work on 15+ industry-grade projects including e-commerce platforms, social media apps, and AI-powered applications. Each project is designed to demonstrate specific skills employers value.',
    gradient: 'from-trust-blue/10 to-trust-blue/5',
    iconBg: 'bg-trust-blue/10',
    iconColor: 'text-trust-blue',
    stats: '15+ Real Projects'
  },

  {
    icon: Briefcase,
    title: 'Freelance Guidance',
    description: 'Learn how to build a successful freelancing career alongside job placement',
    expandedContent: 'Master the art of freelancing with our dedicated modules on client acquisition, project management, and pricing strategies. Many of our students earn ₹50,000+ monthly through freelancing.',
    gradient: 'from-primary-orange/10 to-primary-orange/5',
    iconBg: 'bg-primary-orange/10',
    iconColor: 'text-primary-orange',
    stats: 'Avg. ₹50K+ Monthly'
  },
  {
    icon: Award,
    title: 'Certification Provided',
    description: 'Industry-recognized certification upon successful course completion',
    expandedContent: 'Receive certificates recognized by our 1600+ hiring partners. Our certifications are also endorsed by leading industry bodies and add significant value to your resume.',
    gradient: 'from-trust-blue/10 to-trust-blue/5',
    iconBg: 'bg-trust-blue/10',
    iconColor: 'text-trust-blue',
    stats: 'Industry Recognized'
  }
];

export default function TrustGridSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="py-4 relative overflow-hidden">
      {/* Animated Background */}
      {/* <motion.div 
        className="absolute inset-0  from-gray-50 to-blue-50"
        animate={{
          background: [
            'linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%)',
            'linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)',
            'linear-gradient(135deg, #f0fdf4 0%, #fff7ed 100%)',
            'linear-gradient(135deg, #fff7ed 0%, #f9fafb 100%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      /> */}

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-6"
        >
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
            Why Choose Edusyntax?
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to succeed in your development career with proven results
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card 
                className={`h-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl group cursor-pointer overflow-hidden ${
                  expandedCard === index ? 'scale-105 shadow-2xl' : ''
                }`}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <CardContent className="p-6 h-full flex flex-col relative">
                  {/* Hover Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="text-center flex-1 space-y-3">
                      <h3 className="text-lg font-poppins font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {expandedCard === index ? feature.expandedContent : feature.description}
                      </p>

                      {/* Stats */}
                      <motion.div 
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${feature.iconColor} ${feature.iconBg} border border-current/20`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {feature.stats}
                      </motion.div>
                    </div>

                    {/* Expand Indicator */}
                    <motion.div 
                      className="flex justify-center mt-4"
                      animate={{ rotate: expandedCard === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className={`w-5 h-5 ${feature.iconColor}`} />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={feature.title} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto`}>
                        <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                      </div>
                      
                      <h3 className="text-lg font-poppins font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>

                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${feature.iconColor} ${feature.iconBg} border border-current/20`}>
                        {feature.stats}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-trust-blue w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}