'use client';

import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

interface StickyFooterProps {
    minTotal: number;
    maxTotal: number;
    hasSelection: boolean;
    onProceed: () => void;
    onDismiss?: () => void;
}

export default function StickyFooter({
    minTotal,
    maxTotal,
    hasSelection,
    onProceed,
    onDismiss,
}: StickyFooterProps) {
    const [isDismissed, setIsDismissed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleDismiss = () => {
        setIsDismissed(true);
        onDismiss?.();
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        // Dismiss if swiped more than 100px left or right
        if (Math.abs(info.offset.x) > 100) {
            handleDismiss();
        }
    };

    // Reset dismissed state when selection changes
    const showFooter = hasSelection && !isDismissed;

    // Format the price display - show range if min !== max
    const priceDisplay = minTotal === maxTotal
        ? `GH₵ ${minTotal.toLocaleString()}`
        : `GH₵ ${minTotal.toLocaleString()} - ${maxTotal.toLocaleString()}`;

    return (
        <AnimatePresence>
            {showFooter && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 28,
                        mass: 0.8
                    }}
                    className="fixed bottom-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.5}
                        onDragEnd={handleDragEnd}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        className="pointer-events-auto bg-gray-900/90 backdrop-blur-xl text-white pl-6 pr-2 py-2 rounded-full shadow-2xl flex items-center gap-6 max-w-sm w-full mx-auto border border-white/10 cursor-grab active:cursor-grabbing relative"
                    >
                        {/* Dismiss button - visible on hover */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    onClick={handleDismiss}
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center shadow-lg border border-gray-600 transition-colors"
                                >
                                    <X className="w-3 h-3 text-white" />
                                </motion.button>
                            )}
                        </AnimatePresence>

                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Estimated</span>
                            <span className="font-serif text-lg md:text-xl font-medium tracking-tight">{priceDisplay}</span>
                        </div>

                        <button
                            onClick={onProceed}
                            className="ml-auto bg-white text-gray-900 px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-cream-100 transition-colors"
                        >
                            Continue
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

