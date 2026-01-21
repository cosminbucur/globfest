import React, { useState } from "react";

type Props = {
  t: any;
};

export default function Newsletter({ t }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="bg-christmas-green py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden relative">
        {/* Subtle Decorative Circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-christmas-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-christmas-red/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="relative z-10 transition-all duration-700 ease-out translate-y-0 opacity-100">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.newsletter.title}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.newsletter.subtitle}
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <div className="relative flex-grow group">
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-christmas-gold/50 focus:bg-white/15 transition-all outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-christmas-red hover:bg-christmas-red/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-christmas-red/20 active:scale-95 disabled:opacity-70 disabled:scale-100 whitespace-nowrap"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t.newsletter.loading}
                </span>
              ) : (
                t.newsletter.cta
              )}
            </button>
          </form>

          {status === "success" && (
            <div className="mt-8 p-4 rounded-2xl bg-christmas-gold/10 border border-christmas-gold/20 transition-all duration-500 transform translate-y-0 opacity-100">
              <p className="text-christmas-gold font-semibold flex items-center justify-center gap-2">
                <span className="text-2xl">✨</span> {t.newsletter.success}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
