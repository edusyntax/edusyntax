'use client';

import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Shield, 
  CreditCard, 
  Calendar,
  Users,
  Award,
  Clock,
  Phone,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/ui/StickyCTA';

export default function PricingPage() {
  const courses = [
    {
      name: 'Digital Marketing',
      duration: '4 months',
      originalPrice: 79999,
      currentPrice: 49999,
      emi: 4167,
      nextBatch: 'Jan 10, 2025',
      seatsLeft: 8,
      popular: false,
      features: [
        'SEO & SEM Mastery',
        'Social Media Marketing',
        'Google Ads Certification',
        'Facebook Blueprint Certification',
        'Content Marketing',
        'Email Marketing Automation',
        'Analytics & Reporting',
        '10+ Live Campaigns',
        '1-on-1 Mentorship',
        'Job Placement Support',
        'Freelancing Guidance',
        'Lifetime Course Access'
      ],
      notIncluded: [
        'Advanced Programmatic Advertising',
        'Enterprise Marketing Tools'
      ]
    },
    {
      name: 'Fullstack Development',
      duration: '6 months',
      originalPrice: 129999,
      currentPrice: 89999,
      emi: 7500,
      nextBatch: 'Jan 15, 2025',
      seatsLeft: 12,
      popular: true,
      features: [
        'Frontend (React, Vue, Angular)',
        'Backend (Node.js, Python, Java)',
        'Database (MongoDB, PostgreSQL)',
        'Cloud Deployment (AWS, Azure)',
        'DevOps & CI/CD',
        'System Design',
        'Data Structures & Algorithms',
        '15+ Real-world Projects',
        'GitHub Portfolio',
        'Mock Interviews',
        'Resume Building',
        '100% Placement Guarantee',
        'Lifetime Alumni Network'
      ],
      notIncluded: [
        'Mobile App Development',
        'Advanced AI/ML Integration'
      ]
    },
    {
      name: 'Data Science & AI',
      duration: '8 months',
      originalPrice: 149999,
      currentPrice: 99999,
      emi: 8333,
      nextBatch: 'Jan 20, 2025',
      seatsLeft: 15,
      popular: false,
      features: [
        'Python & R Programming',
        'Statistics & Mathematics',
        'Machine Learning',
        'Deep Learning & Neural Networks',
        'Natural Language Processing',
        'Computer Vision',
        'Big Data (Spark, Hadoop)',
        'Cloud ML (AWS, GCP)',
        '20+ ML/AI Projects',
        'Kaggle Competitions',
        'Research Paper Writing',
        'Industry Capstone Project',
        'PhD Mentor Support'
      ],
      notIncluded: [
        'Quantum Computing',
        'Advanced Research Methods'
      ]
    }
  ];

  const paymentOptions = [
    {
      title: 'Full Payment',
      description: 'Pay the complete amount upfront',
      discount: '₹10,000 additional discount',
      icon: CreditCard
    },
    {
      title: 'EMI Options',
      description: 'Flexible monthly installments',
      discount: '0% interest for first 6 months',
      icon: Calendar
    },
    {
      title: 'Income Share Agreement',
      description: 'Pay after you get placed',
      discount: 'No upfront payment required',
      icon: Shield
    }
  ];

  const scholarships = [
    {
      name: 'Merit Scholarship',
      discount: 'Up to 50%',
      criteria: 'Based on entrance test performance',
      eligibility: 'Score 85%+ in our assessment'
    },
    {
      name: 'Women in Tech',
      discount: 'Up to 30%',
      criteria: 'Supporting women in technology',
      eligibility: 'Female candidates from any background'
    },
    {
      name: 'Student Scholarship',
      discount: 'Up to 25%',
      criteria: 'For current students',
      eligibility: 'Valid student ID required'
    },
    {
      name: 'Career Transition',
      discount: 'Up to 20%',
      criteria: 'For career switchers',
      eligibility: '2+ years work experience'
    }
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
                Limited Time Offer - Save up to ₹50,000
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
                Transparent
                <span className="block text-success-green">Pricing</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Invest in your future with our comprehensive courses. Flexible payment options, 
                scholarships available, and 100% placement guarantee.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-success-green hover:bg-success-green/90 text-white text-lg px-8 py-4 flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Talk to Counselor</span>
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-trust-blue text-lg px-8 py-4 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Fee Structure</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Choose Your Career Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All courses include 100% placement guarantee, lifetime access, and industry mentorship
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary-orange text-white px-4 py-2 text-sm">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full ${course.popular ? 'ring-2 ring-primary-orange shadow-xl' : 'hover:shadow-lg'} transition-shadow duration-300`}>
                  <CardHeader className="text-center space-y-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl font-poppins font-bold text-gray-900">
                        {course.name}
                      </CardTitle>
                      <p className="text-trust-blue font-semibold">{course.duration} Program</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-3xl font-bold text-gray-900">₹{course.currentPrice.toLocaleString()}</span>
                        <span className="text-lg text-gray-500 line-through">₹{course.originalPrice.toLocaleString()}</span>
                      </div>
                      <p className="text-success-green font-semibold">
                        EMI starts at ₹{course.emi.toLocaleString()}/month
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-trust-blue" />
                        <span>Next batch: {course.nextBatch}</span>
                      </div>
                      <Badge variant="outline" className="text-primary-orange border-primary-orange">
                        {course.seatsLeft} seats left
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                        <Check className="w-5 h-5 text-success-green" />
                        <span>What's Included</span>
                      </h4>
                      <div className="space-y-2">
                        {course.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-success-green flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {course.notIncluded.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                          <X className="w-5 h-5 text-gray-400" />
                          <span>Not Included</span>
                        </h4>
                        <div className="space-y-2">
                          {course.notIncluded.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start space-x-2">
                              <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-500">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <Button className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white">
                        Enroll Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        Book Free Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-padding bg-secondary-beige/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Flexible Payment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the payment method that works best for your financial situation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {paymentOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-trust-blue/10 rounded-full flex items-center justify-center mx-auto">
                  <option.icon className="w-8 h-8 text-trust-blue" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-900">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
                <Badge className="bg-success-green/20 text-success-green border-success-green/30">
                  {option.discount}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Scholarship Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe talent shouldn't be limited by financial constraints
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary-beige/30 rounded-2xl p-6 space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center">
                  <h3 className="text-lg font-poppins font-bold text-gray-900">{scholarship.name}</h3>
                  <div className="text-2xl font-bold text-primary-orange mt-2">{scholarship.discount}</div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">{scholarship.criteria}</p>
                  <p className="text-xs text-gray-500">{scholarship.eligibility}</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Need help choosing the right payment option or scholarship?
            </p>
            <Button className="bg-primary-orange hover:bg-primary-orange/90 text-white text-lg px-8 py-4">
              Talk to Financial Counselor
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
}