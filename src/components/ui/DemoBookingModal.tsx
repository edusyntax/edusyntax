'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Mail, Phone, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackName: string;
  mode: 'Demo' | 'Brochure';
  brochureUrl?: string;
  autoOpen?: boolean;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  modeSelected: 'Online' | 'Offline' | 'Hybrid' | '';
};

const WHATSAPP_NUMBER = '917997245921';
const RETRIES = 2;

const getWhatsAppMessage = (mode: 'Demo' | 'Brochure', trackName: string) =>
  `Hi! I just ${mode === 'Demo' ? 'booked a demo' : 'downloaded the brochure'} for the ${trackName} track.`;

export default function DemoBookingModal({ isOpen, onClose, trackName, mode, brochureUrl }: DemoBookingModalProps) {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', modeSelected: '' });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', email: '', phone: '', modeSelected: '' });
      setIsSubmitted(false);
      setErrorMsg(null);
      setLoading(false);
    }
  }, [isOpen]);

  const handleInputChange = (field: keyof FormData, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'Invalid email';
    if (!formData.phone.match(/^\d{10}$/)) return 'Phone must be 10 digits';
    if (!formData.modeSelected) return 'Select learning mode';
    return null;
  };

  const submitForm = async (payload: any, retries = RETRIES): Promise<any> => {
    for (let i = 0; i <= retries; i++) {
      try {
        const res = await fetch('/api/book-demo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status}: ${text}`);
        }

        const data = await res.json();
        if (data.result !== 'success') throw new Error(data.msg || 'Submission failed!');
        return data;
      } catch (err) {
        if (i === retries) throw err;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const validationError = validateForm();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setLoading(true);
    const payload = { ...formData, course: trackName, leadType: mode };

    try {
      await submitForm(payload);
      setIsSubmitted(true);

      // Brochure download
      if (mode === 'Brochure' && brochureUrl) {
        const link = document.createElement('a');
        link.href = brochureUrl;
        link.download = `${trackName}_Brochure.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      // WhatsApp redirect after 1s
      setTimeout(() => {
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getWhatsAppMessage(mode, trackName))}`;
        window.open(whatsappUrl, '_blank');
      }, 1000);

      // Auto-close modal
      setTimeout(onClose, 2500);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Failed to submit form. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={loading ? undefined : onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-md mx-auto my-2"
          >
            <Card className="bg-white/95 backdrop-blur-md border border-white/10 shadow-2xl">
              <CardContent className="p-6 relative">
                <button onClick={loading ? undefined : onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100">
                  <X className="w-6 h-6 text-gray-500" />
                </button>

                {!isSubmitted ? (
                  <>
                    <div className="text-center space-y-2 mb-5">
                      <div className="w-20 h-20 bg-gradient-to-r from-trust-blue to-primary-orange rounded-full flex items-center justify-center mx-auto">
                        <Calendar className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{mode === 'Demo' ? 'Book Free Demo' : 'Download Brochure'}</h3>
                      <p className="text-gray-600 mt-2">Get personalized guidance for {trackName} track</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input id="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} className="pl-10 h-12 border-gray-200 focus:border-trust-blue focus:ring-trust-blue" required />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} className="pl-10 h-12 border-gray-200 focus:border-trust-blue focus:ring-trust-blue" required />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="phone">Phone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} className="pl-10 h-12 border-gray-200 focus:border-trust-blue focus:ring-trust-blue" required />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label>Preferred Mode</Label>
                        <Select value={formData.modeSelected} onValueChange={v => handleInputChange('modeSelected', v as FormData['modeSelected'])}>
                          <SelectTrigger className="h-12 border-gray-200 focus:border-trust-blue focus:ring-trust-blue"><SelectValue placeholder="Select learning mode" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Online">Online Live Classes</SelectItem>
                            <SelectItem value="Offline">Offline Classes</SelectItem>
                            <SelectItem value="Hybrid">Hybrid Mode</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
                      <Button type="submit" className="w-full h-12 bg-gradient-to-r from-trust-blue to-primary-orange text-white" disabled={loading}>
                        {loading ? 'Submitting...' : mode === 'Demo' ? 'Book Free Demo' : 'Download Brochure'}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8 space-y-6">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-success-green rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900">{mode === 'Demo' ? 'Demo Booked Successfully!' : 'Brochure Downloaded!'}</h3>
                    <p className="text-gray-600">Redirecting you to WhatsApp for instant support...</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
