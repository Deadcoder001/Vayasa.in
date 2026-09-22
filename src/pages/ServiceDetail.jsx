import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData, getServiceBySlug } from '../data/servicesData';
import { useEnquiry } from '../context/EnquiryContext';
import RevealText from '../components/RevealText';
import FAQSection from '../components/FAQSection';
import { 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Calendar,
  ShieldCheck,
  Award,
  HeartHandshake
} from 'lucide-react';
import LiquidGlassButton from '../components/ui/LiquidGlassButton';


export default function ServiceDetail() {

  const { slug } = useParams();
  const navigate = useNavigate();
  const { openEnquiry } = useEnquiry();

  const service = getServiceBySlug(slug);

  // Scroll to top whenever slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-alabaster flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
        <span className="text-xs uppercase font-mono tracking-[0.2em] text-gray-400 mb-4">404 — NOT FOUND</span>
        <h1 className="text-3xl sm:text-5xl font-serif font-light text-charcoal mb-6">Service Not Found</h1>
        <p className="text-sm text-gray-600 max-w-md mb-8">
          The sanctuary treatment you are looking for might have moved or been updated.
        </p>
        <Link
          to="/services"
          className="px-6 py-3 rounded-full bg-charcoal text-alabaster text-xs uppercase tracking-[0.2em] font-light hover:bg-black transition-colors inline-flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore All Services</span>
        </Link>
      </div>
    );
  }

  // Find related services by slug
  const relatedServices = (service.relatedSlugs || [])
    .map((rSlug) => getServiceBySlug(rSlug))
    .filter(Boolean);

  return (
    <div className="w-full bg-alabaster text-charcoal flex flex-col items-center pt-24 sm:pt-32">
      
      {/* 1. Breadcrumbs & Quick Back Navigation */}
      <div className="w-full max-w-[1920px] px-4 sm:px-8 md:px-16 pt-4 pb-6 flex items-center justify-between text-xs text-gray-400 font-mono border-b border-charcoal/8">
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto scrollbar-none whitespace-nowrap">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-charcoal transition-colors">Services & Treatments</Link>
          <span>/</span>
          <span className="text-charcoal truncate max-w-[200px] sm:max-w-none">{service.title}</span>
        </div>

        <Link
          to="/services"
          className="hidden sm:inline-flex items-center space-x-1.5 text-xs text-charcoal hover:text-black transition-colors font-sans uppercase tracking-[0.15em] shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Services</span>
        </Link>
      </div>

      {/* 2. Hero Editorial Banner */}
      <section className="w-full px-4 sm:px-8 md:px-16 py-10 md:py-16 flex justify-center border-b border-charcoal/8">
        <div className="w-full max-w-[1920px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-charcoal text-alabaster text-[10px] uppercase font-mono tracking-wider">
                {service.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/5 text-charcoal text-[10px] uppercase font-mono tracking-wider border border-charcoal/10 flex items-center space-x-1.5">
                <Clock className="w-3 h-3 text-gray-500" />
                <span>{service.duration}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-black/5 text-charcoal text-[10px] uppercase font-mono tracking-wider border border-charcoal/10">
                {service.tag}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-charcoal tracking-tight leading-[1.1] mb-6">
              <RevealText>{service.title}</RevealText>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 font-light max-w-3xl leading-relaxed">
              {service.desc}
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <LiquidGlassButton
              variant="dark"
              size="lg"
              text="CURATE THIS RITUAL"
              onClick={() => openEnquiry(service.title)}
            />
          </div>



        </div>
      </section>

      {/* 3. Hero Imagery Showcase */}
      <section className="w-full px-4 sm:px-8 md:px-16 py-8 md:py-12 flex justify-center border-b border-charcoal/8">
        <div className="w-full max-w-[1920px] grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          
          <div className="md:col-span-8 overflow-hidden rounded-[32px] sm:rounded-[40px] aspect-[16/10] bg-charcoal/5 border border-charcoal/10 shadow-sm relative group">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-mono uppercase tracking-[0.2em] flex items-center justify-between pointer-events-none">
              <span>{service.eyebrow}</span>
              <span>Pee Tee Tower, Guwahati</span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            {service.secondaryImg && (
              <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] aspect-[4/3] bg-charcoal/5 border border-charcoal/10 shadow-sm relative group">
                <img
                  src={service.secondaryImg}
                  alt={`${service.title} detail`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                />
              </div>
            )}

            {/* Quick Summary Highlights Box */}
            <div className="flex-1 bg-white/70 border border-charcoal/10 rounded-[28px] sm:rounded-[36px] p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gray-400 block mb-3">
                  TREATMENT TARGET
                </span>
                <p className="text-sm font-light text-charcoal leading-relaxed mb-4">
                  {service.targetAreas}
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal/8">
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gray-400 block mb-1">
                  SUITED FOR
                </span>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {service.idealFor}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Deep-Dive Details & Sticky Booking Sidebar */}
      <section className="w-full px-4 sm:px-8 md:px-16 py-12 md:py-20 flex justify-center border-b border-charcoal/8">
        <div className="w-full max-w-[1920px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-16 text-left">
            
            {/* A. The Philosophy */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-mono mb-3 block">
                THE PHILOSOPHY & TECHNIQUE
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-light text-charcoal leading-snug mb-6">
                Restoring Equilibrium Through Ancient Wisdom & Modern Science
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* B. Key Wellness Benefits Grid */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-mono mb-4 block">
                CLINICAL & HOLISTIC BENEFITS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white/70 border border-charcoal/8 shadow-xs flex flex-col items-start text-left"
                  >
                    <CheckCircle2 className="w-5 h-5 text-charcoal/80 mb-3" />
                    <h4 className="text-base font-serif font-normal text-charcoal mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* C. The 4-Step Experience Journey */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-mono mb-6 block">
                THE 4-STEP SANCTUARY RITUAL
              </span>
              <div className="space-y-4">
                {service.ritualJourney.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-3xl bg-white/60 border border-charcoal/8 shadow-xs gap-4"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-xl sm:text-2xl font-serif text-charcoal/40 font-light">
                        {step.step}
                      </span>
                      <h4 className="text-base sm:text-lg font-serif font-light text-charcoal">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 font-light sm:max-w-md">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* D. Sanctuary Hygiene & Care Standards */}
            <div className="p-8 rounded-3xl bg-charcoal/5 border border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-charcoal" strokeWidth={1.2} />
                <div>
                  <h4 className="text-base font-serif font-medium text-charcoal">
                    Certified Master Practitioners
                  </h4>
                  <p className="text-xs text-gray-600 font-light mt-1">
                    Every session is delivered by certified therapists using 100% organic, cold-pressed botanicals.
                  </p>
                </div>
              </div>
              <button
                onClick={() => openEnquiry(service.title)}
                className="px-6 py-2.5 rounded-full border border-charcoal bg-charcoal text-alabaster hover:bg-black text-xs uppercase tracking-[0.15em] font-light transition-colors whitespace-nowrap cursor-pointer shrink-0"
              >
                Inquire Now
              </button>
            </div>

          </div>

          {/* Sticky Concierge Booking Card (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start w-full">
            <div className="bg-white rounded-[32px] sm:rounded-[36px] p-7 sm:p-8 border border-charcoal/10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex flex-col text-left">
              
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gray-400 mb-2">
                RESERVATION CONCIERGE
              </span>

              <h3 className="text-2xl font-serif font-light text-charcoal mb-3">
                {service.title}
              </h3>

              <div className="flex items-center space-x-2 text-xs text-gray-500 font-mono mb-6 pb-6 border-b border-charcoal/10">
                <Clock className="w-3.5 h-3.5" />
                <span>Duration: {service.duration}</span>
              </div>

              <div className="space-y-4 mb-8 text-xs font-light text-gray-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-charcoal shrink-0 mt-0.5" />
                  <span>3rd Floor, Pee Tee Tower, Ulubari, G.S. Road, Guwahati – 781007</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-charcoal shrink-0" />
                  <a href="tel:08062757161" className="hover:text-charcoal transition-colors font-mono">08062757161</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-charcoal shrink-0" />
                  <span>10:00 AM — 09:00 PM (All Days Open)</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => openEnquiry(service.title)}
                  className="w-full py-3.5 rounded-full bg-charcoal hover:bg-black text-alabaster text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 cursor-pointer shadow-sm flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Treatment</span>
                </button>

                <a
                  href={`https://wa.me/918062757161?text=Hi%20Vayasa%20Spa,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-full border border-charcoal/20 hover:border-charcoal bg-transparent hover:bg-black/5 text-charcoal text-xs uppercase tracking-[0.15em] font-light transition-all duration-300 flex items-center justify-center space-x-2 text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <p className="text-[10px] text-gray-400 text-center font-light mt-6">
                Complimentary consultation included with every booking.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* 5. Related Rituals Carousel / Grid */}
      {relatedServices.length > 0 && (
        <section className="w-full px-4 sm:px-8 md:px-16 py-16 md:py-24 flex justify-center border-b border-charcoal/8">
          <div className="w-full max-w-[1920px] flex flex-col items-start text-left">
            
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gray-400 mb-2">
              COMPLEMENTARY THERAPIES
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-light text-charcoal mb-10">
              You May Also Experience
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {relatedServices.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigate(`/services/${rel.slug}`)}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-[32px] bg-charcoal/5 border border-charcoal/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:border-charcoal/25 transition-all duration-300 aspect-[3/4] cursor-pointer"
                >
                  <img
                    src={rel.img}
                    alt={rel.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-95"
                  />
                  <div className="absolute top-4 inset-x-4 flex justify-between items-center z-20 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-[10px] uppercase font-mono tracking-wider text-white border border-white/20">
                      {rel.tag}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md text-[10px] font-mono text-white border border-white/20">
                      {rel.duration}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-[65%] backdrop-blur-xl bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none z-10 [mask-image:linear-gradient(to_top,black_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_50%,transparent_100%)]" />

                  <div className="relative z-20 p-6 flex flex-col items-center text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-mono mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-lg font-serif font-light text-white leading-snug mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-white/80 font-light line-clamp-2 mb-4">
                      {rel.desc}
                    </p>
                    <span className="text-xs text-white/90 underline underline-offset-4 uppercase tracking-widest font-mono">
                      View Ritual →
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 6. FAQ Section */}
      <FAQSection />

      {/* 7. Bottom Reservation Callout */}
      <section className="w-full px-4 sm:px-8 md:px-16 py-16 md:py-24 flex justify-center">
        <div className="w-full max-w-[1920px] flex flex-col items-center text-center">
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal leading-snug max-w-3xl mb-5">
            “Your journey to serenity and beauty begins at Pee Tee Tower, Ulubari.”
          </blockquote>
          <p className="text-xs sm:text-sm text-gray-500 font-light max-w-md leading-relaxed mb-8">
            Open all days from 10:00 AM to 09:00 PM · Valet parking & private suites available.
          </p>
          <button
            onClick={() => openEnquiry(service.title)}
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
