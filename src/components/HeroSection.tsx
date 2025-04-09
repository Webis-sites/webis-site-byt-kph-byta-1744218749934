"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="בית קפה ביתא"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl mx-auto text-center">
          {/* Glass Card Container */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-neumorphic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-light mb-2 text-shadow-sm">
                בית קפה ביתא
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6"
            >
              בית קפה מוביל בישראל
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/reservation" passHref>
                <button 
                  className="neumorphic-button bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl transition-all duration-300 hover:shadow-neumorphic-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  aria-label="קבע תור עכשיו"
                >
                  קבע תור עכשיו
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 backdrop-blur-lg border border-white/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
      />
      
      <motion.div 
        className="absolute top-20 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-secondary/40 to-primary/40 backdrop-blur-lg border border-white/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
      />
    </section>
  );
};

export default HeroSection;