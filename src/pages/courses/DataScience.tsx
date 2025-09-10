'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Award, 
  BarChart, 
  Database, 
  Brain, 
  TrendingUp,
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

export default function DataSciencePage() {
  const courseHighlights = [
    { icon: Clock, text: '8 months comprehensive program' },
    { icon: Users, text: 'Industry expert mentors' },
    { icon: Award, text: '100% placement guarantee' },
    { icon: BarChart, text: '20+ ML/AI projects' }
  ];

  const curriculum = [
    {
      module: 'Python Programming',
      duration: '4 weeks',
      topics: ['Python Basics', 'Data Structures', 'OOP Concepts', 'Libraries (NumPy, Pandas)', 'Data Manipulation', 'File Handling'],
      icon: Database
    },
    {
      module: 'Statistics & Mathematics',
      duration: '6 weeks', 
      topics: ['Descriptive Statistics', 'Probability', 'Hypothesis Testing', 'Linear Algebra', 'Calculus Basics', 'Statistical Inference'],
      icon: BarChart
    },
    {
      module: 'Machine Learning',
      duration: '8 weeks',
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Feature Engineering', 'Model Selection', 'Cross Validation', 'Ensemble Methods'],
      icon: Brain
    },
    {
      module: 'Deep Learning & AI',
      duration: '6 weeks',
      topics: ['Neural Networks', 'CNN', 'RNN', 'NLP', 'Computer Vision', 'TensorFlow/PyTorch'],
      icon: TrendingUp
    },
    {
      module: 'Data Visualization',
      duration: '4 weeks',
      topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI', 'Dashboard Creation'],
      icon: BarChart
    },
    {
      module: 'Big Data & Cloud',
      duration: '4 weeks',
      topics: ['SQL/NoSQL', 'Spark', 'Hadoop', 'AWS/Azure', 'Data Pipelines', 'MLOps'],
      icon: Database
    }
  ];

  const projects = [
    {
      name: 'Customer Churn Prediction',
      description: 'Build ML model to predict customer churn using telecom data with 95% accuracy.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost']
    },
    {
      name: 'Stock Price Forecasting',
      description: 'Time series analysis and LSTM model for predicting stock prices with real market data.',
      tech: ['Python', 'TensorFlow', 'LSTM', 'Yahoo Finance API']
    },
    {
      name: 'Recommendation System',
      description: 'Netflix-style recommendation engine using collaborative filtering and deep learning.',
      tech: ['Python', 'TensorFlow', 'Collaborative Filtering', 'Matrix Factorization']
    },
    {
      name: 'Computer Vision App',
      description: 'Object detection and image classification system using CNN and OpenCV.',
      tech: ['Python', 'OpenCV', 'CNN', 'YOLO']
    }
  ];

  const faqs = [
    {
      question: 'Do I need a technical background for Data Science?',
      answer: 'No, our course is designed for beginners. We start with Python basics and gradually build up to advanced ML concepts. A basic understanding of mathematics helps but is not mandatory.'
    },
    {
      question: 'What is the average salary for Data Scientists?',
      answer: 'Our Data Science graduates get placed with an average package of ₹10-18 LPA. Senior roles can go up to ₹25+ LPA depending on experience and skills.'
    },
    {
      question: 'Which companies hire Data Scientists?',
      answer: 'All major companies need Data Scientists - from tech giants like Google, Microsoft to banks, healthcare, e-commerce, and consulting firms.'
    },
    {
      question: 'Will I learn both Machine Learning and Deep Learning?',
      answer: 'Yes, our comprehensive curriculum covers both ML and DL extensively with hands-on projects in computer vision, NLP, and predictive analytics.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-success-green via-trust-blue to-primary-orange text-white overflow-hidden">
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
                  <Badge className="bg-success-green/20 text-success-green border-success-green/30">
                    Highest Paying Career
                  </Badge>
                  <Badge className="bg-primary-orange/20 text-primary-orange border-primary-orange/30">
                    ₹18 LPA Average Package
                  </Badge>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
                  Master
                  <span className="block text-success-green">Data Science</span>
                  <span className="block text-primary-orange">& Artificial Intelligence</span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed">
                  Become an AI expert in 8 months. Learn Python, Machine Learning, Deep Learning, 
                  and work on real industry projects. Get placed at top tech companies.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {courseHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <highlight.icon className="w-5 h-5 text-success-green flex-shrink-0" />
                    <span className="text-sm">{highlight.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-success-green hover:bg-success-green/90 text-white text-lg px-8 py-4 flex items-center space-x-2">
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
                  <div className="text-2xl font-bold text-success-green">2,800+</div>
                  <div className="text-sm text-gray-300">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold text-primary-orange">4.8</span>
                  </div>
                  <div className="text-sm text-gray-300">Student Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-orange">₹15.2 LPA</div>
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
                    <div className="text-xl text-success-green font-semibold">January 20, 2025</div>
                    <div className="text-sm text-gray-300 mt-2">Only 12 seats remaining</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Course Fee:</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-white">₹99,999</span>
                        <div className="text-sm text-gray-400 line-through">₹1,49,999</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">EMI Starting:</span>
                      <span className="text-success-green font-semibold">₹8,333/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Duration:</span>
                      <span className="text-white font-semibold">8 months</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary-orange hover:bg-primary-orange/90 text-white text-lg py-4">
                    Apply Now - Save ₹50,000
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
              Comprehensive Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Python basics to advanced AI, master every aspect of Data Science
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
                  <div className="w-12 h-12 bg-success-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-6 h-6 text-success-green" />
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
              Industry-Level Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build impressive ML/AI projects that demonstrate your expertise to employers
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
                      <Badge key={techIndex} variant="outline" className="text-success-green border-success-green">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>View Project</span>
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