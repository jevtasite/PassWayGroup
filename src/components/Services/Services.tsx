import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { services } from '../../data/services';
import { ChevronDown } from 'lucide-react';

export const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="section-padding bg-void-black">
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
              Our Services
            </h2>

            <p className="font-body text-body-large text-ghost-white/70 max-w-2xl mx-auto">
              Comprehensive solutions for elite football careers
            </p>
          </div>
        </ScrollReveal>

        {/* Services Tree View - Centered */}
        <div className="max-w-3xl mx-auto space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Service Card */}
              <div className="bg-charcoal border border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300">
                {/* Service Header - Clickable */}
                <div
                  className="cursor-pointer p-6 md:p-8"
                  onClick={() => toggleExpand(service.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      {/* Gold dot and title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 bg-accent-gold rounded-full group-hover:shadow-[0_0_12px_rgba(212,165,16,0.6)] transition-all duration-300" />
                        <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-accent-gold transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="font-body text-base text-ghost-white/80 leading-relaxed ml-5">
                        {service.description}
                      </p>
                    </div>

                    {/* Expand/Collapse Icon */}
                    <motion.div
                      className="ml-4 flex-shrink-0"
                      animate={{ rotate: expandedId === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} className="text-accent-gold" />
                    </motion.div>
                  </div>
                </div>

                {/* Collapsible Details */}
                <AnimatePresence>
                  {expandedId === service.id && service.details && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-accent-gold/20"
                    >
                      <div className="p-6 md:p-8 pt-6 bg-void-black/50">
                        {/* Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.details.map((detail, detailIndex) => (
                            <motion.div
                              key={detailIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: detailIndex * 0.05 }}
                              className="flex items-start group/item"
                            >
                              {/* Bullet point */}
                              <div className="mt-1.5 mr-3 flex-shrink-0">
                                <div className="w-1.5 h-1.5 bg-accent-gold rounded-full group-hover/item:shadow-[0_0_8px_rgba(212,165,16,0.6)] transition-all duration-300" />
                              </div>

                              <span className="font-body text-sm text-ghost-white/70 group-hover/item:text-ghost-white transition-colors duration-300">
                                {detail}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
