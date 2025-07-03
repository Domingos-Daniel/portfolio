'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, ChevronDown } from 'lucide-react';

const LanguageSwitch = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Evita hydration mismatch
  }

  const languages = [
    { code: 'en', name: t('language.english'), flag: '🇺🇸' },
    { code: 'pt', name: t('language.portuguese'), flag: '🇦🇴' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute bottom-full mb-2 right-0 bg-gray-800 border border-gray-700 rounded-lg shadow-xl min-w-[160px] overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-700 transition-colors ${
                  i18n.language === language.code 
                    ? 'bg-blue-900/30 text-blue-300' 
                    : 'text-gray-300'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
                {i18n.language === language.code && (
                  <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2 group"
          aria-label="Change language"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{currentLanguage.flag}</span>
            <Languages size={20} className="text-gray-300 group-hover:text-white transition-colors" />
            <ChevronDown 
              size={16} 
              className={`text-gray-400 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Overlay para fechar o dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[-1]" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitch;
