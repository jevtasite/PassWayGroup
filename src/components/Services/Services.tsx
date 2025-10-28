import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { GoldSelector } from '../GoldSelector/GoldSelector';
import { GoldDot } from '../GoldDot/GoldDot';
import { services } from '../../data/services';

export const Services: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="section-padding bg-void-black">
      <div className="container-site">
        <ScrollReveal>
          <div className="mb-16">
            {/* Gold selector line */}
            <motion.div
              className="w-10 h-1 bg-accent-gold mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />

            <h2 className="font-display font-bold text-h2 text-white mb-4 leading-display tracking-tight">
              Our Services
            </h2>
          </div>
        </ScrollReveal>

        {/* Services List */}
        <div className="max-w-4xl space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative pl-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <GoldSelector isActive={hoveredId === service.id} />

              <div className="flex items-start mb-3">
                <GoldDot />
                <h3 className="font-display font-medium text-h5 text-white hover:text-accent-gold transition-colors duration-quick">
                  {service.title}
                </h3>
              </div>

              <p className="font-body text-body text-ghost-white leading-body ml-5">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
