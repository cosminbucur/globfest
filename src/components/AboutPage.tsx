import { motion } from "framer-motion";
import Acknowledgements from "./Acknowledgements";

export default function AboutPage({ t, lang = "en" }: any) {
  const base = import.meta.env.BASE_URL;
  const homePath = (lang === "ro" ? `${base}ro/` : `${base}`).replace(/\/\//g, "/");

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed italic">
            "{t.about.subtitle}"
          </p>
          {t.about.visitSubtitle && (
            <p className="mt-4 text-gray-500">
              {t.about.visitSubtitle}
            </p>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-[16/9] rounded-2xl overflow-hidden mb-16 shadow-2xl relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1543589077-47d81606c1ad?q=80&w=2000&auto=format&fit=crop" 
            alt="Artisan studio" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <h2 className="text-2xl font-bold text-christmas-red mb-4 uppercase tracking-widest text-sm">
              {t.about.storyTitle}
            </h2>
            <div className="w-12 h-1 bg-christmas-red mb-8"></div>
            <p className="text-gray-500 font-medium">
              Established 2012 <br />
              Bucharest, Romania
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 space-y-8"
          >
            {t.about.storyContent.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:text-christmas-red first-letter:mr-1 first-letter:float-left">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-christmas-green/5 rounded-3xl p-12 text-center border border-christmas-green/10"
        >
          <h2 className="text-3xl font-bold text-christmas-green mb-6">
            {t.about.visitTitle}
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            {t.about.visitSubtitle}
          </p>
          <a 
            href={lang === "ro" ? `${base}ro/contact/`.replace(/\/\//g, "/") : `${base}contact/`.replace(/\/\//g, "/")} 
            className="inline-block bg-christmas-red text-white px-10 py-4 rounded-full font-bold hover:bg-christmas-green transition-colors shadow-lg hover:shadow-christmas-green/25"
          >
            {t.contact.cta}
          </a>
        </motion.div>

      </div>
    </div>
  );
}