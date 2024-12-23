import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';

// ServiceCard Component
const ServiceCard = ({ title, icon, index }) => (
  <motion.div
    variants={fadeIn('', '', 0.1 * index, 1)}
    className="bg-tertiary border border-white p-6 rounded-lg w-[280px] md:w-[300px] shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <img
      src={icon}
      alt={title}
      className="w-16 h-16 object-contain mx-auto"
    />
    <h3 className="text-white font-bold text-lg text-center mt-4">{title}</h3>
  </motion.div>
);

// About Component
const About = () => (
  <section id="about" className="py-16 px-4 md:px-8 lg:px-16">
    {/* Header Section */}
    <motion.div variants={textVariant()} className="mb-12 text-center">
      <p className={`${styles.sectionSubText} text-secondary uppercase tracking-wider`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText} text-white font-bold`}>Overview</h2>
    </motion.div>

    {/* Description */}
    <motion.p
      variants={fadeIn('', '', 0.1, 1)}
      className="mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl mx-auto"
    >
      I am a passionate frontend developer with over 20 years of experience in building
      user-friendly and scalable web applications. My expertise lies in creating seamless
      and responsive interfaces using modern technologies like React and Tailwind CSS. I enjoy
      collaborating with teams to bring innovative ideas to life and ensure the best user experience.
    </motion.p>

    {/* Services Section */}
    <div className="mt-16 flex flex-wrap justify-center gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          index={index}
          title={service.title}
          icon={service.icon}
        />
      ))}
    </div>
  </section>
);

export default About;