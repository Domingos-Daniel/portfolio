'use client';

import { Github, Mail, MapPin, Phone } from 'lucide-react';
import { contact } from '@/data/portfolio';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="relative mt-16 bg-gray-900/50 backdrop-blur-xl border-t border-gray-700/30">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 via-gray-900/10 to-black/20 pointer-events-none"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              {t('footer.getInTouch')}
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 group"
                aria-label="Email"
              >
                <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm">{contact.email}</span>
              </a>
              
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-1 group"
                aria-label="Phone"
              >
                <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-green-900/30 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-sm">{contact.phone}</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-gray-800/50 rounded-lg">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">{contact.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              {t('footer.quickLinks')}
            </h3>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm hover:translate-x-1">
                {t('nav.home')}
              </Link>
              <Link href="/projects" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm hover:translate-x-1">
                {t('nav.projects')}
              </Link>
              <Link href="/skills" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm hover:translate-x-1">
                {t('nav.skills')}
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              {t('footer.followMe')}
            </h3>
            <div className="flex gap-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-900/50"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="font-medium text-white">Domingos Manuel Daniel</span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
              {t('footer.copyright')}
            </p>
          </div>
          
          <div className="text-center sm:text-right">
            <p className="text-gray-400 text-xs">
              {t('footer.madeWith')} <span className="text-red-400">♥</span> {t('footer.using')} Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;
