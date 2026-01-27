"use client";

import { useState, useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import {
  GrainTexture,
  CustomCursor,
  Navbar,
  MenuOverlay,
  HeroSection,
  Marquee,
  AboutSection,
  SectorsSection,
  ContactSection,
  Footer,
} from "@/components";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for potential future use
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div
      ref={containerRef}
      className="relative bg-[#F9FAFB] text-[#000000] font-sans selection:bg-[#1E4BB5] selection:text-white"
    >
      <GrainTexture />
      <CustomCursor />

      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <HeroSection />
      <Marquee />
      <AboutSection />
      <SectorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
