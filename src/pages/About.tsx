'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/ui/StickyCTA';

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Students Trained', color: 'text-trust-blue' },
    { icon: Award, value: '95%', label: 'Placement Rate', color: 'text-success-green' },
    { icon: Target, value: '1,600+', label: 'Hiring Partners', color: 'text-primary-orange' },
    { icon: Heart, value: '4.9/5', label: 'Student Rating', color: 'text-trust-blue' }
  ];

  const values = [
    {
      title: 'Student-First Approach',
      description: 'Every decision we make puts our students\' success and career growth at the center.',
      icon: Heart
    },
    {
      title: 'Industry Relevance',
      description: 'Our curriculum is constantly updated with input from top tech companies and industry leaders.',
      icon: Target
    },
    {
      title: 'Quality Education',
      description: 'We maintain the highest standards in teaching, mentorship, and career support.',
      icon: Award
    },
    {
      title: 'Transparency',
      description: 'Clear communication about course content, pricing, and placement support - no hidden surprises.',
      icon: CheckCircle
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      experience: 'Ex-Google, 15+ years in EdTech',
      image: '/api/placeholder/150/150',
      linkedin: '#'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Curriculum',
      experience: 'Ex-Microsoft, IIT Delhi',
      image: '/api/placeholder/150/150',
      linkedin: '#'
    },
    {
      name: 'Amit Singh',
      role: 'Head of Placements',
      experience: 'Ex-Amazon, 12+ years HR',
      image: '/api/placeholder/150/150',
      linkedin: '#'
    },
    {
      name: 'Sneha Patel',
      role: 'Head of Student Success',
      experience: 'Ex-Flipkart, MBA IIM-A',
      image: '/api/placeholder/150/150',
      linkedin: '#'
    }
  ];

  const milestones = [
    { year: '2019', event: 'Edusyntax founded with a vision to democratize tech education' },
    { year: '2020', event: 'First 100 students placed in top companies during pandemic' },
    { year: '2021', event: 'Expanded to Data Science and Digital Marketing courses' },
    { year: '2022', event: 'Crossed 5,000 successful placements milestone' },
    { year: '2023', event: 'Launched corporate training programs for 50+ companies' },
    { year: '2024', event: 'Achieved 95% placement rate and 10,000+ alumni network' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-blue to-primary-orange text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-success-green/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge className="bg-success-green/20 text-success-green border-success-green/30 text-lg px-4 py-2">
                Transforming Careers Since 2019
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
                About
                <span className="block text-success-green">Edusyntax</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                We're on a mission to bridge the gap between education and employment. 
                Founded by industry veterans, we've helped 10,000+ students transform their careers 
                and land their dream jobs at top companies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center space-y-2">
                  <stat.icon className={`w-8 h-8 mx-auto ${stat.color}`} />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl font-poppins font-bold text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To make quality tech education accessible to everyone and ensure every student 
                  gets placed in their dream job. We believe that with the right guidance, 
                  mentorship, and practical training, anyone can build a successful tech career.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-poppins font-bold text-gray-900">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become India's most trusted career transformation platform, where students 
                  don't just learn skills but build careers that they love and companies value.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary-beige/30 rounded-3xl p-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-poppins font-bold text-gray-900">Why Students Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success-green flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">100% Placement Guarantee</h4>
                      <p className="text-gray-600">We don't stop until you get placed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success-green flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Industry Expert Mentors</h4>
                      <p className="text-gray-600">Learn from professionals at FAANG companies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success-green flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Real-World Projects</h4>
                      <p className="text-gray-600">Build portfolio with industry-level projects</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success-green flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Lifetime Support</h4>
                      <p className="text-gray-600">Career guidance even after placement</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary-beige/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Edusyntax
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-trust-blue/10 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-trust-blue" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans committed to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary-beige/30 rounded-2xl p-6 text-center space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-poppins font-bold text-gray-900">{member.name}</h3>
                  <p className="text-trust-blue font-semibold">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </div>
                <Button variant="outline" size="sm" className="flex items-center space-x-2 mx-auto">
                  <Linkedin className="w-4 h-4" />
                  <span>Connect</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-secondary-beige/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform careers
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center space-x-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/4 text-center">
                    <div className="text-3xl font-bold text-primary-orange">{milestone.year}</div>
                  </div>
                  <div className="w-3/4">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl font-poppins font-bold text-gray-900">Get in Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Have questions about our courses or career guidance? We're here to help you 
                  make the right decision for your future.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-trust-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success-green/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-success-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@Edusyntax.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      Tower A, Cyber City<br />
                      Gurgaon, Haryana 122002
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary-beige/30 rounded-3xl p-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-poppins font-bold text-gray-900">Ready to Start?</h3>
                <p className="text-gray-600">
                  Book a free career counseling session with our experts and discover 
                  the perfect course for your career goals.
                </p>
                
                <div className="space-y-4">
                  <Button className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white text-lg py-4">
                    Book Free Career Counseling
                  </Button>
                  <Button variant="outline" className="w-full text-lg py-4">
                    Download Course Brochure
                  </Button>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center mb-4">Follow us on social media</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Twitter className="w-4 h-4" />
                      <span>Twitter</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
}