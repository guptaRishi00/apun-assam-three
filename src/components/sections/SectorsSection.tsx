"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { MagneticButton, LogoArcIcon } from "@/components/ui";
import { SECTORS } from "@/data/sectors";
import Link from "next/link";

export const SectorsSection: React.FC = () => {
  // Added explicit type for the ref
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="initiatives"
      className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#FAFBFC] relative overflow-hidden"
      aria-labelledby="sectors-heading"
    >
      {/* Background decoration - Hidden from screen readers */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#1E4BB5]/5 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#1E4BB5]/10 text-[#1E4BB5] text-xs font-bold uppercase tracking-widest mb-4">
              What We Do
            </span>
            <h2
              id="sectors-heading"
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none"
            >
              Five Core <br />
              <span className="text-gradient">Sectors.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-500 max-w-sm text-sm md:text-base"
          >
            Targeted action across key areas for maximum community upliftment
            and sustainable impact.
          </motion.p>
        </div>

        {/* Cards Grid - Converted to a semantic unordered list */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 list-none p-0 m-0">
          {SECTORS.map((sector, i) => (
            <motion.li
              key={sector.id}
              tabIndex={0} // Makes the card focusable via keyboard
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between min-h-[380px] md:min-h-[420px] overflow-hidden border border-gray-100 hover:border-[#1E4BB5]/30 transition-all duration-500 shadow-sm hover:shadow-xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4BB5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAFBFC]"
              aria-label={`Explore ${sector.title} sector`}
            >
              {/* Top */}
              <div className="flex justify-between items-start">
                <span
                  className="text-6xl md:text-7xl font-black text-gray-100 group-hover:text-[#1E4BB5]/10 transition-colors"
                  aria-hidden="true"
                >
                  {sector.id}
                </span>
                <div className="p-4 md:p-5 rounded-2xl bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-[#1E4BB5] group-hover:to-[#3B6FE8] transition-all duration-500">
                  <sector.icon
                    aria-hidden="true"
                    size={24}
                    className="text-gray-600 group-hover:text-white transition-colors"
                  />
                </div>
              </div>

              {/* Bottom */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-[#1E4BB5] transition-colors">
                    {sector.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {sector.desc}
                </p>
              </div>

              {/* Hover decoration */}
              <div
                aria-hidden="true"
                className="absolute -bottom-16 -right-16 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
              >
                <LogoArcIcon className="w-64 h-32 text-[#1E4BB5]" />
              </div>
            </motion.li>
          ))}

          {/* CTA Card - Also treated as a list item */}
          <motion.li
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 0.98 }}
            className="relative bg-gradient-to-br from-[#1E4BB5] via-[#2A5BC7] to-[#3B6FE8] rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 flex flex-col justify-center items-center text-center text-white min-h-[380px] md:min-h-[420px] overflow-hidden group shadow-2xl shadow-blue-500/30"
          >
            {/* Background glow & circles - Hidden from screen readers */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-white/10 animate-float pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border border-white/5 pointer-events-none"
              style={{ animationDelay: "1s" }}
            />

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="mb-6"
              >
                <Sparkles
                  aria-hidden="true"
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-black mb-3 leading-tight tracking-tight">
                Become a<br />
                Partner.
              </h3>
              <p className="text-white/70 text-sm mb-8 max-w-[200px] mx-auto">
                Join us in making a difference across Assam.
              </p>
              <Link href="#connect" aria-label="Go to contact section">
                <MagneticButton
                  className="bg-white text-[#1E4BB5] text-xs hover:bg-gray-100"
                  variant="secondary"
                >
                  Apply Now
                </MagneticButton>
              </Link>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};
