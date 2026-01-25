import { Button } from "@/components/ui/button";

type Props = {
  t: any;
  currentLang?: "en" | "ro";
  pathname?: string;
};

export default function Header({ t, currentLang = "en", pathname = "" }: Props) {
  const base = import.meta.env.BASE_URL;
  
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

        <nav className="hidden md:flex gap-8">
          <a href={`${homePath}#products`} className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.products}</a>
          <a href={aboutPath} className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.about}</a>
          <a href={eventsPath} className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.events}</a>
          <a href={communityPath} className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.community}</a>
          <a href={blogPath} className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.blog}</a>
          <a href={contactPath} className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.contact}</a>
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
        </div>
      </div>
    </header>
  );
}
