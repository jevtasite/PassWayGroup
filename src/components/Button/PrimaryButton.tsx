import React from 'react';
import { motion } from 'framer-motion';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`
        relative px-12 py-4 bg-accent-gold text-void-black
        font-display font-medium text-body overflow-hidden
        transition-all duration-quick ease-expo-out
        hover:bg-opacity-90 hover:-translate-y-0.5
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-1/2 h-0.5 bg-void-black"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ transform: 'translateX(-50%)' }}
      />
    </motion.button>
  );
};
