export default function About({ t, lang = "en" }: any) {
  const base = import.meta.env.BASE_URL;
  const aboutPath = (lang === "ro" ? `${base}ro/about/` : `${base}about/`).replace(/\/\//g, "/");

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <p className="text-christmas-red font-medium mb-4 uppercase tracking-widest text-sm">
              {t.about.subtitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 whitespace-pre-line">
              {t.about.title}
            </h2>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl whitespace-pre-line">
            {t.about.description}
          </p>

          <a 
            href={aboutPath} 
            className="inline-flex items-center text-christmas-red font-bold text-lg hover:underline transition-all group"
          >
            {t.about.cta}
            <svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Right Column - Announcement Card */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-christmas-red/10 to-transparent rounded-[3rem] -z-10 blur-2xl"></div>
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-christmas-red/5 rounded-bl-[5rem] -mr-12 -mt-12"></div>
            
            <div className="relative z-10">
              <svg 
                className="w-10 h-10 text-christmas-red/20 mb-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.0166 21L3.0166 18C3.0166 16.8954 3.91203 16 5.0166 16H8.0166C8.56888 16 9.0166 15.5523 9.0166 15V9C9.0166 8.44772 8.56888 8 8.0166 8H5.0166C3.91203 8 3.0166 7.10457 3.0166 6V3L10.0166 3V15C10.0166 18.3137 7.3303 21 4.0166 21H3.0166Z" />
              </svg>
              
              <div className="text-gray-700 space-y-4">
                <p className="text-lg leading-relaxed italic whitespace-pre-line">
                  {t.about.announcement}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

