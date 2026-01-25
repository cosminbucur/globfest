export default function Contact({ t, lang = "en" }: any) {
  const base = import.meta.env.BASE_URL;
  const contactPath = (lang === "ro" ? `${base}ro/contact/` : `${base}contact/`).replace(/\/\//g, "/");

  return (
    <section id="contact" className="py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
      <p className="mb-6">{t.contact.subtitle}</p>
      <a
        href={contactPath}
        className="bg-christmas-red text-white px-8 py-3 rounded-full hover:bg-christmas-green transition-colors"
      >
        {t.contact.cta}
      </a>
    </section>
  );
}
