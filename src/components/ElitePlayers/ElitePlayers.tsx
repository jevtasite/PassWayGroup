import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { PlayerCard } from '../Card/PlayerCard';
import { players } from '../../data/players';

export const ElitePlayers: React.FC = () => {
  return (
    <section id="players" className="section-padding bg-charcoal">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center mb-16">
            {/* Gold selector line */}
            <motion.div
              className="w-10 h-1 bg-accent-gold mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />

            <h2 className="font-display font-bold text-h2 text-white mb-4 leading-display tracking-tight">
              Elite Players
            </h2>

            <p className="font-body text-body-large text-ghost-white max-w-2xl mx-auto">
              Representing the finest football talent
            </p>
          </div>
        </ScrollReveal>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PlayerCard player={player} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
