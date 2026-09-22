import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEnquiry } from '../context/EnquiryContext';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

function Footer() {
  const containerRef = useRef(null);
  const { openEnquiry } = useEnquiry();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  const logoParallaxY = useTransform(scrollYProgress, [0, 1], ['15%', '35%']);

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-alabaster border-t border-charcoal/10 flex justify-center pt-12 sm:pt-16 md:pt-24 pb-28 md:pb-0 overflow-hidden"
    >
      <div className="w-full max-w-[1920px] px-6 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12 sm:mb-16 text-left">
          
          {/* Col 1: Brand & Detailed Address */}
          <div className="sm:col-span-2 flex flex-col items-start text-left">
            <Link to="/" className="inline-block mb-6 sm:mb-8 group">
              <img
                src="/Vayasa-Logo-Final-File-01.png"
                alt="VAYASA"
                className="h-5 sm:h-7 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
            
            {/* Full Verified Physical Address */}
            <div className="flex items-start space-x-2.5 max-w-md mb-3 text-charcoal/90">
              <MapPin className="w-4 h-4 text-charcoal/70 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-light leading-relaxed text-charcoal/85">
                3rd Floor, Pee Tee Tower, Opposite to Indian Oil Petrol Pump, G.S. Road, South Sarania, Ulubari, Guwahati – 781007, Assam
              </p>
            </div>

            {/* Timings */}
            <div className="flex items-center space-x-2.5 text-charcoal/80 mb-4">
              <Clock className="w-3.5 h-3.5 text-charcoal/60 shrink-0" />
              <p className="text-xs font-medium tracking-wide">
                10:00 AM — 09:00 PM · All Days Open
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href="https://maps.google.com/?q=Pee+Tee+Tower+GS+Road+Ulubari+Guwahati+Assam+781007"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] uppercase tracking-[0.18em] font-light text-charcoal/70 hover:text-charcoal border-b border-charcoal/30 hover:border-charcoal pb-0.5 transition-colors"
              >
                Get Directions ↗
              </a>
              <button
                onClick={() => openEnquiry()}
                className="text-[11px] uppercase tracking-[0.18em] font-light text-charcoal/70 hover:text-charcoal border-b border-charcoal/30 hover:border-charcoal pb-0.5 transition-colors cursor-pointer"
              >
                Book Appointment →
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col space-y-3 sm:space-y-4 text-left">
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-1 sm:mb-2">
              Explore
            </h4>
            <Link to="/" className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors inline-block">Home</Link>
            <Link to="/services" className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors inline-block">Services & Treatments</Link>
            <Link to="/about" className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors inline-block">About Vayasa</Link>
            <Link to="/contact" className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors inline-block">Contact & Concierge</Link>
            <button onClick={() => openEnquiry()} className="text-xs sm:text-sm font-light text-charcoal hover:text-gray-500 transition-colors inline-block text-left cursor-pointer bg-transparent border-none p-0">Online Booking</button>
          </div>

          {/* Col 3: Direct Concierge Contacts */}
          <div className="flex flex-col space-y-3 sm:space-y-4 text-left">
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-1 sm:mb-2">
              Contact
            </h4>
            <a href="mailto:info@vayasaspa.com" className="flex items-center space-x-2 text-xs sm:text-sm font-light text-charcoal hover:text-black transition-colors">
              <Mail className="w-3.5 h-3.5 text-charcoal/60" />
              <span>info@vayasaspa.com</span>
            </a>
            <a href="tel:08062757161" className="flex items-center space-x-2 text-xs sm:text-sm font-light text-charcoal hover:text-black transition-colors">
              <Phone className="w-3.5 h-3.5 text-charcoal/60" />
              <span>08062757161</span>
            </a>
            <div className="flex space-x-6 mt-3 sm:mt-4 pt-2 sm:pt-4">
              <a href="#" className="text-xs sm:text-sm font-light text-charcoal hover:text-black transition-colors inline-block">Instagram</a>
              <a href="#" className="text-xs sm:text-sm font-light text-charcoal hover:text-black transition-colors inline-block">Facebook</a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row justify-between items-center text-[11px] sm:text-xs text-gray-500 font-light tracking-wide mb-0 relative z-10 gap-4 sm:gap-0">
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
      </div>
    </footer>
  );
}

export default Footer;
