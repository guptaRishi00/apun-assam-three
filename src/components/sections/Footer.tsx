"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = {
  platform: ["Vision", "Impact", "Sectors", "Partners"],
  socials: ["Instagram", "LinkedIn", "Facebook", "Twitter"],
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site Footer
      </h2>
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          <div className="max-w-md">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block mb-6"
            >
              <Link
                href="/"
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4BB5] rounded-md"
                aria-label="Return to homepage"
              >
                <Image
                  src="/logo.svg"
                  alt="APUN Logo"
                  width={180}
                  height={60}
                  className="h-12 md:h-14 w-auto"
                />
              </Link>
            </motion.div>
            <p className="text-gray-500 leading-relaxed">
              Association for People&apos;s Upliftment and Nurturing. Uplifting
              communities through inclusive, compassionate, and sustainable
              development.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">
                Platform
              </h3>
              <ul className="space-y-3">
                {links.platform.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm font-semibold text-gray-700 hover:text-[#1E4BB5] transition-colors flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4BB5] rounded-sm w-max"
                    >
                      {link}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">
                Socials
              </h3>
              <ul className="space-y-3">
                {links.socials.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-700 hover:text-[#1E4BB5] transition-colors flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4BB5] rounded-sm w-max"
                    >
                      {link}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">
                Newsletter
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Stay updated with our initiatives.
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email"
                  required
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#1E4BB5] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#1E4BB5] focus-visible:ring-offset-1"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-gradient-to-r from-[#1E4BB5] to-[#3B6FE8] text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/20 transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4BB5] focus-visible:ring-offset-2"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xs text-gray-400 font-mono uppercase tracking-wider text-center md:text-left">
              © {currentYear} APUN Association • Dibrugarh, Assam
            </p>
            <p className="text-xs text-gray-500 font-medium">
              Made with{" "}
              <span className="text-red-500" aria-hidden="true">
                ♥
              </span>
              <span className="sr-only">love</span> by{" "}
              <a
                href="https://softexedge.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#1E4BB5] transition-colors font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4BB5] rounded-sm"
              >
                Softexedge
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
              aria-hidden="true"
            />
            <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">
              Active Advocacy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
