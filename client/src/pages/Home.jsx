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
      <section className="relative min-h-screen pt-32 pb-8 flex flex-col justify-center bg-white overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-between h-full pt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-0 mt-10">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: i18n.language === 'ar' ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-2xl z-20"
            >
              <h1 className="text-[3.5rem] md:text-6xl lg:text-[5.5rem] font-black text-black mb-6 leading-[1.05] tracking-tight max-w-[15ch]">
                Premium<br />
                Car Rental<br />
                in New York
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-10 font-medium leading-relaxed max-w-md">
                Don't deny yourself the pleasure of driving the best premium cars from around the world here and now
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: i18n.language === 'ar' ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`absolute top-1/2 -translate-y-1/2 w-[90%] md:w-[70%] lg:w-[65%] z-10 pointer-events-none ${i18n.language === 'ar' ? 'left-[-5%]' : 'right-[-5%]'}`}
            >
              <img
                src={currentBg}
                alt="Hero Presentation"
                className="w-full h-auto object-contain scale-110 md:scale-125 origin-center"
              />
            </motion.div>

          </div>

          {/* Brands Section at bottom */}
          <div className="w-full mt-auto pt-20 relative z-20">
            <div className="flex flex-wrap items-center justify-between gap-4 py-8">
              {[
                { name: 'Lamborghini', url: 'https://upload.wikimedia.org/wikipedia/en/d/df/Lamborghini_Logo.svg' },
                { name: 'BMW', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
                { name: 'Tesla', url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
                { name: 'Cadillac', url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Cadillac_logo_2014.svg' },
                { name: 'Porsche', url: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Porsche_logo.svg' },
                { name: 'Mercedes', url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
                { name: 'Lexus', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Lexus_logo.svg' },
                { name: 'Ferrari', url: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Ferrari-Logo.svg' },
              ].map((brand, idx) => (
                <div 
                  key={idx} 
                  className={`w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-2xl cursor-pointer transition-all duration-300
                    ${idx === 4 ? 'border border-gray-200 bg-white scale-110 shadow-sm opacity-100 grayscale-0' : 'grayscale opacity-40 hover:grayscale-0 hover:opacity-100'}`}
                >
                  <img src={brand.url} alt={brand.name} className={`object-contain ${idx === 4 ? 'w-10 h-10 md:w-14 md:h-14' : 'w-8 h-8 md:w-10 md:h-10'}`} />
                </div>
              ))}
              
              <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors bg-white shadow-sm">
                <ChevronRight size={20} className="text-black" />
              </button>
            </div>
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
