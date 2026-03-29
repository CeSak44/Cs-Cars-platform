import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, ShieldCheck, Tag, FileText } from 'lucide-react';

const vehicles = [
  { id: 1, name: "2026 GAC GS3", img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Livan X3 Pro", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "VW Golf 8.5R", img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "VW T-ROC", img: "https://images.unsplash.com/photo-1518987048-93e29699e79a?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "2026 Geely Coolray", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop" }
];

const Home = () => {
  const { t } = useTranslation();

  const services = [
    { id: 'research', icon: Search, color: "text-blue-500", key: "services.research" },
    { id: 'assistance', icon: ShieldCheck, color: "text-green-500", key: "services.assistance" },
    { id: 'options', icon: Tag, color: "text-yellow-500", key: "services.options" },
    { id: 'reports', icon: FileText, color: "text-purple-500", key: "services.reports" }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2000&auto=format&fit=crop")'}}
        />

        <div className="container mx-auto px-6 relative z-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-[#e60000] font-bold tracking-wider uppercase mb-2 text-sm md:text-base">
              {t('home.hero.keywords')}
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-light">
              {t('home.hero.description')}
            </p>
            
            <Link to="/services">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#e60000] text-white px-8 py-4 rounded-md font-bold text-lg flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
              >
                {t('home.hero.cta')} <ChevronRight />
              </motion.button>
            </Link>
          </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] aspect-[4/3] md:aspect-auto md:h-64 cursor-pointer"
              >
                <img 
                  src={vehicle.img} 
                  alt={vehicle.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-4">
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
