import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/registry/magicui/marquee";
import RevealText from "./RevealText";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priyam Borkotoky",
    username: "@priyam · Guwahati",
    treatment: "Vibrational Sound Bath",
    body: "The acoustic resonance of the Tibetan singing bowls at Vayasa created a depth of stillness I haven't felt in years. Guwahati finally has a true luxury sanctuary that honors sacred healing traditions.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop",
  },
  {
    name: "Dr. Arindam Mukherjee",
    username: "@arindam.doc · Kolkata",
    treatment: "Deep Tissue Restoration",
    body: "As a surgeon on my feet for grueling hours, the therapeutic precision here is extraordinary. The personalized pressure points and warm herbal compresses completely erased chronic shoulder strain.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop",
  },
  {
    name: "Meenakshi Baruah",
    username: "@meenakshi.b · Guwahati",
    treatment: "Thermal Hydrotherapy",
    body: "The thermal vitality pools and eucalyptus steam sanctuary delivered an instant biological reset. Stepping back into Guwahati feeling weightless, calm, and deeply renewed.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop",
  },
  {
    name: "Vikram & Shalini Singhania",
    username: "@singhania · Delhi NCR",
    treatment: "Bespoke Pavilion Suite",
    body: "We booked the private pavilion suite during our Brahmaputra trip. The bespoke oil blending and quiet luxury rival the finest wellness sanctuaries in Bali or Kyoto.",

    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop",
  },
  {
    name: "Devika Goswami",
    username: "@devika.g · Shillong",
    treatment: "Camellia Radiance Facial",
    body: "The wild-harvested Assam camellia extracts and lymphatic sculpting left my skin glowing for weeks. The unhurried pace and organic aromas make Vayasa our definitive retreat.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=120&auto=format&fit=crop",
  },
  {
    name: "Ananya Roy Choudhury",
    username: "@ananya.rc · Guwahati",
    treatment: "Ayurvedic Herbal Ritual",
    body: "The diagnostic pulse consultation and warm dosha-specific botanical oils were deeply grounding. Vayasa is an intentional temple of restorative wellness in Assam.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=120&auto=format&fit=crop",
  },
  {
    name: "Kabir Mehta",
    username: "@kabirmehta · Mumbai",
    treatment: "Himalayan Salt Sauna",
    body: "Traveling through the Northeast for work, Vayasa was an oasis of tranquility. The mineral hydrotherapy and cold plunge rejuvenated my mind and body completely.",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=120&auto=format&fit=crop",
  },
  {
    name: "Sunita Hazarika",
    username: "@hazarika · Jorhat",
    treatment: "Shared Serenity Journey",
    body: "The synchronized sound healing and aromatherapy were transcendental. The scent of wild mountain herbs and the soothing acoustics made for an unforgettable afternoon.",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=120&auto=format&fit=crop",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  treatment,
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 sm:w-84 md:w-96 cursor-pointer overflow-hidden rounded-2xl border p-5 sm:p-6 transition-all duration-300",
        "border-charcoal/10 bg-white/70 hover:bg-white hover:border-charcoal/25 hover:shadow-md"
      )}
    >
      <div className="flex flex-row items-center justify-between gap-2 mb-3">
        <div className="flex flex-row items-center gap-3">
          <img
            className="rounded-full w-9 h-9 sm:w-10 sm:h-10 object-cover border border-charcoal/10"
            width="40"
            height="40"
            alt={name}
            src={img}
          />
          <div className="flex flex-col text-left">
            <figcaption className="text-sm sm:text-base font-serif font-normal text-charcoal tracking-tight">
              {name}
            </figcaption>
            <p className="text-[10px] sm:text-xs font-light text-gray-400 font-mono">
              {username}
            </p>
          </div>
        </div>

        {/* 5-Star Rating */}
        <div className="flex items-center space-x-0.5 text-charcoal">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 fill-charcoal text-charcoal" />
          ))}
        </div>
      </div>

      {treatment && (
        <div className="mb-2.5 flex">
          <span className="text-[9px] uppercase tracking-[0.18em] px-2.5 py-0.5 rounded-full bg-charcoal/[0.04] text-charcoal/70 font-light border border-charcoal/5">
            {treatment}
          </span>
        </div>
      )}

      <blockquote className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed text-left">
        {body}
      </blockquote>
    </figure>
  );
};

export default function CustomerReviews() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-20 md:py-32 flex justify-center bg-alabaster border-t border-gray-200/70 overflow-hidden">
      <div className="w-full max-w-[1920px] flex flex-col items-start">

        {/* Section Header: Aligned to Complete Left with Other Components */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-charcoal/70" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-500 font-light">
                GUEST REFLECTIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal tracking-tight leading-[1.1]">
              <RevealText>Voices of Vayasa</RevealText>
            </h2>
          </div>

          {/* Rating Summary Badge */}
          <div className="flex items-center space-x-4 bg-white/80 border border-gray-200/80 rounded-full px-4 py-2 self-start lg:self-auto shadow-2xs">
            <div className="flex items-center space-x-1 text-charcoal">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-charcoal text-charcoal" />
              ))}
            </div>
            <span className="text-xs font-mono font-medium text-charcoal">4.95 / 5.0</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-[11px] text-gray-500 font-light tracking-wider">
              250+ Verified Visits
            </span>
          </div>
        </div>

        {/* MagicUI Marquee Review Cards Container */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* First Row: Scrolls Forward */}
          <Marquee pauseOnHover className="[--duration:32s] [--gap:1.25rem] py-2">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>

          {/* Second Row: Scrolls in Reverse */}
          <Marquee reverse pauseOnHover className="[--duration:36s] [--gap:1.25rem] py-2">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>

          {/* Progressive Fade Gradients on Edges (Alabaster) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-56 bg-gradient-to-r from-alabaster to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-56 bg-gradient-to-l from-alabaster to-transparent z-10" />
        </div>

      </div>
    </section>
  );
}
