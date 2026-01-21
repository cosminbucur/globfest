import { Button } from "@/components/ui/button";

export default function Hero({ t }: any) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-christmas-green to-white text-center px-6">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {t.hero.title}
        </h1>
        <p className="text-lg text-white/90 mb-8">{t.hero.subtitle}</p>
        <Button asChild className="bg-christmas-gold hover:bg-christmas-gold/90 text-black px-8 h-12 rounded-full font-semibold">
          <a href="#products">
            {t.hero.cta}
          </a>
        </Button>
      </div>
    </section>
  );
}
