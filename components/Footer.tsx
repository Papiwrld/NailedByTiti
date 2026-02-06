'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import { SiSnapchat } from 'react-icons/si';
import { BUSINESS_INFO, WHATSAPP_NUMBER } from '@/constants/services';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-cream-50 to-cream-100 pt-20 pb-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Main Content */}
                <div className="text-center mb-12">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif text-gray-800 mb-4"
                    >
                        Ready to get nailed?
                    </motion.h3>
                    <p className="text-gray-600 mb-8">
                        Book your appointment today and let's create something beautiful together.
                    </p>

                    {/* Contact Button */}
                    <motion.a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-xl transition-all duration-300"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Chat on WhatsApp
                    </motion.a>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm">
                        <div className="p-3 bg-sage-100 rounded-xl">
                            <MapPin className="w-5 h-5 text-sage-600" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">Location</p>
                            <p className="text-sm text-gray-600">{BUSINESS_INFO.location}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm">
                        <div className="p-3 bg-blush-100 rounded-xl">
                            <Clock className="w-5 h-5 text-blush-500" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">Hours</p>
                            <p className="text-sm text-gray-600">{BUSINESS_INFO.hours}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm">
                        <div className="p-3 bg-nude-100 rounded-xl">
                            <Phone className="w-5 h-5 text-nude-500" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">Contact</p>
                            <p className="text-sm text-gray-600">{BUSINESS_INFO.phone}</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-cream-300 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-gray-500">
                        Nailed by Titi · made by{' '}
                        <a
                            href="https://www.instagram.com/papiwrld_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blush-500 hover:text-blush-600 font-medium transition-colors"
                        >
                            papiwrld
                        </a>
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.instagram.com/nail.edbytiti?igsh=MWN6Z2wzamt5NHY3OA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-white text-nude-900 rounded-full shadow-sm hover:shadow-md hover:scale-110 hover:bg-blush-50 hover:text-blush-600 transition-all duration-300"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.tiktok.com/@toptierlatifa?_r=1&_t=ZS-93ZhOvMY65M"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-white text-nude-900 rounded-full shadow-sm hover:shadow-md hover:scale-110 hover:bg-blush-50 hover:text-blush-600 transition-all duration-300"
                            aria-label="TikTok"
                        >
                            <FaTiktok className="w-5 h-5" />
                        </a>
                        <a
                            href="https://snapchat.com/t/z4JLNBCa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-white text-nude-900 rounded-full shadow-sm hover:shadow-md hover:scale-110 hover:bg-blush-50 hover:text-blush-600 transition-all duration-300"
                            aria-label="Snapchat"
                        >
                            <SiSnapchat className="w-5 h-5" />
                        </a>
                    </div>

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
