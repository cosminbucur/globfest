export default function Hero({ t }: any) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-christmas-green to-white text-center px-6">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {t.hero.title}
        </h1>
        <p className="text-lg text-white/90 mb-8">{t.hero.subtitle}</p>
        <a
          href="#products"
          className="bg-christmas-gold text-black px-8 py-3 rounded-full font-semibold"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}
