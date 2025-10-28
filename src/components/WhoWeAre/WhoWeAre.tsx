import React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal/ScrollReveal";
import { GoldDot } from "../GoldDot/GoldDot";
import { Users, Target, Award, TrendingUp } from "lucide-react";

export const WhoWeAre: React.FC = () => {
  const pillars = [
    {
      icon: Users,
      title: "Team",
      description:
        "PassWay is a dedicated team of passionate experts from various fields. From sports performance and legal management to communication strategies and contract negotiations, we offer comprehensive support to ensure every athlete reaches their full potential and allow them to focus on what they do best – performing on the field.",
    },
    {
      icon: Target,
      title: "Specialization",
      description:
        "We specialize in guiding players to become professional footballers after the academies in the youth level. With a proven track record over the last four years, we have successfully placed numerous talents in top clubs across Europe and beyond, helping them realize their dreams of playing at the highest level.",
    },
    {
      icon: Award,
      title: "Trust",
      description:
        "We cultivate enduring partnerships built on trust, transparency, and mutual respect. Understanding that each player is one of a kind, we tailor our approach to provide the focused support and resources necessary for success, both on the pitch and in every aspect of their career.",
    },
    {
      icon: TrendingUp,
      title: "Vision",
      description:
        "Every player has a market where they are special. Our vision is to offer our clients tailored solutions in every situation. The focus is always on ensuring that the player is seen as unique within their respective club, allowing them to reach their full potential.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-void-black">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            {/* Gold selector line */}
            <motion.div
              className="w-10 h-1 bg-accent-gold mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />

            <h2 className="font-display font-bold text-h2 text-white mb-6 leading-display tracking-tight">
              About Us
            </h2>

            <p className="font-body text-body-large text-ghost-white/90 leading-body">
              A dedicated team of passionate experts committed to guiding elite
              talent to the highest level of professional football.
            </p>
          </div>
        </ScrollReveal>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="bg-charcoal border border-white/5 p-8 hover:border-accent-gold/30 transition-all duration-quick group">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-accent-gold/10 border border-accent-gold/30 group-hover:bg-accent-gold/20 transition-all duration-quick">
                      <Icon className="text-accent-gold" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <GoldDot />
                        <h3 className="font-display font-bold text-h4 text-white uppercase tracking-wide">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-body text-ghost-white/90 leading-body">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <ScrollReveal delay={0.6}>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 border border-accent-gold/30 bg-charcoal">
              <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
              <p className="font-display text-body text-accent-gold uppercase tracking-wider">
                Four Years of Excellence
              </p>
              <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
