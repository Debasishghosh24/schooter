export const scooters = [
  {
    id: 'v1',
    name: 'AERO V1',
    description: 'Urban. Electric. Iconic.',
    range: '120 km',
    topSpeed: '80 km/h',
    price: 'From $2,999',
    image: '/images/scooter_white.jpg',
    cssFilter: 'brightness(1)',
    category: 'City',
    colors: ['#FFFFFF', '#111111', '#0071E3', '#CC0000']
  },
  {
    id: 'v1-pro',
    name: 'AERO V1 Pro',
    description: 'More Power. More Possibilities.',
    range: '150 km',
    topSpeed: '105 km/h',
    price: 'From $3,499',
    image: '/images/scooter_white.jpg',
    cssFilter: 'hue-rotate(200deg) saturate(2) brightness(0.8)',
    category: 'Premium',
    colors: ['#0071E3', '#111111', '#CC0000']
  },
  {
    id: 'v1-lite',
    name: 'AERO V1 Lite',
    description: 'Smart Choice. Everyday.',
    range: '100 km',
    topSpeed: '75 km/h',
    price: 'From $2,499',
    image: '/images/scooter_white.jpg',
    cssFilter: 'hue-rotate(340deg) saturate(3) brightness(0.9)',
    category: 'City',
    colors: ['#CC0000', '#555555', '#FFFFFF']
  },
  {
    id: 'v1-max',
    name: 'AERO V1 Max',
    description: 'Go Further. Together.',
    range: '180 km',
    topSpeed: '120 km/h',
    price: 'From $4,499',
    image: '/images/scooter_white.jpg',
    cssFilter: 'brightness(0.3) contrast(1.2)',
    category: 'Long Range',
    colors: ['#111111', '#0071E3', '#CC0000']
  }
];

export const specifications = {
  Performance: [
    { label: 'Range', value: '150+ km' },
    { label: 'Top Speed', value: '120 km/h' },
    { label: '0-40 km/h', value: '3.2 sec' },
    { label: 'Motor Power', value: '8.5 kW Peak' },
  ],
  Battery: [
    { label: 'Capacity', value: '5.2 kWh' },
    { label: 'Type', value: 'Lithium-ion High Density' },
    { label: 'Charging Time', value: '0-80% in 45 min' },
    { label: 'Warranty', value: '5 Years / 50,000 km' },
  ],
  Features: [
    { label: 'Display', value: '7" Smart TFT Touch' },
    { label: 'Connectivity', value: '4G / Bluetooth / GPS' },
    { label: 'Lighting', value: 'All-LED Signature' },
    { label: 'Storage', value: '32L Underseat' },
  ],
  Safety: [
    { label: 'Brakes', value: 'Dual Disc with ABS' },
    { label: 'Traction Control', value: 'Yes, 3 Modes' },
    { label: 'Sensors', value: 'Fall detection, Anti-theft' },
    { label: 'Tires', value: 'Pirelli Angel Scooter' },
  ]
};
