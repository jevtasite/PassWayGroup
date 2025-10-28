import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '../../types';
import { GoldDot } from '../GoldDot/GoldDot';
import { cardHover } from '../../utils/animations';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <motion.div
      className="bg-charcoal border border-white/5 overflow-hidden transition-all duration-quick ease-expo-out hover:border-white/10 cursor-pointer"
      variants={cardHover}
      initial="initial"
      whileHover="hover"
    >
      <div className="relative overflow-hidden h-80 bg-smoke">
        {/* Placeholder for player image */}
        <div className="w-full h-full flex items-center justify-center text-ghost-white/20">
          <span className="font-display text-4xl">Photo</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-3">
          <GoldDot />
          <span className="text-caption text-ghost-white uppercase tracking-wide">
            {player.position}
          </span>
        </div>

        <h3 className="font-display font-medium text-h4 text-white mb-2">
          {player.name}
        </h3>

        <p className="font-body text-body-small text-ghost-white">
          {player.club}
        </p>
      </div>
    </motion.div>
  );
};
