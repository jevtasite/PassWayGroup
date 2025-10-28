import React from 'react';
import { motion } from 'framer-motion';
import { Stat } from '../../types';
import { GoldDot } from '../GoldDot/GoldDot';
import { FloatingCard } from '../Card/FloatingCard';

interface StatCardProps {
  stat: Stat;
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <FloatingCard padding="standard">
        <div className="font-mono text-5xl text-white mb-3">{stat.number}</div>
        <div className="flex items-center">
          <GoldDot />
          <span className="text-caption text-ghost-white uppercase tracking-wide">
            {stat.label}
          </span>
        </div>
      </FloatingCard>
    </motion.div>
  );
};
