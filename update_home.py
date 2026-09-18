import re

with open('src/pages/Home.jsx', 'r') as f:
    content = f.read()

# 1. Add imports
if 'import Magnetic from' not in content:
    content = content.replace("import { motion", "import Magnetic from '../components/Magnetic';\nimport RevealText from '../components/RevealText';\nimport { motion")

# 2. Add Levitation to Images
# Wrap img tags in motion.div
img_pattern = r'(<img[^>]+className="[^"]*w-full h-full object-cover[^>]+>)'
def wrap_levitation(match):
    img = match.group(1)
    # Remove transition-transform and group-hover:scale-105 from img if wrapped in levitation
    img = img.replace("transition-transform duration-1000 group-hover:scale-105", "")
    return f'<motion.div animate={{{{ y: [0, -15, 0] }}}} transition={{{{ repeat: Infinity, duration: 8, ease: "easeInOut" }}}} className="w-full h-full transition-transform duration-1000 group-hover:scale-105">{img}</motion.div>'
    
# Wait, let's keep it simple: Just change the img container or add a motion.div wrapper around the img.
# Actually, the user asked for levitation parallax animation to images.
# A simpler way is to replace `<img ` with `<motion.img animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} `
content = content.replace(
    '<img\n', 
    '<motion.img\n                  animate={{ y: [0, -10, 0] }}\n                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}\n'
)

# 3. Wrap Headings in RevealText
# Replace h2, h3, h4 tags
headings = [
    '<h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-charcoal dark:text-pearl mb-4 font-light">\n            Discover True Serenity\n          </h2>',
    '<h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-charcoal dark:text-pearl mb-4 font-light">\n                  The Art of Wellness\n                </h3>',
    '<h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-charcoal dark:text-pearl mb-4 font-light">\n                  Thermal Oasis\n                </h3>',
    '<h2 className="text-3xl md:text-4xl font-serif text-charcoal dark:text-pearl font-light">\n                Holistic Journeys\n              </h2>',
    '<h2 className="text-3xl md:text-5xl font-serif text-charcoal dark:text-pearl mb-16 font-light">\n            The World of Sanctuary\n          </h2>',
    '<h2 className="text-xl md:text-2xl font-serif font-light tracking-wide">\n              Begin Your Journey\n            </h2>'
]

for h in headings:
    content = content.replace(h, f'<RevealText>{h}</RevealText>')

# Also for h4 in the map
content = content.replace(
    '<h4 className="text-lg md:text-xl text-charcoal dark:text-pearl mb-3 font-serif font-light">\n                      {item.title}\n                    </h4>',
    '<RevealText>\n<h4 className="text-lg md:text-xl text-charcoal dark:text-pearl mb-3 font-serif font-light">\n                      {item.title}\n                    </h4>\n</RevealText>'
)
content = content.replace(
    '<h4 className="text-xl md:text-2xl text-charcoal dark:text-pearl mb-4 font-serif font-light">\n                  Thoughtful Gestures\n                </h4>',
    '<RevealText>\n<h4 className="text-xl md:text-2xl text-charcoal dark:text-pearl mb-4 font-serif font-light">\n                  Thoughtful Gestures\n                </h4>\n</RevealText>'
)
content = content.replace(
    '<h4 className="text-xl md:text-2xl text-charcoal dark:text-pearl mb-4 font-serif font-light">\n                  Exclusive Skincare Collection\n                </h4>',
    '<RevealText>\n<h4 className="text-xl md:text-2xl text-charcoal dark:text-pearl mb-4 font-serif font-light">\n                  Exclusive Skincare Collection\n                </h4>\n</RevealText>'
)
content = content.replace(
    '<h4 className="text-xl md:text-2xl text-charcoal dark:text-pearl mb-4 font-serif font-light">\n                  Aromatherapy Essentials\n                </h4>',
    '<RevealText>\n<h4 className="text-xl md:text-2xl text-charcoal dark:text-pearl mb-4 font-serif font-light">\n                  Aromatherapy Essentials\n                </h4>\n</RevealText>'
)

# 4. Wrap Links in Magnetic
content = content.replace(
    '<a href="#" className="text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white transition-colors">\n            Discover more\n          </a>',
    '<Magnetic><a href="#" className="text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white transition-colors">\n            Discover more\n          </a></Magnetic>'
)

content = content.replace(
    '<a href="#" className="inline-block text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white transition-colors">\n                        Discover more\n                      </a>',
    '<Magnetic><a href="#" className="inline-block text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white transition-colors">\n                        Discover more\n                      </a></Magnetic>'
)

content = content.replace(
    '<a href="#" className="inline-block text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white transition-colors">\n                    Shop now\n                  </a>',
    '<Magnetic><a href="#" className="inline-block text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white transition-colors">\n                    Shop now\n                  </a></Magnetic>'
)

content = content.replace(
    '<a href="#" className="inline-block text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white transition-colors">\n                    Discover more\n                  </a>',
    '<Magnetic><a href="#" className="inline-block text-xs uppercase tracking-[0.15em] pb-1 border-b border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white transition-colors">\n                    Discover more\n                  </a></Magnetic>'
)

content = content.replace(
    '<button className="bg-white dark:bg-alabaster text-black dark:text-charcoal px-8 py-3 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-light hover:bg-gray-200 transition-colors whitespace-nowrap">\n            Reserve Now\n          </button>',
    '<Magnetic>\n<button className="bg-white dark:bg-alabaster text-black dark:text-charcoal px-8 py-3 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-light hover:bg-gray-200 transition-colors whitespace-nowrap">\n            Reserve Now\n          </button>\n</Magnetic>'
)

with open('src/pages/Home.jsx', 'w') as f:
    f.write(content)
