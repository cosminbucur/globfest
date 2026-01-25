import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Xmark } from "iconoir-react";

interface CookieBannerProps {
  t: {
    cookies: {
      title: string;
      description: string;
      acceptAll: string;
      rejectAll: string;
      settings: string;
    };
  };
}

const CookieBanner: React.FC<CookieBannerProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay visibility for a smoother entrance
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }

    const handleShowBanner = () => setIsVisible(true);
    window.addEventListener("show-cookie-banner", handleShowBanner);
    return () => window.removeEventListener("show-cookie-banner", handleShowBanner);
  }, []);

  const handleConsent = (type: "all" | "none") => {
    localStorage.setItem("cookie-consent", type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 z-50 flex justify-center pointer-events-none"
        >
          <div className="max-w-4xl w-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 md:p-8 pointer-events-auto relative overflow-hidden">
            {/* Top decorative pattern */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-christmas-red via-gold to-christmas-green" />
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-christmas-red/10 rounded-full flex items-center justify-center">
                <Cookie className="w-8 h-8 text-christmas-red" />
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t.cookies.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                  {t.cookies.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => handleConsent("none")}
                  className="px-6 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 whitespace-nowrap"
                >
                  {t.cookies.rejectAll}
                </button>
                <button
                  onClick={() => handleConsent("all")}
                  className="px-8 py-2.5 text-sm font-medium text-white bg-christmas-red hover:bg-red-700 rounded-xl shadow-lg shadow-christmas-red/20 transition-all duration-200 whitespace-nowrap"
                >
                  {t.cookies.acceptAll}
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <Xmark className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
