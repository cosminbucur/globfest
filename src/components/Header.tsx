import { Button } from "@/components/ui/button";

type Props = {
  t: any;
};

export default function Header({ t }: Props) {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-bold text-christmas-red">Globfest</span>

        <nav className="hidden md:flex gap-6">
          <a href="#about">{t.nav.about}</a>
          <a href="#products">{t.nav.products}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <Button asChild className="bg-christmas-red hover:bg-christmas-green text-white rounded-full">
          <a href="#products">
            {t.nav.cta}
          </a>
        </Button>
      </div>
    </header>
  );
}
