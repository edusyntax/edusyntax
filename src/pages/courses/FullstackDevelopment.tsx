'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Users, 
  Clock, 
  Award, 
  CheckCircle,
  Star,
  Calendar,
  MapPin,
  Phone,
  Download,
  ArrowRight,
  BookOpen,
  Target,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/ui/StickyCTA';
import EnrollmentProcess from '@/components/ui/EnrollmentProcess';
import { useEffect } from 'react';

export default function FullstackDevelopmentPage() {
  useEffect(() => {
    document.title = 'Fullstack Development Course | Lovabale - MERN Stack Training with 100% Placement';
  }, []);

  const courseHighlights = [
    { icon: Clock, text: '6 Months Intensive Training', color: 'text-trust-blue' },
    { icon: Users, text: '1:8 Mentor to Student Ratio', color: 'text-success-green' },
    { icon: Award, text: '100% Placement Guarantee', color: 'text-primary-orange' },
    { icon: Briefcase, text: 'Average Package: ₹8-15 LPA', color: 'text-trust-blue' }
  ];

  const curriculum = [
    {
      module: 'Frontend Development',
      duration: '8 weeks',
      topics: [
        'HTML5, CSS3, JavaScript ES6+',
        'React.js with Hooks and Context API',
        'Redux for State Management',
        'Responsive Design & Bootstrap/Tailwind CSS',
        'Version Control with Git & GitHub',
        'Frontend Testing with Jest'
      ]
    },
    {
      module: 'Backend Development',
      duration: '8 weeks',
      topics: [
        'Node.js and Express.js Framework',
        'RESTful API Design and Development',
        'Authentication & Authorization (JWT)',
        'Database Design and MongoDB',
        'SQL Databases (PostgreSQL/MySQL)',
        'Server-side Validation and Security'
      ]
    },
    {
      module: 'Full-Stack Integration',
      duration: '4 weeks',
      topics: [
        'Connecting Frontend with Backend APIs',
        'Real-time Communication with Socket.io',
        'File Upload and Image Processing',
        'Payment Gateway Integration',
        'Error Handling and Debugging',
        'Performance Optimization'
      ]
    },
    {
      module: 'DevOps & Deployment',
      duration: '4 weeks',
      topics: [
        'Cloud Platforms (AWS, Heroku, Netlify)',
        'Docker Containerization',
        'CI/CD Pipelines',
        'Domain and SSL Configuration',
        'Monitoring and Analytics',
        'Production Best Practices'
      ]
    }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with payment integration, user authentication, and admin panel',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      complexity: 'Advanced'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Real-time social media management tool with analytics and post scheduling',
      tech: ['React', 'Express', 'Socket.io', 'Chart.js'],
      complexity: 'Intermediate'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with team features and file sharing',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS S3'],
      complexity: 'Advanced'
    },
    {
      title: 'Real Estate Portal',
      description: 'Property listing platform with search filters, map integration, and user reviews',
      tech: ['React', 'Express', 'MongoDB', 'Google Maps API'],
      complexity: 'Advanced'
    }
  ];

  const mentors = [
    {
      name: 'Rajesh Kumar',
      role: 'Senior Full Stack Developer',
      company: 'Ex-Google',
      experience: '8+ years',
      expertise: 'MERN Stack, System Design',
      image: '/api/placeholder/100/100'
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Frontend Developer',
      company: 'Ex-Microsoft',
      experience: '6+ years',
      expertise: 'React, TypeScript, UI/UX',
      image: '/api/placeholder/100/100'
    },
    {
      name: 'Amit Singh',
      role: 'Backend Architect',
      company: 'Ex-Amazon',
      experience: '10+ years',
      expertise: 'Node.js, AWS, Microservices',
      image: '/api/placeholder/100/100'
    }
  ];

  const faqs = [
    {
      question: 'Do I need prior programming experience?',
      answer: 'No prior experience required! We start from basics and gradually build up to advanced concepts. However, basic computer literacy and logical thinking are helpful.'
    },
    {
      question: 'What is the class schedule?',
      answer: 'Classes are held Monday to Friday, 7:00 PM to 9:00 PM IST. Weekend sessions include project work and doubt clearing (10:00 AM to 1:00 PM).'
    },
    {
      question: 'Will I get placement assistance?',
      answer: 'Yes! We provide 100% placement assistance including resume building, mock interviews, and direct referrals to 1,600+ hiring partners.'
    },
    {
      question: 'What if I miss a class?',
      answer: 'All classes are recorded and available for lifetime access. You can also attend makeup sessions or join the next batch for specific topics.'
    },
    {
      question: 'Is there any certification provided?',
      answer: 'Yes, you\'ll receive an industry-recognized certificate upon successful completion of the course and projects.'
    },
    {
      question: 'What is the refund policy?',
      answer: 'We have a no-refund policy once enrolled. However, we encourage you to attend our free demo class to make an informed decision.'
    }
  ];

  const testimonials = [
    {
      name: 'Rohit Gupta',
      role: 'Full Stack Developer at Flipkart',
      salary: '₹14 LPA',
      quote: 'The course structure is amazing. From zero coding knowledge to landing a job at Flipkart in 7 months!',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Sneha Patel',
      role: 'Software Engineer at Zomato',
      salary: '₹12 LPA',
      quote: 'Mentors are industry experts who provide real-world insights. The projects helped me build a strong portfolio.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Vikash Kumar',
      role: 'Frontend Developer at Paytm',
      salary: '₹10 LPA',
      quote: 'Best investment I made for my career. The placement support team is incredible!',
      rating: 5,
      image: '/api/placeholder/60/60'
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-success-green/20 text-success-green border-success-green/30 text-sm px-3 py-1">
                  Most Popular Course
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
                  Full Stack
                  <span className="block text-success-green">Development</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Master MERN Stack development and become a job-ready full stack developer 
                  in just 6 months with our industry-focused curriculum.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {courseHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <highlight.icon className={`w-5 h-5 ${highlight.color}`} />
                    <span className="text-sm text-gray-200">{highlight.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-success-green hover:bg-success-green/90 text-white text-lg px-8 py-4 flex items-center space-x-2">
                  <span>Enroll Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-trust-blue text-lg px-8 py-4 flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Syllabus</span>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-poppins font-bold text-white">Course Details</h3>
                  <div className="space-y-3 text-gray-200">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-semibold">6 Months</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span className="font-semibold">Live Online</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Next Batch:</span>
                      <span className="font-semibold text-success-green">Jan 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Course Fee:</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-success-green">₹89,999</span>
                        <div className="text-sm line-through text-gray-400">₹1,29,999</div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>EMI Option:</span>
                      <span className="font-semibold">₹7,500/month</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <Badge className="bg-primary-orange text-white w-full justify-center py-2">
                      12 Seats Left - Limited Time Offer
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Tabs defaultValue="curriculum" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-12">
                <TabsTrigger value="curriculum" className="text-sm">Curriculum</TabsTrigger>
                <TabsTrigger value="projects" className="text-sm">Projects</TabsTrigger>
                <TabsTrigger value="mentors" className="text-sm">Mentors</TabsTrigger>
                <TabsTrigger value="faqs" className="text-sm">FAQs</TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="curriculum" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
                  Comprehensive Curriculum
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Industry-designed curriculum covering everything from basics to advanced full stack development
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
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl font-poppins font-bold text-gray-900">
                            {module.module}
                          </CardTitle>
                          <Badge variant="outline" className="text-trust-blue border-trust-blue">
                            {module.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{topic}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
                  Real-World Projects
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Build a portfolio of industry-standard projects that showcase your skills to employers
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-poppins font-bold text-gray-900">{project.title}</h3>
                          <Badge className={`${
                            project.complexity === 'Advanced' ? 'bg-primary-orange' : 'bg-success-green'
                          } text-white`}>
                            {project.complexity}
                          </Badge>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-trust-blue border-trust-blue">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mentors" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
                  Learn from Industry Experts
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get mentored by professionals from top tech companies with years of industry experience
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {mentors.map((mentor, index) => (
                  <motion.div
                    key={mentor.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                          <Users className="w-10 h-10 text-gray-400" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-poppins font-bold text-gray-900">{mentor.name}</h3>
                          <p className="text-trust-blue font-semibold">{mentor.role}</p>
                          <p className="text-gray-600">{mentor.company}</p>
                          <Badge variant="outline" className="text-success-green border-success-green">
                            {mentor.experience}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{mentor.expertise}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get answers to common questions about our Full Stack Development course
                </p>
              </motion.div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-poppins font-bold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="section-padding bg-secondary-beige/20">
        <div className="container-custom">
          <EnrollmentProcess 
            courseName="Full Stack Development"
            duration="6 months"
            nextBatch="Jan 15, 2025"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who transformed their careers with our Full Stack Development course
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
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-poppins font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-trust-blue text-sm">{testimonial.role}</p>
                        <p className="text-success-green font-semibold text-sm">{testimonial.salary}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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