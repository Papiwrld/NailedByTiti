# Nailed By Titi - Visual Menu & Booking System

A beautiful, high-conversion booking website for a student nail tech brand. Built with Next.js, featuring a visual menu, real-time price calculator, and seamless WhatsApp integration.

![Clean Girl Aesthetic](https://img.shields.io/badge/Design-Clean_Girl_Aesthetic-FFB3BA)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 🌟 Features

### For Clients
- **Visual Gallery:** Browse 7 real past work photos with "Book This Look" functionality
- **Set Builder:** Build your perfect nail set step-by-step
- **Real-Time Pricing:** See your total update instantly as you select services and add-ons
- **Policy Transparency:** All policies clearly stated before booking
- **One-Click WhatsApp:** Pre-formatted booking message sent directly to Titi

### For the Business
- **No More DMs:** Clients fill out all details before reaching out
- **Policy Enforcement:** Clients must agree to deposit, lateness, and inspection policies
- **Professional Branding:** Clean Girl Aesthetic design builds trust
- **Mobile-Optimized:** 99% of traffic is mobile - this site is built for phones first

## 🎨 Design Philosophy

**Clean Girl Aesthetic** - Minimalist, soft, feminine
- Soft pastels (blush pink, sage green, cream, nude)
- Ample whitespace
- High-quality image focus
- Smooth animations
- Premium feel

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📋 Services & Pricing

### Base Services
- **Very Short Acrylics (Hard Color):** GH₵ 100 - 120
- **Short Acrylic (Square/Almond):** GH₵ 130 - 150
- **Medium Acrylic (Square/Almond):** GH₵ 180 - 230
- **Long Acrylic (Square/Almond/Stiletto):** GH₵ 240 - 300

### Add-Ons
- 3D Flowers: +GH₵ 20
- 3D Twirls: +GH₵ 30
- French Tips: +GH₵ 40
- Airbrush Designs: +GH₵ 20
- Full Gems on a Finger: +GH₵ 10
- Full Gems on a Frenchie: +GH₵ 5

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom theme)
- **Animations:**
  - GSAP + ScrollTrigger (Scroll animations)
  - Framer Motion (Component animations)
- **Icons:** Lucide React
- **Image Optimization:** Next.js Image
- **Utilities:** date-fns (Date formatting)

## 📁 Project Structure

```
NailedByTiti/
├── app/
│   ├── layout.tsx          # Root layout, metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Landing section
│   ├── StatusBadge.tsx     # Booking status indicator
│   ├── VisualMenu.tsx      # Gallery of past works
│   ├── PolicyModal.tsx     # Booking modal with policies
│   └── SetBuilder/         # Calculator components
├── constants/
│   └── services.ts         # Service menu, policies
├── types/
│   └── booking.ts          # TypeScript types
├── utils/
│   └── whatsapp.ts         # WhatsApp integration
└── public/
    └── images/
        ├── gallery/        # Client work photos
        └── services/       # Service showcase images
```

## 🎯 Booking Flow

1. User views Hero section (logo, headline, CTA)
2. Scrolls through gallery of past works
3. Clicks "Book This Look" → auto-scrolls to Set Builder
4. Selects service and add-ons
5. Sticky footer shows running total
6. Clicks "Proceed to Book" → Policy Modal opens
7. Fills date, time, and inspiration notes
8. Reads and agrees to 3 policies
9. Clicks "Book via WhatsApp" → Opens WhatsApp with pre-formatted message
10. Sends message to Titi → Done! 🎉

## 📱 Mobile-First Design

- Responsive grid layouts
- Touch-friendly buttons (44px+ tap targets)
- Optimized images with `next/image`
- Smooth scroll behavior
- Glassmorphism effects work on mobile Safari

## 🔒 Policy Enforcement

The website enforces 3 key policies before booking:

1. **💰 Deposit:** GH₵ 50 required via MoMo to secure slot
2. **⏰ Lateness:** 15+ mins late = GH₵ 20 fee
3. **👀 Inspection:** Check nails during service (corrections after may be charged)

Users **cannot** book until they check the agreement box.

## 📞 WhatsApp Integration

Phone: `+233 20 061 9711`

Pre-formatted message includes:
- Selected service and add-ons
- Preferred date and time
- Estimated total price
- Client inspiration notes
- Policy agreement confirmation

## 🎨 Color Palette

```css
/* Cream */
--cream-50: #FDFCFB
--cream-500: #D4C5B0

/* Blush */
--blush-50: #FFF5F5
--blush-500: #FF8A8A

/* Sage */
--sage-50: #F6F8F6
--sage-500: #739373

/* Nude */
--nude-50: #FAF7F4
--nude-500: #B08F6F
```

## 📝 Customization

### Update Services
Edit `constants/services.ts`:
```typescript
export const SERVICES: Service[] = [
  {
    id: 'new-service',
    name: 'New Service Name',
    priceRange: [100, 150],
    description: 'Description',
    image: '/images/services/new-service.jpg',
  },
];
```

### Update Policies
Edit `constants/services.ts`:
```typescript
export const POLICIES = [
  {
    id: 'new-policy',
    title: 'Policy Title',
    description: 'Policy description',
    icon: '🔒',
  },
];
```

### Update WhatsApp Number
Edit `constants/services.ts`:
```typescript
export const WHATSAPP_NUMBER = '233XXXXXXXXX';
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy --prod
```

## 📄 License

Private project for Nailed By Titi.

## 👩‍💻 Developer

Built with ❤️ for Titi's nail business

---

**Status:** ✅ Ready for Production

**Development Server:** http://localhost:3000

**WhatsApp:** +233 20 061 9711
