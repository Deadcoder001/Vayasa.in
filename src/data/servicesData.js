export const servicesData = [
  // 1. Heavenly Pleasure (Four-Hand Therapy)
  {
    id: 1,
    slug: 'heavenly-pleasure-four-hand-therapy',
    category: 'Massage Therapies',
    title: 'Heavenly Pleasure (Four-Hand Therapy)',
    eyebrow: 'SIGNATURE SYNCHRONIZED RITUAL',
    tag: 'Signature Four-Hand',
    duration: '60 / 90 Mins',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    desc: 'Experience ultimate indulgence with a four-hand massage performed by two synchronized master therapists. Coordinated Swedish, deep tissue, and stretching for total relaxation.',
    fullDescription: 'The Heavenly Pleasure Four-Hand Ritual is the pinnacle of synchronized bodywork. Two certified master therapists work in harmonious, choreographed unison across your body, utilizing mirrored movements that lull the conscious mind into deep surrender. Combining heated botanical oils, customized Swedish effleurage, deep tissue trigger point release, and rhythmic acupressure, this therapy dissolves deep chronic fatigue and resets the central nervous system.',
    benefits: [
      { title: 'Neurological Surrender', text: 'Choreographed four-hand movement prevents the brain from tracking strokes, inducing rapid alpha-wave meditation.' },
      { title: 'Double Muscle Relief', text: 'Simultaneous treatment of upper and lower body muscle groups doubles tension release in half the time.' },
      { title: 'Enhanced Micro-Circulation', text: 'Mirrored lymphatic drainage accelerates cellular detoxification and oxygenation.' },
      { title: 'Deep Tissue Recovery', text: 'Targeted myofascial work melts adhesions without overwhelming localized muscle tissues.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Consultation & Welcome Foot Soak', desc: 'Warm botanical floral foot bath with Himalayan salt scrub while customizing organic essential oil blends.' },
      { step: '02', title: 'Synchronized Breath Alignment', desc: 'Gentle cranial holding and aroma inhalation to synchronize your breathing rhythm with the two practitioners.' },
      { step: '03', title: 'Choreographed Full-Body Therapy', desc: 'Seamless, four-hand flowing bodywork blending deep pressure, warmed herbal poultices, and Swedish strokes.' },
      { step: '04', title: 'Herbal Infusion & Integration', desc: 'Slow awakening with warm steamed towels followed by rare organic Assam tea in the private recovery lounge.' }
    ],
    idealFor: 'Executive stress, high mental fatigue, celebratory pampering, and chronic full-body muscular exhaustion.',
    targetAreas: 'Full Body, Cranial, Shoulders, Spinal Column, Glutes & Legs',
    relatedSlugs: ['aroma-massage', 'swedish-massage', 'couples-massage']
  },

  // 2. Aroma Massage
  {
    id: 2,
    slug: 'aroma-massage',
    category: 'Massage Therapies',
    title: 'Aroma Massage',
    eyebrow: 'HOLISTIC ESSENTIAL OIL JOURNEY',
    tag: 'Holistic Calming',
    duration: '60 / 90 Mins',
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    desc: 'Relax and rejuvenate with aromatherapy massage using pure essential lavender and eucalyptus oils to reduce anxiety and soothe sore muscles.',
    fullDescription: 'Our signature Aroma Massage combines the healing powers of 100% pure steam-distilled essential oils with gentle, rhythmic Swedish touch. Lavender, eucalyptus, bergamot, and cedarwood are customized according to your physical and mental needs, absorbing deeply into the dermal layers while soothing olfactory pathways to relieve emotional tension and restore biological equilibrium.',
    benefits: [
      { title: 'Anxiety & Stress Alleviation', text: 'Pure lavender and bergamot terpenes lower cortisol levels and promote inner serenity.' },
      { title: 'Respiratory Vitality', text: 'Wild eucalyptus and frankincense clear air pathways and deepen restorative breathing.' },
      { title: 'Skin Hydration & Glow', text: 'Cold-pressed carrier oils enriched with Vitamin E deeply nourish dry and fatigued skin.' },
      { title: 'Insomnia & Sleep Support', text: 'Soothes the sympathetic nervous system to encourage uninterrupted REM sleep patterns.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Olfactory Essential Oil Selection', desc: 'Sensory scent test to select the specific therapeutic blend matching your immediate energy state.' },
      { step: '02', title: 'Aromatic Steam Inhalation', desc: 'Warm steam infused with medicinal botanicals to open pores and quiet mental chatter.' },
      { step: '03', title: 'Rhythmic Herbal Massage', desc: 'Gentle to medium full-body strokes designed to facilitate maximum absorption of active plant essences.' },
      { step: '04', title: 'Cooling Compress & Awakening', desc: 'Floral mist awakening and warm ginger-honey herbal tea to ground your constitution.' }
    ],
    idealFor: 'Restlessness, anxiety, sleep disturbances, sensory overload, and mild muscular tension.',
    targetAreas: 'Full Body, Neck, Shoulders, Chest & Feet',
    relatedSlugs: ['heavenly-pleasure-four-hand-therapy', 'swedish-massage', 'thai-massage']
  },

  // 3. Swedish Massage
  {
    id: 3,
    slug: 'swedish-massage',
    category: 'Massage Therapies',
    title: 'Swedish Massage',
    eyebrow: 'CLASSIC EUROPEAN RELAXATION',
    tag: 'Classic Relaxation',
    duration: '60 / 90 Mins',
    img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
    desc: 'Experience classic Swedish relaxation with gentle flowing strokes and therapeutic comfort restoring body and mind equilibrium.',
    fullDescription: 'Rooted in timeless European therapeutic traditions, Swedish Massage is the quintessential treatment for total physical rejuvenation. Through five foundational strokes—effleurage, petrissage, friction, tapotement, and vibration—our therapists release surface muscle stiffness, enhance venous blood flow toward the heart, and improve overall physical flexibility.',
    benefits: [
      { title: 'Circulatory Boost', text: 'Improves blood flow and oxygen delivery throughout major muscle groups.' },
      { title: 'Lactic Acid Flush', text: 'Gently flushes metabolic waste and toxins accumulated from daily stress and sitting.' },
      { title: 'Enhanced Flexibility', text: 'Lengthens contracted muscles and eases joint stiffness without intense pressure.' },
      { title: 'Systemic Relaxation', text: 'Triggers deep endorphin release for a lasting feeling of lightness and calm.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Body Assessment', desc: 'Brief mobility review to identify areas of tightness and customize stroke pressures.' },
      { step: '02', title: 'Heated Oil Application', desc: 'Application of warm almond oil to lubricate skin and prepare superficial muscle fibers.' },
      { step: '03', title: 'Five-Phase Swedish Protocol', desc: 'Flowing continuous effleurage and gentle petrissage kneading from calves to shoulders.' },
      { step: '04', title: 'Towel Compress Integration', desc: 'Warm moist towels applied to the back and feet to lock in warmth and deep relaxation.' }
    ],
    idealFor: 'First-time spa guests, desk workers, light relaxation seekers, and general muscle maintenance.',
    targetAreas: 'Back, Neck, Shoulders, Arms, Legs & Feet',
    relatedSlugs: ['aroma-massage', 'deep-tissue-massage', 'foot-massage']
  },

  // 4. Deep Tissue Massage
  {
    id: 4,
    slug: 'deep-tissue-massage',
    category: 'Massage Therapies',
    title: 'Deep Tissue Massage',
    eyebrow: 'INTENSIVE MYOFASCIAL RELEASE',
    tag: 'Tension Relief',
    duration: '60 / 90 Mins',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',
    desc: 'Target chronic pain and deep muscle knots with focused pressure and slow strokes to release long-held tension and support posture.',
    fullDescription: 'Our Deep Tissue Massage focuses on the deeper layers of muscle tissue, tendons, and fascia. Using slow, deliberate friction and targeted forearm, knuckle, and elbow techniques, our therapists break down stubborn knots (adhesions) caused by athletic training, repetitive strain, or chronic posture fatigue, restoring freedom of movement and relieving deep-seated pain.',
    benefits: [
      { title: 'Adhesion Breakdown', text: 'Releases rigid bands of painful tissue in the shoulders, neck, and lower back.' },
      { title: 'Posture Realignment', text: 'Relieves chronic spinal compression and restores proper anatomical posture.' },
      { title: 'Athletic Recovery', text: 'Accelerates tissue recovery and reduces delayed onset muscle soreness (DOMS).' },
      { title: 'Chronic Pain Relief', text: 'Significantly lowers tension headaches, sciatica discomfort, and upper back tightness.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Musculoskeletal Evaluation', desc: 'Targeted palpation to locate chronic adhesions, trigger points, and postural imbalances.' },
      { step: '02', title: 'Thermal Muscle Warm-up', desc: 'Warm compresses and broad pressure to soften superficial muscles before deep work.' },
      { step: '03', title: 'Targeted Deep Friction & Release', desc: 'Slow, deep cross-fiber strokes and sustained pressure on deep muscle layers and fascia.' },
      { step: '04', title: 'Cryo-Thermal Soothing', desc: 'Application of cooling herbal arnica balm to soothe treated areas and prevent soreness.' }
    ],
    idealFor: 'Athletes, individuals with chronic back/neck pain, heavy physical workers, and high-tension lifestyles.',
    targetAreas: 'Upper & Lower Back, Neck, Glutes, Hamstrings, Rotator Cuff',
    relatedSlugs: ['thai-massage', 'signature-massage', 'heavenly-pleasure-four-hand-therapy']
  },

  // 5. Thai Massage
  {
    id: 5,
    slug: 'thai-massage',
    category: 'Massage Therapies',
    title: 'Thai Massage',
    eyebrow: 'ANCIENT SEN-LINE BODYWORK',
    tag: 'Energy & Flexibility',
    duration: '60 / 90 Mins',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
    desc: 'An ancient art of assisted stretching, pressure point relief, and energy meridian work for body flexibility and inner calm.',
    fullDescription: 'Often described as "assisted yoga," traditional Thai Massage is performed on a comfortable floor mat with loose clothing. Combining rhythmic compression along the body’s energy meridians (Sen lines), passive yoga-like stretches, and targeted acupressure, this dry massage unblocks stagnant vital energy, elongates tight ligaments, and leaves you feeling invigorated and centered.',
    benefits: [
      { title: 'Dynamic Flexibility', text: 'Assisted full-body stretches lengthen tight tendons and improve joint mobility.' },
      { title: 'Energy Flow Balancing', text: 'Stimulation of 10 primary Sen lines unblocks lethargy and recharges vitality.' },
      { title: 'Spinal Decompression', text: 'Gentle traction and twisting maneuvers decompress vertebrae and relieve hip tightness.' },
      { title: 'Mindful Grounding', text: 'Rhythmic rocking movements promote deep meditative awareness and mental clarity.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Attire & Herbal Foot Cleansing', desc: 'Slip into loose cotton attire followed by a traditional warm floral foot bath.' },
      { step: '02', title: 'Sen Line Palpation', desc: 'Rhythmic palm and thumb walking along lower body energy channels to stimulate circulation.' },
      { step: '03', title: 'Assisted Yoga Stretching', desc: 'Passive gentle backbends, spinal twists, and chest opening postures guided by therapist.' },
      { step: '04', title: 'Cranial & Facial Integration', desc: 'Acupressure points on the skull, temples, and neck to balance upper body energy.' }
    ],
    idealFor: 'Yoga enthusiasts, stiff joints, reduced mobility, low physical energy, and dry massage lovers.',
    targetAreas: 'Spine, Hips, Hamstrings, Quadriceps, Shoulders & Meridians',
    relatedSlugs: ['deep-tissue-massage', 'head-palm-massage', 'foot-massage']
  },

  // 6. Signature Massage
  {
    id: 6,
    slug: 'signature-massage',
    category: 'Massage Therapies',
    title: 'Signature Massage',
    eyebrow: 'VAYASA BESPOKE MASTERPIECE',
    tag: 'Bespoke Protocol',
    duration: '60 / 90 Mins',
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
    desc: 'A customized full-body therapy combining bespoke modalities to relieve stress and rejuvenate your physical and mental constitution.',
    fullDescription: 'The Vayasa Signature Massage is our master therapists’ tailor-made holistic experience. Beginning with an intuitive physical assessment, your therapist seamlessly harmonizes techniques from Swedish relaxation, deep tissue, Balinese long strokes, and warm herbal poultice therapy into one seamless, bespoke protocol crafted uniquely for your body on the day of treatment.',
    benefits: [
      { title: '100% Customized Care', text: 'Every stroke, oil blend, and pressure level is tuned specifically to your daily needs.' },
      { title: 'Multi-Modal Synergy', text: 'Combines the best of 4 global massage modalities for comprehensive relief.' },
      { title: 'Complete Restoration', text: 'Addresses surface muscle tension, mental fatigue, and deep chronic knots simultaneously.' },
      { title: 'Warm Poultice Infusion', text: 'Steamed organic Himalayan herbs penetrate deep into joint capsules and tight areas.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Intuitive Holistic Assessment', desc: 'In-depth consultation covering physical stress points, preferred pressures, and energy goals.' },
      { step: '02', title: 'Bespoke Herb & Oil Blending', desc: 'Custom compounding of cold-pressed oils and warm botanical extracts tailored to you.' },
      { step: '03', title: 'Multi-Technique Fusion', desc: 'Seamless combination of Balinese rolling, Swedish flow, and targeted deep tissue release.' },
      { step: '04', title: 'Warm Poultice Sealing', desc: 'Warm herbal compresses stamped over back and spine to lock in thermal restoration.' }
    ],
    idealFor: 'Anyone seeking the absolute highest standard of tailored luxury bodywork and complete renewal.',
    targetAreas: 'Full Body Custom Alignment',
    relatedSlugs: ['heavenly-pleasure-four-hand-therapy', 'couples-massage', 'aroma-massage']
  },

  // 7. Couples Massage
  {
    id: 7,
    slug: 'couples-massage',
    category: 'Massage Therapies',
    title: 'Couples Massage',
    eyebrow: 'SHARED SANCTUARY JOURNEY',
    tag: 'Private Suite',
    duration: '60 / 90 Mins',
    img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',
    desc: 'Reignite connection and unwind together with side-by-side treatments in our exclusive private sanctuary suite.',
    fullDescription: 'Designed for couples, close friends, or partners seeking shared serenity, our Couples Massage takes place inside a dedicated private sanctuary suite equipped with side-by-side treatment beds, soft ambient lighting, and bespoke aromatics. Two expert therapists deliver synchronized therapies tailored to each guest’s individual preference.',
    benefits: [
      { title: 'Shared Serenity', text: 'Deepen emotional connection through synchronized relaxation in a serene private suite.' },
      { title: 'Dual Customization', text: 'Each partner selects their own unique massage modality, pressure, and aroma blend.' },
      { title: 'Exclusive VIP Suite', text: 'Private changing suite, ambient shower facilities, and personal refreshment lounge.' },
      { title: 'Celebratory Indulgence', text: 'The ultimate anniversary, honeymoon, or romantic celebration experience in Guwahati.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Private Suite Welcome', desc: 'Welcome elixir and warm botanical rose foot baths for both partners side-by-side.' },
      { step: '02', title: 'Dual Scent Selection', desc: 'Individual aroma consultation allowing each guest to personalize their therapeutic oil.' },
      { step: '03', title: 'Side-by-Side Synchronized Massage', desc: 'Simultaneous 60 or 90-minute customized full-body massage delivered by two therapists.' },
      { step: '04', title: 'Suite Integration & Refreshments', desc: 'Private lounge time with gourmet herbal infusions, dried fruits, and soothing tea.' }
    ],
    idealFor: 'Couples, anniversaries, celebrations, mother-daughter retreats, and shared milestones.',
    targetAreas: 'Full Body for Two',
    relatedSlugs: ['signature-massage', 'heavenly-pleasure-four-hand-therapy', 'aroma-massage']
  },

  // 8. Head - Palm Massage
  {
    id: 8,
    slug: 'head-palm-massage',
    category: 'Massage Therapies',
    title: 'Head - Palm Massage',
    eyebrow: 'CRANIAL & DIGITAL FATIGUE RELIEF',
    tag: 'Acupressure Focus',
    duration: '30 / 45 Mins',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1512290900672-1f02e0ad0ba8?q=80&w=800&auto=format&fit=crop',
    desc: 'Relax your mind and hands with soothing head-palm acupressure massage to release digital eye strain and cranial pressure.',
    fullDescription: 'Specifically formulated to combat modern digital fatigue, this targeted therapy focuses on the micro-muscles and nerve endings of the scalp, neck, temples, and hands. By relieving pressure points associated with screen glare, computer mouse strain, and mental overload, it provides instant lightness and mental clarity.',
    benefits: [
      { title: 'Instant Tension Headache Relief', text: 'Cranial acupressure drains sinus pressure and dissolves temple tension.' },
      { title: 'Relieves Digital Hand Fatigue', text: 'Detailed palm and finger stretching releases carpal tunnel and keyboard stiffness.' },
      { title: 'Mental Reboot', text: 'Clears brain fog and enhances concentration through stimulated cranial circulation.' },
      { title: 'Hair Follicle Nourishment', text: 'Optional warm Ayurvedic brahmi oil strengthens hair roots and soothes scalp.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Cranial Tension Palpation', desc: 'Gentle pressure checks along the occipital ridge and scalp to locate stress zones.' },
      { step: '02', title: 'Scalp & Temple Acupressure', desc: 'Firm, circular fingertip strokes across scalp meridians to stimulate micro-blood flow.' },
      { step: '03', title: 'Detailed Hand & Wrist Reflexology', desc: 'Precision thumb walking across palm reflex points, wrist tendons, and individual fingers.' },
      { step: '04', title: 'Warm Neck Compression', desc: 'Warm botanical compress on the cervical spine to ground physical and mental energy.' }
    ],
    idealFor: 'Professionals, heavy computer users, headache sufferers, students, and quick lunchtime reboots.',
    targetAreas: 'Scalp, Temples, Neck, Forearms, Wrists, Palms & Fingers',
    relatedSlugs: ['foot-massage', 'facial-massage', 'swedish-massage']
  },

  // 9. Foot Massage
  {
    id: 9,
    slug: 'foot-massage',
    category: 'Massage Therapies',
    title: 'Foot Massage',
    eyebrow: 'ANCIENT REFLEXOLOGY THERAPY',
    tag: 'Reflexology',
    duration: '30 / 45 Mins',
    img: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    desc: 'Reflexology therapy that relieves tension, improves micro-circulation, and soothes tired feet with warm herbal oils and botanical balms.',
    fullDescription: 'Based on ancient reflexology principles where every organ and system corresponds to reflex points on the soles of your feet, this intensive therapy relieves lower leg fatigue, improves systemic circulation, and reduces fluid retention. Combined with warm camphor-peppermint balms and bamboo pressure sticks, it leaves you walking on air.',
    benefits: [
      { title: 'Systemic Reflex Stimulation', text: 'Balances internal bodily systems via targeted pressure on sole meridian zones.' },
      { title: 'Relieves Plantar & Ankle Fatigue', text: 'Melts foot arch soreness from standing, running, or travel exhaustion.' },
      { title: 'Reduces Lower Leg Edema', text: 'Upward lymphatic drainage strokes reduce swollen ankles and heavy legs.' },
      { title: 'Deep Relaxation Response', text: 'Stimulates thousands of nerve endings in the feet to soothe the entire nervous system.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Mineral Foot Soak', desc: 'Warm Epsom and Dead Sea salt soak with peppermint essential oils to refresh feet.' },
      { step: '02', title: 'Gentle Exfoliation', desc: 'Botanical scrub to slough away rough skin and prepare soles for deep pressure.' },
      { step: '03', title: 'Reflex Point Pressure Work', desc: 'Systematic reflexology pressure applied to heel, ball, arch, and toes using warm balm.' },
      { step: '04', title: 'Calf Lymphatic Drainage', desc: 'Long, soothing strokes up to the knee followed by warm herbal towel compresses.' }
    ],
    idealFor: 'Travelers, athletes, retail & medical professionals on their feet all day, and edema relief.',
    targetAreas: 'Soles, Toes, Ankles, Achilles Tendon & Calves',
    relatedSlugs: ['head-palm-massage', 'restorative-pedicures', 'swedish-massage']
  },

  // 10. Facial Massage
  {
    id: 10,
    slug: 'facial-massage',
    category: 'Massage Therapies',
    title: 'Facial Massage',
    eyebrow: 'LYMPHATIC GLOW & LIFTING',
    tag: 'Lymphatic Glow',
    duration: '45 Mins',
    img: 'https://img.magnific.com/premium-photo/woman-sleeping-hands-head-massage-relax-zen-resting-wellness-physical-therapy-spa-face-girl-salon-exfoliate-facial-healing-treatment-beauty-holistic-detox_590464-187988.jpg?semt=ais_hybrid&w=740&q=80',
    secondaryImg: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    desc: 'Glow naturally with rejuvenating facial massage that enhances lymphatic drainage, relieves jaw tension, and leaves skin lifted.',
    fullDescription: 'Our specialized Facial Massage is a non-invasive holistic lifting and lymphatic therapy. Using rhythmic sculpting strokes, gentle acupressure, and cold-pressed organic rosehip and jojoba oils, this ritual relaxes clenching jaw muscles, eliminates facial puffiness, stimulates collagen synthesis, and imparts a luminous, sculpted radiance.',
    benefits: [
      { title: 'Natural Facial Sculpting', text: 'Upward lifting strokes tone facial contours and define jawline aesthetics.' },
      { title: 'De-Puffing & Detox', text: 'Stimulates lymphatic drainage around under-eyes, cheeks, and collarbones.' },
      { title: 'TMJ & Jaw Relaxation', text: 'Releases chronic tension in masseter muscles caused by teeth grinding and stress.' },
      { title: 'Collagen Activation', text: 'Boosts micro-circulation for a youthful, dewy, and naturally illuminated complexion.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Gentle Botanical Cleanse', desc: 'Mild cleansing to remove impurities and prepare skin for therapeutic massage.' },
      { step: '02', title: 'Aromatherapy Facial Steaming', desc: 'Warm floral mist to soften facial tissues and encourage deep product absorption.' },
      { step: '03', title: 'Sculpting & Lymphatic Drainage', desc: 'Kobus-inspired upward lifting movements and acupressure across facial contours.' },
      { step: '04', title: 'Cooling Jade Stone Seal', desc: 'Chilled jade rollers glide over skin to close pores, calm redness, and lock in radiance.' }
    ],
    idealFor: 'Dull complexion, morning puffiness, jaw clenching, pre-event prep, and natural anti-aging.',
    targetAreas: 'Face, Jawline, Cheeks, Under-Eyes, Neck & Decollete',
    relatedSlugs: ['tailored-facial-treatment', 'radiance-dtan-pack', 'head-palm-massage']
  },

  // 11. Hair Care & Styling Services
  {
    id: 11,
    slug: 'hair-care-and-styling-services',
    category: 'Salon & Hair Care',
    title: 'Hair Care & Styling Services',
    eyebrow: 'PRECISION COIFFURE & NOURISHMENT',
    tag: 'Precision Styling',
    duration: 'Customized',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    desc: 'Transform your look with expert hair care, styling, conditioning, and precision cuts that bring out your natural hair vitality.',
    fullDescription: 'Our bespoke Hair Care & Styling sanctuary delivers precision artistry tailored to your facial structure, hair texture, and lifestyle. From master haircutting and customized deep-conditioning botanical hair spas to voluminous blowouts and event styling, our master stylists elevate your hair’s natural health, shine, and silhouette.',
    benefits: [
      { title: 'Customized Precision Cuts', text: 'Tailored cutting techniques that complement your unique face shape and texture.' },
      { title: 'Deep Scalp & Hair Spa', text: 'Intensive restorative masks restore moisture balance to dry, brittle, or treated hair.' },
      { title: 'Heat & Humidity Shielding', text: 'Premium salon products protect hair from Assam’s tropical humidity and heat.' },
      { title: 'Signature Voluminous Blowout', text: 'Long-lasting salon blow-dries with mirror-like shine and bounce for any occasion.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Styling Consultation', desc: 'One-on-one review of your hair goals, scalp condition, and desired silhouette.' },
      { step: '02', title: 'Therapeutic Hair Wash & Scalp Massage', desc: 'Cleansing wash with sulfate-free salon botanicals and invigorating scalp acupressure.' },
      { step: '03', title: 'Precision Haircutting / Spa Treatment', desc: 'Expert wet cutting or application of deep reconstructive conditioning mask.' },
      { step: '04', title: 'Finishing Blowout & Serum Seal', desc: 'Professional heat-styling, smooth blowout, and shine serum finishing touch.' }
    ],
    idealFor: 'Regular hair maintenance, special event styling, hair transformations, and dry scalp repair.',
    targetAreas: 'Hair, Scalp & Silhouette',
    relatedSlugs: ['hair-straightening', 'keratin-treatment', 'bespoke-bridal-makeup']
  },

  // 12. Hair Straightening
  {
    id: 12,
    slug: 'hair-straightening',
    category: 'Salon & Hair Care',
    title: 'Hair Straightening',
    eyebrow: 'PERMANENT SILK SMOOTHING',
    tag: 'Sleek & Frizz-Free',
    duration: 'Professional Session',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
    desc: 'Get sleek, smooth, and frizz-free hair with expert straightening treatments for a flawless, long-lasting silk finish.',
    fullDescription: 'Achieve effortlessly sleek, glass-like, pin-straight hair with our professional hair straightening systems. Formulated with advanced thermal reconditioning and nourishing conditioning agents, this professional service restructures unruly curls, eliminates frizz permanently, and leaves your hair silky, glossy, and incredibly manageable in every climate.',
    benefits: [
      { title: '100% Frizz-Free Finish', text: 'Permanent transformation from stubborn curls and waves into silky straight tresses.' },
      { title: 'Daily Styling Time Saver', text: 'Wake up with salon-ready, effortless smooth hair without daily flat ironing.' },
      { title: 'High-Gloss Glass Shine', text: 'Reflective hair cuticles that bounce light with diamond-like luminosity.' },
      { title: 'Humidity-Resistant Results', text: 'Zero reversion or puffiness even in humid weather conditions.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Hair Elasticity & Health Diagnosis', desc: 'Thorough hair strand analysis to determine optimal formula strength and processing time.' },
      { step: '02', title: 'Clarifying Cleansing & Prep', desc: 'Removal of all product buildup followed by thermal protective bonding treatments.' },
      { step: '03', title: 'Formula Processing & Precision Flat Ironing', desc: 'Expert application of straightening solution followed by micro-section flat ironing.' },
      { step: '04', title: 'Neutralizing & Silk Mask Seal', desc: 'Neutralizing treatment locked in with deep conditioning silk masks for lasting softness.' }
    ],
    idealFor: 'Unruly curls, coarse frizzy hair, thick wavy textures, and those seeking sleek permanent straightness.',
    targetAreas: 'Full Length Hair',
    relatedSlugs: ['keratin-treatment', 'hair-care-and-styling-services', 'bespoke-bridal-makeup']
  },

  // 13. Keratin Treatment
  {
    id: 13,
    slug: 'keratin-treatment',
    category: 'Salon & Hair Care',
    title: 'Keratin Treatment',
    eyebrow: 'RESTORTIVE PROTEIN INFUSION',
    tag: 'Protein Therapy',
    duration: 'Restorative Care',
    img: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    desc: 'Restore your hair’s natural shine and strength with professional keratin protein infusion for smooth, manageable resilience.',
    fullDescription: 'Our salon Keratin Protein Infusion is a restorative powerhouse designed for damaged, chemically treated, or frizzy hair. By infusing bio-identical keratin proteins deep into the porous hair cortex and sealing the outer cuticle with gentle heat, this treatment strengthens weakened bonds, reduces 95% of frizz, and delivers soft, lustrous, touchable hair that lasts up to 4–6 months.',
    benefits: [
      { title: 'Damaged Cuticle Reconstruction', text: 'Fills in porous gaps in the hair shaft caused by coloring, bleach, or sun exposure.' },
      { title: 'Eliminates 95% of Frizz', text: 'Transforms wild, frizzy strands into smooth, supple, manageable silk.' },
      { title: 'Maintains Natural Bounce', text: 'Smooths without making hair limp or flat, retaining natural body and movement.' },
      { title: 'Lasting 4-6 Month Durability', text: 'Long-lasting salon results with proper sulfate-free home care regimen.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Deep Clarification Wash', desc: 'Dual wash with clarifying shampoo to open the hair cuticle for maximum protein absorption.' },
      { step: '02', title: 'Precision Keratin Coating', desc: 'Even, section-by-section application of bio-active keratin protein infusion.' },
      { step: '03', title: 'Thermal Cuticle Sealing', desc: 'Precision blow-dry and micro-ironing to lock the keratin securely into the hair cortex.' },
      { step: '04', title: 'Home Care Guidance & Aftercare', desc: 'Personalized product recommendations to maximize treatment longevity and shine.' }
    ],
    idealFor: 'Bleached/colored hair, heat-damaged strands, frizzy wavy hair, and anyone wanting soft manageable texture.',
    targetAreas: 'Hair Cortex & Cuticles',
    relatedSlugs: ['hair-straightening', 'hair-care-and-styling-services', 'luxury-manicures']
  },

  // 14. Luxury Manicures
  {
    id: 14,
    slug: 'luxury-manicures',
    category: 'Beauty & Skin',
    title: 'Luxury Manicures',
    eyebrow: 'ARTISANAL HAND SPA & POLISH',
    tag: 'Nail Artistry',
    duration: '45 Mins',
    img: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800&auto=format&fit=crop',
    desc: 'Treat yourself to a luxurious manicure with organic botanical exfoliation, nail shaping, delicate cuticle care, and polish.',
    fullDescription: 'Our Luxury Manicure is far more than nail shaping—it is a restorative spa experience for your hands and arms. Includes organic sugar exfoliation, delicate cuticle treatment, relaxing hand and forearm acupressure massage with rich shea butter, and professional high-shine buffing or salon gel lacquer application.',
    benefits: [
      { title: 'Silky Soft Hand Restoration', text: 'Gentle fruit-acid exfoliation removes dry dead skin, revealing supple hands.' },
      { title: 'Healthy Cuticle & Nail Growth', text: 'Hydrating cuticle serums prevent hangnails, peeling, and nail bed brittleness.' },
      { title: 'Forearm & Hand Tension Relief', text: 'Acupressure massage relieves digital keyboard strain in wrists and fingers.' },
      { title: 'Long-Lasting High-Gloss Finish', text: 'Flawless polish application or buffing for sophisticated elegance.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Aromatic Hand Soak', desc: 'Warm herbal soak with rose petals and essential oils to soften cuticles.' },
      { step: '02', title: 'Organic Sugar Polish Exfoliation', desc: 'Gentle sugar scrub massaged into hands and forearms to slough away roughness.' },
      { step: '03', title: 'Precision Nail & Cuticle Shaping', desc: 'Detailed clipping, filing, buffing, and gentle cuticle conditioning.' },
      { step: '04', title: 'Hand Massage & Polish Application', desc: 'Nourishing shea butter massage followed by your choice of salon lacquer or buffing.' }
    ],
    idealFor: 'Dry hands, rough cuticles, regular grooming, bridal preparation, and self-care indulgence.',
    targetAreas: 'Fingernails, Cuticles, Palms, Wrists & Forearms',
    relatedSlugs: ['restorative-pedicures', 'bespoke-bridal-makeup', 'tailored-facial-treatment']
  },

  // 15. Restorative Pedicures
  {
    id: 15,
    slug: 'restorative-pedicures',
    category: 'Beauty & Skin',
    title: 'Restorative Pedicures',
    eyebrow: 'MINERAL SOLE HEALING',
    tag: 'Foot Restoration',
    duration: '45 / 60 Mins',
    img: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    desc: 'Soothing pedicure treatments including mineral foot bath, scrub, relaxing acupressure massage, and expert nail care.',
    fullDescription: 'Step into pure comfort with our Restorative Pedicure. Relieve tired, calloused feet with a therapeutic warm mineral soak, deep heel exfoliation, expert nail shaping, cuticle therapy, and an invigorating calf and foot massage with essential oils that restores soft, baby-smooth soles and flawless toenails.',
    benefits: [
      { title: 'Callus & Cracked Heel Therapy', text: 'Intensive enzymatic treatments gently dissolve stubborn calluses and rough heels.' },
      { title: 'Fatigue & Swelling Relief', text: 'Cooling peppermint foot massage stimulates sluggish lymphatic circulation.' },
      { title: 'Pristine Toenail Hygiene', text: 'Detailed hygienic trimming, shaping, and cuticle clearing prevents ingrown nails.' },
      { title: 'Deep Sole Softening', text: 'Warm botanical paraffin or rich balm treatment locks in long-lasting moisture.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Hydro-Jet Mineral Bath', desc: 'Warm bubbling foot bath with Dead Sea salts and antibacterial tea tree essence.' },
      { step: '02', title: 'Callus Smoothing & Exfoliation', desc: 'Painless heel smoothing followed by a volcanic pumice scrub.' },
      { step: '03', title: 'Nail Grooming & Cuticle Care', desc: 'Precision toenail clipping, filing, and gentle cuticle treatment.' },
      { step: '04', title: 'Acupressure Massage & Lacquer', desc: 'Relaxing foot and lower leg massage followed by chip-resistant polish application.' }
    ],
    idealFor: 'Cracked heels, tired feet, runners, travelers, sandal season, and regular hygienic maintenance.',
    targetAreas: 'Toenails, Cuticles, Soles, Heels & Lower Legs',
    relatedSlugs: ['luxury-manicures', 'foot-massage', 'gentle-waxing-services']
  },

  // 16. Bespoke Bridal Makeup
  {
    id: 16,
    slug: 'bespoke-bridal-makeup',
    category: 'Beauty & Skin',
    title: 'Bespoke Bridal Makeup',
    eyebrow: 'HAUTE COUTURE BRIDAL ARTISTRY',
    tag: 'Bridal Artistry',
    duration: 'Bridal Package',
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    desc: 'Look and feel stunning on your special day with bridal makeup services customized to suit your unique vision and celebration style.',
    fullDescription: 'Your wedding day is one of the most sacred moments of your life. Our Bespoke Bridal Makeup artists craft timeless, radiant, camera-ready bridal aesthetics tailored to your wedding attire, jewelry, skin tone, and celebration themes (Traditional Assamese, Mehendi, Sangeet, Reception). Using high-definition (HD) luxury cosmetics, we ensure a glowing, flawless look that lasts all day and night.',
    benefits: [
      { title: 'High-Definition Waterproof Glamour', text: 'Flawless, lightweight coverage that resists tears, sweat, and bright photography lights.' },
      { title: 'Customized to Bridal Attire', text: 'Harmonious color palettes tailored to your bridal lehenga, mekhela sador, or gown.' },
      { title: 'Pre-Bridal Skin Prep', text: 'Hydrating sheet masks and primers ensure your base looks skin-like and luminous.' },
      { title: 'Complete Bridal Package Options', text: 'Includes hair styling, jewelry setting, dupatta draping, and touch-up kits.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Bridal Vision Consultation & Trial', desc: 'Comprehensive review of your wedding outfit, skin type, and bridal inspiration.' },
      { step: '02', title: 'Luxury Skincare Pre-Base', desc: 'Hyaluronic hydration, de-puffing eye masks, and pore-refining primer application.' },
      { step: '03', title: 'HD Airbrush / Custom Makeup', desc: 'Master foundation blending, eye artistry, sculpting contours, and lip color setting.' },
      { step: '04', title: 'Hairstyling, Draping & Setting', desc: 'Intricate bridal hair design with floral accents, jewelry placement, and setting mist.' }
    ],
    idealFor: 'Brides, engagement ceremonies, sangeet/reception events, and bridesmaids.',
    targetAreas: 'Face, Neck, Hair, Draping & Overall Bridal Look',
    relatedSlugs: ['tailored-facial-treatment', 'luxury-manicures', 'radiance-dtan-pack']
  },

  // 17. Tailored Facial Treatment
  {
    id: 17,
    slug: 'tailored-facial-treatment',
    category: 'Beauty & Skin',
    title: 'Tailored Facial Treatment',
    eyebrow: 'ADVANCED BOTANICAL DERMA CARE',
    tag: 'Skin Complexion',
    duration: '60 Mins',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://img.magnific.com/premium-photo/woman-sleeping-hands-head-massage-relax-zen-resting-wellness-physical-therapy-spa-face-girl-salon-exfoliate-facial-healing-treatment-beauty-holistic-detox_590464-187988.jpg?semt=ais_hybrid&w=740&q=80',
    desc: 'Tailored treatments for every skin type to deeply nourish, hydrate, and rejuvenate your complexion with wild botanical actives.',
    fullDescription: 'Our Tailored Facial Treatment begins with a professional skin diagnostic to address specific conditions: deep hydration, anti-aging collagen stimulation, acne clarification, or radiant illumination. Combining double cleansing, botanical enzymatic exfoliation, steam extractions, customized mask applications, and sculpting lymphatic massage.',
    benefits: [
      { title: 'Custom Formula for Your Skin Type', text: 'Formulated for dry, oily, sensitive, mature, or combination skin types.' },
      { title: 'Deep Pore Purification', text: 'Gently extracts impurities and blackheads while minimizing enlarged pores.' },
      { title: 'Intense Cellular Hydration', text: 'Hyaluronic acid and plant antioxidants restore a plump, dewy bounce.' },
      { title: 'Instant Complexion Radiance', text: 'Leaves skin noticeably smoother, firmer, and glowing from within.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Professional Derma Analysis', desc: 'Diagnostic evaluation of skin moisture, lipid barrier, and pore health.' },
      { step: '02', title: 'Double Cleanse & Botanical Peel', desc: 'Mild cleansing followed by enzymatic exfoliation under gentle steam.' },
      { step: '03', title: 'Custom Serum & Lymphatic Massage', desc: 'High-potency botanical serum infused through Kobido lifting techniques.' },
      { step: '04', title: 'Therapeutic Treatment Mask & SPF', desc: 'Targeted sheet or clay mask followed by barrier-repair moisturizer and sunscreen.' }
    ],
    idealFor: 'Congested skin, dehydration, dullness, fine lines, uneven texture, and monthly skin upkeep.',
    targetAreas: 'Face, Neck & Decollete',
    relatedSlugs: ['radiance-dtan-pack', 'facial-massage', 'bespoke-bridal-makeup']
  },

  // 18. Gentle Waxing Services
  {
    id: 18,
    slug: 'gentle-waxing-services',
    category: 'Beauty & Skin',
    title: 'Gentle Waxing Services',
    eyebrow: 'SMOOTH BOTANICAL EPILATION',
    tag: 'Smooth Finish',
    duration: 'Customized Area',
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1512290900672-1f02e0ad0ba8?q=80&w=800&auto=format&fit=crop',
    desc: 'Gentle, hygienic, and smooth waxing services for soft, hair-free skin with soothing organic post-care oils.',
    fullDescription: 'Experience painless, hygienic waxing using premium liposoluble wax formulations enriched with chamomile, aloe vera, and titanium dioxide. Designed specifically for sensitive skin, our epilation services leave your skin silky, soft, and stubble-free for weeks, followed by soothing lavender and tea tree aftercare balms.',
    benefits: [
      { title: 'Gentle on Sensitive Skin', text: 'Low-temperature liposoluble waxes adhere to hair, not skin, minimizing discomfort.' },
      { title: 'Silky Smooth for 3-4 Weeks', text: 'Removes hair directly from the root for significantly slower and finer regrowth.' },
      { title: 'Ultra-Hygienic Protocol', text: 'Strict single-use spatulas, sanitized strips, and clinical hygiene standards.' },
      { title: 'Soothing Anti-Inflammatory Aftercare', text: 'Calming post-wax botanical oils eliminate redness and prevent ingrown hairs.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Skin Sanitization & Talc Prep', desc: 'Gentle cleansing and soothing talc application to ensure optimal wax adhesion.' },
      { step: '02', title: 'Precision Warm Wax Application', desc: 'Smooth, swift epilation of desired areas (Full Arms, Legs, Underarms, Bikini/Brazilian, Full Body).' },
      { step: '03', title: 'Cooling Post-Wax Soothing Mist', desc: 'Application of chilled aloe vera and chamomile gel to immediately calm follicles.' },
      { step: '04', title: 'Nourishing Anti-Ingrown Oil', desc: 'Lightweight botanical oil massage to lock in hydration and ensure flawless skin.' }
    ],
    idealFor: 'Full body smoothing, facial hair removal, pre-vacation grooming, and sensitive skin maintenance.',
    targetAreas: 'Arms, Legs, Underarms, Back, Bikini & Face',
    relatedSlugs: ['radiance-dtan-pack', 'luxury-manicures', 'restorative-pedicures']
  },

  // 19. Radiance D-TAN Pack
  {
    id: 19,
    slug: 'radiance-dtan-pack',
    category: 'Beauty & Skin',
    title: 'Radiance D-TAN Pack',
    eyebrow: 'MELANIN CLARIFYING TREATMENT',
    tag: 'Tan Removal',
    duration: '30 / 45 Mins',
    img: 'https://images.unsplash.com/photo-1512290900672-1f02e0ad0ba8?q=80&w=1200&auto=format&fit=crop',
    secondaryImg: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    desc: 'Say goodbye to tan and hyperpigmentation with active botanical D-TAN treatment for illuminated and glowing skin.',
    fullDescription: 'Restore your natural, luminous complexion with our high-potency organic Radiance D-TAN Pack. Formulated with natural kojic acid, milk protein extracts, licorice root, and eucalyptus oil, this treatment breaks down stubborn epidermal sun tan, corrects hyperpigmentation, and eliminates dark patches without harmful bleach or irritation.',
    benefits: [
      { title: 'Instant Sun Tan Reversal', text: 'Visibly lightens sun tan and pigmentation after a single application session.' },
      { title: '100% Bleach-Free & Non-Irritating', text: 'Organic milk proteins and botanical acids brighten skin safely.' },
      { title: 'Evens Uneven Skin Tone', text: 'Fades dark spots, neck tanning, and blemishes for a unified complexion.' },
      { title: 'Deep Hydration & Cooling Relief', text: 'Eucalyptus and aloe soothe sun-damaged, overheated skin barriers.' }
    ],
    ritualJourney: [
      { step: '01', title: 'Deep Cleansing & Steam', desc: 'Gentle foaming cleanse to eliminate environmental pollution and surface oils.' },
      { step: '02', title: 'Botanical D-TAN Pack Application', desc: 'Generous application of kojic-licorice active pack across face, neck, and desired areas.' },
      { step: '03', title: 'Therapeutic Activation (15-20 Mins)', desc: 'Resting with chilled cucumber eye pads while active botanicals dissolve melanin deposits.' },
      { step: '04', title: 'Cooling Wash & Brightening Serum', desc: 'Gentle sponge removal followed by vitamin C radiance serum and broad-spectrum sunscreen.' }
    ],
    idealFor: 'Post-vacation tanning, sun exposure, uneven skin tone, dull face and neck, and pre-event brightness.',
    targetAreas: 'Face, Neck, Arms, Back & Full Body',
    relatedSlugs: ['tailored-facial-treatment', 'facial-massage', 'gentle-waxing-services']
  }
];

export const getServiceBySlug = (slug) => {
  return servicesData.find((s) => s.slug === slug);
};
