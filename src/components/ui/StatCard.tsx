'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

interface StatCardProps {
  value: string | number; // string or number is safer
  label: string;
  color?: string;
  delay?: number;
  borderClass?: string;
  shine?: boolean;
}

export default function StatCard({
  value,
  label,
  color = 'text-black',
  delay = 0,
  borderClass = 'border-white/30 dark:border-gray-600',
  shine = false,
}: StatCardProps) {
  return (
    <motion.div
      className={`relative text-center space-y-2 p-4 bg-white/40 backdrop-blur-xl rounded-2xl border ${borderClass} overflow-hidden shadow-sm`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {shine && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-white/40 animate-shine pointer-events-none rounded-2xl" />
      )}
      <motion.div
        className={`text-2xl font-bold ${color}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay, type: 'spring' }}
      >
        {value}
      </motion.div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </motion.div>
  );
}
