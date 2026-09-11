export const experienceColors = [
  { id: 'white', name: 'Pearl White', cssFilter: 'brightness(1)' },
  { id: 'black', name: 'Midnight Black', cssFilter: 'brightness(0.2) contrast(1.2)' },
  { id: 'blue', name: 'Electric Blue', cssFilter: 'hue-rotate(200deg) saturate(2) brightness(0.8)' },
  { id: 'red', name: 'Crimson Red', cssFilter: 'hue-rotate(340deg) saturate(3) brightness(0.9)' }
];

export const experienceSpecs = [
  { label: 'RANGE', value: '150+', unit: 'KM' },
  { label: 'TOP SPEED', value: '120', unit: 'KM/H' },
  { label: 'BATTERY', value: '5.2', unit: 'kWh' },
  { label: '0-40 KM/H', value: '4.2', unit: 'SEC' },
  { label: 'SMART TFT', value: '7"', unit: '' }
];

export const experienceHotspots = [
  {
    id: 'led',
    number: '01',
    title: 'Signature LED',
    description: 'Adaptive LED lighting designed for maximum visibility and a distinctive road presence.',
    position: { top: '35%', left: '75%' }
  },
  {
    id: 'display',
    number: '02',
    title: 'Smart TFT Display',
    description: '7-inch intelligent high-resolution display with navigation and ride metrics.',
    position: { top: '22%', left: '48%' }
  },
  {
    id: 'battery',
    number: '03',
    title: '5.2 kWh Battery',
    description: 'High-density lithium-ion battery placed perfectly for optimal center of gravity.',
    position: { top: '65%', left: '40%' }
  },
  {
    id: 'brakes',
    number: '04',
    title: 'Hydraulic Disc Brake',
    description: 'Dual hydraulic disc brakes with ABS for ultimate stopping power in any condition.',
    position: { top: '75%', left: '25%' }
  }
];
