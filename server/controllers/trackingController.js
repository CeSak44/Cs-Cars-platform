// import axios from 'axios';
//
// export const trackContainer = async (req, res) => {
//   const { containerNumber } = req.body;
//
//   if (!containerNumber) {
//     return res.status(400).json({ error: 'Container number is required' });
//   }
//
//   try {
//     // For now, return mock data since SeaRates requires API keys
//     // In production, uncomment the following code and replace with actual API call
//     /*
//     const response = await axios.get(`https://api.searates.com/shipping/tracking?container=${containerNumber}&api_key=${process.env.SEARATES_API_KEY}`);
//     return res.json(response.data);
//     */
//
//     // MOCK DATA for demonstration purposes
//     const mockTrackingData = {
//       container: containerNumber,
//       status: 'In Transit',
//       vesselName: 'MSC ANNA',
//       estimatedArrival: '2026-04-15',
//       timeline: [
//         { status: 'Gate In', location: 'Shanghai, China', date: '2026-03-01', completed: true },
//         { status: 'Loaded on Vessel', location: 'Shanghai, China', date: '2026-03-05', completed: true },
//         { status: 'In Transit', location: 'Indian Ocean', date: '2026-03-15', completed: true },
//         { status: 'Arrival at Port', location: 'Algiers, Algeria', date: '2026-04-10', completed: false },
//         { status: 'Customs Clearance', location: 'Algiers, Algeria', date: '2026-04-12', completed: false },
//         { status: 'Final Delivery', location: 'Sétif, Algeria', date: '2026-04-15', completed: false },
//       ]
//     };
//
//     // Simulate API delay
//     setTimeout(() => {
//       res.json(mockTrackingData);
//     }, 1500);
//
//   } catch (error) {
//     console.error('Error tracking container:', error);
//     res.status(500).json({ error: 'Failed to retrieve tracking data' });
//   }
// };
