'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service, AddOn } from '@/types/booking';
import { POLICIES, WHATSAPP_NUMBER } from '@/constants/services';
import { generateWhatsAppMessage, formatPrice, formatPriceRange } from '@/utils/whatsapp';
import { format } from 'date-fns';
import {
    X,
    Calendar,
    Clock,
    MessageCircle,
    Check,
    Wallet,
    Timer,
    Eye,
    Send,
    Paintbrush2,
    Image,
    AlertCircle
} from 'lucide-react';

// Business hours time slots (2PM - 8PM)
const TIME_SLOTS = [
    { value: '14:00', label: '2:00 PM' },
    { value: '14:30', label: '2:30 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '15:30', label: '3:30 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '16:30', label: '4:30 PM' },
    { value: '17:00', label: '5:00 PM' },
    { value: '17:30', label: '5:30 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '18:30', label: '6:30 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '19:30', label: '7:30 PM' },
    { value: '20:00', label: '8:00 PM' },
];

interface PolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: Service;
    addOns: AddOn[];
    total: number;
    inspirationLook?: number;
}

const POLICY_ICONS: Record<string, React.ElementType> = {
    deposit: Wallet,
    lateness: Timer,
    inspection: Eye,
};

export default function PolicyModal({
    isOpen,
    onClose,
    service,
    addOns,
    total,
    inspirationLook,
}: PolicyModalProps) {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [particulars, setParticulars] = useState('');
    const [hasInspirationPhotos, setHasInspirationPhotos] = useState(false);
    const [agreedToPolicies, setAgreedToPolicies] = useState(false);

    // Reset form when modal closes
    const resetForm = () => {
        setSelectedDate('');
        setSelectedTime('');
        setParticulars('');
        setHasInspirationPhotos(false);
        setAgreedToPolicies(false);
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const isFormValid = selectedDate && selectedTime && agreedToPolicies;

    const handleWhatsAppClick = () => {
        if (!isFormValid) return;

        // Get the human-readable time label from TIME_SLOTS
        const timeSlot = TIME_SLOTS.find(slot => slot.value === selectedTime);
        const timeLabel = timeSlot ? timeSlot.label : selectedTime;

        // Parse date safely to avoid timezone issues
        const [year, month, day] = selectedDate.split('-').map(Number);
        const dateObj = new Date(year, month - 1, day);

        const dateTime = `${format(dateObj, 'EEEE, MMMM d, yyyy')} at ${timeLabel}`;
        const message = generateWhatsAppMessage(service, addOns, total, dateTime, particulars, hasInspirationPhotos, inspirationLook);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
        window.open(url, '_blank');
    };

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop containing the modal for better centering */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 10 }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 30,
                                mass: 0.8
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] relative will-change-transform"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-cream-200 bg-white/50 backdrop-blur-md sticky top-0 z-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center border border-blush-200 shadow-sm">
                                        <Paintbrush2 className="w-6 h-6 text-blush-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-serif text-gray-900">Complete Your Booking</h2>
                                        <p className="text-sm text-gray-500">Almost there!</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors border border-transparent hover:border-gray-200"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 space-y-6">
                                {/* Order Summary */}
                                <div className="bg-gradient-to-br from-cream-50 to-blush-50/30 rounded-2xl p-5 space-y-4">
                                    <h3 className="font-medium text-gray-800 text-sm uppercase tracking-wide">Your Selection</h3>
                                    <div className="space-y-3">
                                        {/* Main Service */}
                                        <div className="pb-3 border-b border-cream-200">
                                            <p className="font-medium text-gray-900 mb-1">{service.name}</p>
                                            <p className="text-blush-500 font-semibold">{formatPriceRange(service.priceRange)}</p>
                                        </div>
                                        {/* Add-ons */}
                                        {addOns.length > 0 && (
                                            <div className="space-y-2">
                                                {addOns.map((addOn) => (
                                                    <div key={addOn.id} className="flex justify-between items-center text-sm">
                                                        <span className="text-gray-600">+ {addOn.name}</span>
                                                        <span className="text-gray-700 font-medium">{formatPrice(addOn.price)}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="pt-4 border-t border-cream-300 flex justify-between items-center">
                                        <span className="font-semibold text-gray-800">Estimated Total</span>
                                        <span className="text-2xl font-bold bg-gradient-to-r from-blush-500 to-blush-400 bg-clip-text text-transparent">
                                            GH₵ {total.toLocaleString()}
                                        </span>
                                    </div>
                                </div>

                                {/* Availability Disclaimer */}
                                <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-amber-800">Availability Disclaimer</p>
                                        <p className="text-xs text-amber-700 mt-1">
                                            As a student with a changing schedule, my availability varies. Please select your preferred time below, and I'll confirm or suggest alternatives via WhatsApp.
                                        </p>
                                    </div>
                                </div>

                                {/* Date & Time */}
                                <div className="space-y-4">
                                    <h3 className="font-medium text-gray-800 text-sm uppercase tracking-wide">Preferred Date & Time</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="date"
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                min={today}
                                                className="w-full pl-10 pr-4 py-3 border-2 border-cream-200 rounded-xl focus:border-blush-400 focus:outline-none transition-colors text-sm"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                                            <select
                                                value={selectedTime}
                                                onChange={(e) => setSelectedTime(e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 border-2 border-cream-200 rounded-xl focus:border-blush-400 focus:outline-none transition-colors text-sm bg-white appearance-none cursor-pointer"
                                            >
                                                <option value="">Select time</option>
                                                {TIME_SLOTS.map((slot) => (
                                                    <option key={slot.value} value={slot.value}>
                                                        {slot.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* My Inspiration & Notes */}
                                <div className="space-y-4">
                                    <h3 className="font-medium text-gray-800 text-sm uppercase tracking-wide">My Inspiration & Notes</h3>

                                    {/* Has Inspiration Photos Checkbox */}
                                    <label className="flex items-center gap-3 p-3 bg-cream-50 rounded-xl cursor-pointer group">
                                        <div
                                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${hasInspirationPhotos
                                                ? 'bg-gradient-to-br from-sage-400 to-sage-500 border-sage-400'
                                                : 'bg-white border-gray-300 group-hover:border-sage-300'
                                                }`}
                                            onClick={() => setHasInspirationPhotos(!hasInspirationPhotos)}
                                        >
                                            {hasInspirationPhotos && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Image className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-700">I have inspiration photos to share</span>
                                        </div>
                                    </label>
                                    {hasInspirationPhotos && (
                                        <p className="text-xs text-sage-600 ml-1">You'll send your inspiration photos in the WhatsApp chat</p>
                                    )}

                                    {/* Notes Text */}
                                    <div className="relative">
                                        <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                        <textarea
                                            value={particulars}
                                            onChange={(e) => setParticulars(e.target.value)}
                                            placeholder="Describe your dream nails! Colors, nail shape, length, any specific designs..."
                                            rows={3}
                                            className="w-full pl-10 pr-4 py-3 border-2 border-cream-200 rounded-xl focus:border-blush-400 focus:outline-none transition-colors resize-none text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Policies */}
                                <div className="space-y-3">
                                    <h3 className="font-medium text-gray-800 text-sm uppercase tracking-wide">Please Note</h3>
                                    <div className="space-y-2">
                                        {POLICIES.map((policy) => {
                                            const Icon = POLICY_ICONS[policy.id] || Eye;
                                            return (
                                                <div
                                                    key={policy.id}
                                                    className="flex items-start gap-3 p-3 bg-cream-50 rounded-xl"
                                                >
                                                    <div className="p-1.5 bg-white rounded-lg shadow-sm">
                                                        <Icon className="w-4 h-4 text-gray-600" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-medium text-gray-800 text-sm">{policy.title}</p>
                                                        <p className="text-xs text-gray-600">{policy.description}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Agreement Checkbox */}
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div
                                        className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${agreedToPolicies
                                            ? 'bg-gradient-to-br from-blush-400 to-blush-500 border-blush-400'
                                            : 'bg-white border-gray-300 group-hover:border-blush-300'
                                            }`}
                                        onClick={() => setAgreedToPolicies(!agreedToPolicies)}
                                    >
                                        {agreedToPolicies && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                    </div>
                                    <span className="text-sm text-gray-700">
                                        I agree to the deposit, lateness, and inspection policies
                                    </span>
                                </label>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-cream-200 bg-cream-50/50 flex flex-col items-center">
                                <motion.button
                                    whileHover={isFormValid ? { scale: 1.03 } : {}}
                                    whileTap={isFormValid ? { scale: 0.97 } : {}}
                                    onClick={handleWhatsAppClick}
                                    disabled={!isFormValid}
                                    className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ${isFormValid
                                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-600/30'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    <Send className="w-4 h-4" />
                                    Request Appointment via WhatsApp
                                </motion.button>
                                {!isFormValid && (
                                    <p className="text-center text-xs text-gray-500 mt-3">
                                        Fill in date, time, and agree to policies to continue
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
