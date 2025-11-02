'use client'; //client comp marker 

import { motion, useInView } from 'framer-motion'; //animation lib
import { useRef } from 'react'; //ref to DOM
import Link from 'next/link';

export default function PageTemplate() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, margin: "-50px" }); //true when element in view
  const isContentInView = useInView(contentRef, { once: true, margin: "-50px" });

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 py-20"
      style={{
        backgroundImage: "url('/images/OfficePic1.jpeg')"
      }}
    >
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto pt-8">
        
        {/* Page Title with animation */}
        <motion.div 
          className="text-center mb-12 pt-10 bt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}   
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg pt-10">
            ABOUT ME
          </h1>
          {/*<p className="text-lg md:text-xl text-white drop-shadow-md max-w-3xl mx-auto">
            Crafting spaces that inspire and transform through innovative design and architectural excellence.
          </p>
          */}
        </motion.div>

        {/* Centered Image Rectangle with reveal animation */}
        <motion.div 
          ref={imageRef}
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={isImageInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 border border-white border-opacity-20 shadow-xl hover:bg-opacity-15 transition-all duration-300">
            <div 
              className="w-80 h-60 bg-cover bg-center rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('/images/Portrait.jpeg')"
              }}
            >
              <div className="w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Container with staggered animations */}
        <motion.div 
          ref={contentRef}
          className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white border-opacity-20 shadow-xl hover:bg-opacity-15 transition-all duration-300">
            <div className="text-center">
              
              {/* Card Title */}
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Interior Design & Architecture
              </motion.h3>
              
              {/* Card Content */}
              <motion.p 
                className="text-white text-opacity-90 mb-8 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Hi, I’m Teo — a Seattle-based interior designer who loves turning ordinary rooms into spaces that feel effortlessly pulled together. My interest in design started at a very young age. I went to an alternative school where hands-on learning and creating was encouraged. In elementary school, I spent many afternoons felting soap bars, knitting socks, sewing onesies, and whittling gnomes. On the weekends, my mom and I scanned neighborhoods for open houses. I have always known that my life was meant to be filled with beautiful spaces and curated, lovingly created things. I love helping clients make the most of what they already have while adding thoughtful, personal touches. My process is collaborative, with an emphasis on understanding how you use your space. Whether it&apos;s an office or a home, I strive to create spaces that feel good to walk into every day. 
              </motion.p>

              {/* Bullet Points Grid with staggered animation 
              <motion.div 
                className="grid md:grid-cols-2 gap-6 mb-8"
                initial={{ opacity: 0 }}
                animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  {
                    title: "Residential Spaces",
                    description: "Creating personalized living environments that reflect your lifestyle and aesthetic preferences."
                  },
                  {
                    title: "Commercial Design", 
                    description: "Designing functional work environments that inspire productivity and creativity."
                  },
                  {
                    title: "Sustainable Solutions",
                    description: "Integrating eco-friendly materials and energy-efficient systems into every project."
                  },
                  {
                    title: "Space Optimization",
                    description: "Maximizing functionality through thoughtful layout and innovative storage solutions."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="group text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full mt-3 group-hover:bg-opacity-100 transition-all duration-300"></div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                        <p className="text-white text-opacity-80 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              */}
              {/* Card Buttons with animation */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <Link href="/projects">
                <motion.button 

                  className="px-8 py-3 bg-white bg-opacity-20 text-white font-medium rounded-lg border border-white border-opacity-30 transition-all duration-200"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.button>
                </Link>
                <Link href="/contact">
                <motion.button 
                  className="px-8 py-3 bg-transparent text-white font-medium rounded-lg border border-white border-opacity-30 transition-all duration-200"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  >
                  Get In Touch
                </motion.button>
                  </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}