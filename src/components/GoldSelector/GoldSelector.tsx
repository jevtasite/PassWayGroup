import React from 'react';
import { motion } from 'framer-motion';

interface GoldSelectorProps {
  isActive: boolean;
}

export const GoldSelector: React.FC<GoldSelectorProps> = ({ isActive }) => {
  return (
    <motion.div
      className="absolute left-0 top-1/2 h-1 w-10 bg-accent-gold"
      initial={{ x: -48, opacity: 0 }}
      animate={{
        x: isActive ? 0 : -48,
        opacity: isActive ? 1 : 0,
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{ transform: 'translateY(-50%)' }}
    />
  );
};
