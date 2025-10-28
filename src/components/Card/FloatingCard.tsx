import React from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '../../utils/animations';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'compact' | 'standard';
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className = '',
  padding = 'compact',
}) => {
  const paddingClasses = {
    none: '',
    compact: 'p-4',
    standard: 'p-8',
  };

  return (
    <motion.div
      className={`
        bg-charcoal border border-white/5
        transition-all duration-quick ease-expo-out
        hover:border-white/10
        ${paddingClasses[padding]}
        ${className}
      `}
      variants={cardHover}
      initial="initial"
      whileHover="hover"
    >
      {children}
    </motion.div>
  );
};
