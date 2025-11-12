'use client';

import Link from "next/link"
import Image from "next/image"
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
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      text: "Professional, innovative, and incredibly talented. The office redesign has improved our team's productivity significantly.",
    },
    {
      name: "Emily Rodriguez",
      role: "Property Developer",
      text: "Working with Studio IvI was seamless. They delivered exceptional results on time and within budget.",
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
     <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]">
  {/* Background */}
  <div className="absolute inset-0">
    <Image
      src="/images/OfficePic4.jpeg"
      alt="Studio background"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  </div>

  {/*  HERO CONTENT WRAPPER (keeps logo + text stacked together) */}
  <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">

    {/*  LOGO (NOT animated, always visible) */}
    <div className="w-[450px] sm:w-[600px] md:w-[750px] lg:w-[900px] mb-6">
      <Image
        src="/images/Transparent Logo.png"
        alt="Studio IvI Logo"
        width={3000}
        height={3000}
        priority
        className="w-full h-auto object-contain drop-shadow-2xl invert brightness-200"

      />
    </div>

    {/*  TEXT + CTA (still animated) */}
    <motion.div
      style={{ opacity: heroOpacity, scale: heroScale }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="text-base sm:text-lg md:text-xl text-white mb-6 drop-shadow-md max-w-2xl mx-auto"
        variants={itemVariants}
      >
        Transforming spaces through innovative interior architecture and design
      </motion.p>

      <Link href="/projects">
        <motion.button
          className="px-6 py-3 sm:px-8 sm:py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold rounded-lg shadow-lg border border-white border-opacity-30"
          variants={itemVariants}
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          Explore My Work
        </motion.button>
      </Link>
    </motion.div>
  </div>
</section>
<div>

      {/* FEATURED PROJECTS SECTION
      <section 
      ref={featuredRef}
      className="relative py-12 sm:py-16 md:py-20"
      style={{
        backgroundImage:"url('/images/OfficePic1.jpeg')"
        }}
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
          </section>  */}

    {/* SERVICES SECTION above */}
          </div>
<section 
  ref={servicesRef}
  className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#0F0F10] via-[#1A1A1C] to-[#0E0E0F] overflow-hidden"
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

    <motion.div
      className="text-center mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        My Services
      </h2>
      <p className="text-white text-opacity-80 max-w-2xl mx-auto text-sm sm:text-base">
        Comprehensive interior architecture solutions tailored to your needs
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="text-center"
          variants={cardVariants}
          initial="hidden"
          animate={isServicesInView ? "visible" : "hidden"}
          transition={{ delay: index * 0.15 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-4">{service.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-white/80 text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<div>

{/* TESTIMONIALS SECTION beelow 
<section 
ref={reviewsRef}
className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-black to-gray-900"
>
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<motion.div
className="text-center mb-12 sm:mb-16"
initial={{ opacity: 0, y: 30 }}
animate={isReviewsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
transition={{ duration: 0.6 }}
>
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
Client Testimonials
</h2>
<p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base">
What our clients say about working with Studio IvI
</p>
</motion.div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{testimonials.map((testimonial, index) => (
  <motion.div
  key={index}
  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
  variants={cardVariants}
  initial="hidden"
  animate={isReviewsInView ? "visible" : "hidden"}
  transition={{ delay: index * 0.1 }}
  >
  <p className="text-white mb-4 italic text-sm sm:text-base">&ldquo;{testimonial.text}&rdquo;</p>
  <p className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</p>
  <p className="text-white/70 text-xs sm:text-sm">{testimonial.role}</p>
  </motion.div>
  ))}
  </div>
  </div>
  </section>
  */}
  </div>

       <section 
        ref={ctaRef}
        className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
      >

        {/* Hero callback image with different positioning */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom" // Changed from bg-center to bg-bottom for different view
          style={{
            backgroundImage: "url('/images/OfficePic4.jpeg')",
          }}
        />
        
        {/* Vignette effect for dramatic finish */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black/80" />
        
        {/* Additional center spotlight effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70" />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
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
              Let&apos;s collaborate to create environments that inspire and elevate your daily experience.
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