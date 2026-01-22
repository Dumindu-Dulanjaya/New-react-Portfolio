import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, Calendar, X } from 'lucide-react';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img10 from '../assets/img10.jpeg';
import img11 from '../assets/img11.png';


const Achievements = () => {
    const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);

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
            bg: "bg-green-100 dark:bg-green-900/20"
        }

    ];

    return (
        <div className="pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Achievements
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A collection of my professional milestones, awards, and recognitions along my journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-slate-800 ${achievement.images ? 'cursor-pointer' : ''}`}
                            onClick={() => achievement.images && setSelectedAchievement(achievement.id)}
                        >
                            <div className={`w-12 h-12 rounded-lg ${achievement.bg} flex items-center justify-center mb-6`}>
                                <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {achievement.title}
                            </h3>

                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                                <span className="font-medium mr-2">{achievement.organization}</span>
                                <span>•</span>
                                <Calendar className="w-4 h-4 mx-2" />
                                <span>{achievement.date}</span>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300">
                                {achievement.description}
                            </p>
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
                                                className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-800"
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
            </div>
        </div>
    );
};

export default Achievements;
