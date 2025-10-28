import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import { StatCard } from './StatCard';
import { stats } from '../../data/stats';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-void-black">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text Content */}
          <ScrollReveal>
            <div>
              {/* Gold selector line */}
              <motion.div
                className="w-10 h-1 bg-accent-gold mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />

              <h2 className="font-display font-bold text-h2 text-white mb-8 leading-display tracking-tight">
                Who We Are
              </h2>

              <div className="space-y-6">
                <p className="font-body text-body text-ghost-white leading-body">
                  PassWay Group is a boutique football agency dedicated to representing elite
                  talent with unparalleled professionalism and personalized attention. We believe
                  that every player deserves focused representation that prioritizes their
                  long-term career success.
                </p>

                <p className="font-body text-body text-ghost-white leading-body">
                  Our approach combines strategic career planning, expert negotiation, and
                  comprehensive support services. With direct relationships to top clubs and
                  decision-makers worldwide, we ensure our players have access to the best
                  opportunities in football.
                </p>

                <p className="font-body text-body text-ghost-white leading-body">
                  With a proven track record of successful transfers and career development,
                  PassWay Group stands as a trusted partner for elite athletes seeking to
                  maximize their potential both on and off the pitch.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Stats Grid */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
