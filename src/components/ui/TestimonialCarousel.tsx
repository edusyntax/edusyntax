'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Linkedin, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  content: string;
  previousRole?: string;
  salaryHike: string;
  course: string;
  linkedinUrl?: string;
  videoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Senior Full Stack Developer",
    company: "Google",
    image: "/api/placeholder/80/80",
    rating: 5,
    content: "Lovabale's Fullstack course completely transformed my career. The hands-on projects and mentorship helped me land my dream job at Google. The curriculum is industry-relevant and the support is exceptional.",
    previousRole: "Junior Developer",
    salaryHike: "400%",
    course: "Fullstack Development",
    linkedinUrl: "#",
    videoUrl: "#"
  },
  {
    id: 2,
    name: "Rahul Gupta",
    role: "Data Scientist",
    company: "Microsoft",
    image: "/api/placeholder/80/80",
    rating: 5,
    content: "The Data Science program at Lovabale is world-class. Real-world projects, industry mentors, and comprehensive curriculum helped me transition from a non-tech background to Microsoft.",
    previousRole: "Business Analyst",
    salaryHike: "350%",
    course: "Data Science",
    linkedinUrl: "#"
  },
  {
    id: 3,
    name: "Sneha Patel",
    role: "Digital Marketing Manager",
    company: "Meta",
    image: "/api/placeholder/80/80",
    rating: 5,
    content: "Amazing experience! The Digital Marketing bootcamp covered everything from SEO to paid advertising. The practical approach and live campaigns helped me secure a role at Meta.",
    previousRole: "Content Writer",
    salaryHike: "280%",
    course: "Digital Marketing",
    linkedinUrl: "#",
    videoUrl: "#"
  },
  {
    id: 4,
    name: "Arjun Singh",
    role: "Senior Software Engineer",
    company: "Amazon",
    image: "/api/placeholder/80/80",
    rating: 5,
    content: "The mentorship and career guidance at Lovabale is unmatched. They not only taught me technical skills but also prepared me for interviews. Now I'm working at Amazon!",
    previousRole: "Support Engineer",
    salaryHike: "320%",
    course: "Fullstack Development",
    linkedinUrl: "#"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-padding bg-secondary-beige/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who transformed their careers with Lovabale. 
            Real students, real results, real success stories.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Left Side - Content */}
                <div className="p-8 lg:p-12 space-y-6">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-primary-orange/30" />
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-accent-brown rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-poppins font-bold text-gray-900">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-600">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>

                    {/* Career Transformation */}
                    <div className="bg-secondary-beige/50 rounded-lg p-4 space-y-2">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Previous Role:</span>
                          <p className="font-semibold text-gray-900">
                            {testimonials[currentIndex].previousRole}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-500">Salary Hike:</span>
                          <p className="font-semibold text-primary-orange">
                            {testimonials[currentIndex].salaryHike}
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Course:</span>
                        <p className="font-semibold text-gray-900">
                          {testimonials[currentIndex].course}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4">
                      {testimonials[currentIndex].videoUrl && (
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Play className="w-4 h-4" />
                          <span>Watch Story</span>
                        </Button>
                      )}
                      {testimonials[currentIndex].linkedinUrl && (
                        <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                          <Linkedin className="w-4 h-4" />
                          <span>LinkedIn</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side - Visual */}
                <div className="bg-gradient-to-br from-primary-orange/10 to-accent-brown/10 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    {/* Large Avatar */}
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-orange to-accent-brown rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-4xl">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>

                    {/* Company Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
                      <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {testimonials[currentIndex].company.charAt(0)}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900">
                        {testimonials[currentIndex].company}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary-orange">
                          {testimonials[currentIndex].salaryHike}
                        </div>
                        <div className="text-sm text-gray-600">Salary Hike</div>
                      </div>
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary-orange">
                          {testimonials[currentIndex].rating}.0
                        </div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-orange transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-orange transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-orange w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <Button className="btn-primary text-lg px-8 py-4">
            Start Your Journey Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;