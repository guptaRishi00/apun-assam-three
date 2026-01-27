"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui";
import type { NavbarProps } from "@/types";

export const Navbar: React.FC<NavbarProps> = ({ onMenuOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 ${isScrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5"
                    : ""
                }`}
        >
            <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="relative group"
            >
                <span className="text-2xl md:text-3xl font-black tracking-tighter">
                    APUN
                    <span className="text-gradient">.</span>
                </span>
                <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#1E4BB5] to-[#06B6D4]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                />
            </motion.a>

            <div className="flex items-center gap-3 md:gap-4">
                <MagneticButton className="hidden md:flex text-xs px-6 py-3">
                    Join Movement <Sparkles size={14} className="ml-1" />
                </MagneticButton>

                <motion.button
                    onClick={onMenuOpen}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0A0A0F] to-[#1A1A24] text-white rounded-2xl flex items-center justify-center shadow-xl shadow-black/20 group"
                >
                    <Menu size={20} className="group-hover:scale-110 transition-transform" />
                </motion.button>
            </div>
        </motion.nav>
    );
};
