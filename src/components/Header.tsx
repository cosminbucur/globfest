import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  t: any;
  currentLang?: "en" | "ro";
  pathname?: string;
};

export default function Header({ t, currentLang = "en", pathname = "" }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const base = import.meta.env.BASE_URL;

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  // Helper to get localized links
  const getLocalizedPath = (lang: "en" | "ro") => {
    // If no pathname is provided, fall back to base paths
    if (!pathname) {
      return lang === "en" ? base : `${base}ro/`.replace(/\/\//g, "/");
    }

    if (lang === currentLang) return pathname;

    const roPrefix = `${base}ro/`.replace(/\/\//g, "/");

    if (lang === "en") {
      // If we're on a RO page, remove /ro/ from the path
      return pathname.replace(roPrefix, base).replace(/\/\//g, "/");
    } else {
      // If we're on an EN page, add /ro/ after base
      return pathname.replace(base, roPrefix).replace(/\/\//g, "/");
    }
  };

  const handleLanguageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash) {
      // Prevent default to manually handle navigation with hash
      e.preventDefault();
      const targetUrl = e.currentTarget.href.split('#')[0] + hash;
      window.location.href = targetUrl;
    }
  };

  const homePath = currentLang === "ro" ? `${base}ro/`.replace(/\/\//g, "/") : base;
  const aboutPath = (currentLang === "ro" ? `${base}ro/about/` : `${base}about/`).replace(/\/\//g, "/");
  const blogPath = (currentLang === "ro" ? `${base}ro/blog/` : `${base}blog/`).replace(/\/\//g, "/");
  const communityPath = (currentLang === "ro" ? `${base}ro/community/` : `${base}community/`).replace(/\/\//g, "/");
  const eventsPath = (currentLang === "ro" ? `${base}ro/events/` : `${base}events/`).replace(/\/\//g, "/");
  const contactPath = (currentLang === "ro" ? `${base}ro/contact/` : `${base}contact/`).replace(/\/\//g, "/");

  const navLinks = [
    { href: `${homePath}#products`, label: t.nav.products },
    { href: aboutPath, label: t.nav.about },
    { href: eventsPath, label: t.nav.events },
    { href: communityPath, label: t.nav.community },
    { href: blogPath, label: t.nav.blog },
    { href: contactPath, label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href={homePath} className="flex items-center gap-2 group transition-opacity hover:opacity-90">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src={`${base}images/icon-globfest.svg`} 
              alt="Globfest Icon" 
              className="w-full h-full transform group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
          <span className="text-2xl font-bold text-christmas-red">
            Globfest
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-50 border border-gray-100 rounded-full p-1">
            <a
              href={getLocalizedPath("en")}
              onClick={handleLanguageClick}
              className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider transition-all ${
                currentLang === "en"
                  ? "bg-white text-christmas-red shadow-sm ring-1 ring-black/5"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              EN
            </a>
            <a
              href={getLocalizedPath("ro")}
              onClick={handleLanguageClick}
              className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider transition-all ${
                currentLang === "ro"
                  ? "bg-white text-christmas-red shadow-sm ring-1 ring-black/5"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              RO
            </a>
          </div>

          <Button asChild className="bg-christmas-red hover:bg-christmas-green text-white rounded-full hidden sm:flex h-9 px-5">
            <a href={`${homePath}#products`}>
              {t.nav.cta}
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-christmas-red transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop for mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col p-8 gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-semibold text-gray-800 hover:text-christmas-red px-4 py-3 rounded-2xl hover:bg-christmas-red/5 transition-all"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + navLinks.length * 0.05 }}
                  className="pt-6 px-4"
                >
                  <Button asChild className="w-full bg-christmas-red hover:bg-christmas-green text-white rounded-2xl h-14 text-lg font-bold shadow-lg shadow-christmas-red/20 active:scale-[0.98] transition-all">
                    <a href={`${homePath}#products`} onClick={() => setIsMobileMenuOpen(false)}>
                      {t.nav.cta}
                    </a>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
