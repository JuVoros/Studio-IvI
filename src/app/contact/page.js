'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const cardsRef = useRef(null);
  const infoRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-50px" });
  const isInfoInView = useInView(infoRef, { once: true, margin: "-50px" });

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 py-20"
      style={{
      backgroundImage: "url('/images/OfficePic3.jpeg')"
      }}
    >

   {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto pt-8">

      {/* Page Title with anims */}
        <motion.div 
          className="text-center mb-12 pt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg pt-10">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-black drop-shadow-md max-w-2xl mx-auto">
            Ready to start your next project? Let&apos;s connect and discuss how we can work together.
          </p>
        </motion.div>

        {/* Contact Cards with staggered animation */}
        <motion.div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            {
              icon: "📧",
              title: "Email",
              desc: "Send me a message anytime",
              link: "mailto:your.email@example.com",
              linkLabel: "Teo@TheStudioIvi.com"
            },
            {
              icon: "📱",
              title: "Phone",
              desc: "Call or text me directly",
              link: "tel:+12066963932",
              linkLabel: "+1 (206) 696-3932"
            },
            {
              icon: "💼",
              title: "LinkedIn",
              desc: "Connect with me professionally",
              link: "https://www.linkedin.com/in/teoivirank",
              linkLabel: "View Profile"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-black bg-opacity-20 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 shadow-xl hover:bg-opacity-15 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-black mb-4 text-sm">{item.desc}</p>
              <a 
                href={item.link}
                target={item.title === "LinkedIn" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary bg-opacity-20 text-white font-medium rounded-lg border border-primary border-opacity-30 hover:bg-opacity-30 transition-all duration-200 text-sm"
              >
                {item.linkLabel}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section with animation */}
        <motion.div 
          ref={infoRef}
          className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20 shadow-xl text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Let&apos;s Work Together
          </motion.h3>
          
          <motion.p 
            className="text-white mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            I&apos;m always interested in new opportunities and exciting projects. 
            Whether you have a specific project in mind or just want to connect, 
            I&apos;d love to hear from you.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a 
              href="mailto:your.email@example.com"
              className="px-8 py-3 bg-primary bg-opacity-20 text-white font-medium rounded-lg border border-primary border-opacity-30 hover:bg-opacity-30 transition-all duration-200"
            >
              Send Message
            </a>
            <a 
              href="/projects"
              className="px-8 py-3 bg-transparent text-white font-medium rounded-lg border border-secondary border-opacity-50 hover:bg-secondary hover:bg-opacity-10 transition-all duration-200"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}