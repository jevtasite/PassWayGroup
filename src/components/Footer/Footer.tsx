import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-void-black border-t border-white/5 py-16">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              PassWay<span className="text-accent-gold">.</span>
            </h3>
            <p className="font-body text-body-small text-ghost-white">
              The boutique agency for Elite talents!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="font-body text-body-small text-ghost-white hover:text-accent-gold transition-colors duration-quick"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#players"
                  className="font-body text-body-small text-ghost-white hover:text-accent-gold transition-colors duration-quick"
                >
                  Players
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-body text-body-small text-ghost-white hover:text-accent-gold transition-colors duration-quick"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-body text-body-small text-ghost-white hover:text-accent-gold transition-colors duration-quick"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-display font-medium text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ghost-white hover:text-accent-gold transition-colors duration-quick"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ghost-white hover:text-accent-gold transition-colors duration-quick"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="font-body text-body-small text-ghost-white hover:text-accent-gold transition-colors duration-quick"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="font-body text-body-small text-ghost-white hover:text-accent-gold transition-colors duration-quick"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5">
          <p className="font-body text-body-small text-ghost-white text-center">
            © {currentYear} PassWay Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
