export default function Products({ t }: any) {
  return (
    <section id="products" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">{t.products.title}</h2>
        <p className="mb-10">{t.products.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-200 rounded mb-4" />
              <h3 className="font-semibold">Hand Painted Bauble</h3>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="bg-christmas-green text-white px-8 py-3 rounded-full"
        >
          {t.products.cta}
        </a>
      </div>
    </section>
  );
}
