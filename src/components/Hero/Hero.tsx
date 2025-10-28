import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton } from '../Button/PrimaryButton';
import { OutlineButton } from '../Button/OutlineButton';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleDiscoverClick = () => {
    document.getElementById('players')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePartnerClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
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

          {/* Description */}
          <motion.p
            className="font-body text-lg md:text-xl text-ghost-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            PassWay Group represents the finest football talent with personalized attention
            and expert negotiation. We are committed to building lasting careers through
            strategic guidance and unwavering dedication.
          </motion.p>

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
            <OutlineButton onClick={handlePartnerClick}>
              Partner With Us
            </OutlineButton>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {[
              { number: '15+', label: 'Years' },
              { number: '50+', label: 'Players' },
              { number: '200+', label: 'Transfers' },
              { number: '30+', label: 'Clubs' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
              >
                <div className="font-mono text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-sm text-ghost-white/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
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
    </section>
  );
};
