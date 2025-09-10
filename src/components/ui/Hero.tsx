'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Students Trained' },
    { icon: Award, value: '95%', label: 'Placement Rate' },
    { icon: TrendingUp, value: '1600+', label: 'Hiring Partners' },
    { icon: Star, value: '4.9/5', label: 'Student Rating' },
  ];

  const trustBadges = [
    'Industry Expert Mentors',
    'Live Project Experience',
    '100% Placement Support',
    'Lifetime Access'
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-trust-blue via-trust-blue to-primary-blue overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-success-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-orange/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <Badge className="bg-success-green/20 text-success-green border-success-green/30 px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Trusted by 10,000+ Students
              </Badge>
              <Badge className="bg-primary-orange/20 text-primary-orange border-primary-orange/30 px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 mr-2 fill-current" />
                India's #1 Career Platform
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-white leading-tight">
                Become Job-Ready in
                <span className="block text-primary-orange mt-2">Fullstack,</span>
                <span className="block text-success-green">Data Science,</span>
                <span className="block">or Digital Marketing</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
                Get trained by industry experts. Work on real projects. 
                <span className="text-success-green font-semibold"> Get hired by 1600+ companies</span> 
                with our proven career transformation program.
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {trustBadges.map((badge, index) => (
                <div key={badge} className="flex items-center space-x-2 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-primary-orange hover:bg-primary-orange/90 text-white text-lg px-8 py-4 flex items-center space-x-2 group shadow-lg">
                <span>Book Your Free Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-trust-blue flex items-center space-x-2 shadow-lg"
              >
                <Play className="w-5 h-5" />
                <span>Download Course Syllabus</span>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center space-y-2 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <stat.icon className="w-6 h-6 text-primary-orange mx-auto" />
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Course Cards Stack */}
            <div className="relative space-y-4">
              {[
                { title: 'Fullstack Development', students: '3,500+', rating: '4.9', color: 'bg-blue-500', jobs: '2,500+ Jobs' },
                { title: 'Data Science & AI', students: '2,800+', rating: '4.8', color: 'bg-green-500', jobs: '1,800+ Jobs' },
                { title: 'Digital Marketing', students: '4,200+', rating: '4.9', color: 'bg-purple-500', jobs: '3,200+ Jobs' }
              ].map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 50, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform ${
                    index === 1 ? 'translate-x-8' : index === 2 ? 'translate-x-4' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center`}>
                        <span className="text-white font-bold">
                          {course.title.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">{course.title}</h3>
                        <div className="flex items-center space-x-3 text-xs text-gray-300">
                          <span>{course.students} enrolled</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-success-green font-semibold text-xs">{course.jobs}</div>
                      <div className="text-gray-400 text-xs">Available</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Success Badge */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-success-green/20 backdrop-blur-md rounded-full p-4 border border-success-green/30"
            >
              <Award className="w-8 h-8 text-success-green" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;