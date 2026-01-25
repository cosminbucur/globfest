import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero({ t, currentLang = "en" }: any) {
  const latestEvent = t.events.latest;
  const base = import.meta.env.BASE_URL;
  const eventsPath = (currentLang === "ro" ? `${base}ro/events/` : `${base}events/`).replace(/\/\//g, "/");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-christmas-green via-christmas-green to-christmas-red/20 text-center px-6 pt-20">
      {/* Background patterns/effects */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-christmas-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-christmas-red rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-sm">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
            {t.hero.subtitle}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
        >
          <Button asChild size="lg" className="bg-christmas-gold hover:bg-white text-black px-10 h-16 rounded-2xl font-black text-lg shadow-xl hover:shadow-christmas-gold/20 transform hover:-translate-y-1 transition-all">
            <a href="#products">
              {t.hero.cta}
            </a>
          </Button>
        </motion.div>

        {/* New Event Teaser */}
        {latestEvent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block"
          >
            <a 
              href={eventsPath}
              className="group block bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-4 md:p-6 pr-8 md:pr-12 hover:bg-white/15 transition-all text-left max-w-2xl"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                <div className="bg-christmas-red text-white p-3 rounded-2xl shadow-lg transform group-hover:rotate-12 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black uppercase tracking-widest text-christmas-gold bg-white/10 px-2 py-0.5 rounded">
                      {t.events.latestTitle}
                    </span>
                    <span className="text-white/60 text-xs font-bold">• {latestEvent.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-christmas-gold transition-colors">
                    {latestEvent.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-1">{latestEvent.location}</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all hidden md:block">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

