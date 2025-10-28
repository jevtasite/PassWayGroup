import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButton } from "../Button/PrimaryButton";
import { OutlineButton } from "../Button/OutlineButton";
import { Play, X } from "lucide-react";

export const Hero: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);

  const handleDiscoverClick = () => {
    document.getElementById("players")?.scrollIntoView({ behavior: "smooth" });
  };

  /* const handlePartnerClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };*/

  const handleWatchVideo = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={backgroundVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay Lines - Full Screen */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Diagonal lines spanning full screen */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Main diagonal from top-left to bottom-right */}
            <div className="absolute top-0 left-0 w-[141%] h-px origin-top-left bg-gradient-to-r from-accent-gold/30 via-accent-gold/10 to-transparent transform rotate-45" />

            {/* Diagonal from top-center to bottom-right */}
            <div className="absolute top-0 left-1/4 w-[141%] h-px origin-top-left bg-gradient-to-r from-transparent via-accent-gold/15 to-transparent transform rotate-45" />

            {/* Diagonal from top-right to bottom-left */}
            <div className="absolute top-0 right-0 w-[141%] h-px origin-top-right bg-gradient-to-l from-accent-gold/30 via-accent-gold/10 to-transparent transform -rotate-45" />

            {/* Diagonal from top-center to bottom-left */}
            <div className="absolute top-0 right-1/4 w-[141%] h-px origin-top-right bg-gradient-to-l from-transparent via-accent-gold/15 to-transparent transform -rotate-45" />
          </div>

          {/* Horizontal lines across screen */}
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />
          <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/15 to-transparent" />

          {/* Vertical lines across screen */}
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-accent-gold/20 to-transparent" />
          <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-accent-gold/15 to-transparent" />

          {/* Border frame */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-accent-gold/30 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-accent-gold/30 to-transparent" />

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
              linear-gradient(rgba(212, 165, 16, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 165, 16, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "100px 100px",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container-site relative z-10">
        <div className="max-w-5xl mx-auto text-center px-3 sm:px-4">
          {/* Main Headline */}
          <motion.h1
            className="font-display font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-4 sm:mb-5 md:mb-6"
            initial={{ opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            Elite Talent.
            <br />
            <span className="text-accent-gold">Elite Representation.</span>
          </motion.h1>

          {/* Tagline with accent */}
          <motion.div
            className="mb-5 sm:mb-7 md:mb-8"
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 border border-accent-gold/30 bg-black/30 backdrop-blur-sm">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent-gold rounded-full animate-pulse" />
              <p className="font-display text-xs sm:text-sm md:text-base lg:text-lg text-accent-gold tracking-wider uppercase">
                The boutique agency for Elite talents
              </p>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent-gold rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center items-center px-2 sm:px-0"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <PrimaryButton onClick={handleDiscoverClick}>
              Discover Our Players
            </PrimaryButton>
            <OutlineButton onClick={handleWatchVideo}>
              <div className="flex items-center gap-2">
                <Play size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>Watch Video</span>
              </div>
            </OutlineButton>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            className="mt-10 md:mt-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {/* Section label */}
            <motion.div
              className="flex items-center justify-center gap-2 md:gap-3 mb-5 md:mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.7,
                delay: 1.3,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-accent-gold/50" />
              <span className="font-body text-[10px] md:text-xs text-accent-gold/60 uppercase tracking-[0.2em]">
                Global Presence
              </span>
              <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-accent-gold/50" />
            </motion.div>

            {/* Office cards grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-4 max-w-4xl mx-auto px-2 md:px-0">
              {[
                { city: "Leipzig", country: "Germany" },
                { city: "Munich", country: "Germany" },
                { city: "Sofia", country: "Bulgaria" },
                { city: "Basel", country: "Switzerland" },
              ].map((office, index) => (
                <motion.div
                  key={office.city}
                  className="relative group"
                  initial={{ opacity: 0, y: 30, rotateX: 45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.5 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  style={{ transformPerspective: 1000 }}
                >
                  {/* Card background with border */}
                  <div className="relative px-3 py-4 md:px-5 md:py-6 border border-accent-gold/20 bg-black/40 backdrop-blur-sm overflow-hidden group-hover:border-accent-gold/40 transition-all duration-slow">
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 via-accent-gold/0 to-accent-gold/0 group-hover:from-accent-gold/5 group-hover:via-accent-gold/0 group-hover:to-transparent transition-all duration-slow" />

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t border-r border-accent-gold/30 group-hover:border-accent-gold/60 transition-colors duration-slow" />

                    {/* Content */}
                    <div className="relative">
                      {/* Gold dot */}
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent-gold rounded-full mb-2 md:mb-3 group-hover:shadow-[0_0_12px_rgba(212,165,16,0.6)] transition-all duration-slow" />

                      {/* City name */}
                      <h3 className="font-display text-base md:text-xl text-white mb-0.5 md:mb-1 tracking-tight group-hover:text-accent-gold transition-colors duration-slow">
                        {office.city}
                      </h3>

                      {/* Country */}
                      <p className="font-body text-[10px] md:text-xs text-ghost-white/50 uppercase tracking-wider">
                        {office.country}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void-black to-transparent z-10" />

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            <motion.div
              className="relative w-full max-w-6xl mx-4 aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeVideoModal}
                className="absolute -top-12 right-0 text-white hover:text-accent-gold transition-colors duration-quick"
                aria-label="Close video"
              >
                <X size={32} />
              </button>

              {/* Video player */}
              <video className="w-full h-full" controls autoPlay>
                <source src="/videos/passway-hero.mp4" type="video/mp4" />
              </video>

              {/* Gold border accent */}
              <div className="absolute inset-0 border-2 border-accent-gold/30 pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
