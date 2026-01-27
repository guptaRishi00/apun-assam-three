"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { LogoArcIcon } from "@/components/ui";

const contactInfo = [
    { label: "Location", value: "Dibrugarh, Assam 786004", icon: MapPin },
    { label: "Email", value: "apun.assam@gmail.com", icon: Mail },
    { label: "Phone", value: "+91 7896889701", icon: Phone },
];

export const ContactSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="connect" className="relative py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#0A0A0F] via-[#0F0F18] to-[#1A1A24] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <LogoArcIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-auto rotate-12" />
            </div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#1E4BB5]/20 rounded-full blur-[120px]" />

            <div ref={ref} className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest mb-6">Get in Touch</span>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.85]">Let&apos;s Build <span className="text-gradient">Together.</span></h2>
                    <p className="text-lg text-white/60 max-w-md mb-12">Ready to make an impact? Let&apos;s discuss how we can create meaningful change.</p>

                    <div className="space-y-4">
                        {contactInfo.map((item, i) => (
                            <motion.div key={item.label} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.1 }} className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E4BB5] to-[#3B6FE8] flex items-center justify-center"><item.icon size={20} /></div>
                                <div>
                                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">{item.label}</p>
                                    <p className="font-semibold text-lg group-hover:text-[#06B6D4] transition-colors">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/10">
                    <form className="space-y-6">
                        <div>
                            <label className="text-xs font-mono uppercase tracking-widest text-white/40 block mb-3">Your Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#1E4BB5] outline-none transition-all font-medium placeholder:text-white/20" />
                        </div>
                        <div>
                            <label className="text-xs font-mono uppercase tracking-widest text-white/40 block mb-3">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#1E4BB5] outline-none transition-all font-medium placeholder:text-white/20" />
                        </div>
                        <div>
                            <label className="text-xs font-mono uppercase tracking-widest text-white/40 block mb-3">Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help?" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#1E4BB5] outline-none transition-all font-medium placeholder:text-white/20 resize-none" />
                        </div>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-5 bg-gradient-to-r from-[#1E4BB5] to-[#3B6FE8] font-bold uppercase tracking-tight rounded-xl flex items-center justify-center gap-3 group hover:shadow-2xl hover:shadow-blue-500/30">
                            Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
