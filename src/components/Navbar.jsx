import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import TextFlip from './TextFlip';
import { motion } from 'framer-motion';
import { useEnquiry } from '../context/EnquiryContext';
import LiquidGlassButton from './ui/LiquidGlassButton';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const timeoutRef = useRef(null);
  const { openEnquiry } = useEnquiry();
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsSidebarOpen(true);
  };

  const handleCloseMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsSidebarOpen(false);
    }, 200);
  };

  // On the Home page, the hero banner is dark video when unscrolled.
  // On all other pages (or when scrolled/menu open), the page background is light.
  const isHeroDark = isHomePage && !isScrolled && !isSidebarOpen;
  const textColor = isHeroDark ? 'text-white' : 'text-charcoal';
  const logoClass = isHeroDark ? 'brightness-100' : 'brightness-0';

  return (
    <>
      <motion.header 
        ref={headerRef} 
        onMouseEnter={() => {
          if (isSidebarOpen) handleOpenMenu();
        }}
        onMouseLeave={handleCloseMenu}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed w-full top-0 z-[100] transition-colors duration-500 flex flex-col`}
      >
        <nav className={`w-full transition-all duration-500 relative ${
          isSidebarOpen
            ? 'bg-alabaster border-transparent'
            : isScrolled
            ? 'bg-alabaster/75 backdrop-blur-2xl backdrop-saturate-200 border-b border-white/50 shadow-[0_10px_32px_0_rgba(0,0,0,0.05),inset_0_1px_1px_0_rgba(255,255,255,0.7)]'
            : isHomePage
            ? 'bg-transparent border-transparent'
            : 'bg-alabaster/80 backdrop-blur-xl backdrop-saturate-180 border-b border-white/40 shadow-[0_4px_20px_0_rgba(0,0,0,0.02)]'
        }`}>
          {/* Top Edge Specular Rim (VisionOS Glass Highlight) */}
          {(isScrolled || !isHomePage) && (
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          )}

          <div className="w-full px-4 sm:px-8 md:px-16">
            <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-16 sm:h-20' : 'h-18 sm:h-24'}`}>

              {/* Left side: Minimalist Menu with Hover Trigger */}
              <div 
                className="flex items-center flex-1 py-4"
                onMouseEnter={handleOpenMenu}
              >
                {/* 3-Line Staggered Animated Hamburger with Apple Glass Hover */}
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className={`group relative p-2.5 rounded-full transition-all duration-300 ${textColor} hover:bg-black/5 cursor-pointer`}
                  aria-label="Toggle Menu"
                >
                  <div className="w-6 sm:w-7 h-3 sm:h-3.5 flex flex-col justify-between">
                    {/* Top Line */}
                    <span
                      className={`block h-[1.5px] bg-current transform origin-center transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                        isSidebarOpen ? 'w-6 sm:w-7 translate-y-[5px] sm:translate-y-[6px] rotate-45' : 'w-full'
                      }`}
                    ></span>
                    
                    {/* Middle Line (Shorter) */}
                    <span
                      className={`block h-[1.5px] bg-current transform origin-center transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                        isSidebarOpen ? 'w-0 opacity-0' : 'w-[60%]'
                      }`}
                    ></span>
                    
                    {/* Bottom Line */}
                    <span
                      className={`block h-[1.5px] bg-current transform origin-center transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                        isSidebarOpen ? 'w-6 sm:w-7 -translate-y-[5.5px] sm:-translate-y-[6.5px] -rotate-45' : 'w-full'
                      }`}
                    ></span>
                  </div>
                </button>
              </div>

              {/* Center: Brand Logo */}
              <div className="flex-1 flex justify-center">
                <Link to="/" className="flex items-center group transition-opacity duration-300 hover:opacity-80">
                  <img
                    src="/Vayasa-Logo-Final-File-02.png"
                    alt="VAYASA"
                    className={`h-4 sm:h-5 md:h-7 w-auto object-contain transition-all duration-500 ${logoClass}`}
                  />
                </Link>
              </div>

              {/* Right side: Liquid Glass Action Button */}
              <div className="flex items-center justify-end flex-1 whitespace-nowrap shrink-0">
                <LiquidGlassButton
                  variant={isHeroDark ? 'dark' : 'light'}
                  size="md"
                  text="BOOK NOW"
                  onClick={() => openEnquiry()}
                />
              </div>



            </div>
          </div>
        </nav>
      </motion.header>



      {/* Invisible Overlay to close menu when clicking outside */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-[80] bg-black/20 backdrop-blur-xs cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Expanding Dropdown Menu with Hover Stay & Auto-Close on MouseLeave */}
      <div
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
        className={`fixed top-0 left-0 w-full h-screen md:h-auto md:min-h-[70vh] bg-alabaster text-charcoal z-[90] transform transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col pt-20 sm:pt-32 pb-24 md:pb-16 overflow-y-auto ${isSidebarOpen
          ? 'translate-x-0 md:translate-y-0'
          : '-translate-x-full md:translate-x-0 md:-translate-y-full'
          }`}
      >
        <div className="flex-grow flex flex-col md:flex-row px-6 sm:px-12 md:px-24 py-6 md:py-16">
          <div className="flex-1 flex flex-col justify-center">
            <ul className="space-y-5 sm:space-y-6 md:space-y-8">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services & Treatments', path: '/services' },
                { label: 'About Vayasa', path: '/about' },
                { label: 'Contact & Concierge', path: '/contact' },
              ].map((item, index) => (
                <li
                  key={item.label}
                  onClick={() => {
                    setIsSidebarOpen(false);
                    if (item.path) {
                      navigate(item.path);
                    } else if (item.action) {
                      item.action();
                    }
                  }}
                  className="overflow-hidden flex items-baseline space-x-3 md:space-x-8 group cursor-pointer"
                >
                  <span className="text-[10px] sm:text-xs md:text-sm font-light text-gray-400 tracking-[0.2em] transform transition-transform duration-500 group-hover:-translate-y-1">
                    0{index + 1}
                  </span>
                  <span className="text-2xl sm:text-4xl md:text-6xl font-extralight tracking-wide text-charcoal">
                    <TextFlip text={item.label} stagger />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 md:mt-0 md:w-1/3 flex flex-col justify-center space-y-8 sm:space-y-12 border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-16">
            <div className="space-y-2 sm:space-y-4">
              <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 sm:mb-6">Contact</h4>
              <a href="mailto:info@vayasaspa.com" className="block text-sm sm:text-lg font-light hover:text-black transition-colors">info@vayasaspa.com</a>
              <a href="tel:08062757161" className="block text-sm sm:text-lg font-light hover:text-black transition-colors">08062757161</a>
              <a href="https://maps.google.com/?q=Pee+Tee+Tower+GS+Road+Ulubari+Guwahati+Assam+781007" target="_blank" rel="noreferrer" className="block text-sm sm:text-lg font-light hover:text-black transition-colors">Pee Tee Tower, Ulubari, Guwahati</a>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 sm:mb-6">Socials</h4>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <a href="#" className="text-xs sm:text-sm font-light hover:text-black transition-colors">Instagram</a>
                <a href="#" className="text-xs sm:text-sm font-light hover:text-black transition-colors">Twitter</a>
                <a href="#" className="text-xs sm:text-sm font-light hover:text-black transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;