'use client';

import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Refs for scroll-triggered animations
  const featuredRef = useRef(null);
  const reviewsRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Check if sections are in view
  const isFeaturedInView = useInView(featuredRef, { once: true, margin: "-50px" });
  const isReviewsInView = useInView(reviewsRef, { once: true, margin: "-50px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-50px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-50px" });
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.8]);

  // Mouse tracking for floating words (disabled on mobile for performance)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) { // Only track on desktop
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2 // Reduced for mobile
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Reduced movement for mobile
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Faster for mobile
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 }, // Less dramatic for mobile
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Floating words data - responsive sizes
  const floatingWords = [
    { text: "DESIGN", x: 10, y: 20, size: "text-2xl sm:text-3xl md:text-4xl", opacity: 0.08 },
    { text: "CREATIVE", x: 80, y: 15, size: "text-xl sm:text-2xl md:text-3xl", opacity: 0.06 },
    { text: "STUDIO", x: 15, y: 70, size: "text-3xl sm:text-4xl md:text-5xl", opacity: 0.1 },
    { text: "ARCHITECTURE", x: 70, y: 80, size: "text-lg sm:text-xl md:text-2xl", opacity: 0.07 }
  ];

  // Sample data
  const featuredProjects = [
    {
      title: "Modern Residential Design",
      description: "A stunning contemporary home featuring clean lines and sustainable materials.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Commercial Office Space",
      description: "Innovative workspace design promoting collaboration and creativity.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "The attention to detail and creative vision exceeded all our expectations. Our space has been completely transformed.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      text: "Professional, innovative, and incredibly talented. The office redesign has improved our team's productivity significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Property Developer",
      text: "Working with Studio IvI was seamless. They delivered exceptional results on time and within budget.",
      rating: 5
    }
  ];

  const services = [
    {
      icon: "🏠",
      title: "Residential Design",
      description: "Custom home interiors that reflect your personal style and enhance daily living."
    },
    {
      icon: "🏢",
      title: "Commercial Spaces",
      description: "Functional yet inspiring work environments that boost productivity and morale."
    },
    {
      icon: "🌱",
      title: "Sustainable Solutions",
      description: "Eco-conscious designs using sustainable materials and energy-efficient systems."
    }
  ];

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section 
        className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')",
          backgroundColor: '#0a0a0a',
        }}
      >
        {/* Floating Background Words - Hidden on small screens for performance */}
        <div className="hidden sm:block">
          {floatingWords.map((word, index) => (
            <motion.div
              key={index}
              className={`absolute ${word.size} font-bold text-white select-none pointer-events-none z-10`}
              style={{
                left: `${word.x}%`,
                top: `${word.y}%`,
                opacity: word.opacity,
              }}
              animate={{
                x: mousePosition.x * (index % 2 === 0 ? 1 : -1) * 0.3, // Reduced movement
                y: mousePosition.y * (index % 2 === 0 ? 1 : -1) * 0.2,
              }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 100,
              }}
            >
              {word.text}
            </motion.div>
          ))}
        </div>

        {/* Geometric Elements - Responsive sizing */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-white border-opacity-10 rotate-45 z-10"
          style={{ y: y1 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Hero Content */}
        <motion.div 
          className="text-center relative z-20 px-4 max-w-4xl mx-auto"
          style={{ opacity: heroOpacity, scale: heroScale }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-2xl sm:text-2 md:text-6xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg leading-tight"
            variants={itemVariants}
          >
            Studio IvI
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 drop-shadow-md max-w-2xl mx-auto leading-relaxed px-2"
            variants={itemVariants}
          >
            Transforming spaces through innovative interior architecture and design
          </motion.p>
          
          <Link href="/projects">
            <motion.button 
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold text-sm sm:text-base rounded-lg shadow-lg border border-white border-opacity-30 relative overflow-hidden group w-full sm:w-auto"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, // Reduced scale for mobile
                backgroundColor: "rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Explore My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                whileHover={{ 
                  opacity: 0.1,
                  x: [-100, 100],
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white bg-opacity-70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section 
        ref={featuredRef}
        className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Featured Projects
            </h2>
            <p className="text-white text-opacity-80 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Discover some of our most impactful interior design transformations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl overflow-hidden border border-white border-opacity-20 group hover:bg-opacity-15 transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                animate={isFeaturedInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.15 }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white text-opacity-80 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section 
        ref={reviewsRef}
        className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isReviewsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Client Testimonials
            </h2>
            <p className="text-white text-opacity-80 max-w-2xl mx-auto text-sm sm:text-base px-2">
              What our clients say about working with Studio IvI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                animate={isReviewsInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base sm:text-lg">★</span>
                  ))}
                </div>
                <p className="text-white text-opacity-90 mb-3 sm:mb-4 italic text-sm sm:text-base leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-white text-opacity-70 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section 
        ref={servicesRef}
        className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Our Services
            </h2>
            <p className="text-white text-opacity-80 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Comprehensive interior architecture solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={cardVariants}
                initial="hidden"
                animate={isServicesInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.15 }}
              >
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 group-hover:scale-102 sm:group-hover:scale-105">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white text-opacity-80 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section 
        ref={ctaRef}
        className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-t from-gray-900 to-black"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              variants={itemVariants}
            >
              Ready to Transform Your Space?
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-white text-opacity-80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
              variants={itemVariants}
            >
              Let's collaborate to create environments that inspire and elevate your daily experience.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              variants={itemVariants}
            >
              <Link href="/contact">
                <motion.button 
                  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold text-sm sm:text-base rounded-lg shadow-lg border border-white border-opacity-30"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button 
                  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-transparent text-white font-semibold text-sm sm:text-base rounded-lg border border-white border-opacity-50 hover:bg-white hover:bg-opacity-10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Portfolio
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}