'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Service, AddOn } from '@/types/booking';
import { SERVICES, ADD_ONS } from '@/constants/services';
import { calculateTotal } from '@/utils/whatsapp';
import ServiceSelector from './ServiceSelector';
import AddOnsSelector from './AddOnsSelector';
import StickyFooter from './StickyFooter';
import { Palette } from 'lucide-react';
import Image from 'next/image';

interface SetBuilderProps {
    onProceedToBook: (data: { service: Service; addOns: AddOn[]; total: number }) => void;
    preselectedServiceId?: string;
    onServiceChange?: () => void;
}

export default function SetBuilder({ onProceedToBook, preselectedServiceId, onServiceChange }: SetBuilderProps) {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);

    // Handle preselection from gallery
    useEffect(() => {
        if (preselectedServiceId) {
            const service = SERVICES.find((s) => s.id === preselectedServiceId);
            if (service) {
                setSelectedService(service);
            }
        }
    }, [preselectedServiceId]);

    const handleServiceSelect = (service: Service) => {
        setSelectedService(service);
        // Notify parent that service was manually changed (to clear inspiration look)
        onServiceChange?.();
    };

    const handleAddOnToggle = (addOn: AddOn) => {
        setSelectedAddOns((prev) =>
            prev.some((a) => a.id === addOn.id)
                ? prev.filter((a) => a.id !== addOn.id)
                : [...prev, addOn]
        );
    };

    // Calculate add-ons total
    const addOnsTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);

    // Calculate price range (service range + add-ons)
    const minTotal = selectedService ? selectedService.priceRange[0] + addOnsTotal : 0;
    const maxTotal = selectedService ? selectedService.priceRange[1] + addOnsTotal : 0;

    // For the modal, use the average (existing behavior)
    const total = selectedService ? calculateTotal(selectedService, selectedAddOns) : 0;

    const handleProceed = () => {
        if (selectedService) {
            onProceedToBook({
                service: selectedService,
                addOns: selectedAddOns,
                total,
            });
        }
    };

    return (
        <section
            id="set-builder"
            className="py-24 px-4 bg-gradient-to-b from-cream-50 to-white scroll-mt-16 relative overflow-hidden"
        >
            {/* Subtle Ambient Pink Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blush-200/10 rounded-full blur-[150px] animate-float-slow"
                />
                <div
                    className="absolute top-1/3 -right-60 w-[500px] h-[500px] bg-blush-100/15 rounded-full blur-[150px] animate-float-slow"
                    style={{ animationDelay: '-10s' }}
                />
            </div>

            {/* Floating Decorative Images - Left Side */}
            <div className="hidden xl:block absolute left-0 top-0 bottom-0 w-32 pointer-events-none">
                <motion.div
                    animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-32 -left-4 w-24 h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-white/80 opacity-80"
                >
                    <Image src="/images/gallery/work-1.jpeg" alt="" fill className="object-cover" />
                </motion.div>
                <motion.div
                    animate={{ y: [10, -10, 10], rotate: [3, -3, 3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute top-1/2 left-2 w-20 h-20 rounded-xl overflow-hidden shadow-lg border-4 border-white/80 opacity-70"
                >
                    <Image src="/images/gallery/work-3.jpeg" alt="" fill className="object-cover" />
                </motion.div>
                <motion.div
                    animate={{ y: [-8, 12, -8], rotate: [-3, 3, -3] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute bottom-40 -left-2 w-16 h-16 rounded-lg overflow-hidden shadow-md border-3 border-white/80 opacity-60"
                >
                    <Image src="/images/gallery/work-5.jpeg" alt="" fill className="object-cover" />
                </motion.div>
            </div>

            {/* Floating Decorative Images - Right Side */}
            <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-32 pointer-events-none">
                <motion.div
                    animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute top-40 -right-4 w-24 h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-white/80 opacity-80"
                >
                    <Image src="/images/gallery/work-2.jpeg" alt="" fill className="object-cover" />
                </motion.div>
                <motion.div
                    animate={{ y: [-12, 8, -12], rotate: [-4, 4, -4] }}
                    transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                    className="absolute top-1/2 right-4 w-20 h-20 rounded-xl overflow-hidden shadow-lg border-4 border-white/80 opacity-70"
                >
                    <Image src="/images/gallery/work-4.jpeg" alt="" fill className="object-cover" />
                </motion.div>
                <motion.div
                    animate={{ y: [6, -14, 6], rotate: [2, -4, 2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
                    className="absolute bottom-48 -right-2 w-16 h-16 rounded-lg overflow-hidden shadow-md border-3 border-white/80 opacity-60"
                >
                    <Image src="/images/gallery/work-6.jpeg" alt="" fill className="object-cover" />
                </motion.div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-6 py-2 bg-white/50 backdrop-blur-md border border-white/60 text-sage-600 text-sm font-semibold tracking-wide uppercase rounded-full mb-6 shadow-sm">
                        <Palette className="w-4 h-4" />
                        Set Builder
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
                        Build Your Set
                    </h2>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Select your base service and add any extras. The price updates in real-time.
                    </p>
                </motion.div>

                {/* Form Sections */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <ServiceSelector
                            services={SERVICES}
                            selectedService={selectedService}
                            onSelect={handleServiceSelect}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <AddOnsSelector
                            addOns={ADD_ONS}
                            selectedAddOns={selectedAddOns}
                            onToggle={handleAddOnToggle}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Sticky Footer with Price Range */}
            <StickyFooter
                key={selectedService?.id}
                minTotal={minTotal}
                maxTotal={maxTotal}
                hasSelection={!!selectedService}
                onProceed={handleProceed}
            />
        </section>
    );
}

