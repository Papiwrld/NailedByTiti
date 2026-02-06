'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

import { BUSINESS_INFO } from '@/constants/services';

export default function StatusBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-3 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-cream-200/50">
                {/* Pulsing dot */}
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>

                <span className="text-sm font-medium text-gray-700">
                    Bookings Open
                </span>

                <div className="h-4 w-px bg-gray-200" />

                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{BUSINESS_INFO.hours.replace('Daily: ', '')}</span>
                </div>
            </div>
        </motion.div>
    );
}
