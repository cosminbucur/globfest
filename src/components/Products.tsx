import { Button } from "@/components/ui/button";

export default function Products({ t }: any) {
  return (
    <section id="products" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">{t.products.title}</h2>
        <p className="mb-10">{t.products.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.products.items.map((product: any, i: number) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image.startsWith("/") ? `${import.meta.env.BASE_URL}${product.image.slice(1)}` : product.image}
                  alt={product.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-christmas-red transition-colors">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <Button asChild className="bg-christmas-green hover:bg-christmas-red text-white px-8 h-12 rounded-full">
          <a href="#contact">
            {t.products.cta}
          </a>
        </Button>
      </div>
    </section>
  );
}
