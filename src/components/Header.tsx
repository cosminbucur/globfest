import { Button } from "@/components/ui/button";

type Props = {
  t: any;
  currentLang?: "en" | "ro";
};

export default function Header({ t, currentLang = "en" }: Props) {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href={currentLang === "en" ? "/" : "/ro"} className="text-2xl font-bold text-christmas-red hover:opacity-80 transition-opacity">
          Globfest
        </a>

        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.about}</a>
          <a href="#products" className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.products}</a>
          <a href="#causes" className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.causes}</a>
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-christmas-red transition-colors">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-50 border border-gray-100 rounded-full p-1">
            <a
              href="/"
              className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider transition-all ${
                currentLang === "en"
                  ? "bg-white text-christmas-red shadow-sm ring-1 ring-black/5"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              EN
            </a>
            <a
              href="/ro"
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
            <a href="#products">
              {t.nav.cta}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
