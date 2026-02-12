"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const links = {
    platform: ["Vision", "Impact", "Sectors", "Partners"],
    socials: ["Instagram", "LinkedIn", "Facebook", "Twitter"],
};

export const Footer: React.FC = () => {
    return (
        <footer className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Top */}
                <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
                    <div className="max-w-md">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.02 }}
                            className="inline-block mb-6"
                        >
                            <Image
                                src="/logo.svg"
                                alt="APUN Logo"
                                width={180}
                                height={60}
                                className="h-12 md:h-14 w-auto"
                            />
                        </motion.a>
                        <p className="text-gray-500 leading-relaxed">
                            Association for People&apos;s Upliftment and Nurturing. Uplifting communities
                            through inclusive, compassionate, and sustainable development.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-16">
                        <div>
                            <h5 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">Platform</h5>
                            <ul className="space-y-3">
                                {links.platform.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-[#1E4BB5] transition-colors flex items-center gap-1 group">
                                            {link}
                                            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">Socials</h5>
                            <ul className="space-y-3">
                                {links.socials.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-[#1E4BB5] transition-colors flex items-center gap-1 group">
                                            {link}
                                            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h5 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">Newsletter</h5>
                            <p className="text-sm text-gray-500 mb-4">Stay updated with our initiatives.</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#1E4BB5] outline-none transition-colors"
                                />
                                <button className="px-4 py-3 bg-gradient-to-r from-[#1E4BB5] to-[#3B6FE8] text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/20 transition-shadow">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">
                        © 2026 APUN Association • Dibrugarh, Assam
                    </p>
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">
                            Active Advocacy
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
