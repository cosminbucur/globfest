export default function About({ t }: any) {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">{t.about.title}</h2>
      <p className="mb-6">{t.about.subtitle}</p>
      <a href="#products" className="text-christmas-red font-semibold">
        {t.about.cta}
      </a>
    </section>
  );
}
