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
    // If no pathname is provided (e.g. initial server render without prop), 
    // fall back to base paths
    if (!pathname) {
      return lang === "en" ? base : `${base}ro`;
    }

    if (lang === "en") {
      // If we're on a RO page, remove/ro/ from the path
      if (currentLang === "ro") {
        return pathname.replace(`${base}ro`, base).replace(/\/\//g, "/");
      }
      return pathname;
    } else {
      // If we're on an EN page, add /ro/ after base
      if (currentLang === "en") {
        return pathname.replace(base, `${base}ro/`).replace(/\/\//g, "/");
      }
      return pathname;
    }
  };

  const blogPath = currentLang === "ro" ? `${base}ro/blog` : `${base}blog`;
  const homePath = currentLang === "ro" ? `${base}ro` : base;

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href={homePath} className="text-2xl font-bold text-christmas-red hover:opacity-80 transition-opacity">
          Globfest
        </a>

        <nav className="hidden md:flex gap-8">
          <a href={`${homePath}#about`} className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.about}</a>
          <a href={`${homePath}#products`} className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.products}</a>
          <a href={`${homePath}#causes`} className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.causes}</a>
          <a href={blogPath} className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.blog}</a>
          <a href={`${homePath}#contact`} className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-50 border border-gray-100 rounded-full p-1">
            <a
              href={getLocalizedPath("en")}
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
