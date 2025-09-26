'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Building2, 
  BookOpen, 
  Wrench, 
  Award, 
  Briefcase 
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const benefits: Benefit[] = [
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Learn from industry professionals with 10+ years of experience',
    gradient: 'from-trust-blue to-blue-600'
  },
  {
    icon: Building2,
    title: 'Company Tie-ups & Hiring Partners',
    description: '1600+ partner companies for guaranteed job placement',
    gradient: 'from-success-green to-green-600'
  },
  {
    icon: BookOpen,
    title: 'Industry-Relevant Curriculum',
    description: 'Updated curriculum based on latest industry requirements',
    gradient: 'from-primary-orange to-orange-600'
  },
  {
    icon: Wrench,
    title: 'Hands-on Projects',
    description: 'Build 15+ real-world projects for your portfolio',
    gradient: 'from-purple-500 to-purple-700'
  },
  {
    icon: Award,
    title: 'Certification Provided',
    description: 'Industry-recognized certification upon course completion',
    gradient: 'from-pink-500 to-pink-700'
  },
  {
    icon: Briefcase,
    title: 'Freelance Guidance',
    description: 'Learn how to start and grow your freelancing career',
    gradient: 'from-indigo-500 to-indigo-700'
  }
];

export default function WhyEdusyntax() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
          Why Choose Edusyntax?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join thousands of successful developers who transformed their careers with us
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-white/60 backdrop-blur-xl border border-white/30 hover:bg-white/80 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8 text-center space-y-4">
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${benefit.gradient}
                    flex items-center justify-center shadow-lg
                    group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
                  `}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-poppins font-bold text-gray-900 group-hover:text-trust-blue transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}