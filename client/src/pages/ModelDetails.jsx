import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Maximize2, X, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { modelsData } from '../data/modelsData';

const ModelDetails = () => {
  const { modelId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [model, setModel] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundModel = modelsData.find(m => m.id === modelId);
    if (foundModel) setModel(foundModel);
  }, [modelId]);

  if (!model) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#F50101] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">{t('model_details.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24 md:pt-32 pb-20">
      {/* Back Button */}
      <div className="container mx-auto px-6 mb-8">
        <button 
          onClick={() => navigate('/models')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium tracking-wide uppercase text-sm">{t('model_details.back_to_models')}</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-[#F50101] font-bold tracking-widest uppercase mb-2">{model.brand}</p>
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight leading-tight">{model.name}</h1>
            <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-8">{model.slogan}</h2>
            <p className="text-gray-300 leading-relaxed mb-8">{model.overview}</p>
            
            <div className="flex flex-wrap gap-4">
               <button onClick={() => {
                 document.getElementById('cta-section').scrollIntoView({ behavior: 'smooth' });
               }} className="bg-[#F50101] hover:bg-[#cc0000] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-[#F50101]/20 transition-all">
                 {t('model_details.request_info')}
               </button>
               <button onClick={() => setGalleryOpen(true)} className="bg-[#1a1a1a] hover:bg-[#222] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all">
                 <Maximize2 size={18} /> {t('model_details.view_gallery')}
               </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-video shadow-2xl group"
          >
             <img src={model.imgs[0]} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-[70px] md:top-[85px] z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-y border-[#222] mb-12">
        <div className="container mx-auto px-6 flex overflow-x-auto scrollbar-hide">
          {['overview', 'specifications', 'editions', 'features', 'pricing'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-semibold whitespace-nowrap capitalize transition-colors border-b-2 ${activeTab === tab ? 'border-[#F50101] text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
              {t(`model_details.tabs.${tab}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 min-h-[400px]">
        {/* Specifications Tab */}
        {activeTab === 'specifications' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h3 className="text-3xl font-bold mb-8">{t('model_details.specs_title')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(model.specs).map(([key, value]) => (
                <div key={key} className="bg-[#111] p-6 rounded-xl border border-[#222] hover:border-[#F50101]/30 transition-colors">
                  <p className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-xl font-medium text-white">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Editions Tab */}
        {activeTab === 'editions' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h3 className="text-3xl font-bold mb-8">{t('model_details.editions_title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {model.editions.map((edition, idx) => (
                <div key={idx} className="bg-[#111] rounded-2xl p-8 border border-[#222] relative overflow-hidden group hover:border-[#F50101]/50 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F50101]/10 to-transparent rounded-bl-full"></div>
                  <h4 className="text-2xl font-bold mb-6 text-white group-hover:text-[#F50101] transition-colors">{edition.name}</h4>
                  <ul className="space-y-4 relative z-10">
                    {edition.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#F50101] mt-0.5 shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
             <h3 className="text-3xl font-bold mb-8">{t('model_details.features_title')}</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {model.features.map((feature, idx) => (
                 <div key={idx} className="bg-[#111] p-8 rounded-xl border border-[#222] hover:bg-[#151515] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#F50101]/10 flex items-center justify-center mb-6">
                       <span className="w-3 h-3 bg-[#F50101] rounded-full shadow-[0_0_10px_#F50101]"></span>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-white">{feature.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                 </div>
               ))}
             </div>
          </motion.div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
             <h3 className="text-3xl font-bold mb-6">{t('model_details.pricing_title')}</h3>
             <div className="bg-[#F50101]/10 border border-[#F50101]/30 p-6 rounded-xl mb-8">
               <p className="text-gray-300 italic leading-relaxed">
                 {t('model_details.pricing_notice')}
               </p>
             </div>
             
             <div className="space-y-4 bg-[#111] p-8 rounded-2xl border border-[#222]">
                <div className="flex justify-between items-center border-b border-[#333] pb-4">
                  <span className="text-xl font-medium">{t('model_details.version_1')}</span>
                  <span className="text-2xl font-bold text-[#F50101] tracking-wide">______ DA</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#333] pb-4 pt-2">
                  <span className="text-xl font-medium">{t('model_details.version_2')}</span>
                  <span className="text-2xl font-bold text-[#F50101] tracking-wide">______ DA</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xl font-medium">{t('model_details.version_3')}</span>
                  <span className="text-2xl font-bold text-[#F50101] tracking-wide">______ DA</span>
                </div>
             </div>
          </motion.div>
        )}

        {/* Overview Tab (Default) */}
        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {model.imgs.slice(1, 3).map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer" onClick={() => { setSelectedImg(i + 1); setGalleryOpen(true); }}>
                  <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-gradient-to-b from-[#151515] to-[#0d0d0d] p-10 rounded-3xl border border-[#222]">
               <div>
                  <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-2">{t('model_details.engine')}</p>
                  <p className="text-2xl md:text-3xl font-light">{model.specs.engine}</p>
               </div>
               <div className="border-t md:border-t-0 md:border-l border-[#333] pt-6 md:pt-0">
                  <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-2">{t('model_details.power')}</p>
                  <p className="text-2xl md:text-3xl font-light">{model.specs.power}</p>
               </div>
               <div className="border-t md:border-t-0 md:border-l border-[#333] pt-6 md:pt-0">
                  <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-2">{t('model_details.consumption')}</p>
                  <p className="text-2xl md:text-3xl font-light">{model.specs.consumption}</p>
               </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div id="cta-section" className="container mx-auto px-6 mt-32">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F50101] to-transparent"></div>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{t('model_details.ready_to_drive', { name: model.name })}</h3>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">{t('model_details.ready_subtitle')}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all text-lg">
                <Phone size={22} /> {t('model_details.request_call')}
             </button>
             <a href="https://chat.whatsapp.com/Jad0I9rPW8SDr7Fb4RWCLl" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#25D366]/20 text-lg">
                <MessageCircle size={22} /> {t('model_details.whatsapp_us')}
             </a>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col"
          >
             <div className="flex justify-end p-6 absolute top-0 right-0 z-50">
               <button onClick={() => setGalleryOpen(false)} className="text-white hover:text-[#F50101] transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full">
                 <X size={28} />
               </button>
             </div>
             
             <div className="flex-1 flex items-center justify-center p-6 mt-16 md:mt-0 relative">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={selectedImg}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    src={model.imgs[selectedImg]} 
                    className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl" 
                    alt="" 
                  />
                </AnimatePresence>
             </div>
             
             <div className="h-40 p-6 flex gap-4 overflow-x-auto scrollbar-hide justify-start md:justify-center items-center bg-black/50 border-t border-white/5">
                {model.imgs.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedImg(i)}
                    className={`shrink-0 w-32 h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImg === i ? 'border-[#F50101] opacity-100 scale-105 shadow-[0_0_15px_rgba(245,1,1,0.5)]' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModelDetails;
