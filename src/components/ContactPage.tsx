import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactPage({ t }: any) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-christmas-red/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-christmas-green/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            {t.contact.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed italic">
            "{t.contact.subtitle}"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-christmas-red/10 flex items-center justify-center text-christmas-red shrink-0 group-hover:bg-christmas-red group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{t.contact.info.email}</h3>
                  <a href="mailto:hello@globfest.ro" className="text-gray-600 hover:text-christmas-red transition-colors text-lg">hello@globfest.ro</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-christmas-green/10 flex items-center justify-center text-christmas-green shrink-0 group-hover:bg-christmas-green group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{t.contact.info.phone}</h3>
                  <a href="tel:+40722000000" className="text-gray-600 hover:text-christmas-red transition-colors text-lg">+40 722 000 000</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-christmas-red/10 flex items-center justify-center text-christmas-red shrink-0 group-hover:bg-christmas-red group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{t.contact.info.address}</h3>
                  <p className="text-gray-600 text-lg">{t.footer.address}</p>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1544208062-7360bf0b377b?q=80&w=800&auto=format&fit=crop" 
                alt="Our Workshop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-lg opacity-90 italic">Our studio in Bucharest</p>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-20 h-20 bg-christmas-green/10 text-christmas-green rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{t.contact.form.success}</h2>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-full px-8"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.form.name}</label>
                      <Input 
                        required 
                        placeholder={t.contact.form.placeholders.name}
                        className="h-14 rounded-2xl bg-gray-50 border-gray-100 focus:bg-white transition-all text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.form.email}</label>
                      <Input 
                        required 
                        type="email" 
                        placeholder={t.contact.form.placeholders.email}
                        className="h-14 rounded-2xl bg-gray-50 border-gray-100 focus:bg-white transition-all text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.form.subject}</label>
                    <Input 
                      required 
                      placeholder={t.contact.form.placeholders.subject}
                      className="h-14 rounded-2xl bg-gray-50 border-gray-100 focus:bg-white transition-all text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.form.message}</label>
                    <Textarea 
                      required 
                      placeholder={t.contact.form.placeholders.message}
                      className="min-h-[200px] rounded-3xl bg-gray-50 border-gray-100 focus:bg-white transition-all text-lg p-6"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-16 rounded-[1.5rem] bg-christmas-red hover:bg-christmas-green text-white font-black text-xl shadow-xl shadow-christmas-red/20 transition-all transform hover:-translate-y-1 active:scale-[0.98]"
                  >
                    {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
