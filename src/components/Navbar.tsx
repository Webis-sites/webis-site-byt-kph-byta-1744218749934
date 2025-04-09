'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import clsx from 'clsx';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'דף הבית' },
  { href: '/menu', label: 'תפריט' },
  { href: '/about', label: 'אודות' },
  { href: '/gallery', label: 'גלריה' },
  { href: '/contact', label: 'צור קשר' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={clsx(
        'sticky top-0 w-full z-50 transition-all duration-300 rtl',
        scrolled
          ? 'bg-opacity-80 backdrop-blur-md shadow-neumorphic-navbar'
          : 'bg-opacity-95'
      )}
    >
      <div className="glassmorphism-navbar">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <div className="relative h-12 w-12 mr-2">
                <Image
                  src="/logo.png"
                  alt="בית קפה ביתא לוגו"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="neumorphic-text text-primary font-bold text-xl">
                בית קפה ביתא
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-4 py-2 mx-1 rounded-xl text-base font-medium transition-all duration-300 neumorphic-link',
                  pathname === link.href
                    ? 'text-primary neumorphic-link-active'
                    : 'text-gray-700 hover:text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            className="md:hidden neumorphic-button p-2 rounded-full"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FiX className="h-6 w-6 text-primary" />
            ) : (
              <FiMenu className="h-6 w-6 text-primary" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glassmorphism-menu overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      'px-4 py-3 rounded-xl text-base font-medium text-center transition-all duration-300 neumorphic-mobile-link',
                      pathname === link.href
                        ? 'text-primary neumorphic-mobile-link-active'
                        : 'text-gray-700 hover:text-primary'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;