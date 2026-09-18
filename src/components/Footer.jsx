import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import RevealText from './RevealText';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEnquiry } from '../context/EnquiryContext';

function Footer() {
  const containerRef = useRef(null);
  const { openEnquiry } = useEnquiry();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  // Parallax transforms: smoothly glide up from -120px and fade in as user scrolls into the footer
  const y = useTransform(scrollYProgress, [0, 1], [-120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.4, 0.85, 1]);
  const logoParallaxY = useTransform(scrollYProgress, [0, 1], ['20%', '38%']);

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-alabaster border-t border-gray-300 flex justify-center pt-12 sm:pt-16 md:pt-24 pb-28 md:pb-0 overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="w-full max-w-[1920px] px-6 sm:px-8 md:px-12 will-change-transform"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12 sm:mb-16">
          <div className="sm:col-span-2">
            <Link to="/" className="inline-block mb-6 sm:mb-8 group">
              <img
                src="/Vayasa-Logo-Final-File-01.png"
                alt="VAYASA"
                className="h-5 sm:h-7 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
            <p className="max-w-sm text-xs sm:text-sm font-light leading-relaxed text-gray-600 mb-2">
              <RevealText>
                3rd Floor, Pee Tee Tower, Opposite to Indian Oil Petrol Pump, G.S. Road, South Sarania, Ulubari, Guwahati – 781007, Assam
              </RevealText>
            </p>
            <p className="text-xs text-gray-500 font-light">
              10:00 AM — 09:00 PM · All Days Open
            </p>
          </div>
          <div className="flex flex-col space-y-3 sm:space-y-4 text-left">
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 mb-1 sm:mb-2">
              <RevealText>Explore</RevealText>
            </h4>
            <Link to="/" className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors inline-block">Home</Link>
            <Link to="/services" className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors inline-block">Services & Treatments</Link>
            <Link to="/about" className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors inline-block">About Vayasa</Link>
            <Link to="/contact" className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors inline-block">Contact & Concierge</Link>
            <button onClick={() => openEnquiry()} className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors inline-block text-left cursor-pointer bg-transparent border-none p-0">Online Reservations</button>
          </div>
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 mb-1 sm:mb-2">
              <RevealText>Contact</RevealText>
            </h4>
            <a href="mailto:info@vayasaspa.com" className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors">info@vayasaspa.com</a>
            <a href="tel:08062757161" className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors">08062757161</a>
            <div className="flex space-x-6 mt-3 sm:mt-4 pt-2 sm:pt-4">
              <a href="#" className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors inline-block">Instagram</a>
              <a href="#" className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors inline-block">Facebook</a>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center text-[11px] sm:text-xs text-gray-500 font-light tracking-wide mb-0 relative z-10 gap-4 sm:gap-0">
          <p>&copy; 2026 Vayasa. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-charcoal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-charcoal transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Massive Bottom Faded Vayasa Logo with Parallax Offset */}
        <motion.div
          style={{
            y: logoParallaxY,
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 10%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 10%, transparent 80%)'
          }}
          className="w-full flex justify-center relative mt-2 sm:mt-4 md:mt-6 pointer-events-none select-none will-change-transform"
        >
          <img
            src="/Vayasa-Logo-Final-File-01.png"
            alt="VAYASA"
            className="w-full max-w-[95vw] md:max-w-[1500px] px-2 sm:px-8 h-auto object-contain opacity-85"
          />
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
