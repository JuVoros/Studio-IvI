'use client';

import Link from "next/link"
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Mouse tracking for floating words
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Floating words data
  const floatingWords = [
    { text: "DESIGN", x: 10, y: 20, size: "text-4xl", opacity: 0.1 },
    { text: "CREATIVE", x: 80, y: 15, size: "text-3xl", opacity: 0.08 },
    { text: "STUDIO", x: 15, y: 70, size: "text-5xl", opacity: 0.12 },
    { text: "ARCHITECTURE", x: 70, y: 80, size: "text-2xl", opacity: 0.09 }
  ];

  return (
    <main 
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')",
        backgroundColor: '#0a0a0a', // Fallback color
      }}
    >
      {/* Floating Background Words */}
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
            x: mousePosition.x * (index % 2 === 0 ? 1 : -1) * 0.5,
            y: mousePosition.y * (index % 2 === 0 ? 1 : -1) * 0.3,
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

      {/* Geometric Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-white border-opacity-10 rotate-45 z-10"
        style={{ y: y1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content */}
      <motion.div 
        className="text-center relative z-20"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          Welcome to My Portfolio
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-white mb-8 drop-shadow-md max-w-2xl mx-auto px-4"
          variants={itemVariants}
        >
          Exploring technology, creativity, and innovation
        </motion.p>
        
        {/* Button */}
          <Link href="/projects">
        <motion.button 
          className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold rounded-lg shadow-lg border border-white border-opacity-30 relative overflow-hidden group"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(255, 255, 255, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
          <span className="relative z-10">Explore My Work</span>
          
          {/* Button hover effect */}
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
    </main>
  );
}