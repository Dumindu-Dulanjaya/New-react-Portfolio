import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Calendar } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            id: 3,
            title: "Top 10 Graphic Design Award",
            organization: "වර්ණ Pixel 2025 – ITUM",
            date: "2025",
            description: "Photoshop posters \"SAVE ELEPHANTS\" and \"STRYDEX\" were selected among the Top 10 Best Designs at වර්ණ Pixel 2025. The work focused on visual storytelling and digital activism, promoting creativity with purpose and sustainability through impactful graphic design.",
            icon: Star,
            color: "text-purple-500",
            bg: "bg-purple-100 dark:bg-purple-900/20"
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
                            className="bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-slate-800"
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
            </div>
        </div>
    );
};

export default Achievements;
