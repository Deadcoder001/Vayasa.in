import React from 'react';
import { Link } from 'react-router-dom';
import { useEnquiry } from '../context/EnquiryContext';
import { Mail, Phone } from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

function Footer() {
  const { openEnquiry } = useEnquiry();

  return (
    <footer className="relative w-full bg-alabaster flex justify-center pt-16 md:pt-24 pb-12 overflow-hidden text-charcoal border-t border-charcoal/10">
      <div className="w-full max-w-[1920px] px-4 sm:px-6 md:px-12 relative z-10">

        {/* Main Grid: Responsive column layout aligned with page grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 text-left">

          {/* Col 1: Brand & Detailed Address */}
          <div className="lg:col-span-5 flex flex-col items-start text-left pr-0 lg:pr-6">
            <Link to="/" className="inline-block mb-6 group">
              <img
                src="/Vayasa-Logo-Final-File-01.png"
                alt="VAYASA"
                className="h-6 sm:h-7 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>

            <p className="text-[15px] font-light leading-relaxed text-charcoal/80 mb-5 max-w-md">
              3rd Floor, Pee Tee Tower, Opposite to Indian Oil Petrol Pump, G.S. Road, South Sarania, Ulubari, Guwahati – 781007, Assam
            </p>

            <div className="flex items-center space-x-2.5 text-[14px] font-light text-charcoal/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600/80" />
              <span>10:00 AM — 09:00 PM · All Days Open</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 flex flex-col space-y-3.5 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-charcoal/40 font-medium mb-1">
              Explore
            </h4>
            <Link to="/" className="text-[15px] font-light text-charcoal/90 hover:text-black transition-colors inline-block">Home</Link>
            <Link to="/services" className="text-[15px] font-light text-charcoal/90 hover:text-black transition-colors inline-block">Services & Treatments</Link>
            <Link to="/about" className="text-[15px] font-light text-charcoal/90 hover:text-black transition-colors inline-block">About Vayasa</Link>
            <Link to="/contact" className="text-[15px] font-light text-charcoal/90 hover:text-black transition-colors inline-block">Contact & Concierge</Link>
            <button onClick={() => openEnquiry()} className="text-[15px] font-light text-charcoal/90 hover:text-black transition-colors inline-block text-left cursor-pointer bg-transparent border-none p-0">Online Reservations</button>
          </div>

          {/* Col 3: Direct Concierge Contacts */}
          <div className="lg:col-span-4 flex flex-col space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-charcoal/40 font-medium mb-1">
              Contact & Concierge
            </h4>
            <a href="mailto:info@vayasawellness.com" className="flex items-center space-x-3 text-[15px] font-light text-charcoal/90 hover:text-black transition-colors">
              <Mail className="w-4 h-4 text-charcoal/70 stroke-[1.4]" />
              <span>info@vayasawellness.com</span>
            </a>
            <a href="tel:+918062757161" className="flex items-center space-x-3 text-[15px] font-light text-charcoal/90 hover:text-black transition-colors">
              <Phone className="w-4 h-4 text-charcoal/70 stroke-[1.4]" />
              <span>+91 80627 57161</span>
            </a>

            {/* Socials with vertical divider */}
            <div className="flex items-center space-x-4 pt-1">
              <a href="#" className="flex items-center space-x-2 text-[14px] font-light text-charcoal/80 hover:text-black transition-colors">
                <InstagramIcon className="w-4 h-4 text-charcoal" />
                <span>Instagram</span>
              </a>
              <div className="w-[1px] h-3.5 bg-charcoal/20"></div>
              <a href="#" className="flex items-center space-x-2 text-[14px] font-light text-charcoal/80 hover:text-black transition-colors">
                <FacebookIcon className="w-4 h-4 text-charcoal" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>


        {/* Bottom Section: Aligned on desktop to match outer text edges */}
        <div className="pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between text-[13px] text-charcoal/50 font-light tracking-wide gap-4">
          <p className="text-center sm:text-left">&copy; 2026 Vayasa. All rights reserved.</p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-charcoal transition-colors">Privacy Policy</a>
            <span className="text-charcoal/20">|</span>
            <a href="#" className="hover:text-charcoal transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Faded Vayasa Logo with Tagline */}
        <div className="mt-10 flex flex-col items-center opacity-30 pointer-events-none select-none">
          <img
            src="/Vayasa-Logo-Final-File-01.png"
            alt="VAYASA"
            className="h-5 sm:h-6 w-auto object-contain mb-4"
          />
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-medium text-center">
            Wellness For A More Meaningful You
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;