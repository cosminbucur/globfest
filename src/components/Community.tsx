import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1543589077-47d81606c1ad?q=80&w=1200&auto=format&fit=crop",
    alt: "Globfest Workshop",
    title: "Hand-Painted with Love"
  },
  {
    url: "https://images.unsplash.com/photo-1576692139733-a742e4749f6a?q=80&w=800&auto=format&fit=crop",
    alt: "Christmas Bauble",
    title: "Celestial Details"
  },
  {
    url: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=800&auto=format&fit=crop",
    alt: "Festive Tree",
    title: "A Tree of Stories"
  },
  {
    url: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
    alt: "Christmas Gifts",
    title: "Gifts wrapped in Joy"
  },
  {
    url: "https://images.unsplash.com/photo-1482115697111-5323d2400e93?q=80&w=1200&auto=format&fit=crop",
    alt: "Winter Magic",
    title: "Winter Wonderland"
  },
  {
    url: "https://images.unsplash.com/photo-1544208062-7360bf0b377b?q=80&w=800&auto=format&fit=crop",
    alt: "Glass Blowing",
    title: "Tradition in Motion"
  },
  {
    url: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=800&auto=format&fit=crop",
    alt: "Family Gathering",
    title: "Togetherness"
  },
  {
    url: "https://images.unsplash.com/photo-1514364001397-c86727a9b54e?q=80&w=800&auto=format&fit=crop",
    alt: "Cozy Home",
    title: "Warm Memories"
  },
  {
    url: "https://images.unsplash.com/photo-1575200315802-dbfa890da801?q=80&w=800&auto=format&fit=crop",
    alt: "Snowy Cabin",
    title: "Evening Hearth"
  },
  {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    alt: "Golden Lights",
    title: "Sparkle & Glow"
  },
  {
    url: "https://images.unsplash.com/photo-1543573852-1a71a6ce19bc?q=80&w=800&auto=format&fit=crop",
    alt: "Red Bauble",
    title: "Classic Spirit"
  },
  {
    url: "https://images.unsplash.com/photo-1545631246-44b8bc01d1d8?q=80&w=800&auto=format&fit=crop",
    alt: "Christmas Cookies",
    title: "Homemade Joy"
  },
  {
    url: "https://images.unsplash.com/photo-1512470676228-44473347b856?q=80&w=800&auto=format&fit=crop",
    alt: "Candy Canes",
    title: "Sweet Traditions"
  },
  {
    url: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?q=80&w=800&auto=format&fit=crop",
    alt: "Snowy Pine",
    title: "Natural Beauty"
  },
  {
    url: "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?q=80&w=800&auto=format&fit=crop",
    alt: "Christmas Market",
    title: "Festive Vibes"
  },
  {
    url: "https://images.unsplash.com/photo-1548545041-c6374828f415?q=80&w=800&auto=format&fit=crop",
    alt: "Fireplace",
    title: "Cozy Evenings"
  },
  {
    url: "https://images.unsplash.com/photo-1512418490979-92798ccc1380?q=80&w=800&auto=format&fit=crop",
    alt: "Hot Cocoa",
    title: "Winter Comfort"
  },
  {
    url: "https://images.unsplash.com/photo-1576483515747-0c151475c742?q=80&w=800&auto=format&fit=crop",
    alt: "Star Ornament",
    title: "Guiding Light"
  },
  {
    url: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=800&auto=format&fit=crop",
    alt: "Reindeer Decor",
    title: "Forest Friends"
  },
  {
    url: "https://images.unsplash.com/photo-1545048702-793e24bb1c33?q=80&w=800&auto=format&fit=crop",
    alt: "Snowman",
    title: "Frosty Smiles"
  }
];

const videos = [
  {
    id: "fZ1i1LW9fCw",
    year: "2025",
    title: "Globfest 2025 Highlights"
  },
  {
    id: "-9KPYdEMyTM",
    year: "2024",
    title: "Globfest 2024 Magic"
  }
];

const timelineEvents = [
  {
    name: "Globfest 2025: Aurora Boreală",
    description: "O seară magică sub culorile dansatoare ale nordului, unde am celebrat lumina și speranța.",
    date: "10 Dec, 2025",
    place: "Palatul Bragadiru",
    theme: "Aurora Boreala",
    guests: 120,
    baubles: 450,
    photo: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Globfest 2024: Cosmos",
    description: "Călătorie printre stele și galaxii pictate pe sticlă, o aventură infinită a creativității.",
    date: "28 Nov, 2024",
    place: "Sky Tower",
    theme: "Cosmos",
    guests: 100,
    baubles: 350,
    photo: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Globfest 2023: Micul Prinț",
    description: "Fun times with beautiful people, redescoperind copilăria prin ochii Micului Prinț.",
    date: "22 Nov, 2023",
    place: "City Grill",
    theme: "Micul Print",
    guests: 80,
    baubles: 200,
    photo: "https://images.unsplash.com/photo-1581091215307-9548b759c363?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Globfest 2022: Tradiție",
    description: "Rădăcini românești și motive străvechi transpuse în artă modernă.",
    date: "05 Dec, 2022",
    place: "Muzeul Satului",
    theme: "Traditional",
    guests: 60,
    baubles: 150,
    photo: "https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Globfest 2021: Românesc",
    description: "Prima noastră celebrare a portului popular și a spiritului românesc autentic.",
    date: "30 Nov, 2021",
    place: "Hanul lui Manuc",
    theme: "Romanesc",
    guests: 50,
    baubles: 120,
    photo: "https://images.unsplash.com/photo-1512418490979-92798ccc1380?q=80&w=800&auto=format&fit=crop"
  }
];

const IMAGES_PER_PAGE = 8;

export default function Community({ t }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  // Modal navigation
  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.url === selectedImage.url);
    let nextIndex;
    if (direction === "next") {
      nextIndex = (currentIndex + 1) % images.length;
    } else {
      nextIndex = (currentIndex - 1 + images.length) % images.length;
    }
    setSelectedImage(images[nextIndex]);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.community.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed italic">
            "{t.community.subtitle}"
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {currentImages.map((image) => (
            <div
              key={image.url}
              className="relative group rounded-3xl overflow-hidden shadow-xl cursor-zoom-in"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </h3>
                <p className="text-xs text-white/70 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {image.alt}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div className="mt-20 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-4 rounded-full bg-white shadow-lg border border-gray-100 text-gray-600 hover:text-christmas-red hover:border-christmas-red transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
              >
                <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-full font-bold transition-all ${
                      currentPage === i + 1 
                        ? "bg-christmas-red text-white shadow-lg shadow-christmas-red/30 scale-110" 
                        : "bg-white text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-4 rounded-full bg-white shadow-lg border border-gray-100 text-gray-600 hover:text-christmas-red hover:border-christmas-red transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
              >
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
              {t.community.page} {currentPage} {t.community.of} {totalPages}
            </p>
          </div>
        )}

        {/* Video Section */}
        <div className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.community.videoTitle}
            </h2>
            <p className="text-lg text-gray-600">
              {t.community.videoSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-100 mb-6 group-hover:shadow-christmas-red/10 transition-shadow duration-500">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex items-center justify-between px-4">
                  <h3 className="text-xl font-bold text-gray-900">{video.title}</h3>
                  <span className="px-4 py-1.5 bg-christmas-red/10 text-christmas-red rounded-full text-sm font-bold">
                    {video.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-40 relative py-20 px-4 md:px-0 -mx-4 md:-mx-0 rounded-[4rem] bg-gray-50/30 border border-gray-100/50">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.community.timelineTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.community.timelineSubtitle}
            </p>
          </motion.div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-christmas-red/50 via-christmas-green/50 to-christmas-red/50 hidden md:block" />

            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-0`}
                >
                  {/* Content Container */}
                  <div className="flex-1 w-full md:w-auto">
                    <div className={`flex flex-col ${
                      index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"
                    }`}>
                      <span className="text-christmas-red font-bold text-sm tracking-widest uppercase mb-2">
                        {event.date}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.name}</h3>
                      <p className="text-gray-600 max-w-md leading-relaxed mb-6">
                        {event.description}
                      </p>
                      
                      <div className={`grid grid-cols-2 gap-4 w-full max-w-md ${
                        index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      }`}>
                        <div className="bg-gray-50/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100">
                          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t.community.eventPlace}</p>
                          <p className="text-sm font-semibold text-gray-800">{event.place}</p>
                        </div>
                        <div className="bg-gray-50/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100">
                          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t.community.eventTheme}</p>
                          <p className="text-sm font-semibold text-gray-800">{event.theme}</p>
                        </div>
                        {event.guests && (
                          <div className="bg-gray-50/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100">
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t.community.eventGuests}</p>
                            <p className="text-sm font-semibold text-gray-800">{event.guests}</p>
                          </div>
                        )}
                        {event.baubles && (
                          <div className="bg-gray-50/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100">
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t.community.eventBaubles}</p>
                            <p className="text-sm font-semibold text-gray-800">{event.baubles}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Icon/Dot in Center */}
                  <div className="relative z-10 flex items-center justify-center md:w-32">
                    <div className="w-4 h-4 rounded-full bg-christmas-red ring-8 ring-christmas-red/10 shadow-[0_0_20px_rgba(185,28,28,0.4)]" />
                  </div>

                  {/* Photo Container */}
                  <div className="flex-1 w-full md:w-auto">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group ${
                        index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      } max-w-sm`}
                    >
                      <img 
                        src={event.photo} 
                        alt={event.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center border-t border-gray-100 pt-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 text-christmas-red font-bold text-xl hover:text-christmas-green transition-colors cursor-pointer group"
          >
            <span>Share your magic #Globfest</span>
            <div className="w-10 h-10 rounded-full bg-christmas-red/10 flex items-center justify-center group-hover:bg-christmas-green/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Navigation Arrows */}
            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 hidden md:block z-[110]"
              onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }}
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 hidden md:block z-[110]"
              onClick={(e) => { e.stopPropagation(); navigateImage("next"); }}
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl shadow-white/5"
              />
              <div className="mt-8 text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage.url}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-white text-3xl font-bold mb-2">
                      {selectedImage.title}
                    </h2>
                    <p className="text-white/50 text-lg">
                      {selectedImage.alt}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-4 text-white/30 text-sm font-medium tracking-widest">
                  {images.findIndex(img => img.url === selectedImage.url) + 1} / {images.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
