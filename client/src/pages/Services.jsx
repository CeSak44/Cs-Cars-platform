import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Services = () => {
  const { t } = useTranslation();

  const serviceSections = [
    {
      id: 'research',
      bgImg: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop',
    },
    {
      id: 'assistance',
      bgImg: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2000&auto=format&fit=crop',
    },
    {
      id: 'options',
      bgImg: 'https://images.unsplash.com/photo-1550355220-b5056984da61?q=80&w=2000&auto=format&fit=crop',
    },
    {
      id: 'reports',
      bgImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    }
  ];

  return (
    <div className="scroll-snap-container bg-black h-screen w-full overflow-y-scroll overflow-x-hidden">
      {serviceSections.map((section, index) => (
        <section 
          key={section.id} 
          className="scroll-snap-section relative w-full h-screen flex items-center justify-center p-6"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/80 to-[#111] z-10" />
             <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                style={{ backgroundImage: `url(${section.bgImg})` }}
             />
          </div>

          <div className="container mx-auto relative z-20 flex flex-col md:flex-row items-center gap-12">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: false, amount: 0.5 }}
               transition={{ duration: 0.8 }}
               className="flex-1"
             >
                <div className="inline-block px-4 py-2 border border-[#e60000] text-[#e60000] font-bold tracking-widest uppercase mb-6 text-sm rounded-full bg-black/50 backdrop-blur-sm">
                  Service 0{index + 1}
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
                  {t(`services.${section.id}.title`)}
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 font-light border-l-4 border-[#e60000] pl-6 py-2 rtl-layout:border-r-4 rtl-layout:border-l-0 rtl-layout:pr-6 rtl-layout:pl-0">
                  {t(`services.${section.id}.description`)}
                </p>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: false, amount: 0.5 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="flex-1 w-full max-w-lg hidden md:block"
             >
                <div className="aspect-square rounded-full border-2 border-[#333] p-4 relative border-dashed animate-[spin_60s_linear_infinite]">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#1a1a1a] shadow-2xl shadow-[#e60000]/20 animate-[spin_60s_linear_infinite_reverse]">
                     <img src={section.bgImg} alt={t(`services.${section.id}.title`)} className="w-full h-full object-cover scale-110" />
                  </div>
                </div>
             </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
