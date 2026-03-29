// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { motion } from 'framer-motion';
// import { Search, Ship, MapPin, CheckCircle, Clock, AlertCircle } from 'lucide-react';
// import axios from 'axios';
//
// const Tracking = () => {
//   const { t } = useTranslation();
//   const [containerNumber, setContainerNumber] = useState('');
//   const [trackingData, setTrackingData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//
//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!containerNumber.trim()) return;
//
//     setLoading(true);
//     setError('');
//     setTrackingData(null);
//
//     try {
//       const response = await axios.post('http://localhost:5000/api/track-container', {
//         containerNumber
//       });
//       setTrackingData(response.data);
//     } catch (err) {
//       setError(t('tracking.error'));
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   return (
//     <div className="bg-[#0a0a0a] min-h-screen py-24">
//       <div className="container mx-auto px-6 max-w-4xl">
//         <div className="text-center mb-12">
//            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               {t('tracking.title')}
//            </h1>
//            <div className="w-24 h-1 bg-[#e60000] mx-auto mb-8"></div>
//         </div>
//
//         {/* Search Bar */}
//         <motion.form 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           onSubmit={handleSearch}
//           className="bg-[#111] p-2 rounded-lg flex flex-col md:flex-row gap-4 border border-[#333] shadow-2xl mb-12"
//         >
//           <div className="flex-grow flex items-center bg-[#1a1a1a] rounded px-4 py-3">
//              <Search className="text-gray-400 mr-3 rtl-layout:ml-3 rtl-layout:mr-0" size={20} />
//              <input
//                 type="text"
//                 placeholder={t('tracking.placeholder')}
//                 value={containerNumber}
//                 onChange={(e) => setContainerNumber(e.target.value)}
//                 className="bg-transparent w-full text-white outline-none placeholder-gray-500 font-mono tracking-widest uppercase"
//              />
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-[#e60000] hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition-colors disabled:opacity-50 whitespace-nowrap"
//           >
//             {loading ? (
//               <span className="flex items-center gap-2">
//                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//               </span>
//             ) : (
//               t('tracking.button')
//             )}
//           </button>
//         </motion.form>
//
//         {error && (
//             <div className="bg-red-900/20 border border-red-500 text-red-500 p-4 rounded-lg flex items-center gap-3 mb-8">
//               <AlertCircle size={20} />
//               {error}
//             </div>
//         )}
//
//         {/* Tracking Results */}
//         {trackingData && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-[#111] border border-[#333] rounded-2xl overflow-hidden shadow-2xl"
//           >
//             {/* Header Info */}
//             <div className="bg-[#1a1a1a] p-6 border-b border-[#333] grid grid-cols-2 md:grid-cols-4 gap-6">
//                 <div>
//                    <p className="text-gray-500 text-xs uppercase mb-1">{t('tracking.placeholder')}</p>
//                    <p className="text-white font-mono font-bold">{trackingData.container}</p>
//                 </div>
//                 <div>
//                    <p className="text-gray-500 text-xs uppercase mb-1">{t('tracking.status')}</p>
//                    <p className="text-[#e60000] font-bold">{trackingData.status}</p>
//                 </div>
//                 <div>
//                    <p className="text-gray-500 text-xs uppercase mb-1">{t('tracking.vessel')}</p>
//                    <p className="text-white font-bold flex items-center gap-2"><Ship size={14} className="text-blue-400"/> {trackingData.vesselName}</p>
//                 </div>
//                 <div>
//                    <p className="text-gray-500 text-xs uppercase mb-1">{t('tracking.eta')}</p>
//                    <p className="text-white font-bold">{trackingData.estimatedArrival}</p>
//                 </div>
//             </div>
//
//             {/* Timeline */}
//             <div className="p-8">
//                <div className="relative border-l-2 border-[#333] ml-4 md:ml-6 rtl-layout:border-r-2 rtl-layout:border-l-0 rtl-layout:mr-4 md:rtl-layout:mr-6">
//                  {trackingData.timeline.map((event, index) => (
//                    <div key={index} className="mb-8 last:mb-0 relative">
//                      <span className={`absolute -left-[1.18rem] rtl-layout:-right-[1.18rem] rtl-layout:left-auto flex items-center justify-center w-8 h-8 rounded-full ring-8 ring-[#111] ${event.completed ? 'bg-[#e60000]' : 'bg-[#333]'}`}>
//                        {event.completed ? <CheckCircle className="text-white" size={16} /> : <Clock className="text-gray-500" size={16} />}
//                      </span>
//                      <div className="ml-8 rtl-layout:mr-8 rtl-layout:ml-0 bg-[#1a1a1a] p-4 rounded-lg border border-[#222]">
//                         <div className="flex justify-between items-start mb-1">
//                            <h3 className={`font-bold ${event.completed ? 'text-white' : 'text-gray-500'}`}>{event.status}</h3>
//                            <span className="text-xs text-gray-500 font-mono bg-black px-2 py-1 rounded">{event.date}</span>
//                         </div>
//                         <p className="text-sm text-gray-400 flex items-center gap-1 mt-2">
//                            <MapPin size={12} className={event.completed ? 'text-[#e60000]' : 'text-gray-600'} /> {event.location}
//                         </p>
//                      </div>
//                    </div>
//                  ))}
//                </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };
//
// export default Tracking;
