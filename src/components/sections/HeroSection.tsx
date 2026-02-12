"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { LogoArcIcon, MagneticButton } from "@/components/ui";

export const HeroSection: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative pt-24 pb-12 overflow-hidden mt-10">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1E4BB5]/10 via-[#06B6D4]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#8B5CF6]/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-px w-12 bg-gradient-to-r from-[#1E4BB5] to-[#06B6D4]" />
                        <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#1E4BB5]">
                            Bridging Communities Across Assam
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="text-[14vw] md:text-[11vw] lg:text-[9vw] font-black leading-[0.85] tracking-tighter mb-12">
                        <motion.span
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="block"
                        >
                            ACTIVATE
                        </motion.span>
                        <motion.span
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="block text-gradient"
                        >
                            UPLIFTMENT
                        </motion.span>
                        <motion.span
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="block relative"
                        >
                            NURTURE
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                                className="absolute -bottom-2 left-0 w-full h-4 bg-[#1E4BB5]/10 origin-left rounded-full"
                            />
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Bottom Content */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="space-y-8"
                    >
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-lg leading-relaxed font-medium">
                            The Association for People's Upliftment and Nurturing is building
                            a <span className="text-[#1E4BB5] font-bold">resilient ecosystem</span> of grassroots empowerment in Dibrugarh.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <MagneticButton>
                                Explore Our Work
                            </MagneticButton>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-6 py-4 rounded-full border-2 border-gray-200 hover:border-[#1E4BB5] transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#1E4BB5] flex items-center justify-center">
                                    <Play size={16} className="text-white ml-0.5" fill="white" />
                                </div>
                                <span className="font-semibold text-sm uppercase tracking-tight">Watch Story</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex justify-end items-end"
                    >
                        <div className="relative">
                            <LogoArcIcon className="w-48 md:w-64 h-24 md:h-32 text-[#1E4BB5] opacity-30 hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F9FAFB] pointer-events-none" />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <ArrowDown size={20} className="text-[#1E4BB5]" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
