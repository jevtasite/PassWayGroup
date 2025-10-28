import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Player } from '../../types';
import { GoldDot } from '../GoldDot/GoldDot';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-void-black border border-accent-gold/20 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Image container with overlay */}
      <div className="relative overflow-hidden h-80 bg-charcoal">
        {/* Placeholder for player image */}
        <div className="w-full h-full flex items-center justify-center text-ghost-white/10">
          <span className="font-display text-4xl">Photo</span>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Animated gold lines */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        {/* Position badge - top right */}
        <motion.div
          className="absolute top-4 right-4 z-10"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-gold/10 backdrop-blur-sm border border-accent-gold/30">
            <GoldDot />
            <span className="font-display text-xs text-accent-gold uppercase tracking-wider">
              {player.position}
            </span>
          </div>
        </motion.div>

      </div>

      {/* Card content */}
      <div className="relative p-6 bg-void-black border-t border-accent-gold/20">
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 via-accent-gold/0 to-accent-gold/0 group-hover:from-accent-gold/5 group-hover:to-transparent transition-all duration-500" />

        <div className="relative">
          {/* Player name with animated underline */}
          <div className="mb-3">
            <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-1 group-hover:text-accent-gold transition-colors duration-300">
              {player.name}
            </h3>
            <motion.div
              className="h-0.5 bg-accent-gold"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '100%' : '20px' }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Club info */}
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={14} className="text-accent-gold" />
            <p className="font-body text-sm text-ghost-white/90">
              {player.club}
            </p>
          </div>

          {/* Nationality badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-charcoal/50 group-hover:border-accent-gold/30 transition-colors duration-300">
            <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
            <span className="font-mono text-xs text-ghost-white/70 uppercase tracking-wider">
              {player.nationality}
            </span>
          </div>

          {/* View profile button - always visible on mobile, appears on hover on desktop */}
          <div className="mt-4 w-full">
            {/* Mobile: always visible */}
            <div className="md:hidden flex items-center justify-center gap-2 w-full py-3 bg-accent-gold text-void-black font-display font-bold text-sm uppercase tracking-wider hover:bg-accent-gold/90 transition-colors cursor-pointer">
              <span>View Profile</span>
              <ArrowUpRight size={18} />
            </div>

            {/* Desktop: appears on hover with animation */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="hidden md:block"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center justify-center gap-2 w-full py-3 bg-accent-gold text-void-black font-display font-bold text-sm uppercase tracking-wider hover:bg-accent-gold/90 transition-colors cursor-pointer">
                    <span>View Profile</span>
                    <ArrowUpRight size={18} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 border-2 border-accent-gold/0 group-hover:border-accent-gold/40 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};
