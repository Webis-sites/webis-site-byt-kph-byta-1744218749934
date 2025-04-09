'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  years?: number;
  imageSrc?: string;
  imageAlt?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'אודות בית קפה ביתא',
  subtitle = 'הסיפור שלנו',
  description = 'בית קפה ביתא נוסד מתוך אהבה לקפה איכותי ולחוויית אירוח מושלמת. אנו מאמינים שכוס קפה טובה היא הרבה יותר מסתם משקה - היא חוויה שיש לטפח. הצוות המקצועי שלנו מחויב להגיש לכם את הקפה הטוב ביותר, תוך שימוש בפולי קפה מובחרים והקפדה על כל פרט בתהליך ההכנה. בית הקפה שלנו מציע אווירה חמימה וביתית, המשלבת עיצוב מודרני עם נגיעות מסורתיות, כדי ליצור מקום שבו תוכלו להירגע, לעבוד או לבלות עם חברים.',
  years = 15,
  imageSrc = '/images/cafe.jpg',
  imageAlt = 'בית קפה ביתא - תמונת אווירה',
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      className="py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 dir-rtl"
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Image Container */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 h-[400px] md:h-[500px] relative order-2 lg:order-1"
          >
            <div className="glassmorphism-card w-full h-full rounded-2xl overflow-hidden relative">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]"></div>
            </div>
            
            {/* Floating accent element */}
            <div className="neumorphic-accent absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-secondary z-10"></div>
          </motion.div>

          {/* Content Container */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <motion.div variants={itemVariants} className="mb-2">
              <h3 className="text-primary font-medium text-lg">{subtitle}</h3>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">{title}</h2>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                {description}
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-6 md:gap-8"
            >
              <div className="neumorphic-card p-6 rounded-xl">
                <h4 className="text-2xl md:text-3xl font-bold text-primary mb-1">{years}+</h4>
                <p className="text-gray-600 dark:text-gray-400">שנות ניסיון</p>
              </div>
              
              <div className="neumorphic-card p-6 rounded-xl">
                <h4 className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</h4>
                <p className="text-gray-600 dark:text-gray-400">שביעות רצון</p>
              </div>
              
              <div className="neumorphic-card p-6 rounded-xl">
                <h4 className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</h4>
                <p className="text-gray-600 dark:text-gray-400">שירות מקצועי</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;