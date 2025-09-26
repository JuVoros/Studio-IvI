'use client'; 

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react'; 



export default function Publications() {
    const imageRef = useRef(null);
    const contentRef = useRef(null);
   const isImageInView = useInView(imageRef, { once: true, margin: "-50px" }); //true when element in view
    const isContentInView = useInView(contentRef, { once: true, margin: "-50px" });
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 py-20"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center pt-6 ">
        
        {/* Page Title */}
        <motion.div
          className="mb-12 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg pt-10">
            Featured In
          </h1>
          <p className="text-lg md:text-xl text-white text-opacity-90 drop-shadow-md max-w-2xl mx-auto">
            Recent publication features and design recognition
          </p>
        </motion.div>

        {/* Publication Feature */}
        <motion.div
        ref={contentRef}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={isContentInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

        <div className="max-w-md mx-auto">
          <a 
            href="https://www.dezeen.com/2025/06/01/art-gallery-supporting-corcoran-school-of-arts-design-schoolshows" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
            >
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 shadow-2xl group-hover:bg-opacity-15 group-hover:scale-105 transition-all duration-300">
              
              {/* Magazine Cover Image */}
              <div className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden mb-4 group-hover:shadow-xl transition-shadow duration-300 relative">
                <Image
                  src="/images/dezeen+design+magazine+logo.webp" 
                  alt="Dezeen Magazine - Design Feature Article"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority
                  />
              </div>

              {/* Publication Details */}
              <div className="text-center">
                <h2 className="text-xl font-bold text-white mb-2">
                  Dezeen Magazine
                </h2>
                <p className="text-white text-opacity-80 text-sm mb-3">
                  June 2025 Article
                </p>
                <div className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:text-opacity-80 transition-colors">
                  Read Article 
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </div>
          </a>
        </div>
                  </motion.div>
      </div>
    </main>
  );
}