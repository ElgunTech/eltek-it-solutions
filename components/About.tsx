"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users, Award } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

const PILLARS = [
  {
    icon: Target,
    label: "Our Mission",
    text: "To empower organizations of every size with reliable, innovative, and secure technology solutions that drive measurable business outcomes and sustainable growth.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    text: "To be the most trusted technology partner across emerging markets — a firm where engineering excellence and human-centered design converge to shape a better digital future.",
  },
];

const STATS = [
  { icon: Users, value: "200+", label: "Enterprise Clients" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
  { icon: Users, value: "85+", label: "Certified Engineers" },
  { icon: Award, value: "12+", label: "Years of Excellence" },
];

/**
 * About section – company mission, vision, and key statistics.
 */
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative section-padding overflow-hidden"
    >
      {/* Decorative blob */}
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-eltek-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left column – copy ── */}
          <motion.div
            className="flex flex-col gap-10"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionHeader
              eyebrow="About ElTek"
              title="Built on Trust,"
              titleHighlight="Driven by Innovation"
              description="Founded in 2012, ElTek has grown from a local IT firm into a full-spectrum technology partner serving enterprises across multiple industries and regions."
              align="left"
              
            />

            {/* Mission & Vision cards */}
            <div className="flex flex-col gap-4">
              {PILLARS.map(({ icon: Icon, label, text }) => (
                <motion.div
                  key={label}
                  variants={fadeUpVariant}
                  className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-eltek-500/30 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-eltek-500/10 flex items-center justify-center mt-0.5">
                    <Icon className="w-5 h-5 text-eltek-500" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-white mb-1">
                      {label}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column – visual stats ── */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                variants={fadeUpVariant}
                custom={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className={`flex flex-col gap-3 p-6 rounded-3xl border transition-all duration-300
                  ${i === 0
                    ? "bg-eltek-500 border-transparent text-white shadow-glow"
                    : "bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-eltek-500/40 hover:shadow-glow-sm"
                  }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    i === 0 ? "bg-white/20" : "bg-eltek-500/10"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${i === 0 ? "text-white" : "text-eltek-500"}`}
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <p
                    className={`font-display font-bold text-3xl leading-none ${
                      i === 0 ? "text-white" : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {value}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      i === 0 ? "text-eltek-100" : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Bottom feature card spanning full width */}
            <motion.div
              variants={fadeUpVariant}
              className="col-span-2 flex items-center gap-4 p-5 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 border border-slate-700/50"
            >
              <div className="flex -space-x-2">
                {["#3370ff", "#00d4ff", "#7b6eff", "#10b981"].map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-slate-800 flex items-center justify-center"
                    style={{ backgroundColor: `${color}25`, borderColor: `${color}50` }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Cross-disciplinary team</p>
                <p className="text-xs text-slate-400">Engineers, architects & security analysts</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
