import { Facebook, Instagram, Youtube } from 'iconoir-react';

export default function Footer({ t }: { t: any }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 text-center bg-gray-50 border-t border-gray-100">
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="https://www.facebook.com/Globfestul"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
          aria-label="Facebook"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/Globfest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-600 transition-colors duration-300"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.youtube.com/@Globfest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-red-600 transition-colors duration-300"
          aria-label="YouTube"
        >
          <Youtube className="w-6 h-6" />
        </a>
      </div>
      <p className="text-sm text-gray-500 font-light">
        &copy; 2012 - {currentYear} Andreea Ardelean. {t?.footer?.rights || 'All rights reserved.'}
      </p>
    </footer>
  );
}
