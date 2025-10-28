import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-void-black">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            {/* Gold selector line */}
            <motion.div
              className="w-10 h-1 bg-accent-gold mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />

            <h2 className="font-display font-bold text-h2 text-white mb-6 leading-display tracking-tight">
              Get Your Pass
            </h2>

            <p className="font-body text-body-large text-ghost-white/80 mb-8">
              Reach out via email or connect with us on social media
            </p>

            {/* Email */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="mailto:contact@passwaygroup.com"
                className="inline-flex items-center gap-3 text-white hover:text-accent-gold transition-colors duration-300 text-xl md:text-2xl font-display"
              >
                <Mail size={24} className="text-accent-gold" />
                contact@passwaygroup.com
              </a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-center gap-8">
                <a
                  href="https://www.instagram.com/passway_group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  title="Follow PassWay Group on Instagram"
                  aria-label="PassWay Group Instagram"
                >
                  <div className="w-14 h-14 flex items-center justify-center border border-accent-gold/30 bg-accent-gold/10 group-hover:bg-accent-gold/20 group-hover:border-accent-gold/50 transition-all duration-300">
                    <Instagram className="text-accent-gold group-hover:scale-110 transition-transform duration-300" size={28} />
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/company/passway-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  title="Connect with PassWay Group on LinkedIn"
                  aria-label="PassWay Group LinkedIn"
                >
                  <div className="w-14 h-14 flex items-center justify-center border border-accent-gold/30 bg-accent-gold/10 group-hover:bg-accent-gold/20 group-hover:border-accent-gold/50 transition-all duration-300">
                    <Linkedin className="text-accent-gold group-hover:scale-110 transition-transform duration-300" size={28} />
                  </div>
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
