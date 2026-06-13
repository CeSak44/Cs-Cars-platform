import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { modelsData } from '../data/modelsData';
import VehicleCard from '../components/VehicleCard';

const Models = () => {
  const { t } = useTranslation();
  const [selectedBrand, setSelectedBrand] = useState('All');

  const brands = ['All', ...new Set(modelsData.map(m => m.brand))];
  
  const filteredModels = selectedBrand === 'All' 
    ? modelsData 
    : modelsData.filter(m => m.brand === selectedBrand);

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-[#0a0a0a] min-h-screen text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">{t('models_page.title_our')} <span className="text-[#F50101]">{t('models_page.title_models')}</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('models_page.subtitle')}</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {brands.map(brand => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${selectedBrand === brand ? 'bg-[#F50101] text-white shadow-lg shadow-[#F50101]/20' : 'bg-[#1a1a1a] text-gray-400 hover:text-white hover:bg-[#222]'}`}
            >
              {brand === 'All' ? t('models_page.all_brands') : brand}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModels.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;
