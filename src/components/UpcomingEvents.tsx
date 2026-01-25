import { motion } from "framer-motion";

export default function UpcomingEvents({ t, currentLang = "en" }: any) {
  const events = t.events.upcoming;
  const base = import.meta.env.BASE_URL;
  const eventsPath = (currentLang === "ro" ? `${base}ro/events/` : `${base}events/`).replace(/\/\//g, "/");

  if (!events || events.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {t.events.upcomingTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              {t.events.subtitle}
            </p>
          </motion.div>
          
          <motion.a
            href={eventsPath}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-christmas-red font-black text-lg hover:gap-4 transition-all"
          >
            {t.nav.events}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  className="block w-full text-center py-3 rounded-2xl border-2 border-christmas-red text-christmas-red font-bold hover:bg-christmas-red hover:text-white transition-all shadow-md hover:shadow-christmas-red/20"
                >
                  {t.events.register}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
