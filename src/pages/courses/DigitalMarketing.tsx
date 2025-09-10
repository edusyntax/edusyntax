'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Award, 
  Search, 
  Target, 
  BarChart3, 
  Megaphone,
  Calendar,
  Download,
  Phone,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/ui/StickyCTA';

export default function DigitalMarketingPage() {
  const courseHighlights = [
    { icon: Clock, text: '4 months intensive program' },
    { icon: Users, text: 'Google certified trainers' },
    { icon: Award, text: '100% placement support' },
    { icon: Target, text: '10+ live campaigns' }
  ];

  const curriculum = [
    {
      module: 'Digital Marketing Fundamentals',
      duration: '2 weeks',
      topics: ['Digital Marketing Overview', 'Consumer Behavior', 'Marketing Funnel', 'Brand Strategy', 'Content Strategy', 'Marketing Analytics'],
      icon: Target
    },
    {
      module: 'Search Engine Optimization',
      duration: '4 weeks', 
      topics: ['On-page SEO', 'Off-page SEO', 'Technical SEO', 'Keyword Research', 'Link Building', 'SEO Tools'],
      icon: Search
    },
    {
      module: 'Search Engine Marketing',
      duration: '4 weeks',
      topics: ['Google Ads', 'Bing Ads', 'Campaign Setup', 'Keyword Bidding', 'Ad Copy Writing', 'Landing Pages'],
      icon: Target
    },
    {
      module: 'Social Media Marketing',
      duration: '4 weeks',
      topics: ['Facebook Ads', 'Instagram Marketing', 'LinkedIn Ads', 'Twitter Marketing', 'YouTube Marketing', 'Influencer Marketing'],
      icon: Megaphone
    },
    {
      module: 'Content & Email Marketing',
      duration: '3 weeks',
      topics: ['Content Creation', 'Blog Writing', 'Email Campaigns', 'Newsletter Design', 'Automation', 'Copywriting'],
      icon: Megaphone
    },
    {
      module: 'Analytics & Reporting',
      duration: '3 weeks',
      topics: ['Google Analytics', 'Facebook Insights', 'Data Analysis', 'ROI Calculation', 'Dashboard Creation', 'Performance Optimization'],
      icon: BarChart3
    }
  ];

  const projects = [
    {
      name: 'E-commerce SEO Campaign',
      description: 'Complete SEO strategy for online store resulting in 300% organic traffic increase.',
      tech: ['SEO', 'Google Analytics', 'Search Console', 'Keyword Research']
    },
    {
      name: 'Social Media Ad Campaign',
      description: 'Multi-platform social media advertising campaign with ₹5 ROAS achievement.',
      tech: ['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Creative Design']
    },
    {
      name: 'Lead Generation Campaign',
      description: 'B2B lead generation campaign generating 500+ qualified leads for SaaS company.',
      tech: ['Google Ads', 'Landing Pages', 'Email Marketing', 'CRM Integration']
    },
    {
      name: 'Content Marketing Strategy',
      description: 'Complete content marketing strategy increasing brand engagement by 400%.',
      tech: ['Content Strategy', 'Blog Writing', 'Social Media', 'Email Marketing']
    }
  ];

  const faqs = [
    {
      question: 'Do I need prior marketing experience?',
      answer: 'No, this course is designed for beginners. We start with digital marketing fundamentals and build up to advanced campaign management.'
    },
    {
      question: 'What is the average salary for Digital Marketers?',
      answer: 'Our Digital Marketing graduates get placed with packages ranging from ₹6-12 LPA. Senior roles and freelancing can earn ₹15+ LPA.'
    },
    {
      question: 'Will I get Google and Facebook certifications?',
      answer: 'Yes, we prepare you for and help you achieve Google Ads, Google Analytics, and Facebook Blueprint certifications.'
    },
    {
      question: 'Can I start freelancing after this course?',
      answer: 'Absolutely! We provide dedicated freelancing guidance, client acquisition strategies, and portfolio building support.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-orange via-trust-blue to-success-green text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-success-green/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3 mb-4">
                  <Badge className="bg-primary-orange/20 text-primary-orange border-primary-orange/30">
                    High Demand Career
                  </Badge>
                  <Badge className="bg-success-green/20 text-success-green border-success-green/30">
                    Freelancing Friendly
                  </Badge>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
                  Master
                  <span className="block text-primary-orange">Digital</span>
                  <span className="block text-success-green">Marketing</span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed">
                  Become a digital marketing expert in 4 months. Master SEO, SEM, Social Media, 
                  Content Marketing, and Analytics. Get certified and boost your career.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {courseHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <highlight.icon className="w-5 h-5 text-primary-orange flex-shrink-0" />
                    <span className="text-sm">{highlight.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary-orange hover:bg-primary-orange/90 text-white text-lg px-8 py-4 flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Book Free Demo</span>
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-trust-blue text-lg px-8 py-4 flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Syllabus</span>
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-orange">4,200+</div>
                  <div className="text-sm text-gray-300">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold text-success-green">4.9</span>
                  </div>
                  <div className="text-sm text-gray-300">Student Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success-green">₹9.5 LPA</div>
                  <div className="text-sm text-gray-300">Avg Package</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">Next Batch Starts</div>
                    <div className="text-xl text-primary-orange font-semibold">January 10, 2025</div>
                    <div className="text-sm text-gray-300 mt-2">Only 8 seats remaining</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Course Fee:</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-white">₹49,999</span>
                        <div className="text-sm text-gray-400 line-through">₹79,999</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">EMI Starting:</span>
                      <span className="text-success-green font-semibold">₹4,167/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Duration:</span>
                      <span className="text-white font-semibold">4 months</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Included Certifications:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-300">• Google Ads</div>
                      <div className="text-gray-300">• Google Analytics</div>
                      <div className="text-gray-300">• Facebook Blueprint</div>
                      <div className="text-gray-300">• HubSpot Content</div>
                    </div>
                  </div>

                  <Button className="w-full bg-success-green hover:bg-success-green/90 text-white text-lg py-4">
                    Apply Now - Save ₹30,000
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Complete Digital Marketing Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master every aspect of digital marketing from SEO to social media advertising
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {curriculum.map((module, index) => (
              <motion.div
                key={module.module}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary-beige/30 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-poppins font-bold text-gray-900">{module.module}</h3>
                      <Badge variant="outline" className="text-trust-blue border-trust-blue">
                        {module.duration}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                          <span className="text-sm text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-secondary-beige/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Live Campaign Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Work on real marketing campaigns and build a portfolio that impresses employers
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-poppins font-bold text-gray-900">{project.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-primary-orange border-primary-orange">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>View Campaign</span>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary-beige/30 rounded-xl p-6"
              >
                <h3 className="text-lg font-poppins font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
}