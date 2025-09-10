'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Courses', 
      href: '/courses',
      dropdown: [
        { name: 'Fullstack Development', href: '/courses/fullstack-development' },
        { name: 'Data Science', href: '/courses/data-science' },
        { name: 'Digital Marketing', href: '/courses/digital-marketing' }
      ]
    },
    { name: 'Bootcamps', href: '/bootcamps' },
    { name: 'Student Outcomes', href: '/outcomes' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
                {/* <span className="text-white font-bold text-xl">E</span> */}
                <img src="/public/images/logo.jpeg" alt="" className='w-100' />
              </div>
              <div>
                <h1 className="text-xl font-poppins font-bold text-accent-charcoal">
                  Edusyntax
                </h1>
                <p className="text-xs text-gray-600 -mt-1">Learn Today Build Tomorrow</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary-orange transition-colors duration-200 font-medium"
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-gray-700 hover:text-primary-orange hover:bg-secondary-beige/50 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Syllabus</span>
              </Button>
              <Button className="btn-primary flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Book Demo</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-orange transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="container-custom py-4">
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="block py-2 text-gray-700 hover:text-primary-orange transition-colors font-medium"
                      >
                        {item.name}
                      </a>
                      {item.dropdown && (
                        <div className="ml-4 space-y-2 mt-2">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block py-1 text-gray-600 hover:text-primary-orange transition-colors text-sm"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 space-y-3">
                    <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download Syllabus</span>
                    </Button>
                    <Button className="btn-primary w-full flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Book Demo</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navbar;