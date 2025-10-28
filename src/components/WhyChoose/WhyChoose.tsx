import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';

export const WhyChoose: React.FC = () => {
  const stats = [
    { number: '4', label: 'Years Experience', sublabel: 'In the industry' },
    { number: '4', label: 'Offices', sublabel: 'Across Europe' },
    { number: '17', label: 'Nationalities', sublabel: 'Represented' },
    { number: '53', label: 'Transfers', sublabel: 'Completed' },
    { number: '16', label: 'National Team', sublabel: 'Players' },
    { number: '13', label: 'Youth to Pro', sublabel: 'Transitions' }
  ];

  return (
    <section className="section-padding bg-charcoal">
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
              Track Record
            </h2>

            <p className="font-body text-body-large text-ghost-white/70 max-w-2xl mx-auto">
              Numbers that speak to our commitment and success
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-void-black border border-accent-gold/20 p-8 md:p-10 overflow-hidden hover:border-accent-gold/40 transition-all duration-500">
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 to-accent-gold/0 group-hover:from-accent-gold/10 group-hover:to-transparent transition-all duration-500" />

                {/* Content */}
                <div className="relative">
                  {/* Gold dot indicator */}
                  <div className="w-2 h-2 bg-accent-gold rounded-full mb-6 group-hover:shadow-[0_0_20px_rgba(212,165,16,0.6)] transition-all duration-500" />

                  {/* Number with counting animation effect */}
                  <motion.div
                    className="font-display font-bold text-6xl md:text-7xl text-accent-gold mb-3 leading-none"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {stat.number}
                  </motion.div>

                  {/* Animated underline */}
                  <motion.div
                    className="h-0.5 bg-accent-gold/50 mb-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: '60px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  />

                  {/* Label */}
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-1 uppercase tracking-wide group-hover:text-accent-gold transition-colors duration-300">
                    {stat.label}
                  </h3>

                  {/* Sublabel */}
                  <p className="font-body text-sm text-ghost-white/60 uppercase tracking-wider">
                    {stat.sublabel}
                  </p>
                </div>

                {/* Background number */}
                <div className="absolute bottom-4 right-4 font-mono text-8xl md:text-9xl text-white/5 leading-none select-none">
                  {stat.number}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
