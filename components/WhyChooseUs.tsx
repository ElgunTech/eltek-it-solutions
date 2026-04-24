"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Clock,
  TrendingUp,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

const ADVANTAGES = [
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    description:
      "Agile methodologies and battle-tested processes ensure on-time delivery without sacrificing quality. We turn concepts into production systems at speed.",
    color: "amber",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Mindset",
    description:
      "Every solution we build adheres to ISO 27001 standards. Security is never an afterthought — it's baked into every layer of our architecture.",
    color: "emerald",
  },
  {
    icon: Clock,
    title: "99.9% Uptime Guarantee",
    description:
      "Enterprise SLAs with proactive monitoring and redundant infrastructure so your systems stay online when it matters most.",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Scalable by Design",
    description:
      "We architect solutions that grow with your business — from startup to enterprise — without costly rewrites or painful migrations.",
    color: "purple",
  },
  {
    icon: Headphones,
    title: "Dedicated Support Team",
    description:
      "Named account managers and 24/7 technical support ensure you're never left without expert help when you need it.",
    color: "cyan",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Partnership",
    description:
      "Clear contracts, honest pricing, and regular progress reports. You always know where your project stands — no surprises.",
    color: "rose",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  amber:   { bg: "bg-amber-500/10",   icon: "text-amber-500",   border: "border-amber-500/20" },
  emerald: { bg: "bg-emerald-500/10", icon: "text-emerald-500", border: "border-emerald-500/20" },
  blue:    { bg: "bg-eltek-500/10",   icon: "text-eltek-500",   border: "border-eltek-500/20" },
  purple:  { bg: "bg-purple-500/10",  icon: "text-purple-500",  border: "border-purple-500/20" },
  cyan:    { bg: "bg-cyan-500/10",    icon: "text-cyan-500",    border: "border-cyan-500/20" },
  rose:    { bg: "bg-rose-500/10",    icon: "text-rose-500",    border: "border-rose-500/20" },
};

/* ── Advantage card ── */
function AdvantageCard({
  advantage,
  index,
}: {
  advantage: (typeof ADVANTAGES)[0];
  index: number;
}) {
  const Icon = advantage.icon;
  const colors = colorMap[advantage.color];

  return (
    <motion.article
      variants={fadeUpVariant}
      custom={index}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      className="group flex flex-col gap-4 p-6 rounded-3xl
                 bg-white dark:bg-slate-900
                 border border-slate-200/80 dark:border-slate-800
                 hover:shadow-glow-sm hover:border-eltek-500/30
                 transition-all duration-300"
    >
      <div
        className={`w-11 h-11 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-5.5 h-5.5 ${colors.icon}`} strokeWidth={1.75} />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white">
          {advantage.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {advantage.description}
        </p>
      </div>
    </motion.article>
  );
}

/**
 * WhyChooseUs section – six key competitive advantages displayed as a grid.
 */
export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative section-padding bg-slate-50/50 dark:bg-slate-900/40 overflow-hidden"
    >
      {/* Decorative */}
      <div
        className="absolute left-0 bottom-0 w-[600px] h-[400px] rounded-full bg-eltek-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-16">
          <SectionHeader
            eyebrow="Why ElTek"
            title="The Advantage of Choosing"
            titleHighlight="the Right Partner"
            description="Hundreds of businesses trust ElTek because we combine technical depth with genuine partnership — the rare combination that makes a real difference."
            id="why-us-heading"
          />
        </div>

        {/* Advantages grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {ADVANTAGES.map((adv, i) => (
            <AdvantageCard key={adv.title} advantage={adv} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl
                     bg-gradient-to-r from-eltek-600 to-eltek-500 shadow-glow-lg"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center sm:text-left">
            <h3 className="font-display font-bold text-xl text-white">
              Ready to modernize your IT infrastructure?
            </h3>
            <p className="text-eltek-100 text-sm mt-1">
              Let&apos;s discuss your goals in a free 30-minute strategy session.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-display font-semibold text-sm text-eltek-600 bg-white hover:bg-eltek-50 shadow-sm transition-all duration-200 active:scale-[0.97]"
          >
            Book a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
