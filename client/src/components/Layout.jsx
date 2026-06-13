import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Globe } from 'lucide-react';
import csCarsLogo from '../assets/Logos/cs_cars-logo.webp';

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'ar' : 'fr';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.models'), path: '/models' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  return (
    <div className="flex flex-col min-h-screen relative bg-[#0a0a0a]">
      {/* Desktop & Mobile Floating Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ease-in-out ${scrolled ? 'top-3 md:top-5' : 'top-5 md:top-8'}`}
      >
        <div
          className={`flex items-center justify-between w-full max-w-6xl transition-all duration-500 ease-in-out rounded-[2rem] border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] px-5 md:px-8 
          ${scrolled ? 'py-3 bg-[#F2F4F4]/90 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.1)]' : 'py-4 md:py-5 bg-[#F2F4F4]/70 backdrop-blur-sm'}`}
        >
          {/* LOGO */}
          <Link to="/" className="flex items-center flex-shrink-0 z-10">
            <img
              src={csCarsLogo}
              alt="CS Cars"
              className={`object-contain transition-all duration-500 ease-in-out ${scrolled ? 'h-6 md:h-8' : 'h-7 md:h-10'}`}
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative group font-semibold tracking-wider text-[13px] uppercase transition-colors duration-300 ${location.pathname === item.path ? 'text-[#F50101]' : 'text-black hover:text-[#F50101]'}`}
              >
                <span>{item.name}</span>
                <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#F50101] transition-all duration-300 ease-out ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* CTA & Language */}
          <div className="hidden lg:flex items-center gap-6 z-10">
            <button
              onClick={toggleLanguage}
              className="group flex items-center gap-2 rounded-full hover:opacity-70 transition-opacity text-black font-bold text-sm tracking-wider"
            >
              <Globe size={18} className="text-black group-hover:text-[#F50101] transition-colors" />
              {i18n.language === 'fr' ? 'AR' : 'FR'}
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/models')}
              className="px-8 py-3 rounded-full bg-[#F50101] text-white font-bold text-sm tracking-widest uppercase shadow-md hover:shadow-xl hover:shadow-[#F50101]/20 transition-all"
            >
              {t('nav.discover_models')}
            </motion.button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center gap-4 z-10">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-black hover:text-[#F50101] transition-colors">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: i18n.language === 'ar' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: i18n.language === 'ar' ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-0 bottom-0 ${i18n.language === 'ar' ? 'left-0' : 'right-0'} w-[85vw] max-w-md bg-[#F2F4F4] z-[70] shadow-2xl flex flex-col lg:hidden`}
            >
              <div className="flex justify-between items-center p-6 lg:p-8 border-b border-black/5">
                <img src={csCarsLogo} alt="CS Cars" className="h-8 object-contain" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-black bg-white rounded-full shadow-sm hover:scale-105 transition-transform">
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-8 py-12 flex flex-col gap-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: i18n.language === 'ar' ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-[2rem] font-black tracking-tight transition-colors ${location.pathname === item.path ? 'text-[#F50101]' : 'text-black hover:text-[#F50101]'}`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="p-8 bg-white flex flex-col gap-6 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between">
                  <button onClick={toggleLanguage} className="flex items-center gap-2 text-black font-semibold hover:text-[#F50101] transition-colors">
                    <Globe size={20} />
                    {i18n.language === 'fr' ? 'العربية' : 'Français'}
                  </button>
                </div>
                <button
                  onClick={() => {
                    navigate('/models');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-4 rounded-full bg-[#F50101] text-white font-bold text-lg tracking-wide uppercase shadow-[0_8px_20px_rgba(245,1,1,0.25)] hover:shadow-[0_12px_25px_rgba(245,1,1,0.35)] transition-all hover:-translate-y-1"
                >
                  {t('nav.discover_models')}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-[#1a1a1a] py-12 md:pb-12 mt-auto">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={csCarsLogo} alt="CS CARS" className="h-12 object-contain" />
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">{t('home.hero.subtitle')}</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-[#F50101]">{t('nav.contact')}</h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} className="text-[#F50101]" />
                <a href="https://maps.app.goo.gl/q1UATiLBRbzaeCaq6?g_st=aw" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t('footer.location')}</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-[#F50101]" />
                <span>+213 540 433 297</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-[#F50101]">{t('footer.follow')}</h4>
            <div className="flex gap-4">
              <a href="https://www.tiktok.com/@cs_cars_19" target="_blank" rel="noreferrer" className="bg-[#1a1a1a] p-3 rounded-full hover:bg-[#F50101] transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
              <a href="https://chat.whatsapp.com/Jad0I9rPW8SDr7Fb4RWCLl" target="_blank" rel="noreferrer" className="bg-[#1a1a1a] p-3 rounded-full hover:bg-[green] transition-colors flex items-center justify-center">
                <Phone size={20} />
              </a>
              <a href="https://t.me/CsCarsAgency" target="_blank" rel="noreferrer" className="bg-[#1a1a1a] p-3 rounded-full hover:bg-[#0088cc] transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
