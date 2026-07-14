import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img10 from '../assets/img10.jpeg';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.jpeg';
import img13 from '../assets/img13.jpeg';
import img14 from '../assets/img14.jpeg';
import img15 from '../assets/img15.jpeg';
import img16 from '../assets/img16.jpeg';
import img17 from '../assets/img17.jpeg';
import img18 from '../assets/img18.jpeg';


const Achievements = () => {
    const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);
    const [fullScreenImage, setFullScreenImage] = useState<{ src: string; index: number } | null>(null);

    const achievements = [
        {
            id: 3,
            title: "Top 10 Graphic Design Award",
            organization: "වර්ණ Pixel 2025 – ITUM",
            date: "2025",
            description: "Photoshop posters \"SAVE ELEPHANTS\" and \"STRYDEX\" were selected among the Top 10 Best Designs at වර්ණ Pixel 2025. The work focused on visual storytelling and digital activism, promoting creativity with purpose and sustainability through impactful graphic design.",
            icon: Star,
            color: "text-purple-500",
            bg: "bg-purple-100 dark:bg-purple-900/20",
            images: [img4, img5, img6, img7, img8, img10, img11]
        },

        {
            id: 2,
            title: "Final Year Project – SmartMed",
            organization: "University of Moratuwa",
            date: "2025",
            description: "Developed SmartMed, a medical center management system presented at the 4th International Research Conference 2025. The platform digitalizes university healthcare by connecting hospitals and medical centers with features such as QR-based patient access, AI chatbot consultations, digital prescriptions, video consultations, inventory management, and SMS notifications.",
            icon: Star,
            color: "text-green-500",
            bg: "bg-green-100 dark:bg-green-900/20",
            images: [img12, img13, img14, img15, img16, img17, img18]
        }

    ];

    return (
        <div className="pt-24 min-h-screen bg-[#0B0B0B] text-white transition-colors duration-300 relative">
            {/* Subtle CSS Dot Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-yellow-500 font-semibold block mb-2">MILESTONES</span>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
                        MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ACHIEVEMENTS.</span>
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                        A collection of my professional milestones, awards, and recognitions along my journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16 max-w-5xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-[#121212]/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-neutral-900 hover:border-neutral-800 flex flex-col h-full ${achievement.images ? 'cursor-pointer hover:scale-[1.01]' : ''}`}
                            onClick={() => achievement.images && setSelectedAchievement(achievement.id)}
                        >
                            <div className="w-12 h-12 rounded-lg bg-yellow-500/5 border border-yellow-500/10 flex items-center justify-center mb-6">
                                <achievement.icon className="w-6 h-6 text-yellow-500" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">
                                {achievement.title}
                            </h3>

                            <div className="flex items-center text-xs font-mono text-neutral-500 mb-4">
                                <span className="font-medium mr-2">{achievement.organization}</span>
                                <span>•</span>
                                <Calendar className="w-3.5 h-3.5 mx-2 text-yellow-500/80" />
                                <span>{achievement.date}</span>
                            </div>

                            <p className="text-neutral-400 flex-grow font-light leading-relaxed text-sm">
                                {achievement.description}
                            </p>

                            {achievement.images && (
                                <div className="mt-4 pt-4 border-t border-neutral-900">
                                    <div className="flex items-center justify-between text-xs text-neutral-500">
                                        <span className="font-medium">📸 {achievement.images.length} images</span>
                                        <span className="text-xs bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full">Click to view gallery</span>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Image Gallery Modal */}
                <AnimatePresence>
                    {selectedAchievement !== null && (() => {
                        const achievement = achievements.find(a => a.id === selectedAchievement);
                        return achievement?.images ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                                onClick={() => setSelectedAchievement(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setSelectedAchievement(null)}
                                        className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors z-10"
                                    >
                                        <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                    </button>

                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                        {achievement.title} - Gallery
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {achievement.images.map((img, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-800 cursor-pointer"
                                                onClick={() => setFullScreenImage({ src: img, index: idx })}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`${achievement.title} - Image ${idx + 1}`}
                                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ) : null;
                    })()}
                </AnimatePresence>

                {/* Full-Screen Image Viewer */}
                <AnimatePresence>
                    {fullScreenImage !== null && (() => {
                        const achievement = achievements.find(a => a.id === selectedAchievement);
                        const images = achievement?.images || [];
                        const currentIndex = fullScreenImage.index;

                        const handlePrevious = () => {
                            const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                            setFullScreenImage({ src: images[newIndex], index: newIndex });
                        };

                        const handleNext = () => {
                            const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                            setFullScreenImage({ src: images[newIndex], index: newIndex });
                        };

                        return (
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
                                {images.length > 1 && (
                                    <>
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
                                    </>
                                )}

                                {/* Image Counter */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium">
                                    {currentIndex + 1} / {images.length}
                                </div>

                                <motion.img
                                    key={fullScreenImage.src}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    src={fullScreenImage.src}
                                    alt={`Full screen view - Image ${currentIndex + 1}`}
                                    className="max-w-full max-h-full object-contain"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </motion.div>
                        );
                    })()}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Achievements;
