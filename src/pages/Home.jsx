import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Magnetic from '../components/Magnetic';
import RevealText from '../components/RevealText';
import AnimeRevealBlock from '../components/AnimeRevealBlock';
import TextFlip from '../components/TextFlip';
import InfiniteMarquee from '../components/InfiniteMarquee';
import InteractivePhilosophy from '../components/InteractivePhilosophy';
import EditorialStats from '../components/EditorialStats';
import CustomerReviews from '../components/CustomerReviews';
import FAQSection from '../components/FAQSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEnquiry } from '../context/EnquiryContext';
import LiquidGlassButton from '../components/ui/LiquidGlassButton';



const salonAndBeautyTreatments = [
  {
    id: 1,
    slug: 'hair-care-and-styling-services',
    eyebrow: 'HAIR CARE & STYLING',
    title: 'Hair Care & Styling Services',
    desc: 'Transform your look with expert hair care, styling, conditioning, and precision cuts that bring out your natural beauty and hair vitality.',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    slug: 'hair-straightening',
    eyebrow: 'SMOOTHING RITUAL',
    title: 'Hair Straightening',
    desc: 'Get sleek, smooth, and frizz-free hair with expert straightening treatments for a flawless, long-lasting silk finish.',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    slug: 'keratin-treatment',
    eyebrow: 'PROTEIN THERAPY',
    title: 'Keratin Treatment',
    desc: 'Restore your hair’s natural shine and strength with our professional restorative keratin protein infusion for smooth, manageable resilience.',
    img: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    slug: 'luxury-manicures',
    eyebrow: 'NAIL ARTISTRY',
    title: 'Manicures & Pedicures',
    desc: 'Treat yourself to luxurious manicures and pedicures with organic exfoliation, shaping, delicate cuticle care, and soothing mineral foot baths.',
    img: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    slug: 'bespoke-bridal-makeup',
    eyebrow: 'BRIDAL ARTISTRY',
    title: 'Bespoke Bridal Makeup',
    desc: 'Look and feel stunning on your special day with bridal makeup services customized to suit your unique aesthetic, tone, and celebration vision.',
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    slug: 'tailored-facial-treatment',
    eyebrow: 'SKIN ILLUMINATION',
    title: 'Facial & Radiance D-TAN',
    desc: 'Deeply nourish, hydrate, and eliminate pigmentation with tailored organic facials and botanical D-TAN packs for instant, illuminated glow.',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop'
  }
];

function Home() {
  const videoRef = useRef(null);
  const carouselRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { openEnquiry } = useEnquiry();
  const navigate = useNavigate();

  // Parallax calculations
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full bg-alabaster flex flex-col items-center">
      {/* Hero Section with Cinematic HUD */}
      <section className="relative w-full h-screen overflow-hidden flex justify-center items-center">
        <motion.video
          ref={videoRef}
          src="/SPApromo.webm"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover origin-bottom"
          style={{ y: yHero, scale: scaleHero }}
        />

        {/* Subtle Dark Vignette for contrast */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none"></div>

      </section>

      {/* Introduction Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-16 md:py-24 flex justify-center">
        <div className="w-full max-w-[1920px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">
              VAYASA SPA GUWAHATI
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-charcoal mb-6 font-light leading-snug">
              <RevealText>Where Ancient Healing Meets Contemporary Luxury</RevealText>
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl font-light leading-relaxed">
              Uncover new horizons of relaxation at Vayasa—from soul-soothing botanical therapies to transformational wellness journeys that awaken vitality and restore biological equilibrium.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Magnetic>
              <Link to="/about" className="inline-block text-xs uppercase tracking-[0.2em] pb-1.5 border-b border-charcoal/40 hover:border-charcoal text-charcoal transition-colors">
                <TextFlip text="Discover Our Story" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* Infinite Luxury Marquee Ribbon */}
      <InfiniteMarquee speed={40} className="my-4" />

      {/* Featured Signature Experiences Grid */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-16 md:py-24 flex justify-center">
        <div className="w-full max-w-[1920px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">

            {/* Card 1: Heavenly Pleasure (Four-Hand Therapy) */}
            <div 
              onClick={() => navigate('/services/heavenly-pleasure-four-hand-therapy')}
              className="md:col-span-7 flex flex-col group cursor-pointer"
            >
              <AnimeRevealBlock className="w-full overflow-hidden aspect-[16/9] rounded-2xl">
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop"
                  alt="Heavenly Pleasure (Four-Hand Therapy)"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </AnimeRevealBlock>
              <div className="mt-6 md:mt-8 flex flex-col items-start text-left">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                  SIGNATURE FOUR-HAND RITUAL
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-charcoal mb-4 font-light">
                  <RevealText>Heavenly Pleasure</RevealText>
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-8 max-w-xl font-light leading-relaxed">
                  Experience ultimate indulgence with a four-hand massage performed by two synchronized master therapists. This coordinated session blends Swedish, deep tissue, and stretch techniques for total relaxation.
                </p>
                <div className="flex items-center space-x-6">
                  <Magnetic>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openEnquiry('Heavenly Pleasure (Four-Hand Therapy)');
                      }}
                      className="text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 hover:border-gray-900 transition-colors inline-block cursor-pointer bg-transparent"
                    >
                      <TextFlip text="Book Now" />
                    </button>
                  </Magnetic>
                  <Link 
                    to="/services/heavenly-pleasure-four-hand-therapy" 
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs uppercase tracking-[0.15em] text-gray-400 hover:text-charcoal transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Aroma Massage */}
            <div 
              onClick={() => navigate('/services/aroma-massage')}
              className="md:col-span-5 flex flex-col group cursor-pointer mt-12 md:mt-0"
            >
              <AnimeRevealBlock className="w-full overflow-hidden aspect-[4/5] rounded-2xl" delay={0.2}>
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
                  alt="Aroma Massage"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </AnimeRevealBlock>
              <div className="mt-6 md:mt-8 flex flex-col items-start text-left">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                  HOLISTIC AROMATHERAPY
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-charcoal mb-4 font-light">
                  <RevealText>Aroma Massage</RevealText>
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-8 max-w-lg font-light leading-relaxed">
                  Relax and rejuvenate with aromatherapy massage using pure essential oils like lavender and eucalyptus. This holistic treatment reduces anxiety, soothes sore muscles, and enhances emotional wellness.
                </p>
                <div className="flex items-center space-x-6">
                  <Magnetic>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openEnquiry('Aroma Massage');
                      }}
                      className="text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 hover:border-gray-900 transition-colors inline-block cursor-pointer bg-transparent"
                    >
                      <TextFlip text="Book Now" />
                    </button>
                  </Magnetic>
                  <Link 
                    to="/services/aroma-massage" 
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs uppercase tracking-[0.15em] text-gray-400 hover:text-charcoal transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Salon, Hair & Beauty Services Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-24 flex justify-center bg-alabaster">
        <div className="w-full max-w-[1920px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">

            {/* Left Column (Sticky Text) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start z-10 text-left">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-3 block">
                SALON & BEAUTY RITUALS
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal font-light leading-snug">
                <RevealText>Salon, Hair & Beauty Services</RevealText>
              </h2>
              <p className="text-gray-600 mt-6 leading-relaxed text-sm md:text-base font-light max-w-sm">
                Explore our curated selection of bespoke hair styling, keratin smoothing, bridal artistry, and luxury skin therapies designed to illuminate your authentic beauty.
              </p>
              <div className="mt-8">
                <Magnetic>
                  <Link
                    to="/services"
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] pb-1.5 border-b border-charcoal hover:border-black text-charcoal font-medium transition-colors"
                  >
                    <TextFlip text="View All Services" />
                    <svg className="w-3.5 h-3.5 ml-1" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M2 6h8M6 2l4 4-4 4" />
                    </svg>
                  </Link>
                </Magnetic>
              </div>
            </div>

            {/* Right Column (Carousel) */}
            <div className="lg:col-span-8 w-full overflow-hidden relative">
              {/* Progressive Blur Overlay on Right Edge */}
              <div className="pointer-events-none absolute right-[-1px] top-0 bottom-0 w-24 md:w-48 z-10 backdrop-blur-[8px] bg-gradient-to-r from-transparent to-[#f4f3f0]/90 [mask-image:linear-gradient(to_right,transparent,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_100%)]"></div>

              {/* Carousel Container with Apple-style Faded Navigation */}
              <div className="relative w-full">
                {/* Previous Button / Left Navigation Area */}
                <button
                  onClick={() => scrollCarousel('prev')}
                  aria-label="Previous experiences"
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-36 sm:h-48 w-12 sm:w-16 flex items-center justify-start pl-1 sm:pl-3 cursor-pointer bg-transparent border-none outline-none focus:outline-none select-none group"
                >
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-charcoal/40 sm:text-charcoal/20 group-hover:text-charcoal/90 transition-all duration-350 ease-out transform group-hover:-translate-x-[3px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button / Right Navigation Area */}
                <button
                  onClick={() => scrollCarousel('next')}
                  aria-label="Next experiences"
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-36 sm:h-48 w-12 sm:w-16 flex items-center justify-end pr-1 sm:pr-3 cursor-pointer bg-transparent border-none outline-none focus:outline-none select-none group"
                >
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-charcoal/40 sm:text-charcoal/20 group-hover:text-charcoal/90 transition-all duration-350 ease-out transform group-hover:translate-x-[3px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div
                  ref={carouselRef}
                  onScroll={handleScroll}
                  className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {salonAndBeautyTreatments.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => navigate(`/services/${item.slug}`)}
                      className="w-[85vw] sm:w-[400px] md:w-[450px] shrink-0 snap-center sm:snap-start flex flex-col group cursor-pointer text-left"
                    >
                      <AnimeRevealBlock className="w-full overflow-hidden aspect-[4/5] rounded-2xl">
                        <motion.img
                          animate={{ y: [0, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                      </AnimeRevealBlock>
                      <span className="text-[10px] tracking-widest text-gray-500 mt-6 mb-2 uppercase">
                        {item.eyebrow}
                      </span>
                      <h4 className="text-lg md:text-xl text-charcoal mb-3 font-serif font-light">
                        <RevealText>{item.title}</RevealText>
                      </h4>
                      <p className="text-sm text-gray-600 mb-6 leading-relaxed font-light">
                        {item.desc}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <Magnetic>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openEnquiry(item.title);
                            }}
                            className="inline-block text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 text-gray-800 hover:border-gray-900 transition-colors cursor-pointer bg-transparent"
                          >
                            <TextFlip text="Book Now" />
                          </button>
                        </Magnetic>
                        <span className="text-xs text-gray-400 group-hover:text-charcoal transition-colors">
                          View Details →
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Final Card: Explore All Services */}
                  <div className="w-[85vw] sm:w-[350px] shrink-0 snap-center sm:snap-start flex flex-col justify-center items-start text-left p-8 sm:p-10 rounded-2xl bg-white/60 border border-charcoal/10">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-3">
                      FULL CATALOG
                    </span>
                    <h3 className="text-2xl font-serif font-light text-charcoal mb-4">
                      Explore All 19 Treatments
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-8">
                      From four-hand massages and Thai therapies to bridal packages and advanced hair care.
                    </p>
                    <Link
                      to="/services"
                      className="px-6 py-3 rounded-full bg-charcoal text-alabaster text-xs uppercase tracking-[0.2em] font-light hover:bg-black transition-colors"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Functional Scrollbar Indicator */}
              <div className="w-1/2 lg:w-1/3 mt-12 border-t border-gray-300 relative mx-auto">
                <div
                  className="absolute top-0 border-t border-gray-800 w-1/3 -mt-[1px]"
                  style={{ left: `${scrollProgress * 0.6666}%` }}
                ></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Milestones & Stats Grid (Hidden) */}
      {/* <EditorialStats /> */}

      {/* The World of Vayasa Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-24 flex justify-center bg-alabaster border-t border-gray-200/70">
        <div className="w-full max-w-[1920px] flex flex-col items-start">
          <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-charcoal/70" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-500 font-light">
                  COLLECTIONS & GIFTING
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal tracking-tight leading-[1.1]">
                <RevealText>The World of Vayasa</RevealText>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-light max-w-xl leading-relaxed lg:pb-1 text-left">
              Thoughtfully curated wellness essentials, bespoke gift certificates, and botanical formulations designed for your daily self-care ritual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
            {/* Card 1: Gift Card */}
            <div className="flex flex-col group cursor-pointer">
              <AnimeRevealBlock className="w-full overflow-hidden aspect-[3/4] relative flex items-center justify-center text-center">
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                  alt="Vayasa Gift Card"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </AnimeRevealBlock>
              <div className="mt-8 flex flex-col items-start text-left">
                <span className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">
                  VAYASA GIFT CARD
                </span>
                <h4 className="text-xl md:text-2xl text-charcoal mb-4 font-serif font-light">
                  <RevealText>Thoughtful Gestures</RevealText>
                </h4>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed font-light">
                  Prompting new adventures in wellness, Vayasa Gift Cards are the perfect token of gratitude for your loved ones.
                </p>
                <div className="mt-auto">
                  <Magnetic><a href="#" className="inline-block text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 text-gray-800 hover:border-gray-900 transition-colors">
                    <TextFlip text="Shop now" />
                  </a></Magnetic>
                </div>
              </div>
            </div>

            {/* Card 2: Spa at Home */}
            <div className="flex flex-col group cursor-pointer">
              <AnimeRevealBlock className="w-full overflow-hidden aspect-[3/4]" delay={0.2}>
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=800&auto=format&fit=crop"
                  alt="Vayasa at Home"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </AnimeRevealBlock>
              <div className="mt-8 flex flex-col items-start text-left">
                <span className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">
                  VAYASA AT HOME
                </span>
                <h4 className="text-xl md:text-2xl text-charcoal mb-4 font-serif font-light">
                  <RevealText>Exclusive Skincare Collection</RevealText>
                </h4>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed font-light">
                  Bring the spa experience home. Formulated with rare botanicals, our new skincare range restores vitality and deeply nourishes.
                </p>
                <div className="mt-auto">
                  <Magnetic><a href="#" className="inline-block text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 text-gray-800 hover:border-gray-900 transition-colors">
                    <TextFlip text="Discover more" />
                  </a></Magnetic>
                </div>
              </div>
            </div>

            {/* Card 3: Wellness Shop */}
            <div className="flex flex-col group cursor-pointer">
              <AnimeRevealBlock className="w-full overflow-hidden aspect-[3/4]" delay={0.4}>
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
                  alt="Wellness Shop"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </AnimeRevealBlock>
              <div className="mt-8 flex flex-col items-start text-left">
                <span className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">
                  WELLNESS SHOP
                </span>
                <h4 className="text-xl md:text-2xl text-charcoal mb-4 font-serif font-light">
                  <RevealText>Aromatherapy Essentials</RevealText>
                </h4>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed font-light">
                  Discover our new limited-edition essential oil blends, designed to guide you into a state of deep relaxation and mindfulness.
                </p>
                <div className="mt-auto">
                  <Magnetic><a href="#" className="inline-block text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 text-gray-800 hover:border-gray-900 transition-colors">
                    <TextFlip text="Shop now" />
                  </a></Magnetic>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Guest Reflections / Customer Reviews Section */}
      <CustomerReviews />

      {/* SEO & GEO FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 pb-16 pt-8 flex justify-center">
        <div className="w-full max-w-[1920px] bg-charcoal text-pearl rounded-2xl md:rounded-3xl py-8 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-left">
            <h2 className="text-xl md:text-2xl font-serif font-light tracking-wide">
              <RevealText>Begin Your Journey at Vayasa</RevealText>
            </h2>
            <p className="text-sm text-gray-400 font-light mt-2">
              Book your sanctuary experience at Vayasa today and discover true tranquility.
            </p>
          </div>
          <LiquidGlassButton
            variant="dark"
            size="lg"
            text="BOOK NOW"
            onClick={() => openEnquiry()}
          />


        </div>
      </section>
    </div >
  );
}

export default Home;

