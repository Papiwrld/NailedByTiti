'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, MapPin, Star, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/constants/services';

export default function Hero() {
    const scrollToBuilder = () => {
        const builderSection = document.getElementById('set-builder');
        builderSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen relative overflow-hidden bg-cream-50 rounded-b-[2.5rem] md:rounded-b-[3rem] pb-20 md:pb-32 shadow-xl shadow-cream-100 z-20">
            {/* Background Hero Image - Right Side with Fade (Desktop Only) */}
            <div className="absolute inset-0 z-0">
                {/* Image positioned on the right, fading to the left - hidden on mobile */}
                <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full">
                    <Image
                        src="/images/hero-banner.png"
                        alt="Nailed By Titi - Beautiful Nail Art"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    {/* Lighter gradient overlay for more visible image */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cream-50 via-cream-50/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-cream-50/30 via-transparent to-transparent" />
                </div>

                {/* Soft glow accents */}
                <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-blush-200/30 rounded-full blur-[80px] lg:blur-[120px] -translate-y-1/4 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] bg-sage-100/40 rounded-full blur-[60px] lg:blur-[100px] translate-y-1/4 -translate-x-1/4" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 min-h-screen flex flex-col">

                {/* Centered Logo at Top */}
                <div className="pt-10 lg:pt-16 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative group cursor-pointer"
                    >
                        {/* Glow ring behind logo - refined */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blush-300/40 to-blush-500/20 rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700" />

                        {/* Logo - larger and refined borders */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl border-[3px] border-white ring-1 ring-blush-200/50 group-hover:ring-blush-300/50 transition-all duration-500">
                            <Image
                                src="/images/logo.jpeg"
                                alt="Nailed By Titi"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex items-start pt-8 lg:pt-16 px-4">
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                        {/* Left Column: Text Content */}
                        <div className="space-y-6 text-center lg:text-left">

                            {/* Status Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex justify-center lg:justify-start"
                            >
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-cream-200 shadow-sm">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-xs font-semibold text-gray-700 tracking-wide uppercase">
                                        Availability
                                    </span>
                                    <div className="h-3 w-px bg-gray-300" />
                                    <div className="flex items-center gap-1.5 text-xs text-gray-600 font-medium">
                                        <Clock className="w-3 h-3" />
                                        <span>{BUSINESS_INFO.hours}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                                className="text-5xl lg:text-7xl font-serif text-gray-800 leading-[1.1]"
                            >
                                Nails That <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-400 to-blush-600 italic">
                                    Speak Volumes
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                                className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
                            >
                                Experience the perfect blend of artistry and durability.
                                Build your custom set online, see the price instantly, and book your appointment in seconds.
                            </motion.p>

                            {/* Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2"
                            >
                                <button
                                    onClick={scrollToBuilder}
                                    className="btn-primary flex items-center gap-2 shadow-lg shadow-blush-200"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    Book Your Set
                                </button>
                                <div className="flex items-center gap-2 text-gray-500 text-sm bg-white/60 px-4 py-2 rounded-full backdrop-blur-sm border border-cream-200">
                                    <MapPin className="w-4 h-4" />
                                    {BUSINESS_INFO.location}
                                </div>
                            </motion.div>

                            {/* Stats/Trust */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="pt-6 flex items-center justify-center lg:justify-start gap-8 md:gap-10 border-t border-cream-200/80 mt-4"
                            >
                                <div className="text-center">
                                    <p className="text-2xl md:text-3xl font-serif text-gray-900 font-medium">100+</p>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">Happy Clients</p>
                                </div>
                                <div className="w-px h-10 md:h-12 bg-cream-300/50" />
                                <div className="text-center">
                                    <div className="flex items-center gap-1 justify-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">5.0 Rating</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Empty space for the background image to show */}
                        <div className="hidden lg:block relative h-[500px]">
                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [8, -8, 8] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                className="absolute bottom-32 right-10 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-cream-200 flex items-center gap-2"
                            >
                                <Sparkles className="w-4 h-4 text-blush-500" />
                                <span className="text-sm font-semibold text-gray-700">Instant Booking</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
