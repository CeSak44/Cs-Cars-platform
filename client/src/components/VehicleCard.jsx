import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const VehicleCard = ({ vehicle, index }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const imgsToRender = vehicle.imgs && Array.isArray(vehicle.imgs) && vehicle.imgs.length > 0 ? vehicle.imgs : [];

  useEffect(() => {
    if (isHovered || imgsToRender.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % imgsToRender.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, imgsToRender.length]);

  const handleImageError = (i) => {
    setImageErrors((prev) => ({ ...prev, [i]: true }));
  };

  if (imgsToRender.length === 0) {
     return (
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: index * 0.1 }}
           className="relative overflow-hidden rounded-xl bg-[#1a1a1a] aspect-[4/3] md:aspect-auto md:h-72 flex items-center justify-center border border-[#333]"
        >
           <p className="text-gray-500 font-medium tracking-wide">Image Not Available</p>
           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
             <h3 className="text-white font-bold text-xl tracking-wide">{vehicle.name}</h3>
           </div>
        </motion.div>
     );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate('/models/' + vehicle.id)}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] aspect-[4/3] md:aspect-auto md:h-72 cursor-pointer shadow-lg hover:shadow-[0_20px_40px_rgba(245,1,1,0.15)] transition-all duration-500 border border-transparent hover:border-[#F50101]/30"
    >
      <div className="w-full h-full relative bg-black">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeImgIndex}
            src={imageErrors[activeImgIndex] ? 'https://via.placeholder.com/800x600/111111/444444?text=Image+Not+Found' : imgsToRender[activeImgIndex]}
            onError={() => handleImageError(activeImgIndex)}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
               opacity: 1, 
               scale: isHovered ? 1.02 : 1,
               x: isHovered ? -10 : 0 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={`${vehicle.name} view ${activeImgIndex + 1}`}
          />
        </AnimatePresence>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F50101]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Navigation Indicators */}
      {imgsToRender.length > 1 && (
        <div className="absolute top-4 left-4 right-4 flex gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {imgsToRender.map((_, i) => (
            <div 
              key={i} 
              className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer backdrop-blur-sm"
              onClick={(e) => {
                 e.stopPropagation();
                 setActiveImgIndex(i);
              }}
            >
              <motion.div 
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: activeImgIndex === i ? "100%" : (i < activeImgIndex ? "100%" : "0%") }}
                transition={{ duration: activeImgIndex === i && !isHovered ? 3.5 : 0.3, ease: "linear" }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Text Container */}
      <motion.div 
         className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col"
         initial={{ y: 0 }}
         animate={{ y: isHovered ? -10 : 0 }}
         transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h3 className="text-white font-bold text-2xl tracking-wide group-hover:text-[#F50101] transition-colors duration-300 drop-shadow-md">
           {vehicle.name}
        </h3>
        <p className="text-gray-400 text-sm mt-1">{vehicle.brand} • {vehicle.category}</p>
        <motion.div 
           initial={{ opacity: 0, height: 0, marginTop: 0 }}
           animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0, marginTop: isHovered ? 8 : 0 }}
           className="text-gray-300 text-sm flex items-center gap-2 overflow-hidden"
        >
           <span className="font-medium tracking-wider uppercase text-[11px] text-white">{t('nav.discover_model')}</span>
           <ChevronRight size={14} className="text-[#F50101]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default VehicleCard;
