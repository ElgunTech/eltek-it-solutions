"use client";

import { motion } from "framer-motion";
import { Zap, Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

const NAV_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "IT Consulting", href: "#services" },
      { label: "Network Solutions", href: "#services" },
      { label: "Cybersecurity", href: "#services" },
      { label: "Software Development", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About ElTek", href: "#about" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

const CERTIFICATIONS = ["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "Microsoft Partner"];

/**
 * Site footer — navigation columns, social links, certifications, and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-slate-950 dark:bg-black text-white overflow-hidden"
      role="contentinfo"
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-eltek-500/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-eltek-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* ── Main footer body ── */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-slate-800"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Brand column */}
          <motion.div variants={fadeUpVariant} className="lg:col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group w-fit" aria-label="ElTek home">
              <div className="w-9 h-9 rounded-xl bg-eltek-500 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl">
                El<span className="text-eltek-400">Tek</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Empowering businesses with enterprise-grade IT solutions since 2012.
              Your trusted partner for digital transformation.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2" role="list" aria-label="Social media links">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  role="listitem"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-white bg-slate-900 hover:bg-eltek-500 border border-slate-800 hover:border-eltek-500 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium text-slate-400 border border-slate-700 bg-slate-900/50"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {NAV_COLUMNS.map((col) => (
            <motion.div key={col.title} variants={fadeUpVariant}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-150"
                    >
                      {label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-150" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-slate-500">
          <p>© {year} ElTek IT Solutions. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with precision in{" "}
            <span className="text-eltek-400 font-semibold">Baku, Azerbaijan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
