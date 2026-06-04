"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { LogoArcGrey } from "../ui/LogoArcGrey";

const contactInfo = [
  {
    label: "Location",
    value: "Ronga Bora Chuk, Komar Gaon, Rajabhetta, Dibrugarh, Assam 786004",
    icon: MapPin,
  },
  { label: "Email", value: "Info@apun.org.in", icon: Mail },
  { label: "Phone", value: "+91 7896889701 / +91 8099476614", icon: Phone },
];

export const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="connect"
      // Adjusted padding for a smoother transition from mobile to desktop
      className="relative py-16 sm:py-24 md:py-32 lg:py-40 px-5 sm:px-8 md:px-12 lg:px-24 bg-gradient-to-br from-[#0A0A0F] via-[#0F0F18] to-[#1A1A24] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <LogoArcGrey className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-auto rotate-12" />
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#1E4BB5]/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div
        ref={ref}
        // Explicitly set 1 column for small screens, 2 for lg, and scaled gaps
        className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
            Get in Touch
          </span>
          {/* Scaled heading text for mobile, tablet, and desktop */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 sm:mb-8 leading-[0.9]">
            Let&apos;s Build <span className="text-gradient">Together.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-md mb-10 sm:mb-12">
            Ready to make an impact? Let&apos;s discuss how we can create
            meaningful change.
          </p>

          <div className="space-y-3 sm:space-y-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                // Added items-start for smaller screens so long text aligns nicely next to the top of the icon
                className="group flex items-start sm:items-center gap-4 p-3 sm:p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer"
              >
                {/* Added shrink-0 so the icon doesn't squish when the address text wraps */}
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#1E4BB5] to-[#3B6FE8] flex items-center justify-center mt-1 sm:mt-0">
                  <item.icon size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">
                    {item.label}
                  </p>
                  {/* Added break-words so long emails/addresses wrap properly */}
                  <p className="font-semibold text-sm sm:text-base md:text-lg group-hover:text-[#06B6D4] transition-colors break-words">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2rem] border border-white/10"
        >
          <form className="space-y-5 sm:space-y-6">
            <div>
              <label className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 block mb-2 sm:mb-3">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base focus:border-[#1E4BB5] outline-none transition-all font-medium placeholder:text-white/20"
              />
            </div>
            <div>
              <label className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 block mb-2 sm:mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base focus:border-[#1E4BB5] outline-none transition-all font-medium placeholder:text-white/20"
              />
            </div>
            <div>
              <label className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 block mb-2 sm:mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help?"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base focus:border-[#1E4BB5] outline-none transition-all font-medium placeholder:text-white/20 resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 sm:py-5 text-sm sm:text-base bg-gradient-to-r from-[#1E4BB5] to-[#3B6FE8] font-bold uppercase tracking-tight rounded-xl flex items-center justify-center gap-2 sm:gap-3 group hover:shadow-2xl hover:shadow-blue-500/30"
            >
              Send Message{" "}
              <Send
                size={18}
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
