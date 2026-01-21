import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Causes({ t }: any) {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const causeIds = ["posta", "tadeu", "aspera", "copaceni"];
  
  const causes = causeIds.map(id => ({
    id,
    ...t.causes.items[id],
    image: `/images/causes/${id}.png`,
    logo: `/images/causes/${id}-logo.png`,
  }));

  return (
    <section id="causes" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-christmas-red">
            {t.causes.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.causes.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="group relative bg-[#FDFDFD] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col sm:flex-row h-full"
            >
              {/* Image area */}
              <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden bg-gray-50">
                <img 
                  src={cause.image} 
                  alt={cause.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-8 sm:w-3/5 flex flex-col h-full bg-white/50 backdrop-blur-sm">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-5">
                    {/* Logo area */}
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center p-1.5 overflow-hidden bg-gradient-to-tr from-white to-gray-50">
                       {!imgErrors[cause.id] ? (
                         <img 
                           src={cause.logo} 
                           alt={`${cause.title} logo`}
                           className="w-full h-full object-contain"
                           onError={() => setImgErrors(prev => ({ ...prev, [cause.id]: true }))}
                         />
                       ) : (
                         <span className="text-[10px] font-bold text-gray-400">LOGO</span>
                       )}
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-christmas-red transition-colors duration-300 leading-tight">
                      {cause.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {cause.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-50">
                  <a 
                    href={cause.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-christmas-green hover:text-christmas-red transition-colors flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    Site Web
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  
                  <Button variant="ghost" className="rounded-full text-xs font-bold uppercase tracking-widest text-christmas-red hover:bg-christmas-red hover:text-white transition-all duration-300">
                    Detalii
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
