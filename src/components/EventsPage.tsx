import { motion } from "framer-motion";

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
    name: "Cauză nouă: Centrul Aspera",
    description: "Am început colaborarea cu Centrul Aspera pentru a susține copiii cu nevoi speciale prin terapii inovatoare.",
    date: "12 Dec, 2022",
    photo: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
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
    name: "Cauză nouă: Parohia Sf. Serafim de Sarov",
    description: "Extinderea misiunii noastre caritabile către comunitatea din Cămineasca (Giurgiu).",
    date: "20 Nov, 2022",
    photo: "https://images.unsplash.com/photo-1548685913-fe6678babe8d?q=80&w=800&auto=format&fit=crop"
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
  },
  {
    name: "Implicare și grupuri noi",
    description: "Comunitatea Globfest s-a extins cu implicarea activă a studenților și a practicanților de Tai Chi.",
    date: "15 Dec, 2018",
    photo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Primul eveniment caritabil",
    description: "Startul misiunii noastre de a dărui: Biserica Sf. Dumitru Poșta alături de Asociația Umanitară Tadeu.",
    date: "01 Dec, 2017",
    photo: "https://images.unsplash.com/photo-1459183885447-df53d1f0d9bb?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Prima ediție Globfest",
    description: "Momentul în care a început totul. Prima noastră expoziție de globuri pictate manual.",
    date: "10 Dec, 2013",
    photo: "https://images.unsplash.com/photo-1543589077-47d81606c1ad?q=80&w=800&auto=format&fit=crop"
  }
];

export default function EventsPage({ t }: any) {
  const base = import.meta.env.BASE_URL;

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
            {t.events.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed italic">
            "{t.events.subtitle}"
          </p>
        </motion.div>

        {/* New Event Section */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
          >
            {t.events.latestTitle}
          </motion.h2>
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row"
            >
              {/* Image Side */}
              <div className="lg:w-5/12 relative min-h-[400px]">
                <img 
                  src={`${base}images/events/latest-globfest-poster.jpeg`}
                  alt="New Event Poster"
                  className="w-full h-full object-cover lg:absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/5" />
                <div className="absolute top-8 left-8">
                  <span className="bg-christmas-red text-white hover:bg-christmas-green transition-colors px-6 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    {t.events.latestTitle}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-10">
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    {t.events.latest.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-christmas-red/20 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-christmas-red/5 flex items-center justify-center text-christmas-red group-hover:bg-christmas-red group-hover:text-white transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-0.5">{t.events.date}</p>
                        <p className="font-bold text-gray-900">{t.events.latest.date}</p>
                      </div>
                    </div>

                    {t.events.latest.time && (
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-christmas-red/20 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-christmas-red/5 flex items-center justify-center text-christmas-red group-hover:bg-christmas-red group-hover:text-white transition-all">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-0.5">{t.events.time}</p>
                          <p className="font-bold text-gray-900">{t.events.latest.time}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 sm:col-span-2 group hover:border-christmas-red/20 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-christmas-red/5 flex items-center justify-center text-christmas-red shrink-0 group-hover:bg-christmas-red group-hover:text-white transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-0.5">{t.events.location}</p>
                        <p className="font-bold text-gray-900 leading-snug">{t.events.latest.location}</p>
                      </div>
                    </div>

                    {t.events.latest.theme && (
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-christmas-green/5 border border-christmas-green/10 sm:col-span-2 group hover:border-christmas-green/20 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-christmas-green/10 flex items-center justify-center text-christmas-green shrink-0 group-hover:bg-christmas-green group-hover:text-white transition-all">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[10px] text-christmas-green/60 uppercase font-black tracking-widest mb-0.5">{t.community.eventTheme}</p>
                          <p className="font-bold text-gray-900 leading-snug">{t.events.latest.theme}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {t.events.latest.description && (
                    <div className="bg-gray-50/50 rounded-3xl p-6 md:p-8 border border-gray-100">
                      <div className="text-gray-600 leading-relaxed space-y-3">
                        {t.events.latest.description.split('\n').map((line: string, i: number) => {
                          if (!line.trim()) return <div key={i} className="h-2" />;
                          
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={i} className="flex gap-3">
                              <span className="flex-1">
                                {parts.map((part, j) => {
                                  if (part.startsWith('**') && part.endsWith('**')) {
                                    return <strong key={j} className="text-gray-900 font-extrabold">{part.slice(2, -2)}</strong>;
                                  }
                                  return part;
                                })}
                              </span>
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={t.events.latest.regLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-christmas-red text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-christmas-green transition-all shadow-xl hover:shadow-christmas-green/25 transform hover:-translate-y-1"
                  >
                    {t.events.register}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>


        {/* Upcoming Events Section */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
          >
            {t.events.upcomingTitle}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {t.events.upcoming.map((event: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-sm font-bold bg-christmas-red px-3 py-1 rounded-full mb-2 inline-block">
                      {event.date}
                    </span>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {event.location}
                  </div>
                  {event.theme && (
                    <div className="flex items-center gap-2 text-christmas-green text-sm mb-4 font-bold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      {t.community.eventTheme}: {event.theme}
                    </div>
                  )}
                  <a 
                    href={event.regLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 rounded-2xl border-2 border-christmas-red text-christmas-red font-bold hover:bg-christmas-red hover:text-white transition-all"
                  >
                    {t.events.register}
                  </a>
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
                        {event.place && (
                          <div className="bg-gray-50/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100">
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t.community.eventPlace}</p>
                            <p className="text-sm font-semibold text-gray-800">{event.place}</p>
                          </div>
                        )}
                        {event.theme && (
                          <div className="bg-gray-50/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100">
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t.community.eventTheme}</p>
                            <p className="text-sm font-semibold text-gray-800">{event.theme}</p>
                          </div>
                        )}
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
      </div>
    </div>
  );
}
