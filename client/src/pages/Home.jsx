import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, ShieldCheck, Tag, FileText } from 'lucide-react';
import arBg from '../assets/ARABIC_VERSION_BG.png';
import frBg from '../assets/FRANCH_VERSION_BG.png';

const imagesObj = import.meta.glob('../assets/*/*.webp', { eager: true });

const getImgs = (folderKeyword) => {
  return Object.entries(imagesObj)
    .filter(([path]) => path.includes(folderKeyword))
    .map(([, module]) => module.default || module);
};

const vehicles = [
  { id: 1, name: "2026 GAC GS3", imgs: getImgs('GAC GS3') },
  { id: 2, name: "Livan X3 Pro", imgs: getImgs('LivanX3pro') },
  { id: 3, name: "VW T-ROC", imgs: getImgs('VW T-ROC') },
  { id: 4, name: "2026 Geely Coolray", imgs: getImgs('Coolray-Battle') },
  { id: 5, name: "Changan X5", imgs: getImgs('ChanganX5') },
  { id: 6, name: "MG 5", imgs: getImgs('MG5') }
];

const Home = () => {
  const { t, i18n } = useTranslation();

  const currentBg = i18n.language === 'ar' ? arBg : frBg;

  const services = [
    { id: 'research', icon: Search, color: "text-blue-500", key: "services.research" },
    { id: 'assistance', icon: ShieldCheck, color: "text-green-500", key: "services.assistance" },
    { id: 'options', icon: Tag, color: "text-yellow-500", key: "services.options" },
    { id: 'reports', icon: FileText, color: "text-purple-500", key: "services.reports" }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center bg-white overflow-hidden">
        {/* Subtle dot pattern background */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />

        {/* Glowing blobs for premium feel */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-200 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-100 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 opacity-50 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-20">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: i18n.language === 'ar' ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-2xl"
            >
              <h2 className="text-black font-bold tracking-widest uppercase mb-4 text-sm md:text-base flex items-center gap-3">
                <span className="w-10 h-[2px] bg-black"></span>
                {t('home.hero.keywords')}
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-black mb-8 leading-[1.1] tracking-tight">
                {t('home.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-10 font-light leading-relaxed">
                {t('home.hero.description')}
              </p>

              <div className="flex items-center gap-6">
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-gray-800 transition-all shadow-xl shadow-black/20"
                  >
                    {t('home.hero.cta')}
                    <ChevronRight size={20} className={i18n.language === 'ar' ? 'rotate-180' : ''} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: i18n.language === 'ar' ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full relative"
            >
              {/* Image Container with premium rounded styling */}
              <img
                src={currentBg}
                alt="Hero Presentation"
                className={`w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 ${i18n.language === 'ar' ? 'object-left' : 'object-right'}`}
              />

              {/* Decorative floating element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className={`absolute -bottom-6 ${i18n.language === 'ar' ? '-right-6' : '-left-6'} bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20`}
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={24} />
                </div>
                <div className={i18n.language === 'ar' ? 'text-right' : 'text-left'}>
                  <p className="text-xs text-gray-500 font-semibold uppercase">CS Cars</p>
                  <p className="text-sm font-bold text-black">Quality Assured</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Brands Section at bottom */}
        <div className="container mx-auto px-6 mt-20 relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['GEELY', 'CHANGAN', 'MG', 'GAC MOTOR', 'LIVAN', 'VOLKSWAGEN'].map((brand, idx) => (
              <span key={idx} className="text-xl md:text-2xl font-black uppercase tracking-widest text-black">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Highlights */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white border-l-4 border-[#e60000] pl-4">
              {t('home.vehicles.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] aspect-[4/3] md:aspect-auto md:h-64 cursor-pointer"
              >
                <div
                  id={`scroll-container-${vehicle.id}`}
                  className="w-full h-full overflow-y-auto snap-y snap-mandatory scrollbar-hide flex flex-col"
                >
                  {vehicle.imgs && vehicle.imgs.map((img, i) => (
                    <div key={i} className="w-full h-full shrink-0 snap-start relative">
                      <img
                        src={img}
                        alt={`${vehicle.name} ${i}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>

                {/* Sticky Vertical Navigation */}
                {vehicle.imgs && vehicle.imgs.length > 1 && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
                    {vehicle.imgs.map((_, i) => (
                      <button
                        key={i}
                        className="w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white transition-colors hover:scale-125"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const container = document.getElementById(`scroll-container-${vehicle.id}`);
                          if (container) {
                            container.scrollTo({ top: i * container.clientHeight, behavior: 'smooth' });
                          }
                        }}
                      />
                    ))}
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pointer-events-none z-10">
                  <h3 className="text-white font-bold text-lg tracking-wide">{vehicle.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t('services.title')}
            </h2>
            <div className="w-24 h-1 bg-[#e60000] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <Link to="/services" key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-[#111111] border border-[#222] p-8 rounded-2xl relative overflow-visible group h-full"
                >
                  <div className={`absolute -top-6 right-6 p-4 rounded-xl bg-[#1a1a1a] shadow-2xl border border-[#333] transition-transform group-hover:scale-110 group-hover:-translate-y-2 ${service.color}`}>
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-8 mb-4">
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="text-gray-400">
                    {t(`${service.key}.description`)}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
