'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, 
  User, 
  Briefcase, 
  RefreshCw, 
  Code 
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Persona {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const personas: Persona[] = [
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'College students looking to build practical skills for better job prospects',
    gradient: 'from-trust-blue to-blue-600'
  },
  {
    icon: User,
    title: 'Fresh Graduates',
    description: 'Recent graduates who want to enhance their employability with in-demand skills',
    gradient: 'from-success-green to-green-600'
  },
  {
    icon: Briefcase,
    title: 'Working Professionals',
    description: 'Professionals seeking to upskill and advance their careers in tech',
    gradient: 'from-primary-orange to-orange-600'
  },
  {
    icon: RefreshCw,
    title: 'Career Switchers',
    description: 'Individuals from non-tech backgrounds wanting to transition to tech careers',
    gradient: 'from-purple-500 to-purple-700'
  },
  {
    icon: Code,
    title: 'Experienced IT Professionals',
    description: 'Developers looking to learn modern technologies and cloud/AI integration',
    gradient: 'from-pink-500 to-pink-700'
  }
];

export default function WhoCanJoin() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
          Who Can Join?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our course is designed for learners at all levels - from complete beginners to experienced professionals
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {personas.map((persona, index) => {
          const IconComponent = persona.icon;
          return (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                rotateY: 5
              }}
              className="group"
            >
              <Card className="h-full bg-white/70 backdrop-blur-xl border border-white/30 hover:bg-white/90 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 text-center space-y-4">
                  {/* Icon with Glow Effect */}
                  <div className="relative">
                    <div className={`
                      w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${persona.gradient}
                      flex items-center justify-center shadow-lg
                      group-hover:scale-110 transition-all duration-300
                    `}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Glow Effect on Hover */}
                    <div className={`
                      absolute inset-0 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${persona.gradient}
                      opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500
                    `} />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-poppins font-bold text-gray-900 group-hover:text-trust-blue transition-colors">
                      {persona.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {persona.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Info */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-trust-blue/10 to-success-green/10 backdrop-blur-xl border border-white/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">
              No Prerequisites Required!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Whether you're starting from zero or looking to advance your existing skills, 
              our comprehensive curriculum will take you from basics to job-ready professional. 
              All you need is dedication and willingness to learn.
            </p>
          </CardContent>
        </Card>
      </motion.div> */}
    </div>
  );
}