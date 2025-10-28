import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-accent-gold/20 py-12" style={{ backgroundColor: 'rgb(13, 13, 13)' }}>
      <div className="container-site">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <img
              src="/images/logo/passway-logo.png"
              alt="PassWay Group"
              className="h-10 w-auto mx-auto"
            />
          </div>

          {/* Tagline */}
          <p className="font-body text-base text-ghost-white/70 mb-6">
            The boutique agency for Elite talents
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-accent-gold/20" />
            <div className="w-2 h-2 bg-accent-gold rounded-full" />
            <div className="h-px w-20 bg-accent-gold/20" />
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-ghost-white/50">
            © {currentYear} PassWay Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
