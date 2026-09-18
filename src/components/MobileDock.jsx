import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Volume2, VolumeX, Calendar } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import { useEnquiry } from '../context/EnquiryContext';

export default function MobileDock() {
  const { isPlaying, toggleAudio } = useAudio();
  const { openEnquiry } = useEnquiry();
  const mouseX = useMotionValue(Infinity);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const dockItems = [
    {
      title: 'Book Ritual',
      icon: Calendar,
      onClick: () => openEnquiry(),
      type: 'button',
      active: true
    },
    {
      title: 'Call Us',
      icon: Phone,
      href: 'tel:08062757161',
      type: 'link'
    },
    {
      title: 'Email',
      icon: Mail,
      href: 'mailto:info@vayasaspa.com',
      type: 'link'
    },
    {
      title: 'Location',
      icon: MapPin,
      href: 'https://maps.google.com/?q=Pee+Tee+Tower+GS+Road+Ulubari+Guwahati+Assam+781007',
      target: '_blank',
      type: 'link'
    },
    {
      title: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/918062757161',
      target: '_blank',
      type: 'link'
    },
    ...(isHomePage ? [{
      title: isPlaying ? 'Mute Sound' : 'Play Sound',
      icon: isPlaying ? Volume2 : VolumeX,
      onClick: toggleAudio,
      type: 'button',
      active: isPlaying
    }] : [])
  ];

  return (
    <div className="md:hidden fixed bottom-4 inset-x-0 z-[9000] flex justify-center pointer-events-none px-4">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        onTouchMove={(e) => {
          if (e.touches.length > 0) {
            mouseX.set(e.touches[0].pageX);
          }
        }}
        onTouchEnd={() => mouseX.set(Infinity)}
        initial={{ y: 60, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          scale: isScrolled ? 0.92 : 1,
          paddingTop: isScrolled ? '6px' : '10px',
          paddingBottom: isScrolled ? '6px' : '10px',
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center gap-2.5 px-3.5 rounded-full bg-alabaster/85 border border-charcoal/15 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-all duration-300"
      >
        {dockItems.map((item) => (
          <DockItem key={item.title} mouseX={mouseX} item={item} isScrolled={isScrolled} />
        ))}
      </motion.div>
    </div>
  );
}

function DockItem({ mouseX, item, isScrolled }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const baseSize = isScrolled ? 38 : 42;
  const maxSize = isScrolled ? 48 : 52;
  const widthSync = useTransform(distance, [-100, 0, 100], [baseSize, maxSize, baseSize]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 15 });

  const IconComponent = item.icon;

  if (item.type === 'button') {
    return (
      <motion.button
        ref={ref}
        onClick={item.onClick}
        style={{ width, height: width }}
        className={`relative flex items-center justify-center rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-charcoal/10 active:scale-90 transition-all select-none cursor-pointer ${
          item.active ? 'bg-charcoal text-pearl' : 'bg-white/90 text-charcoal'
        }`}
        aria-label={item.title}
      >
        <IconComponent className="w-4 h-4" strokeWidth={1.5} />
      </motion.button>
    );
  }

  return (
    <motion.a
      ref={ref}
      href={item.href}
      target={item.target || '_self'}
      rel="noopener noreferrer"
      style={{ width, height: width }}
      className="relative flex items-center justify-center rounded-full bg-white/90 text-charcoal shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-charcoal/10 active:scale-90 transition-all select-none"
      aria-label={item.title}
    >
      <IconComponent className="w-4 h-4" strokeWidth={1.5} />
    </motion.a>
  );
}
