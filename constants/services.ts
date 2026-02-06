import { Service, AddOn } from '@/types/booking';

export const SERVICES: Service[] = [
    {
        id: 'very-short-acrylics',
        name: 'Very Short Acrylics (Hard Color)',
        priceRange: [100, 120],
        description: 'Perfect for a clean, understated look. Solid color application on very short nails.',
        image: '/images/services/very-short-acrylics.jpg',
    },
    {
        id: 'short-acrylics',
        name: 'Short Acrylic (Square or Almond)',
        priceRange: [130, 150],
        description: 'Classic short nails in your choice of square or almond shape.',
        image: '/images/services/short-acrylics.jpg',
    },
    {
        id: 'medium-acrylics',
        name: 'Medium Acrylic (Square or Almond)',
        priceRange: [180, 230],
        description: 'Medium length for added elegance in square or almond shape.',
        image: '/images/services/medium-acrylics.jpg',
    },
    {
        id: 'long-acrylics',
        name: 'Long Acrylic (Square, Almond, Stiletto)',
        priceRange: [240, 300],
        description: 'Dramatic length in your choice of square, almond, or stiletto shape.',
        image: '/images/services/long-acrylics.jpg',
    },
];

export const ADD_ONS: AddOn[] = [
    {
        id: '3d-flowers',
        name: '3D Flowers',
        price: 20,
        description: 'Delicate sculpted floral designs',
        image: '/images/services/3d-flowers.jpg',
    },
    {
        id: '3d-twirls',
        name: '3D Twirls',
        price: 30,
        description: 'Elegant 3D swirl patterns',
        image: '/images/services/3d-twirls.jpg',
    },
    {
        id: 'french-tips',
        name: 'French Tips',
        price: 40,
        description: 'Classic or modern French tip styles',
        image: '/images/services/french-tips.jpg',
    },
    {
        id: 'airbrush',
        name: 'Airbrush Designs',
        price: 20,
        description: 'Smooth gradient and design effects',
        image: '/images/services/airbrush.jpg',
    },
    {
        id: 'gems-finger',
        name: 'Full Gems on a Finger',
        price: 10,
        description: 'Complete gem coverage on one nail',
        image: '/images/services/gems.jpg',
    },
    {
        id: 'gems-frenchie',
        name: 'Full Gems on a Frenchie',
        price: 5,
        description: 'Gem-studded French tip line',
        image: '/images/services/gems.jpg',
    },
];

// WhatsApp contact number
export const WHATSAPP_NUMBER = '233200619711';

// Business Info
export const BUSINESS_INFO = {
    name: 'Nailed By Titi',
    location: 'Opposite The Edge Apartment, East Legon',
    hours: 'Daily: 2pm - 8pm',
    phone: '+233 20 061 9711',
};

// Business policies
export const POLICIES = [
    {
        id: 'deposit',
        title: 'Deposit Required',
        description: 'A GH₵ 50 deposit is required via MoMo to secure the slot.',
        icon: '💰',
    },
    {
        id: 'lateness',
        title: 'Lateness Fee',
        description: 'Lateness of 15+ mins attracts a GH₵ 20 fee.',
        icon: '⏰',
    },
    {
        id: 'inspection',
        title: 'Inspection Policy',
        description: 'Please inspect your nails during the service. Corrections after leaving may be charged.',
        icon: '👀',
    },
];
