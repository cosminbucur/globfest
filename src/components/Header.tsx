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

        <a
          href="#products"
          className="bg-christmas-red text-white px-5 py-2 rounded-full hover:bg-christmas-green transition"
        >
          {t.nav.cta}
        </a>
      </div>
    </header>
  );
}
