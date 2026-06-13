const imagesObj = import.meta.glob('../assets/*/*.{webp,png,jpg,jpeg}', { eager: true });

export const getImgs = (folderKeyword) => {
  return Object.entries(imagesObj)
    .filter(([path]) => path.includes(folderKeyword))
    .map(([, module]) => module.default || module);
};

export const modelsData = [
  {
    id: "gac-gs3",
    name: "2026 GAC GS3",
    brand: "GAC",
    category: "SUV",
    slogan: "Emzoom - Bold & Dynamic",
    overview: "The all-new GAC GS3 Emzoom redefines the compact SUV segment with its striking geometric design, robust performance, and advanced technology. Perfect for the modern driver seeking style without compromise.",
    imgs: getImgs('GAC GS3'),
    specs: {
      engine: "1.5L Turbo 4-Cylinder",
      power: "174 HP",
      torque: "270 Nm",
      transmission: "7-Speed DCT",
      fuelType: "Gasoline",
      drivetrain: "FWD",
      consumption: "6.2 L/100km",
      seating: "5 Passengers",
      cargo: "341 L",
      dimensions: "4410 x 1850 x 1600 mm"
    },
    editions: [
      {
        name: "GS3 GL",
        highlights: ["18-inch Alloy Wheels", "10.25-inch Touchscreen", "Rear View Camera", "Cruise Control"]
      },
      {
        name: "GS3 R-Style",
        highlights: ["Sport Appearance Package", "19-inch Alloy Wheels", "Panoramic Sunroof", "Wireless Charging"]
      }
    ],
    features: [
      { title: "Advanced Safety", desc: "Equipped with comprehensive ADAS including Autonomous Emergency Braking and Lane Keeping Assist." },
      { title: "Smart Connectivity", desc: "Seamless Apple CarPlay and Android Auto integration." },
      { title: "Premium Interior", desc: "Ergonomic seating with high-quality soft-touch materials." }
    ]
  },
  {
    id: "livan-x3-pro",
    name: "Livan X3 Pro",
    brand: "Livan",
    category: "Crossover",
    slogan: "Your Daily Companion",
    overview: "The Livan X3 Pro is a highly practical and affordable crossover, offering excellent value, comfort, and reliability for urban commuting and weekend getaways.",
    imgs: getImgs('LivanX3pro'),
    specs: {
      engine: "1.5L Naturally Aspirated",
      power: "113 HP",
      torque: "143 Nm",
      transmission: "CVT / 5-Speed Manual",
      fuelType: "Gasoline",
      drivetrain: "FWD",
      consumption: "6.9 L/100km",
      seating: "5 Passengers",
      cargo: "400 L",
      dimensions: "4005 x 1760 x 1575 mm"
    },
    editions: [
      {
        name: "X3 Pro Comfort",
        highlights: ["8-inch Display", "Rear Parking Sensors", "LED Daytime Running Lights", "Fabric Seats"]
      },
      {
        name: "X3 Pro Luxury",
        highlights: ["Sunroof", "Leatherette Seats", "Push Button Start", "Rear Camera"]
      }
    ],
    features: [
      { title: "Urban Agility", desc: "Compact dimensions make parking and city driving effortless." },
      { title: "Economic Driving", desc: "Highly efficient powertrain for low running costs." },
      { title: "Spacious Cabin", desc: "Surprisingly roomy interior with clever storage solutions." }
    ]
  },
  {
    id: "vw-t-roc",
    name: "VW T-ROC",
    brand: "Volkswagen",
    category: "Compact SUV",
    slogan: "Born Confident",
    overview: "The Volkswagen T-ROC stands out with its expressive design, dynamic handling, and premium German engineering. It blends the dominance of an SUV with the agility of a compact hatchback.",
    imgs: getImgs('VW T-ROC'),
    specs: {
      engine: "1.4L TSI or 2.0L TSI",
      power: "150 HP / 190 HP",
      torque: "250 Nm / 320 Nm",
      transmission: "7-Speed DSG",
      fuelType: "Gasoline",
      drivetrain: "FWD / 4MOTION",
      consumption: "6.5 L/100km",
      seating: "5 Passengers",
      cargo: "445 L",
      dimensions: "4236 x 1819 x 1584 mm"
    },
    editions: [
      {
        name: "Style",
        highlights: ["LED Headlights", "Digital Cockpit", "App-Connect", "17-inch Alloys"]
      },
      {
        name: "R-Line",
        highlights: ["R-Line Exterior Styling", "Sports Seats", "18-inch 'Nevada' Alloys", "Progressive Steering"]
      }
    ],
    features: [
      { title: "IQ.DRIVE", desc: "Advanced driver assistance systems for a safer journey." },
      { title: "Digital Cockpit Pro", desc: "Customizable high-resolution instrument cluster." },
      { title: "4MOTION", optional: true, desc: "Intelligent all-wheel drive for superior traction." }
    ]
  },
  {
    id: "geely-coolray",
    name: "2026 Geely Coolray",
    brand: "Geely",
    category: "Compact SUV",
    slogan: "Unleash the Thrill",
    overview: "The new Geely Coolray is designed for the young and restless. Featuring a sporty aesthetic, class-leading performance, and cutting-edge technology, it delivers an exhilarating driving experience.",
    imgs: getImgs('Coolray-Battle'),
    specs: {
      engine: "1.5L Turbo 4-Cylinder",
      power: "172 HP",
      torque: "290 Nm",
      transmission: "7-Speed Wet DCT",
      fuelType: "Gasoline",
      drivetrain: "FWD",
      consumption: "5.8 L/100km",
      seating: "5 Passengers",
      cargo: "330 L",
      dimensions: "4380 x 1810 x 1615 mm"
    },
    editions: [
      {
        name: "Comfort",
        highlights: ["17-inch Alloys", "10.25-inch Display", "Rear Camera", "Drive Modes"]
      },
      {
        name: "Sport Plus",
        highlights: ["Two-Tone Body Color", "Carbon Fiber Accents", "360° Camera", "Automated Parking"]
      }
    ],
    features: [
      { title: "Sporty Dynamics", desc: "Tuned suspension and responsive steering for engaging handling." },
      { title: "BMA Platform", desc: "Built on Geely's advanced B-segment Modular Architecture." },
      { title: "Intelligent Tech", desc: "Advanced voice control and intelligent climate control." }
    ]
  },
  {
    id: "changan-x5",
    name: "Changan X5",
    brand: "Changan",
    category: "Compact SUV",
    slogan: "Dynamic and Forward-Looking",
    overview: "The Changan Oshan X5 boasts a highly aggressive front fascia, sleek profile, and a tech-laden interior. It's built to impress and perform in the competitive compact SUV market.",
    imgs: getImgs('ChanganX5'),
    specs: {
      engine: "1.5L Blue Core Turbo",
      power: "180 HP",
      torque: "300 Nm",
      transmission: "7-Speed DCT",
      fuelType: "Gasoline",
      drivetrain: "FWD",
      consumption: "6.2 L/100km",
      seating: "5 Passengers",
      cargo: "317 L",
      dimensions: "4490 x 1860 x 1580 mm"
    },
    editions: [
      {
        name: "Elite",
        highlights: ["10.25-inch Infotainment", "LED Headlamps", "Keyless Entry", "Rear Parking Sensors"]
      },
      {
        name: "Premium",
        highlights: ["Panoramic Sunroof", "Leather Seats", "360-degree Camera", "Adaptive Cruise Control"]
      }
    ],
    features: [
      { title: "Blue Core Engine", desc: "High efficiency, high performance, and low emissions." },
      { title: "Futuristic Design", desc: "Waterfall grille and sharp character lines." },
      { title: "OnCall Smart System", desc: "Advanced voice recognition and remote control capabilities." }
    ]
  },
  {
    id: "mg-5",
    name: "MG 5",
    brand: "MG",
    category: "Sedan",
    slogan: "Do More",
    overview: "The MG 5 is a stylish and spacious compact sedan that offers premium features, excellent ride comfort, and outstanding value for money, making it an ideal choice for families and professionals alike.",
    imgs: getImgs('MG5'),
    specs: {
      engine: "1.5L Naturally Aspirated",
      power: "118 HP",
      torque: "150 Nm",
      transmission: "CVT",
      fuelType: "Gasoline",
      drivetrain: "FWD",
      consumption: "5.5 L/100km",
      seating: "5 Passengers",
      cargo: "512 L",
      dimensions: "4601 x 1818 x 1489 mm"
    },
    editions: [
      {
        name: "COM (Comfort)",
        highlights: ["8-inch Touchscreen", "Apple CarPlay / Android Auto", "Rear View Camera", "Fabric Seats"]
      },
      {
        name: "DEL (Deluxe)",
        highlights: ["16-inch Alloys", "Leather Seats", "Electric Sunroof", "360° Camera"]
      }
    ],
    features: [
      { title: "Class-Leading Space", desc: "Generous legroom and a massive 512L trunk." },
      { title: "Refined Ride", desc: "Suspension tuned for maximum comfort on urban roads." },
      { title: "5-Star Safety", desc: "High-strength steel body and comprehensive airbag system." }
    ]
  }
];
