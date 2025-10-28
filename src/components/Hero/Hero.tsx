import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrimaryButton } from '../Button/PrimaryButton';
import { OutlineButton } from '../Button/OutlineButton';
import { ChevronDown, Play, X } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = backgroundVideoRef.current;
    if (video) {
      // Play for 8 seconds then pause
      const timer = setTimeout(() => {
        video.pause();
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDiscoverClick = () => {
    document.getElementById('players')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePartnerClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchVideo = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={backgroundVideoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/passway-hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="container-site relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Gold accent line - centered */}
          <motion.div
            className="w-1 h-24 bg-accent-gold mx-auto mb-8"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Main Headline */}
          <motion.h1
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-display tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Elite Talent.
            <br />
            <span className="text-accent-gold">Elite Representation.</span>
          </motion.h1>

          {/* Tagline with accent */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-accent-gold/30 bg-black/40 backdrop-blur-sm">
              <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
              <p className="font-display text-body-large text-accent-gold tracking-wider uppercase">
                The boutique agency for Elite talents
              </p>
              <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <PrimaryButton onClick={handleDiscoverClick}>
              Discover Our Players
            </PrimaryButton>
            <OutlineButton onClick={handleWatchVideo}>
              <div className="flex items-center gap-2">
                <Play size={18} />
                <span>Watch Video</span>
              </div>
            </OutlineButton>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 max-w-4xl mx-auto">
              {['Leipzig', 'Munich', 'Sofia', 'Basel'].map((city, index) => (
                <motion.div
                  key={city}
                  className="relative group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 + index * 0.15 }}
                >
                  {/* Gold dot indicator */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent-gold rounded-full" />

                  <span className="font-display text-lg md:text-xl text-ghost-white group-hover:text-accent-gold transition-colors duration-quick tracking-wide">
                    {city}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Subtle label */}
            <motion.p
              className="text-center mt-4 font-body text-xs text-ghost-white/50 uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              Our Offices
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-accent-gold"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

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
              <video
                className="w-full h-full"
                controls
                autoPlay
              >
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
