import React from 'react';
import { motion } from 'framer-motion';

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const OutlineButton: React.FC<OutlineButtonProps> = ({
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
        relative px-12 py-4 bg-transparent border-2 border-accent-gold text-accent-gold
        font-display font-medium text-body overflow-hidden
        transition-all duration-quick ease-expo-out
        hover:bg-accent-gold hover:text-void-black
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};
