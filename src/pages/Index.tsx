'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/Hero';
import CourseCard from '@/components/ui/CourseCard';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import HiringPartners from '@/components/ui/HiringPartners';
import StickyCTA from '@/components/ui/StickyCTA';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const courses = [
    {
      title: "Fullstack Development",
      description: "Master modern web development with React, Node.js, MongoDB, and deployment. Build real-world projects and get job-ready.",
      duration: "6 months",
      students: "3,500+",
      rating: "4.9",
      level: "Beginner to Advanced",
      price: "9999",
      originalPrice: "1,29,999",
      features: [
        "Live Interactive Classes",
        "1-on-1 Mentorship",
        "Real-world Projects",
        "100% Placement Assistance"
      ],
      nextBatch: "15th January 2025",
      popular: true
    },
    {
      title: "Data Science & AI",
      description: "Learn Python, Machine Learning, Deep Learning, and AI. Work on industry projects and become a data scientist.",
      duration: "8 months",
      students: "2,800+",
      rating: "4.8",
      level: "Beginner to Advanced",
      price: "19,999",
      originalPrice: "1,49,999",
      features: [
        "Python & R Programming",
        "ML & AI Projects",
        "Industry Datasets",
        "Career Transition Support"
      ],
      nextBatch: "20th January 2025"
    },
    {
      title: "Digital Marketing",
      description: "Master SEO, SEM, Social Media, Content Marketing, and Analytics. Get certified and boost your career.",
      duration: "4 months",
      students: "4,200+",
      rating: "4.9",
      level: "Beginner to Expert",
      price: "10,999",
      originalPrice: "79,999",
      features: [
        "Google Ads Certification",
        "Live Campaign Management",
        "Analytics & Reporting",
        "Freelancing Guidance"
      ],
      nextBatch: "10th January 2025"
    }
  ];

  const outcomes = [
    { icon: Users, value: '10,000+', label: 'Students Trained' },
    { icon: Award, value: '95%', label: 'Placement Rate' },
    { icon: TrendingUp, value: '300%', label: 'Average Salary Hike' },
    { icon: Clock, value: '6 months', label: 'Average Job Timeline' }
  ];

  const whyChooseUs = [
    {
      title: "Industry-Relevant Curriculum",
      description: "Learn skills that top companies actually need. Our curriculum is designed with industry experts."
    },
    {
      title: "1-on-1 Mentorship",
      description: "Get personal guidance from industry professionals working at top tech companies."
    },
    {
      title: "Real-World Projects",
      description: "Build a portfolio with projects that showcase your skills to potential employers."
    },
    {
      title: "100% Placement Assistance",
      description: "Dedicated career support, interview prep, and job placement assistance until you land your dream job."
    },
    {
      title: "Flexible Learning",
      description: "Learn at your own pace with live classes, recorded sessions, and lifetime access to content."
    },
    {
      title: "Community Support",
      description: "Join a community of learners, alumni, and industry professionals for networking and support."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Outcomes Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Proven Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for our commitment to student success and career transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-4 p-6 bg-secondary-beige/30 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <outcome.icon className="w-12 h-12 text-primary-orange mx-auto" />
                <div className="text-4xl font-bold text-trust-blue">{outcome.value}</div>
                <div className="text-gray-600 font-medium">{outcome.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-secondary-beige/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Transform Your Career
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our industry-leading courses designed to get you job-ready in months, not years
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button className="bg-primary-orange hover:bg-primary-orange/90 text-white text-lg px-8 py-4 flex items-center space-x-2 mx-auto">
              <span>View All Courses</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Hiring Partners Section */}
      <HiringPartners />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Why Choose Edusyntax?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another online course platform. We're your career transformation partner.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary-beige/30 rounded-2xl p-6 space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircle className="w-8 h-8 text-success-green" />
                <h3 className="text-xl font-poppins font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-trust-blue to-primary-orange">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join thousands of professionals who have already transformed their careers with Edusyntax. 
              Your dream job is just one course away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-trust-blue hover:bg-gray-100 text-lg px-8 py-4 flex items-center space-x-2">
                <span>Book Your Free Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-trust-blue text-lg px-8 py-4">
                Download Course Syllabus
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
}