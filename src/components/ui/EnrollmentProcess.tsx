'use client';

import { motion } from 'framer-motion';
import { 
  UserPlus, 
  Calendar, 
  BookOpen, 
  Users, 
  Award, 
  Briefcase,
  CheckCircle,
  ArrowRight,
  Phone,
  CreditCard,
  FileText,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EnrollmentProcessProps {
  courseName: string;
  duration: string;
  nextBatch: string;
}

export default function EnrollmentProcess({ courseName, duration, nextBatch }: EnrollmentProcessProps) {
  const enrollmentSteps = [
    {
      step: 1,
      title: 'Free Career Counseling',
      description: 'Book a 30-minute session with our career experts to discuss your goals and course fit.',
      icon: Phone,
      duration: '30 minutes',
      action: 'Schedule Now',
      color: 'bg-trust-blue'
    },
    {
      step: 2,
      title: 'Free Demo Class',
      description: 'Attend a live demo session to experience our teaching methodology and course content.',
      icon: BookOpen,
      duration: '90 minutes',
      action: 'Book Demo',
      color: 'bg-success-green'
    },
    {
      step: 3,
      title: 'Application & Assessment',
      description: 'Complete your application and take a basic aptitude test to ensure course readiness.',
      icon: FileText,
      duration: '45 minutes',
      action: 'Apply Now',
      color: 'bg-primary-orange'
    },
    {
      step: 4,
      title: 'Fee Payment',
      description: 'Secure your seat with flexible payment options including EMI and scholarships.',
      icon: CreditCard,
      duration: '15 minutes',
      action: 'Pay Fees',
      color: 'bg-trust-blue'
    },
    {
      step: 5,
      title: 'Batch Confirmation',
      description: 'Receive batch details, course materials, and access to student community.',
      icon: Users,
      duration: 'Instant',
      action: 'Get Access',
      color: 'bg-success-green'
    },
    {
      step: 6,
      title: 'Course Kickoff',
      description: 'Join orientation session and begin your learning journey with dedicated mentors.',
      icon: Target,
      duration: '2 hours',
      action: 'Start Learning',
      color: 'bg-primary-orange'
    }
  ];

  const jobReadinessPath = [
    {
      phase: 'Foundation',
      weeks: '1-4',
      focus: 'Core Concepts & Fundamentals',
      activities: [
        'Master basic concepts and terminology',
        'Complete hands-on exercises and mini-projects',
        'Build strong foundation knowledge',
        'Regular assessments and feedback'
      ],
      outcome: 'Solid understanding of fundamentals'
    },
    {
      phase: 'Skill Building',
      weeks: '5-12',
      focus: 'Advanced Skills & Real Projects',
      activities: [
        'Work on industry-standard projects',
        'Learn advanced tools and frameworks',
        'Collaborate in team-based assignments',
        'Receive mentorship from industry experts'
      ],
      outcome: 'Portfolio of professional projects'
    },
    {
      phase: 'Specialization',
      weeks: '13-20',
      focus: 'Domain Expertise & Capstone',
      activities: [
        'Choose specialization track',
        'Complete capstone project',
        'Present to industry panel',
        'Receive detailed project feedback'
      ],
      outcome: 'Specialized expertise in chosen domain'
    },
    {
      phase: 'Job Preparation',
      weeks: '21-24',
      focus: 'Interview Prep & Placement',
      activities: [
        'Resume building and LinkedIn optimization',
        'Mock interviews with industry professionals',
        'Salary negotiation workshops',
        'Direct introductions to hiring partners'
      ],
      outcome: 'Job-ready with placement support'
    }
  ];

  const placementSupport = [
    {
      title: 'Resume & Portfolio Review',
      description: 'Professional review and optimization of your resume and project portfolio',
      icon: FileText
    },
    {
      title: 'Mock Interviews',
      description: 'Practice sessions with industry professionals and detailed feedback',
      icon: Users
    },
    {
      title: 'Company Introductions',
      description: 'Direct referrals to 1,600+ hiring partners based on your skills',
      icon: Briefcase
    },
    {
      title: 'Salary Negotiation',
      description: 'Guidance on market rates and negotiation strategies',
      icon: Award
    }
  ];

  return (
    <div className="space-y-16">
      {/* Enrollment Steps */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
            How to Enroll in {courseName}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple 6-step process to secure your seat and start your career transformation journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {enrollmentSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Step {step.step}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-poppins font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duration: {step.duration}</span>
                  </div>
                  
                  <Button className={`w-full ${step.color} hover:opacity-90 text-white`}>
                    {step.action}
                  </Button>
                </CardContent>
              </Card>
              
              {index < enrollmentSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-secondary-beige/30 rounded-2xl p-6">
          <p className="text-gray-700 mb-4">
            <strong>Next Batch Starts:</strong> {nextBatch} | <strong>Duration:</strong> {duration}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-success-green hover:bg-success-green/90 text-white text-lg px-8 py-3">
              Start Enrollment Process
            </Button>
            <Button variant="outline" className="text-lg px-8 py-3">
              Download Course Brochure
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Job Readiness Path */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
            Your Journey to Job Readiness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured learning path designed to make you industry-ready in {duration}
          </p>
        </div>

        <div className="space-y-6">
          {jobReadinessPath.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}
            >
              <div className="flex-1">
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-poppins font-bold text-gray-900">{phase.phase}</h3>
                        <Badge className="bg-primary-orange text-white">
                          Weeks {phase.weeks}
                        </Badge>
                      </div>
                      
                      <p className="text-lg font-semibold text-trust-blue">{phase.focus}</p>
                      
                      <div className="space-y-2">
                        {phase.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm font-semibold text-gray-900">
                          Expected Outcome: <span className="text-success-green">{phase.outcome}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-trust-blue to-primary-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Placement Support */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
            100% Placement Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive career services to ensure you land your dream job
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {placementSupport.map((support, index) => (
            <motion.div
              key={support.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center space-y-4 p-6 bg-secondary-beige/30 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-trust-blue/10 rounded-full flex items-center justify-center mx-auto">
                <support.icon className="w-8 h-8 text-trust-blue" />
              </div>
              <h3 className="text-lg font-poppins font-bold text-gray-900">{support.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{support.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-trust-blue to-primary-orange text-white rounded-2xl p-8">
          <h3 className="text-2xl font-poppins font-bold mb-4">Ready to Transform Your Career?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of successful graduates who landed jobs at top companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-success-green hover:bg-success-green/90 text-white text-lg px-8 py-3">
              Enroll Now - Next Batch: {nextBatch}
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-trust-blue text-lg px-8 py-3">
              Talk to Career Counselor
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}