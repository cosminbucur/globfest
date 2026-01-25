export default function About({ t, lang = "en" }: any) {
  const base = import.meta.env.BASE_URL;
  const aboutPath = (lang === "ro" ? `${base}ro/about/` : `${base}about/`).replace(/\/\//g, "/");

  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">{t.about.title}</h2>
      <p className="mb-6">{t.about.subtitle}</p>
      <p className="mb-6">{t.about.description}</p>
      <a href={aboutPath} className="text-christmas-red font-semibold hover:underline">
        {t.about.cta}
      </a>
    </section>
  );
}
