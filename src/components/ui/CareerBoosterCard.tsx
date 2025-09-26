'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Briefcase, MessageSquare, Globe, Rocket, Code } from 'lucide-react';

export default function CareerBoosterCards() {
  const boosters = [
    {
      icon: FileText,
      title: 'Resume Building',
      description: 'Create strong resumes with expert guidance from industry recruiters.',
      proof: '500+ resumes reviewed by experts',
    },
    {
      icon: Briefcase,
      title: 'Job Updates',
      description: 'Get access to the latest openings & hiring alerts.',
      proof: 'Updates from 1000+ top companies',
    },
    {
      icon: MessageSquare,
      title: 'Interview Prep',
      description: 'Mock interviews and communication training.',
      proof: '1000+ students successfully placed',
    },
    {
      icon: Globe,
      title: 'LinkedIn Boost',
      description: 'Optimize your LinkedIn for maximum recruiter visibility.',
      proof: 'Profiles enhanced for 2000+ learners',
    },
    {
      icon: Rocket,
      title: 'Career Transition',
      description: 'Guidance to confidently shift domains or roles.',
      proof: '500+ successful transitions',
    },
    {
      icon: Code,
      title: 'Freelancing',
      description: 'Learn how to start and grow as a freelancer.',
      proof: 'Students earned ₹50,000+ in their first 3 months',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-trust-blue/10 via-white/40 to-success-green/10 relative overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-trust-blue/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-success-green/20 rounded-full blur-3xl" />

      <div className="relative container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get <span className="bg-clip-text text-transparent bg-gradient-to-r from-trust-blue to-success-green">₹10,000 Worth</span> of Free Career Booster Add-On Sessions
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-light">
            Complement your technical training with practical career growth sessions that deliver real results and success stories.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {boosters.map((booster, index) => (
            <motion.div
              key={booster.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full rounded-3xl border-2 border-trust-blue/30 bg-white/90 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
                <CardContent className="p-8 flex flex-col items-start space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-trust-blue/20 to-success-green/20 flex items-center justify-center shadow-inner">
                    <booster.icon className="w-8 h-8 text-trust-blue" />
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 font-poppins">{booster.title}</h3>
                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{booster.description}</p>
                  {/* Proof / Evidence */}
                  <p className="text-success-green font-semibold text-sm mt-2">✔ {booster.proof}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
