import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-void-black">
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
              Let's Talk
            </h2>

            <p className="font-body text-body-large text-ghost-white">
              Get in touch to discuss representation
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <ScrollReveal delay={0.2}>
            <ContactForm />
          </ScrollReveal>

          {/* Right: Contact Information */}
          <ScrollReveal delay={0.4}>
            <div className="space-y-8">
              <h3 className="font-display font-medium text-h4 text-white mb-6">
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className="text-accent-gold mt-1" size={20} />
                <div>
                  <h4 className="font-display font-medium text-body text-white mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:contact@passwaygroup.com"
                    className="font-body text-body-small text-ghost-white hover:text-accent-gold transition-colors duration-quick"
                  >
                    contact@passwaygroup.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="text-accent-gold mt-1" size={20} />
                <div>
                  <h4 className="font-display font-medium text-body text-white mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+1234567890"
                    className="font-body text-body-small text-ghost-white hover:text-accent-gold transition-colors duration-quick"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <MapPin className="text-accent-gold mt-1" size={20} />
                <div>
                  <h4 className="font-display font-medium text-body text-white mb-1">
                    Office
                  </h4>
                  <p className="font-body text-body-small text-ghost-white">
                    London, United Kingdom
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="font-body text-body-small text-ghost-white leading-body">
                  Whether you're a player seeking representation or a club looking to connect,
                  we'd love to hear from you. Our team responds to all inquiries within 24 hours.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
