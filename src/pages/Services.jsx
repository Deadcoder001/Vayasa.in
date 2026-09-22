import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RevealText from '../components/RevealText';
import { useEnquiry } from '../context/EnquiryContext';
import { servicesData } from '../data/servicesData';
import { ArrowRight, Clock } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import LiquidGlassButton from '../components/ui/LiquidGlassButton';


const categories = [
  { label: 'All Services', count: 19 },
  { label: 'Massage Therapies', count: 10 },
  { label: 'Salon & Hair Care', count: 3 },
  { label: 'Beauty & Skin', count: 6 },
];

function ServiceSkeletonCard() {
  return (
    <div className="relative flex flex-col justify-end overflow-hidden rounded-[32px] sm:rounded-[36px] bg-charcoal/5 border border-charcoal/10 shadow-xs aspect-[3/4] w-full animate-pulse">
      {/* Shimmer sweep */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30" />

      {/* Top badges placeholder */}
      <div className="absolute top-4 sm:top-5 inset-x-4 sm:inset-x-5 flex justify-between items-center z-20">
        <div className="h-6 w-24 rounded-full bg-black/20" />
        <div className="h-6 w-16 rounded-full bg-black/20" />
      </div>

      {/* Bottom frosted area placeholder */}
      <div className="relative z-20 p-6 sm:p-7 flex flex-col items-center text-center bg-gradient-to-t from-black/40 to-transparent pt-20 w-full">
        <div className="h-2.5 w-20 bg-white/20 rounded-full mb-2.5" />
        <div className="h-6 w-3/4 bg-white/30 rounded-md mb-2.5" />
        <div className="h-3 w-5/6 bg-white/20 rounded-md mb-5" />
        <div className="w-full max-w-[200px] h-10 rounded-full bg-white/80 shadow-xs" />
      </div>
    </div>
  );
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { openEnquiry } = useEnquiry();
  const navigate = useNavigate();
  const sentinelRef = useRef(null);

  // Filter services by category
  const filteredServices = activeCategory === 'All Services'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  // Reset pagination on category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(9);
    setIsLoadingMore(false);
  };

  const hasMore = visibleCount < filteredServices.length;

  // Trigger progressive loading with realistic skeleton feel
  const loadMoreItems = () => {
    if (isLoadingMore || !hasMore) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 9, filteredServices.length));
      setIsLoadingMore(false);
    }, 700);
  };

  // IntersectionObserver to auto-load next batch when scrolling near bottom of 9th item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMoreItems();
        }
      },
      { rootMargin: '200px' }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoadingMore, filteredServices.length]);

  return (
    <div className="w-full bg-alabaster text-charcoal flex flex-col items-center pt-24 sm:pt-32">
      
      {/* 1. Minimal Hero Header */}
      <section className="w-full px-4 sm:px-8 md:px-16 py-12 md:py-20 flex justify-center border-b border-charcoal/8">
        <div className="w-full max-w-[1920px] flex flex-col items-start text-left">
          
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-400 font-mono">
              OFFICIAL CATALOG
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 font-mono">
              19 CURATED RITUALS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-light text-charcoal tracking-tight leading-[1.1] max-w-4xl mb-4">
            <RevealText>Curated Therapies & Salon Services</RevealText>
          </h1>

          <p className="text-sm sm:text-base text-gray-600 font-light max-w-2xl leading-relaxed">
            From synchronized four-hand therapies and Ayurvedic rituals to sleek keratin treatments and bridal makeup, explore our complete sanctuary offerings in Ulubari, Guwahati.
          </p>

        </div>
      </section>

      {/* 2. STICKY Category Filter Bar */}
      <div className="sticky top-16 sm:top-20 z-30 w-full bg-alabaster/95 backdrop-blur-md border-b border-charcoal/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 py-3 sm:py-3.5 flex items-center justify-between overflow-x-auto scrollbar-none">
          
          <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => handleCategoryChange(cat.label)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-light transition-colors duration-200 cursor-pointer flex items-center space-x-2 whitespace-nowrap select-none ${
                    isActive
                      ? 'bg-charcoal text-alabaster shadow-xs font-normal'
                      : 'text-charcoal/70 hover:text-charcoal bg-black/[0.03] hover:bg-black/[0.06]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-alabaster' : 'bg-black/5 text-gray-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center space-x-2 text-[11px] font-mono text-gray-400 uppercase tracking-wider shrink-0 pl-4">
            <Clock className="w-3 h-3 text-gray-400" />
            <span>Open 10:00 AM – 09:00 PM</span>
          </div>

        </div>
      </div>

      {/* 3. Service Grid with Apple-Style Transparent Faded Blur Cards */}
      <section className="w-full px-4 sm:px-8 md:px-16 py-12 md:py-20 flex justify-center">
        <div className="w-full max-w-[1920px]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-11">
            {/* Render currently visible services */}
            {filteredServices.slice(0, visibleCount).map((service) => (
              <div
                key={service.id}
                onClick={() => navigate(`/services/${service.slug}`)}
                className="group relative flex flex-col justify-end overflow-hidden rounded-[32px] sm:rounded-[36px] bg-charcoal/5 border border-charcoal/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:border-charcoal/25 transition-all duration-300 aspect-[3/4] cursor-pointer"
              >
                {/* 1. Full-bleed Background Image without zoom on hover */}
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-95"
                />

                {/* 2. Top Floating Badges (Frosted Glass Pills) */}
                <div className="absolute top-4 sm:top-5 inset-x-4 sm:inset-x-5 flex justify-between items-center z-20 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-[10px] uppercase font-mono tracking-wider text-white border border-white/20 shadow-xs">
                    {service.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md text-[10px] font-mono text-white border border-white/20 shadow-xs">
                    {service.duration}
                  </span>
                </div>

                {/* 3. True Transparent Progressive Blur */}
                <div className="absolute inset-x-0 bottom-0 h-[65%] backdrop-blur-xl bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none z-10 [mask-image:linear-gradient(to_top,black_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_50%,transparent_100%)]" />

                {/* 4. Card Content: Crisp White Text floating over transparent blurred image */}
                <div className="relative z-20 p-6 sm:p-7 flex flex-col items-center text-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-mono mb-1.5">
                    {service.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-serif font-light text-white leading-snug tracking-tight mb-2 drop-shadow-sm group-hover:text-white/95 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-white/80 font-light leading-relaxed max-w-xs line-clamp-2 mb-4">
                    {service.desc}
                  </p>

                  {/* 5. Apple VisionOS Liquid Glass Action Button */}
                  <div className="w-full flex items-center justify-center pt-1">
                    <LiquidGlassButton
                      variant="light"
                      size="sm"
                      text="PLAN RITUAL"
                      onClick={(e) => {
                        e.stopPropagation();
                        openEnquiry(service.title);
                      }}
                      className="w-full max-w-[210px]"
                    />
                  </div>

                </div>
              </div>
            ))}

            {/* Render Skeleton Cards while loading next batch */}
            {isLoadingMore && (
              <>
                <ServiceSkeletonCard />
                <ServiceSkeletonCard />
                <ServiceSkeletonCard />
              </>
            )}
          </div>

          {/* Sentinel element to trigger auto-load via IntersectionObserver */}
          <div ref={sentinelRef} className="h-10 w-full flex items-center justify-center mt-6" />

          {/* Manual Load More Trigger / Status */}
          {hasMore && !isLoadingMore && (
            <div className="flex flex-col items-center justify-center mt-8 space-y-3">
              <span className="text-xs text-gray-400 font-mono">
                Showing {visibleCount} of {filteredServices.length} Rituals
              </span>
              <button
                onClick={loadMoreItems}
                className="px-6 py-2.5 rounded-full border border-charcoal/30 hover:border-charcoal bg-white/60 hover:bg-charcoal text-charcoal hover:text-alabaster text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 cursor-pointer shadow-xs"
              >
                Load Remaining Rituals ↓
              </button>
            </div>
          )}

          {!hasMore && filteredServices.length > 9 && (
            <div className="text-center mt-12 pt-6 border-t border-charcoal/8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">
                — All {filteredServices.length} Rituals Loaded —
              </span>
            </div>
          )}

        </div>
      </section>

      {/* 4. Minimal FAQ Section */}
      <FAQSection />

      {/* 5. Bottom Reservation Banner */}
      <section className="w-full px-4 sm:px-8 md:px-16 py-16 md:py-24 flex justify-center">
        <div className="w-full max-w-[1920px] flex flex-col items-center text-center">
          
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal leading-snug max-w-3xl mb-5">
            “Your journey to serenity and beauty begins at Pee Tee Tower, Ulubari.”
          </blockquote>

          <p className="text-xs sm:text-sm text-gray-500 font-light max-w-md leading-relaxed mb-8">
            Open all days from 10:00 AM to 09:00 PM · Valet parking & private suites available.
          </p>

          <button
            onClick={() => openEnquiry()}
            className="group inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-charcoal hover:bg-black text-alabaster text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 cursor-pointer shadow-sm"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

        </div>
      </section>

    </div>
  );
}
