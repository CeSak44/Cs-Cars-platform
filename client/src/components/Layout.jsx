import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, MapPin, Globe } from 'lucide-react';

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'ar' : 'fr';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    // { name: t('nav.tracking'), path: '/tracking' },
  ];

  return (
    <div className="flex flex-col min-h-screen relative pb-16 md:pb-0">
      {/* Desktop Navigation (Top) */}
      <nav className="hidden md:flex bg-[#111111] border-b border-[#2a2a2a] text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <span className="text-[#e60000]">CS</span> CARS
          </Link>
          <div className="flex gap-8 items-center font-medium">
            {navItems.map((item) => (
               <Link
                 key={item.path}
                 to={item.path}
                 className={`transition-colors hover:text-[#e60000] ${location.pathname === item.path ? 'text-[#e60000]' : 'text-gray-300'}`}
               >
                 {item.name}
               </Link>
            ))}
            <button
               onClick={toggleLanguage}
               className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1.5 rounded-md hover:bg-[#2a2a2a] transition-colors border border-[#333]"
               aria-label="Toggle language"
            >
              <Globe size={18} />
              {i18n.language === 'fr' ? 'AR' : 'FR'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Mobile Navigation (Fixed Bottom) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-[#2a2a2a] text-white z-50 px-4 py-2">
         <div className="flex justify-between items-center h-14">
            {navItems.map((item) => (
               <Link
                 key={item.path}
                 to={item.path}
                 className={`flex flex-col items-center justify-center w-full h-full transition-colors ${location.pathname === item.path ? 'text-[#e60000]' : 'text-gray-400'}`}
               >
                 <span className="text-xs font-medium mt-1">{item.name}</span>
               </Link>
            ))}
            <button
               onClick={toggleLanguage}
               className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-white"
            >
              <Globe size={20} />
              <span className="text-[10px] uppercase font-bold mt-1">{i18n.language === 'fr' ? 'AR' : 'FR'}</span>
            </button>
         </div>
      </nav>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-[#1a1a1a] py-12 pb-24 md:pb-12 mt-auto">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="text-3xl font-bold flex items-center gap-2 mb-4">
                 <span className="text-[#e60000]">CS</span> CARS
              </Link>
              <p className="text-gray-400 text-sm">{t('home.hero.subtitle')}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#e60000]">{t('nav.contact')}</h4>
              <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-gray-300">
                    <MapPin size={18} className="text-[#e60000]" />
                    <a href="https://maps.app.goo.gl/q1UATiLBRbzaeCaq6?g_st=aw" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t('footer.location')}</a>
                 </li>
                 <li className="flex items-center gap-3 text-gray-300">
                    <Phone size={18} className="text-[#e60000]" />
                    <span>+213 540 433 297</span>
                 </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#e60000]">{t('footer.follow')}</h4>
              <div className="flex gap-4">
                <a href="https://www.tiktok.com/@cs_cars_19" target="_blank" rel="noreferrer" className="bg-[#1a1a1a] p-3 rounded-full hover:bg-[#e60000] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </a>
                <a href="https://chat.whatsapp.com/Jad0I9rPW8SDr7Fb4RWCLl" target="_blank" rel="noreferrer" className="bg-[#1a1a1a] p-3 rounded-full hover:bg-[green] transition-colors">
                  <Phone size={20} />
                </a>
                <a href="https://t.me/CsCarsAgency" target="_blank" rel="noreferrer" className="bg-[#1a1a1a] p-3 rounded-full hover:bg-[#0088cc] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </a>
              </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
