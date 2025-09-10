'use client';

import { motion } from 'framer-motion';
import { 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Award, 
  Calendar,
  MapPin,
  Phone,
  Download,
  ArrowRight,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/ui/StickyCTA';

export default function BootcampsPage() {
  const bootcamps = [
    {
      name: 'Fullstack Developer Bootcamp',
      duration: '12 weeks',
      format: 'Intensive Full-time',
      price: 149999,
      originalPrice: 199999,
      nextBatch: 'Feb 1, 2025',
      seatsLeft: 20,
      rating: 4.9,
      students: 500,
      popular: true,
      description: 'Transform into a job-ready fullstack developer in just 12 weeks with our most intensive program.',
      highlights: [
        '60+ hours/week intensive training',
        'Live coding sessions daily',
        'Real company projects',
        'Guaranteed job placement',
        'Average salary: ₹15 LPA'
      ],
      curriculum: [
        'Week 1-3: Frontend Fundamentals (HTML, CSS, JavaScript, React)',
        'Week 4-6: Backend Development (Node.js, Express, Databases)',
        'Week 7-9: Full-stack Projects & System Design',
        'Week 10-12: DevOps, Deployment & Job Preparation'
      ],
      outcomes: {
        placement: '98%',
        avgSalary: '₹15 LPA',
        topSalary: '₹28 LPA'
      }
    },
    {
      name: 'Data Science Bootcamp',
      duration: '16 weeks',
      format: 'Intensive Full-time',
      price: 179999,
      originalPrice: 249999,
      nextBatch: 'Feb 15, 2025',
      seatsLeft: 15,
      rating: 4.8,
      students: 350,
      popular: false,
      description: 'Master data science and machine learning with hands-on projects and industry mentorship.',
      highlights: [
        '50+ hours/week intensive training',
        'Real industry datasets',
        'Kaggle competition participation',
        'PhD mentor support',
        'Average salary: ₹18 LPA'
      ],
      curriculum: [
        'Week 1-4: Python, Statistics & Data Analysis',
        'Week 5-8: Machine Learning & Feature Engineering',
        'Week 9-12: Deep Learning & Neural Networks',
        'Week 13-16: MLOps, Deployment & Capstone Project'
      ],
      outcomes: {
        placement: '95%',
        avgSalary: '₹18 LPA',
        topSalary: '₹35 LPA'
      }
    },
    {
      name: 'Digital Marketing Bootcamp',
      duration: '8 weeks',
      format: 'Intensive Full-time',
      price: 79999,
      originalPrice: 119999,
      nextBatch: 'Jan 25, 2025',
      seatsLeft: 25,
      rating: 4.9,
      students: 800,
      popular: false,
      description: 'Become a digital marketing expert with live campaigns and Google/Facebook certifications.',
      highlights: [
        '40+ hours/week intensive training',
        'Live campaign management',
        'Google & Facebook certifications',
        'Freelancing opportunities',
        'Average salary: ₹12 LPA'
      ],
      curriculum: [
        'Week 1-2: Digital Marketing Fundamentals & SEO',
        'Week 3-4: Paid Advertising (Google Ads, Facebook Ads)',
        'Week 5-6: Social Media & Content Marketing',
        'Week 7-8: Analytics, Optimization & Portfolio Building'
      ],
      outcomes: {
        placement: '92%',
        avgSalary: '₹12 LPA',
        topSalary: '₹22 LPA'
      }
    }
  ];

  const bootcampFeatures = [
    {
      icon: Zap,
      title: 'Intensive Learning',
      description: 'Full-time immersive experience with 40-60 hours per week of focused learning'
    },
    {
      icon: Users,
      title: 'Small Batch Size',
      description: 'Maximum 25 students per batch for personalized attention and mentorship'
    },
    {
      icon: Target,
      title: 'Job-Ready Skills',
      description: 'Curriculum designed with hiring managers to match industry requirements'
    },
    {
      icon: Award,
      title: 'Guaranteed Placement',
      description: '100% job placement guarantee or full money back within 6 months'
    }
  ];

  const schedule = [
    { time: '9:00 AM - 12:00 PM', activity: 'Live Lectures & Concepts', type: 'theory' },
    { time: '12:00 PM - 1:00 PM', activity: 'Lunch Break', type: 'break' },
    { time: '1:00 PM - 4:00 PM', activity: 'Hands-on Coding/Projects', type: 'practical' },
    { time: '4:00 PM - 4:30 PM', activity: 'Tea Break', type: 'break' },
    { time: '4:30 PM - 6:00 PM', activity: 'Doubt Resolution & Mentorship', type: 'support' },
    { time: '6:00 PM - 8:00 PM', activity: 'Self-study & Assignments', type: 'study' }
  ];

  const testimonials = [
    {
      name: 'Rahul Verma',
      role: 'Software Engineer at Google',
      bootcamp: 'Fullstack Bootcamp',
      salary: '₹28 LPA',
      quote: 'The bootcamp was intense but worth every minute. Landed my dream job at Google within 2 weeks of completion.',
      rating: 5
    },
    {
      name: 'Priya Singh',
      role: 'Data Scientist at Microsoft',
      bootcamp: 'Data Science Bootcamp',
      salary: '₹24 LPA',
      quote: 'From zero coding experience to Microsoft in 4 months. The mentorship and projects were game-changing.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      role: 'Digital Marketing Manager at Flipkart',
      bootcamp: 'Digital Marketing Bootcamp',
      salary: '₹18 LPA',
      quote: 'Learned more in 8 weeks than my entire MBA. Now managing multi-crore campaigns at Flipkart.',
      rating: 5
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
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge className="bg-primary-orange/20 text-primary-orange border-primary-orange/30 text-lg px-4 py-2">
                Intensive Career Transformation
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
                Tech
                <span className="block text-primary-orange">Bootcamps</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Fast-track your tech career with our intensive bootcamps. 
                Get job-ready in 8-16 weeks with guaranteed placement support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-orange">1,650+</div>
                <div className="text-sm text-gray-300">Bootcamp Graduates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success-green">96%</div>
                <div className="text-sm text-gray-300">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-orange">₹16 LPA</div>
                <div className="text-sm text-gray-300">Average Package</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success-green">8-16</div>
                <div className="text-sm text-gray-300">Weeks Duration</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bootcamp Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Why Choose Our Bootcamps?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intensive, focused, and results-driven approach to career transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bootcampFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-4 p-6 bg-secondary-beige/30 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-trust-blue/10 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-trust-blue" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bootcamp Programs */}
      <section className="section-padding bg-secondary-beige/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Our Bootcamp Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intensive programs designed to get you job-ready in the shortest time possible
            </p>
          </motion.div>

          <div className="space-y-8">
            {bootcamps.map((bootcamp, index) => (
              <motion.div
                key={bootcamp.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {bootcamp.popular && (
                  <div className="absolute -top-4 left-8 z-10">
                    <Badge className="bg-primary-orange text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`${bootcamp.popular ? 'ring-2 ring-primary-orange shadow-xl' : 'hover:shadow-lg'} transition-shadow duration-300`}>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Left Column - Basic Info */}
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-2xl font-poppins font-bold text-gray-900">{bootcamp.name}</h3>
                          <p className="text-gray-600 leading-relaxed">{bootcamp.description}</p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Duration:</span>
                            <span className="font-semibold text-trust-blue">{bootcamp.duration}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Format:</span>
                            <span className="font-semibold">{bootcamp.format}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Next Batch:</span>
                            <span className="font-semibold text-primary-orange">{bootcamp.nextBatch}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Seats Left:</span>
                            <Badge variant="outline" className="text-success-green border-success-green">
                              {bootcamp.seatsLeft} remaining
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="font-semibold">{bootcamp.rating}</span>
                            <span className="text-gray-600">({bootcamp.students}+ students)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-gray-900">₹{bootcamp.price.toLocaleString()}</span>
                            <span className="text-lg text-gray-500 line-through">₹{bootcamp.originalPrice.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Middle Column - Curriculum & Highlights */}
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">Key Highlights</h4>
                          <div className="space-y-2">
                            {bootcamp.highlights.map((highlight, highlightIndex) => (
                              <div key={highlightIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">Curriculum Overview</h4>
                          <div className="space-y-2">
                            {bootcamp.curriculum.map((week, weekIndex) => (
                              <div key={weekIndex} className="text-sm text-gray-700 p-2 bg-white rounded border-l-4 border-trust-blue">
                                {week}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Outcomes & CTA */}
                      <div className="space-y-6">
                        <div className="bg-secondary-beige/30 rounded-xl p-6 space-y-4">
                          <h4 className="font-semibold text-gray-900">Placement Outcomes</h4>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-success-green">{bootcamp.outcomes.placement}</div>
                              <div className="text-xs text-gray-600">Placement Rate</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-trust-blue">{bootcamp.outcomes.avgSalary}</div>
                              <div className="text-xs text-gray-600">Avg Package</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-primary-orange">{bootcamp.outcomes.topSalary}</div>
                              <div className="text-xs text-gray-600">Highest Package</div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Button className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white">
                            Apply Now
                          </Button>
                          <Button variant="outline" className="w-full">
                            Download Brochure
                          </Button>
                          <Button variant="ghost" className="w-full text-primary-orange">
                            Book Free Consultation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Typical Bootcamp Day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning with the perfect balance of theory, practice, and mentorship
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center space-x-6 p-4 rounded-xl ${
                    item.type === 'theory' ? 'bg-trust-blue/10' :
                    item.type === 'practical' ? 'bg-success-green/10' :
                    item.type === 'support' ? 'bg-primary-orange/10' :
                    item.type === 'study' ? 'bg-secondary-beige/30' :
                    'bg-gray-50'
                  }`}
                >
                  <div className="w-32 flex-shrink-0">
                    <span className="text-sm font-semibold text-gray-900">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-700">{item.activity}</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-current opacity-20"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-secondary-beige/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
              Bootcamp Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our bootcamp graduates who landed their dream jobs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-poppins font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-trust-blue font-semibold">{testimonial.role}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-success-green border-success-green">
                        {testimonial.bootcamp}
                      </Badge>
                      <span className="text-primary-orange font-bold">{testimonial.salary}</span>
                    </div>
                  </div>
                </div>
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