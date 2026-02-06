'use client';

import { useState } from 'react';
import { Service, AddOn } from '@/types/booking';
import StatusBadge from '@/components/StatusBadge';
import Hero from '@/components/Hero';
import VisualMenu from '@/components/VisualMenu';
import SetBuilder from '@/components/SetBuilder';
import PolicyModal from '@/components/PolicyModal';
import Footer from '@/components/Footer';

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingData, setBookingData] = useState<{
        service: Service;
        addOns: AddOn[];
        total: number;
    } | null>(null);
    const [preselectedServiceId, setPreselectedServiceId] = useState<
        string | undefined
    >();
    const [inspirationLook, setInspirationLook] = useState<number | undefined>();

    const handleBookThisLook = (lookIndex: number) => {
        const serviceMapping = [
            'medium-acrylics', // work-1
            'short-acrylics', // work-2
            'long-acrylics', // work-3
            'medium-acrylics', // work-4
            'long-acrylics', // work-5
            'short-acrylics', // work-6
            'very-short-acrylics', // work-7
        ];

        const serviceId = serviceMapping[lookIndex] || 'medium-acrylics';
        setPreselectedServiceId(serviceId);
        setInspirationLook(lookIndex + 1); // Store 1-indexed look number

        setTimeout(() => {
            const builderSection = document.getElementById('set-builder');
            builderSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const handleProceedToBook = (data: {
        service: Service;
        addOns: AddOn[];
        total: number;
    }) => {
        setBookingData(data);
        setIsModalOpen(true);
    };

    // Clear inspiration look when modal closes
    const handleModalClose = () => {
        setIsModalOpen(false);
        // Clear the inspiration look after modal closes
        setTimeout(() => setInspirationLook(undefined), 300);
    };

    return (
        <>
            <Hero />
            <VisualMenu onBookThisLook={handleBookThisLook} />
            <SetBuilder
                onProceedToBook={handleProceedToBook}
                preselectedServiceId={preselectedServiceId}
                onServiceChange={() => setInspirationLook(undefined)}
            />
            <Footer />

            {bookingData && (
                <PolicyModal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    service={bookingData.service}
                    addOns={bookingData.addOns}
                    total={bookingData.total}
                    inspirationLook={inspirationLook}
                />
            )}
        </>
    );
}
