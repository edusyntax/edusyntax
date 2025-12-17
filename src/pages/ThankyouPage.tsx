'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Edusyntax | Thank You',
  description: 'Thanks for reaching out — Edusyntax will contact you soon.',
  robots: { index: false },
};

export default function ThankYouPage() {
  const router = useRouter();
  const [name] = useState('');
  const [email] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full bg-gray-50 rounded-2xl shadow-md p-8 md:p-12 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Thank you{ name ? `, ${name.split(' ')[0]}` : '' }!
          </h1>

          <p className="text-gray-600 mb-6">
            We've received your request. Our team will contact {email || 'you'} within 24–48 hours.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center gap-3 mt-4">
            <Button onClick={() => router.push('/courses')}>
              Explore Courses
            </Button>
            <Button variant="outline" onClick={() => router.push('/contact')}>
              Contact Admissions
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
