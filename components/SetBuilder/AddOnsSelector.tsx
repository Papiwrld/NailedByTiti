'use client';

import { AddOn } from '@/types/booking';
import { formatPrice } from '@/utils/whatsapp';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plus, Check } from 'lucide-react';

interface AddOnsSelectorProps {
    addOns: AddOn[];
    selectedAddOns: AddOn[];
    onToggle: (addOn: AddOn) => void;
}

export default function AddOnsSelector({
    addOns,
    selectedAddOns,
    onToggle,
}: AddOnsSelectorProps) {
    const isSelected = (addOn: AddOn) =>
        selectedAddOns.some((a) => a.id === addOn.id);

    return (
        <div className="space-y-8">
            <div className="border-b border-cream-200 pb-4 text-center md:text-left">
                <span className="text-sage-500 font-semibold tracking-wide text-xs uppercase mb-2 block">Step 02</span>
                <h3 className="text-3xl font-serif text-gray-900">Customize & Add-Ons</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {addOns.map((addOn) => {
                    const selected = isSelected(addOn);

                    return (
                        <motion.button
                            key={addOn.id}
                            onClick={() => onToggle(addOn)}
                            aria-pressed={selected}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group relative flex flex-col items-center text-center p-5 rounded-3xl transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 ${selected
                                ? 'bg-white border-sage-300 shadow-xl shadow-sage-100/40 ring-2 ring-sage-200'
                                : 'bg-white/80 border-transparent hover:border-cream-200 hover:shadow-lg hover:shadow-gray-100/50 hover:bg-white'
                                }`}
                        >
                            <div className="absolute top-3 right-3 z-10">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${selected
                                    ? 'bg-sage-600 text-white shadow-sm'
                                    : 'bg-gray-100 text-gray-400 group-hover:bg-white group-hover:shadow-sm'
                                    }`}>
                                    {selected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                                </div>
                            </div>

                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all duration-500">
                                {addOn.image && (
                                    <Image
                                        src={addOn.image}
                                        alt={addOn.name}
                                        width={96}
                                        height={96}
                                        className={`w-full h-full object-cover transition-transform duration-700 ${selected ? 'scale-110' : 'group-hover:scale-110'}`}
                                    />
                                )}
                            </div>

                            <h4 className="font-serif font-medium text-gray-900 mb-1 text-lg">{addOn.name}</h4>
                            <p className="text-sage-600 font-semibold text-sm bg-sage-50 px-3 py-1 rounded-full border border-sage-100">
                                +{formatPrice(addOn.price)}
                            </p>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
