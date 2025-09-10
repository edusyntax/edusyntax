'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Star, Award, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: string;
  rating: string;
  level: string;
  price: string;
  originalPrice?: string;
  features: string[];
  nextBatch: string;
  image?: string;
  popular?: boolean;
}

const CourseCard = ({
  title,
  description,
  duration,
  students,
  rating,
  level,
  price,
  originalPrice,
  features,
  nextBatch,
  image,
  popular = false
}: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${
        popular ? 'border-primary-orange' : 'border-gray-100'
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-primary-orange text-white px-3 py-1">
            Most Popular
          </Badge>
        </div>
      )}

      {/* Course Image/Icon */}
      <div className="relative h-48 bg-gradient-to-br from-primary-orange/10 to-accent-brown/10 flex items-center justify-center">
        <div className="w-20 h-20 bg-primary-orange rounded-2xl flex items-center justify-center">
          <span className="text-3xl font-bold text-white">
            {title.charAt(0)}
          </span>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-4 left-4 w-8 h-8 bg-accent-brown/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 right-4 w-6 h-6 bg-primary-orange/30 rounded-full"
        />
      </div>

      <div className="p-6 space-y-4">
        {/* Course Title & Level */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-accent-brown border-accent-brown">
              {level}
            </Badge>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{rating}</span>
            </div>
          </div>
          <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Course Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{students} enrolled</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
              <Award className="w-4 h-4 text-primary-orange" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Next Batch */}
        <div className="flex items-center space-x-2 text-sm bg-secondary-beige/50 rounded-lg p-3">
          <Calendar className="w-4 h-4 text-primary-orange" />
          <span className="text-gray-700">
            <strong>Next Batch:</strong> {nextBatch}
          </span>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">₹{price}</span>
              {originalPrice && (
                <span className="text-lg text-gray-500 line-through">₹{originalPrice}</span>
              )}
            </div>
            <p className="text-xs text-gray-500">EMI starting ₹{Math.round(parseInt(price) / 12)}/month</p>
          </div>
          <div className="text-right">
            <Badge className="bg-green-100 text-green-800 mb-1">
              Limited Seats
            </Badge>
            <p className="text-xs text-gray-500">Only 5 left</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3 pt-4">
          <Button className="w-full btn-primary flex items-center justify-center space-x-2 group">
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="w-full">
            Download Syllabus
          </Button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-primary-orange/5 to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

export default CourseCard;