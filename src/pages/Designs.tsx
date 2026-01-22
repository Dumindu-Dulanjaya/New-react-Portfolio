import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X, ChevronLeft, ChevronRight } from 'lucide-react';
import img10 from '../assets/img10.jpeg';
import img11 from '../assets/img11.png';
import img19 from '../assets/img19.jpeg';
import img20 from '../assets/img20.jpeg';

const Designs = () => {
    const [fullScreenImage, setFullScreenImage] = useState<{ src: string; index: number; title: string } | null>(null);

    const designs = [
        {
            id: 1,
            title: "Creative Design 1",
            category: "Graphic Design",
            image: img10,
            description: "Professional design showcase"
        },
        {
            id: 2,
            title: "Creative Design 2",
            category: "Graphic Design",
            image: img11,
            description: "Artistic visual expression"
        },
        {
            id: 3,
            title: "Creative Design 3",
            category: "Graphic Design",
            image: img19,
            description: "Innovative visual storytelling concept"
        },
        {
            id: 4,
            title: "Creative Design 4",
            category: "Graphic Design",
            image: img20,
            description: "Bold and impactful design composition"
        }
    ];

    const allImages = designs.map(d => d.image);

    const handlePrevious = () => {
        if (!fullScreenImage) return;
        const newIndex = fullScreenImage.index > 0 ? fullScreenImage.index - 1 : allImages.length - 1;
        setFullScreenImage({
            src: allImages[newIndex],
            index: newIndex,
            title: designs[newIndex].title
        });
    };

    const handleNext = () => {
        if (!fullScreenImage) return;
        const newIndex = fullScreenImage.index < allImages.length - 1 ? fullScreenImage.index + 1 : 0;
        setFullScreenImage({
            src: allImages[newIndex],
            index: newIndex,
            title: designs[newIndex].title
        });
    };

    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-4">
                        <Palette className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Graphic <span className="text-purple-600 dark:text-purple-400">Design</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A collection of my graphic design work showcasing creativity, visual storytelling,
                        and digital activism. Each piece represents a unique concept and design approach.
                    </p>
                    <div className="mt-6 inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                        <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                            🏆 Top 10 at වර්ණ Pixel 2025 – ITUM
                        </span>
                    </div>
                </motion.div>

                {/* Design Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {designs.map((design, index) => (
                        <motion.div
                            key={design.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            onClick={() => setFullScreenImage({ src: design.image, index, title: design.title })}
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-slate-800">
                                <img
                                    src={design.image}
                                    alt={design.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Overlay Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-xs font-medium mb-1">{design.category}</p>
                                    <p className="text-sm">{design.description}</p>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                    {design.title}
                                </h3>
                                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                                    {design.category}
                                </p>
                            </div>

                            {/* Click Indicator */}
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                    Click to view
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Full-Screen Image Viewer */}
                <AnimatePresence>
                    {fullScreenImage !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
                            onClick={() => setFullScreenImage(null)}
                        >
                            <button
                                onClick={() => setFullScreenImage(null)}
                                className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                            >
                                <X className="w-8 h-8 text-white" />
                            </button>

                            {/* Navigation Buttons */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrevious();
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                            >
                                <ChevronLeft className="w-8 h-8 text-white" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                            >
                                <ChevronRight className="w-8 h-8 text-white" />
                            </button>

                            {/* Image Info */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
                                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium mb-2">
                                    {fullScreenImage.index + 1} / {allImages.length}
                                </div>
                                <h3 className="text-white text-xl font-bold">{fullScreenImage.title}</h3>
                            </div>

                            <motion.img
                                key={fullScreenImage.src}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                src={fullScreenImage.src}
                                alt={fullScreenImage.title}
                                className="max-w-full max-h-full object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Designs;
