'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaBirthdayCake, FaWifi, FaLeaf } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="service-card relative overflow-hidden rounded-2xl p-6 bg-white/20 backdrop-blur-md border border-white/20 shadow-neumorphic transition-all duration-300 hover:shadow-neumorphic-hover"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-icon-container mb-4 p-4 inline-block rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm border border-white/30">
        <div className="text-3xl text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaCoffee />,
      title: "קפה איכותי",
      description: "אנו מציעים מגוון רחב של קפה איכותי מהטובים בעולם, טחון טרי במקום.",
    },
    {
      icon: <FaBirthdayCake />,
      title: "מאפים ביתיים",
      description: "מאפים טריים מדי יום, מוכנים במקום על ידי הקונדיטורים המקצועיים שלנו.",
    },
    {
      icon: <FaWifi />,
      title: "אווירה נעימה",
      description: "סביבה נעימה לעבודה או מפגשים חברתיים עם Wi-Fi חופשי ושקעי חשמל זמינים.",
    },
    {
      icon: <FaLeaf />,
      title: "אפשרויות טבעוניות",
      description: "מגוון אפשרויות טבעוניות וללא גלוטן, מותאמות לכל הצרכים התזונתיים.",
    },
  ];

  return (
    <section className="services-section py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dir-rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            השירותים שלנו
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            בבית הקפה שלנו אנו מציעים חוויה ייחודית המשלבת טעמים, אווירה וחדשנות
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;