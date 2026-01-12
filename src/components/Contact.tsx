export default function Contact({ t }: any) {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
      <p className="mb-6">{t.contact.subtitle}</p>
      <a
        href="mailto:hello@globfest.ro"
        className="bg-christmas-red text-white px-8 py-3 rounded-full"
      >
        {t.contact.cta}
      </a>
    </section>
  );
}
