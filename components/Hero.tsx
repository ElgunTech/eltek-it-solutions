"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Cpu, Globe } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

/* ── Floating stat badge ── */
function StatBadge({
  icon: Icon,
  value,
  label,
  delay = 0,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="absolute glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-glass"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="w-9 h-9 rounded-xl bg-eltek-500/15 flex items-center justify-center">
        <Icon className="w-4.5 h-4.5 text-eltek-500" />
      </div>
      <div>
        <p className="font-display font-bold text-slate-900 dark:text-white text-sm leading-none">
          {value}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{label}</p>
      </div>
    </motion.div>
  );
}

/* ── Animated tech orb ── */
function TechOrb() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-eltek-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-eltek-500 shadow-glow-sm" />
      </motion.div>

      {/* Middle ring */}
      <motion.div
        className="absolute inset-8 rounded-full border border-eltek-400/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,212,255,0.6)]" />
      </motion.div>

      {/* Inner ring */}
      <motion.div
        className="absolute inset-16 rounded-full border border-purple-500/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(167,139,250,0.6)]" />
      </motion.div>

      {/* Center */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-eltek-500 to-eltek-700 flex items-center justify-center shadow-glow-lg">
          <Cpu className="w-14 h-14 text-white" strokeWidth={1.5} />
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Hero section – first impression of the site.
 * Contains headline, subtext, CTA buttons, and an animated visual.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 grid-bg opacity-70 dark:opacity-40" aria-hidden="true" />

      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-eltek-500/10 dark:bg-eltek-500/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left – copy */}
        <motion.div
          className="flex flex-col gap-8"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUpVariant}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-widest uppercase bg-eltek-500/10 text-eltek-600 dark:text-eltek-400 border border-eltek-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-eltek-500 animate-pulse" />
              Trusted Technology Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpVariant}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-slate-900 dark:text-white"
          >
            Innovative IT Solutions for Your{" "}
            <span className="gradient-text">Digital Growth</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUpVariant}
            className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg"
          >
            ElTek empowers businesses with enterprise-grade technology: from
            cybersecurity to custom software — we architect the infrastructure
            your future demands.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-display font-semibold text-sm text-white bg-eltek-500 hover:bg-eltek-600 shadow-glow hover:shadow-glow-lg transition-all duration-200 active:scale-[0.97]"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-display font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-eltek-500/50 hover:text-eltek-500 dark:hover:text-eltek-400 shadow-sm hover:shadow-glow-sm transition-all duration-200 active:scale-[0.97]"
            >
              <Play className="w-4 h-4 fill-current" />
              Our Services
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeUpVariant}
            className="flex items-center gap-6 pt-2"
          >
            {[
              { label: "Uptime SLA" , value: "99.9%" },
              { label: "Projects Delivered", value: "500+" },
              { label: "Years in Business", value: "12+" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <span className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  {value}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right – visual */}
        <div className="relative hidden lg:flex items-center justify-center">
          <TechOrb />

          {/* Floating badges */}
          <StatBadge
            icon={Shield}
            value="ISO 27001"
            label="Certified Security"
            delay={0.8}
          />
          <StatBadge
            icon={Globe}
            value="24 / 7"
            label="Global Support"
            delay={1.0}
          />

          {/* Inline positions for the badges */}
          <style jsx>{`
            div:nth-child(2) { top: 12%; right: -4%; }
            div:nth-child(3) { bottom: 14%; left: -6%; }
          `}</style>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <span className="text-xs text-slate-400 font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-start justify-center pt-1.5"
          aria-hidden="true"
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-eltek-500"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
