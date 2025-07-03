import { ArrowRight, Github, Mail, MapPin } from 'lucide-react';
import { contact } from '@/data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Contact Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">{contact.email}</span>
            </a>
            
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin size={20} />
              <span className="hidden sm:inline">{contact.location}</span>
            </div>

            {/* Phone link */}
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Phone"
            >
              <span className="hidden sm:inline">{contact.phone}</span>
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-right">
            © {currentYear} Domingos Manuel Daniel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
