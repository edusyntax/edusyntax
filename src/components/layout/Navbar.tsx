"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

// Static CTA button classes for Tailwind
const ctaButtonClasses = {
  call: `relative overflow-hidden flex items-center space-x-2 px-4 py-2 rounded-md font-medium
         text-white bg-gradient-to-r from-orange-500 to-green-500 shadow-lg
         before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r
         before:from-transparent before:via-white/40 before:to-transparent
         before:animate-shine before:rounded-md`,
  whatsapp: `relative overflow-hidden flex items-center space-x-2 px-4 py-2 rounded-md font-medium
             text-white bg-gradient-to-r from-orange-400 to-pink-500 shadow-lg
             before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r
             before:from-transparent before:via-white/40 before:to-transparent
             before:animate-shine before:rounded-md`,
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Courses",
      href: "#",
      dropdown: [
        { name: "Fullstack Development", href: "/courses/fullstack-development" },
        { name: "Data Science", href: "/courses/data-science" },
        { name: "AWS Cloud", href: "/courses/aws-cloud" },
      ],
    },
    { name: "Success Stories", href: "/successstories" },
    { name: "Bootcamps", href: "/bootcamps" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
                <img src="/images/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-poppins font-bold text-accent-charcoal">Edusyntax</h1>
                <p className="text-xs text-gray-600 -mt-1">Learn Today Build Tomorrow</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary-orange transition-colors duration-150 font-medium"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.name ? null : item.name)
                    }
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
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
                          className="block px-4 py-2 text-gray-700 hover:text-primary-orange hover:bg-secondary-beige/50 transition-colors duration-150"
                          onClick={() => setActiveDropdown(null)}
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
              <Button
                className={ctaButtonClasses.call}
                onClick={() => (window.location.href = "tel:+917997245921")}
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </Button>
              <Button
                className={ctaButtonClasses.whatsapp}
                onClick={() => window.open("https://wa.me/917997245921", "_blank")}
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </div>

            {/* Mobile WhatsApp + Menu */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                className={ctaButtonClasses.whatsapp}
                onClick={() => window.open("https://wa.me/917997245921", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </Button>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="xl" className="p-2">
                    <Menu className="h-20 w-10" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-white">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#E98C3A] to-[#4A7C7A] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">ES</span>
                      </div>
                      <div>
                        <h1 className="text-lg font-bold text-[#2F3C3A]">EDUSYNTAX</h1>
                        <p className="text-xs text-[#A6A098] -mt-1">Learn Today. Build Tomorrow.</p>
                      </div>
                    </div>
                    <SheetClose asChild>
                      <button className="p-2 rounded-md hover:bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </SheetClose>
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

                  {/* Mobile CTA inside Sheet */}
                  <div className="flex flex-col space-y-4 mt-8">
                    <Button
                      className={ctaButtonClasses.call}
                      onClick={() => (window.location.href = "tel:+917997245921")}
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Us</span>
                    </Button>
                    <Button
                      className={ctaButtonClasses.whatsapp}
                      onClick={() => window.open("https://wa.me/917997245921", "_blank")}
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-3 lg:h-5"></div>
    </>
  );
};

export default Navbar;
