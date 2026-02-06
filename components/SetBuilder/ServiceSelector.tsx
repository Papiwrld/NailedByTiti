'use client';

import { Service } from '@/types/booking';
import { formatPriceRange } from '@/utils/whatsapp';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

interface ServiceSelectorProps {
    services: Service[];
    selectedService: Service | null;
    onSelect: (service: Service) => void;
}

export default function ServiceSelector({
    services,
    selectedService,
    onSelect,
}: ServiceSelectorProps) {
    return (
        <div className="space-y-8">
            <div className="border-b border-cream-200 pb-4 text-center md:text-left">
                <span className="text-sage-500 font-semibold tracking-wide text-xs uppercase mb-2 block">Step 01</span>
                <h3 className="text-3xl font-serif text-gray-900">Choose Base Service</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {services.map((service) => {
                    const isSelected = selectedService?.id === service.id;

                    return (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <button
                                onClick={() => onSelect(service)}
                                className={`w-full group relative flex flex-col md:flex-row items-center md:items-start gap-6 p-5 rounded-[2rem] transition-all duration-300 text-left border overflow-hidden ${isSelected
                                    ? 'bg-white border-blush-300 shadow-xl shadow-blush-100/40 ring-2 ring-blush-200'
                                    : 'bg-white/80 border-transparent hover:border-cream-200 hover:shadow-lg hover:shadow-gray-100/50 hover:bg-white'
                                    }`}
                            >
                                {/* Image Card */}
                                <div className="relative w-full md:w-32 h-40 md:h-32 rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                                    {service.image && (
                                        <Image
                                            src={service.image}
                                            alt={service.name}
                                            fill
                                            className={`object-cover transition-transform duration-700 ${isSelected ? 'scale-105' : 'group-hover:scale-110'}`}
                                        />
                                    )}
                                    {isSelected && (
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                            <div className="bg-white rounded-full p-1.5 shadow-sm">
                                                <Check className="w-4 h-4 text-gray-900" strokeWidth={3} />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 w-full">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-serif font-medium text-gray-900">
                                            {service.name}
                                        </h4>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
                                        {service.description}
                                    </p>
                                    <span className="inline-block text-sm font-semibold text-blush-600 bg-blush-50 px-3 py-1 rounded-full border border-blush-100">
                                        {formatPriceRange(service.priceRange)}
                                    </span>
                                </div>
                            </button>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
