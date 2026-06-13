import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Search, ShieldCheck, Tag, FileText } from 'lucide-react';
import geelyLogo from '../assets/Logos/Geely-logo.webp';
import vwLogo from '../assets/Logos/volkswagen-logo.webp';
import livanLogo from '../assets/Logos/Livan-logo.webp';
import gacLogo from '../assets/Logos/GAC-Logo.png';
import changanLogo from '../assets/Logos/chanagan-logo.webp';
import homeHeroPicture from '../assets/HomeHeroPicture.webp';

import { modelsData as vehicles } from '../data/modelsData';

import VehicleCard from '../components/VehicleCard';

const Home = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const services = [
    { id: 'research', icon: Search, color: "text-blue-500", key: "services.research" },
    { id: 'assistance', icon: ShieldCheck, color: "text-green-500", key: "services.assistance" },
    { id: 'options', icon: Tag, color: "text-yellow-500", key: "services.options" },
    { id: 'reports', icon: FileText, color: "text-purple-500", key: "services.reports" }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] pt-20 lg:pt-24 pb-0 flex flex-col justify-between bg-[#F2F4F4] overflow-hidden">

        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center pt-4 md:pt-8 lg:pt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-0 mt-4 lg:mt-0">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: i18n.language === 'ar' ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-2xl z-20"
            >
              <h1 className="text-[3.5rem] md:text-6xl lg:text-[5.5rem] font-black mb-4 md:mb-5 leading-[1.05] tracking-tight">
                <span className="bg-gradient-to-r from-[#F50101] to-[#ff4b4b] bg-clip-text text-transparent">CS_Cars</span> <span className="text-black">Sétif</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-black font-light mb-8 leading-snug max-w-md">
                {t('home.hero.trust_subtitle_1')}<br />{t('home.hero.trust_subtitle_2')}
              </p>

              <motion.button
                onClick={() => navigate('/models')}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(245, 1, 1, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 px-8 py-3 lg:px-10 lg:py-4 rounded-full bg-gradient-to-r from-[#F50101] to-[#cc0000] shadow-[0_4px_15px_rgba(245,1,1,0.3)] transition-all duration-300 text-white font-bold text-lg lg:text-xl tracking-wide border-none cursor-pointer"
              >
                {t('nav.discover_models')}
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: i18n.language === 'ar' ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-[100%] md:w-[75%] lg:w-[60%] z-10 pointer-events-none mt-8 lg:mt-0 ${i18n.language === 'ar' ? 'lg:left-[-2%]' : 'lg:right-[-2%]'}`}
            >
              <img
                src={homeHeroPicture}
                alt="Hero Presentation"
                className="w-full h-auto object-contain lg:scale-[1.15] origin-center"
              />
            </motion.div>

          </div>
        </div>

        {/* Brands Section at bottom */}
        <div className="w-full mt-8 lg:mt-auto relative z-20 bg-gradient-to-r from-[#e6e9e9] via-[#f4f6f6] to-[#e6e9e9] py-4 lg:py-6 shadow-inner border-y border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 lg:gap-20">
              {[
                { name: 'Geely', url: geelyLogo },
                { name: 'Volkswagen', url: vwLogo },
                { name: 'Livan', url: livanLogo },
                { name: 'GAC', url: gacLogo },
                { name: 'Changan', url: changanLogo },
              ].map((brand, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-8 md:h-12 lg:h-14 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer"
                >
                  <img src={brand.url} alt={brand.name} className="h-full w-auto object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Highlights */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold border-l-4 border-[#F50101] pl-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('home.vehicles.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('services.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F50101] to-[#cc0000] mx-auto rounded-full"></div>
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
