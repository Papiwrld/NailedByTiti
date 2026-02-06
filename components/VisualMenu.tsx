'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';

interface VisualMenuProps {
    onBookThisLook: (lookIndex: number) => void;
}

const GALLERY_IMAGES = [
    { id: 1, src: '/images/gallery/work-1.jpeg', alt: 'Client Work 1' },
    { id: 2, src: '/images/gallery/work-2.jpeg', alt: 'Client Work 2' },
    { id: 3, src: '/images/gallery/work-3.jpeg', alt: 'Client Work 3' },
    { id: 4, src: '/images/gallery/work-4.jpeg', alt: 'Client Work 4' },
    { id: 5, src: '/images/gallery/work-5.jpeg', alt: 'Client Work 5' },
    { id: 6, src: '/images/gallery/work-6.jpeg', alt: 'Client Work 6' },
];

export default function VisualMenu({ onBookThisLook }: VisualMenuProps) {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="py-24 md:py-32 px-4 bg-white relative">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <span className="flex items-center justify-center md:justify-start gap-2 text-blush-500 font-medium tracking-wider text-sm uppercase mb-4">
                            <Heart className="w-4 h-4" />
                            Curated Collection
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-[1]">
                            The Art of <br />
                            <span className="italic text-gray-400">Self-Expression</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-500 max-w-sm text-lg leading-relaxed"
                    >
                        Explore our latest works. Find a style that resonates with you and book it instantly.
                    </motion.p>
                </div>

                {/* Pinterest Masonry Grid */}
                <div className="columns-2 md:columns-3 gap-6 space-y-6">
                    {GALLERY_IMAGES.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.5,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            className="break-inside-avoid mb-6 group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-shadow duration-300 ease-out bg-gray-100 will-change-transform"
                            onClick={() => onBookThisLook(index)}
                        >
                            <div className="relative w-full">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={500}
                                    height={700}
                                    className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    loading="eager"
                                />
                            </div>

                            {/* Gradient Overlay - Subtle on Desktop, Visible on Mobile */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />

                            {/* Content Overlay - Glass Effect */}
                            <div className="absolute bottom-0 inset-x-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0">
                                <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                                            Look 0{index + 1}
                                        </p>
                                        <h3 className="font-serif text-gray-900 leading-none">
                                            Book This Set
                                        </h3>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
