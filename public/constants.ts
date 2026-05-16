
import { ServiceCardData } from './types';

 interface ServiceCardData {
  id: string;
  number: string;
  title: string;
  items: string[];
}

 interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  bgColor: string;
  accentColor: string;
}

export const SERVICES: ServiceCardData[] = [
  {
    id: 'strategy',
    number: '01',
    title: 'STRATEGY',
    items: ['DISCOVERY', 'RESEARCH', 'ANALYSIS', 'CONSULTATION', 'OPTIMIZATION']
  },
  {
    id: 'design',
    number: '02',
    title: 'DESIGN',
    items: ['BRANDING', 'UI/UX', 'VISUAL IDENTITY', 'GRAPHICS', 'ILLUSTRATION']
  },
  {
    id: 'development',
    number: '03',
    title: 'DEVELOPMENT',
    items: ['FRONTEND', 'FRAMER', 'API INTEGRATION', 'TESTING', 'DEPLOYMENT']
  },
  {
    id: 'production',
    number: '04',
    title: 'PRODUCTION',
    items: ['3D MODELING', 'VR EXPERIENCES', 'VISUALIZATION', 'MOTION GRAPHICS', 'ANIMATIONS']
  }
];


// *************FOR HOME PAGE****************
import React from 'react';
interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  bgColor: string;
  accentColor: string;
  url : string;
}


export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'RENULT',
    category: 'Motion Desgining',
    year: '2025',
    imageUrl: 'https://snappy-motions.b-cdn.net/MotionDesign/renault/p2.png',
    bgColor: '#E5E7EB',
    accentColor: '#E91E63',
    url: "/work/motion-designing/renult"
  },
  {
    id: '2',
    title: 'SKULLZ',
    category: 'Motion Desgining',
    year: '2025',
    imageUrl: 'https://snappy-motions.b-cdn.net/MotionDesign/skullz/image-gen%20(46).png',
    bgColor: '#F97316',
    accentColor: '#FFFFFF',
    url: "/work/motion-designing/skullz"
  },
  {
    id: '3',
    title: 'AURORA',
    category: 'Graphics Designing',
    year: '2025',
    imageUrl: 'https://snappy-motions.b-cdn.net/GraphicsDesign/projectImg/Blueberry%20Frozen%20Deset.png',
    bgColor: '#581C87',
    accentColor: '#D8B4FE',
    url: "/work/graphics-designing"

  },
  {
    id: '4',
    title: 'MALPANI',
    category: 'Video Production',
    year: '2025',
    imageUrl: 'https://snappy-motions.b-cdn.net/Film/H/BgImage/f6.png',
    bgColor: '#FFF7ED',
    accentColor: '#9A3412',
    url: "/work/video-production"
  },
  {
    id: '5',
    title: 'WPL Season 2',
    category: 'Video Production',
    year: '2025',
    imageUrl: 'https://snappy-motions.b-cdn.net/Film/H/BgImage/f1.png',
    bgColor: '#000000',
    accentColor: '#FFFFFF',
  url: "/work/video-production"
  },
  {
    id: '6',
    title: 'BOL X Shreya Dhanwanthary',
    category: 'Video Production',
    year: '2025',
    imageUrl: 'https://snappy-motions.b-cdn.net/Film/H/BgImage/f2.png',
    bgColor: '#000000',
    accentColor: '#FFFFFF',
    url: "/work/video-production"

  }
];

// export const ArrowIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="7" y1="17" x2="17" y2="7"></line>
//     <polyline points="7 7 17 7 17 17"></polyline>
//   </svg>
// );
