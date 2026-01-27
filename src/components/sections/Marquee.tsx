"use client";

import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
    "Grassroots Impact",
    "Inclusive Welfare",
    "Sustainable Action",
    "Community First",
    "Youth Empowerment",
];

export const Marquee: React.FC = () => {
    return (
        <div className="relative py-10 md:py-16 overflow-hidden bg-gradient-to-r from-[#0A0A0F] via-[#1A1A24] to-[#0A0A0F]">
            {/* Top gradient fade */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E4BB5]/50 to-transparent" />

            <motion.div
                animate={{ x: [0, -2000] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="flex gap-8 md:gap-16 whitespace-nowrap"
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 md:gap-16">
                        {MARQUEE_ITEMS.map((item, j) => (
                            <div key={`${i}-${j}`} className="flex items-center gap-8 md:gap-16">
                                <span className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase">
                                    {item}
                                </span>
                                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-br from-[#1E4BB5] to-[#06B6D4] animate-pulse" />
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>

            {/* Second row - opposite direction */}
            <motion.div
                animate={{ x: [-2000, 0] }}
                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                className="flex gap-8 md:gap-16 whitespace-nowrap mt-6 md:mt-10 opacity-40"
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 md:gap-16">
                        {[...MARQUEE_ITEMS].reverse().map((item, j) => (
                            <div key={`${i}-${j}`} className="flex items-center gap-8 md:gap-16">
                                <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white/50 uppercase">
                                    {item}
                                </span>
                                <div className="w-2 h-2 md:w-3 md:h-3 rotate-45 bg-white/30" />
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06B6D4]/50 to-transparent" />
        </div>
    );
};
