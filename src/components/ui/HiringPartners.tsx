'use client';

import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Award, MapPin, Briefcase } from 'lucide-react';

const HiringPartners = () => {
  const partnerLogos = [
    { name: 'Google', category: 'Tech Giant' },
    { name: 'Microsoft', category: 'Tech Giant' },
    { name: 'Amazon', category: 'E-commerce' },
    { name: 'Meta', category: 'Social Media' },
    { name: 'Netflix', category: 'Streaming' },
    { name: 'Uber', category: 'Mobility' },
    { name: 'Airbnb', category: 'Travel' },
    { name: 'Spotify', category: 'Music' },
    { name: 'Flipkart', category: 'E-commerce' },
    { name: 'Zomato', category: 'Food Tech' },
    { name: 'Paytm', category: 'Fintech' },
    { name: 'Swiggy', category: 'Food Tech' },
    { name: 'BYJU\'S', category: 'EdTech' },
    { name: 'Ola', category: 'Mobility' },
    { name: 'PhonePe', category: 'Fintech' },
    { name: 'Razorpay', category: 'Fintech' },
    { name: 'Freshworks', category: 'SaaS' },
    { name: 'Zoho', category: 'SaaS' },
    { name: 'InMobi', category: 'AdTech' },
    { name: 'Myntra', category: 'Fashion' },
    { name: 'BigBasket', category: 'Grocery' },
    { name: 'Nykaa', category: 'Beauty' },
    { name: 'PolicyBazaar', category: 'InsurTech' },
    { name: 'Cred', category: 'Fintech' }
  ];

  const placementStats = [
    { icon: Building2, value: '1600+', label: 'Hiring Partners', color: 'text-primary-orange' },
    { icon: Users, value: '9,500+', label: 'Students Placed', color: 'text-success-green' },
    { icon: TrendingUp, value: '₹12.5 LPA', label: 'Average Package', color: 'text-trust-blue' },
    { icon: Award, value: '95%', label: 'Placement Rate', color: 'text-primary-orange' },
  ];

  const jobRoles = [
    { role: 'Full Stack Developer', companies: '450+ companies', salary: '₹8-15 LPA' },
    { role: 'Data Scientist', companies: '320+ companies', salary: '₹10-18 LPA' },
    { role: 'Digital Marketing Manager', companies: '280+ companies', salary: '₹6-12 LPA' },
    { role: 'Product Manager', companies: '180+ companies', salary: '₹12-25 LPA' },
    { role: 'DevOps Engineer', companies: '220+ companies', salary: '₹9-16 LPA' },
    { role: 'UI/UX Designer', companies: '150+ companies', salary: '₹7-14 LPA' },
  ];

  return (
    <section className="section-padding bg-secondary-beige/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900">
            Our <span className="text-primary-orange">1600+</span> Hiring Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to Fortune 500 companies, our students get placed at India's top organizations. 
            Your dream job is waiting at one of these companies.
          </p>
        </motion.div>

        {/* Placement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {placementStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-poppins font-bold text-center text-gray-900 mb-8">
            Where Our Students Work
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-trust-blue to-primary-orange rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">{partner.name}</div>
                  <div className="text-xs text-gray-500">{partner.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Job Roles & Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
              Popular Job Roles & Salaries
            </h3>
            <p className="text-gray-600">
              Explore the career opportunities available after completing our courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobRoles.map((job, index) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary-beige/50 rounded-xl p-6 hover:bg-secondary-beige/70 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-poppins font-bold text-gray-900">{job.role}</h4>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{job.companies}</span>
                    </div>
                    <div className="text-success-green font-semibold">{job.salary}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-trust-blue to-primary-orange rounded-3xl p-8 text-white"
        >
          <h3 className="text-3xl font-poppins font-bold mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Get placed at your dream company with our proven career transformation program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-trust-blue hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
              Book Free Career Counseling
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-trust-blue font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
              View Placement Reports
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HiringPartners;