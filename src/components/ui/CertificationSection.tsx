'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Building2 } from 'lucide-react';

export default function CertificationSection() {
  const partnerLogos = [
    'HPLIFE',"HARVARD", 'META', 
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-gray-900">
          Industry-Recognized Certification
        </h2>
        <p className="text-sm text-gray-600 max-w-3xl mx-auto">
          Earn a valuable certificate that's recognized by top companies worldwide
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Certificate Image instead of Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <img
                src="/images/cp.jpg" // 👉 replace with your actual image path
                alt="Certificate Preview"
                className="w-full h-auto object-cover"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Certificate Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-poppins font-bold text-gray-900">
              What You Get
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Industry-Recognized Certificate</h4>
                  <p className="text-gray-600 text-sm">Valued by 1600+ hiring partner companies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Digital Badge</h4>
                  <p className="text-gray-600 text-sm">Add to LinkedIn, resume, and portfolio</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Skill Verification</h4>
                  <p className="text-gray-600 text-sm">Proof of hands-on project completion</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Lifetime Access</h4>
                  <p className="text-gray-600 text-sm">Alumni network and continued support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Recognition */}
          <Card className="bg-white/60 backdrop-blur-xl border border-white/20">
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-trust-blue" />
                <h4 className="font-semibold text-gray-900">Recognized By</h4>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {partnerLogos.map((partner, index) => (
                  <Badge key={index} variant="outline" className="text-center justify-center py-2 text-trust-blue border-trust-blue/30">
                    {partner}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                100+ companies recognize our certification program
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
