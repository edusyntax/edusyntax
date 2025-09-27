'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Users, Star, Code, Database, Server, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DemoBookingModal from './DemoBookingModal';

const tracks = [
  {
    id: 'mern',
    title: 'MERN Stack',
    subtitle: 'MongoDB • Express • React • Node.js',
    tagline: 'Most Popular Track',
    enrolled: '2,847 Enrolled',
    rating: 4.9,
    icon: Code,
    gradient: 'from-trust-blue to-success-green',
    popular: true,
    features: ['Real-time Applications', 'Modern UI/UX', 'Scalable Architecture'],
    brochureUrl: '/brochures/mern.pdf',
  },
  {
    id: 'python',
    title: 'Python FullStack',
    subtitle: 'Django • Flask • PostgreSQL • React',
    tagline: 'Enterprise Ready',
    enrolled: '1,923 Enrolled',
    rating: 4.8,
    icon: Database,
    gradient: 'from-success-green to-primary-orange',
    features: ['Data Science Integration', 'AI/ML Ready', 'Enterprise Solutions'],
    brochureUrl: '/brochures/python.pdf',
  },
  {
    id: 'java',
    title: 'Java FullStack',
    subtitle: 'Spring Boot • Microservices • Angular',
    tagline: 'High Demand Track',
    enrolled: '1,456 Enrolled',
    rating: 4.9,
    icon: Server,
    gradient: 'from-primary-orange to-trust-blue',
    features: ['Enterprise Applications', 'Microservices', 'High Performance'],
    brochureUrl: '/brochures/java.pdf',
  },
  {
    id: 'ai',
    title: 'FullStack Ai',
    subtitle: 'Fullstack + Machine Learning',
    tagline: 'Future Ready',
    enrolled: '987 Enrolled',
    rating: 5.0,
    icon: Brain,
    gradient: 'from-trust-blue to-primary-orange',
    features: ['AI Integration', 'Machine Learning', 'Next-Gen Development'],
    brochureUrl: '/brochures/ai.pdf',
  }
];

export default function InteractiveTracksSelector() {
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [leadMode, setLeadMode] = useState<'Demo' | 'Brochure'>('Demo');
  const [selectedBrochure, setSelectedBrochure] = useState<string | null>(null);

  const openModal = (track: string, mode: 'Demo' | 'Brochure', brochureUrl?: string) => {
    setSelectedTrack(track);
    setLeadMode(mode);
    setSelectedBrochure(brochureUrl || null);
    setModalOpen(true);
  };

  return (
    <section className=" backdrop-blur-xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-gradient-to-r from-trust-blue via-success-green to-primary-orange"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 2px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-12"
        >
          <Badge className="bg-gradient-to-r from-primary-orange to-trust-blue text-white px-6 py-2">
            Choose Your Path
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-gray-900">
            Popular Fullstack Tracks
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Master the technology stack that aligns with your career goals and industry demands
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredTrack(track.id)}
              onHoverEnd={() => setHoveredTrack(null)}
            >
              <Card
                className={`h-full bg-white/80 backdrop-blur-xl border border-gray-200/30 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl group cursor-pointer overflow-hidden ${
                  hoveredTrack === track.id ? 'scale-105 shadow-2xl' : ''
                }`}
              >
                <CardContent className="p-8 h-full flex flex-col relative">
                  {/* Gradient Overlay on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <track.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    {track.popular && (
                      <Badge className="bg-primary-orange text-white text-xs px-3 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4 relative z-10">
                    <div>
                      <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-2">
                        {track.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {track.subtitle}
                      </p>
                      <Badge
                        variant="outline"
                        className="text-success-green border-success-green mb-4"
                      >
                        {track.tagline}
                      </Badge>
                    </div>

                    {/* Stats */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{track.enrolled}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-gray-700 font-semibold">{track.rating}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        {track.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            className="flex items-center space-x-2 text-xs text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${track.gradient}`}
                            />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-6 border-t border-gray-100 relative z-10">
                  <Button
  className={`w-full bg-gradient-to-r ${track.gradient} text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group`}
  onClick={() => openModal(track.title, 'Demo', track.brochureUrl)}
>
  <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  <span>Book Free Demo</span>
</Button>


                    <Button
                      variant="outline"
                      className="w-full border-2 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white text-lg py-4 font-semibold rounded-xl flex items-center justify-center space-x-2 group"
                      onClick={() => openModal(track.title, 'Brochure', track.brochureUrl)}
                    >
                      <Download className="w-5 h-5 group-hover:animate-bounce" />
                      <span>Download Brochure</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <DemoBookingModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            trackName={selectedTrack}
            mode={leadMode}
            brochureUrl={selectedBrochure || undefined}
          />
        </div>
      </div>
    </section>
  );
}
