"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Position } from "@/types";

export const CustomCursor: React.FC = () => {
    const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState<boolean>(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) =>
            setMousePos({ x: e.clientX, y: e.clientY });

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("cursor-pointer")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed pointer-events-none z-[9999] hidden lg:block"
                animate={{
                    x: mousePos.x - (isHovering ? 24 : 8),
                    y: mousePos.y - (isHovering ? 24 : 8),
                    width: isHovering ? 48 : 16,
                    height: isHovering ? 48 : 16,
                }}
                transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
            >
                <div
                    className={`w-full h-full rounded-full transition-all duration-300 ${isHovering
                            ? "bg-[#1E4BB5]/20 border-2 border-[#1E4BB5]"
                            : "bg-gradient-to-br from-[#1E4BB5] to-[#06B6D4]"
                        }`}
                />
            </motion.div>

            {/* Trailing cursor */}
            <motion.div
                className="fixed w-2 h-2 rounded-full bg-[#1E4BB5]/30 pointer-events-none z-[9998] hidden lg:block"
                animate={{
                    x: mousePos.x - 4,
                    y: mousePos.y - 4,
                }}
                transition={{ type: "spring", damping: 40, stiffness: 200, mass: 0.8 }}
            />
        </>
    );
};
