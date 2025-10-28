import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { FloatingCard } from '../Card/FloatingCard';
import { valuePropositions } from '../../data/valueProps';

export const WhyChoose: React.FC = () => {
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
              Why Choose PassWay
            </h2>
          </div>
        </ScrollReveal>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePropositions.map((prop, index) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FloatingCard padding="standard" className="relative overflow-hidden h-full">
                {/* Large background number */}
                <div className="absolute top-4 right-4 font-mono text-7xl text-accent-gold opacity-20">
                  {prop.number}
                </div>

                <div className="relative z-10">
                  <h3 className="font-display font-medium text-h4 text-white mb-4">
                    {prop.title}
                  </h3>

                  <p className="font-body text-body text-ghost-white leading-body">
                    {prop.description}
                  </p>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
