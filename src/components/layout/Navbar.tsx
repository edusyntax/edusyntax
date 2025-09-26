'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
                <img src="/public/images/logo.jpeg" alt="Logo" className="w-full h-full object-cover"/>
              </div>
              <div>
                <h1 className="text-xl font-poppins font-bold text-accent-charcoal">Edusyntax</h1>
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
                </div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
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

            {/* Mobile Menu using Sheet */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#E98C3A] to-[#4A7C7A] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">ES</span>
                    </div>
                    <div>
                      <h1 className="text-lg font-bold text-[#2F3C3A]">EDU SYNTAX</h1>
                      <p className="text-xs text-[#A6A098] -mt-1">Learn Today. Build Tomorrow.</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium transition-colors hover:text-[#E98C3A]"
                      >
                        {item.name}
                      </a>
                      {item.dropdown && (
                        <div className="ml-4 space-y-2 mt-2">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block py-1 text-gray-600 hover:text-[#E98C3A] transition-colors text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="flex flex-col space-y-4 mt-8">
                  <Button variant="outline" className="border-[#4A7C7A] text-[#4A7C7A] hover:bg-[#4A7C7A] hover:text-white w-full">
                    Download Syllabus
                  </Button>
                  <Button className="bg-[#E98C3A] hover:bg-[#4A7C7A] text-white w-full">
                    Book Demo
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navbar;
