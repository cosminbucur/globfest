import { Facebook, Instagram, Youtube } from 'iconoir-react';

interface Props {
  t: any;
  currentLang?: "en" | "ro";
}

export default function Footer({ t, currentLang = "en" }: Props) {
  const currentYear = new Date().getFullYear();
  const base = import.meta.env.BASE_URL;

  const homePath = currentLang === "ro" ? `${base}ro/`.replace(/\/\//g, "/") : base;
  const aboutPath = (currentLang === "ro" ? `${base}ro/about/` : `${base}about/`).replace(/\/\//g, "/");
  const blogPath = (currentLang === "ro" ? `${base}ro/blog/` : `${base}blog/`).replace(/\/\//g, "/");
  const communityPath = (currentLang === "ro" ? `${base}ro/community/` : `${base}community/`).replace(/\/\//g, "/");
  const eventsPath = (currentLang === "ro" ? `${base}ro/events/` : `${base}events/`).replace(/\/\//g, "/");
  const contactPath = (currentLang === "ro" ? `${base}ro/contact/` : `${base}contact/`).replace(/\/\//g, "/");

  const sitemap = [
    { label: t.nav.about, href: aboutPath },
    { label: t.nav.blog, href: blogPath },
    { label: t.nav.community, href: communityPath },
    { label: t.nav.events, href: eventsPath },
  ];

  const infoLinks = [
    { label: t.nav.products, href: `${homePath}#products` },
    { label: t.nav.causes, href: `${homePath}#causes` },
    { label: t.nav.contact, href: contactPath },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <a href={homePath} className="text-2xl font-bold text-christmas-red hover:opacity-80 transition-opacity inline-block mb-4 font-sans">
              Globfest
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {t.hero.subtitle}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/Globfestul" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/Globfest" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-pink-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@Globfest" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">{t.footer.explore}</h4>
            <ul className="space-y-4">
              {sitemap.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-500 hover:text-christmas-red text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop & More */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">{t.footer.info}</h4>
            <ul className="space-y-4">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-500 hover:text-christmas-red text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">{t.footer.contact}</h4>
            <div className="text-sm text-gray-500 space-y-4">
              <p>Email: <a href="mailto:contact@globfest.ro" className="hover:text-christmas-red transition-colors">contact@globfest.ro</a></p>
              <p>{t.footer.location}: {t.footer.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-light">
            &copy; 2012 - {currentYear} Andreea Ardelean. {t?.footer?.rights || 'All rights reserved.'}
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('show-cookie-banner'))}
              className="hover:text-christmas-red transition-colors font-light cursor-pointer"
            >
              {t.cookies.settings}
            </button>
            <a href="#" className="hover:text-christmas-red transition-colors font-light">Privacy Policy</a>
            <a href="#" className="hover:text-christmas-red transition-colors font-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
