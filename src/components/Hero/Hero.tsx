import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton } from '../Button/PrimaryButton';
import { OutlineButton } from '../Button/OutlineButton';
import { GoldDot } from '../GoldDot/GoldDot';

export const Hero: React.FC = () => {
  const handleDiscoverClick = () => {
    document.getElementById('players')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePartnerClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-void-black relative">
      <div className="container-site">
        <div className="max-w-4xl">
          {/* Gold accent line */}
          <motion.div
            className="w-1 h-32 bg-accent-gold mb-8"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 128, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Gold dot */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <GoldDot />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display font-bold text-5xl md:text-6xl lg:text-h1 text-white leading-display tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Elite Talent.
            <br />
            Elite Representation.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="font-body text-body-large text-ghost-white mb-6 leading-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            The boutique agency for Elite talents!
          </motion.p>

          {/* Description */}
          <motion.p
            className="font-body text-body text-ghost-white/80 mb-12 max-w-2xl leading-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            PassWay Group represents the finest football talent with personalized attention
            and expert negotiation. We are committed to building lasting careers through
            strategic guidance and unwavering dedication.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <PrimaryButton onClick={handleDiscoverClick}>
              Discover Our Players
            </PrimaryButton>
            <OutlineButton onClick={handlePartnerClick}>
              Partner With Us
            </OutlineButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-accent-gold rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-accent-gold rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
