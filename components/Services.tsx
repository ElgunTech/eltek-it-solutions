"use client";

import { motion } from "framer-motion";
import {
  HeadphonesIcon,
  Network,
  ShieldCheck,
  Code2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  accent: string;
  accentBg: string;
}

const SERVICES: Service[] = [
  {
    icon: HeadphonesIcon,
    title: "IT Consulting & Support",
    description:
      "Strategic technology guidance and round-the-clock technical support, ensuring your systems run at peak performance while aligning IT with your business objectives.",
    features: ["24/7 Help Desk", "Strategic Roadmapping", "IT Audits", "SLA Guarantees"],
    accent: "text-eltek-500",
    accentBg: "bg-eltek-500/10",
  },
  {
    icon: Network,
    title: "Network & System Solutions",
    description:
      "Enterprise-grade infrastructure design, deployment, and management — from LAN/WAN to cloud-hybrid architectures built for reliability and scale.",
    features: ["Cloud Migration", "SD-WAN Setup", "Server Management", "Disaster Recovery"],
    accent: "text-cyan-500",
    accentBg: "bg-cyan-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Services",
    description:
      "Comprehensive security posture assessment and defense systems protecting your data, endpoints, and perimeter from evolving threats.",
    features: ["Penetration Testing", "SOC Monitoring", "Compliance (ISO/GDPR)", "Zero-Trust Architecture"],
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500/10",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "End-to-end software engineering — from concept and design to deployment and maintenance — tailored precisely to your workflow and growth goals.",
    features: ["Web & Mobile Apps", "API Integration", "ERP / CRM Systems", "DevOps & CI/CD"],
    accent: "text-purple-500",
    accentBg: "bg-purple-500/10",
  },
];

/* ── Single service card ── */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.article
      variants={fadeUpVariant}
      custom={index}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative flex flex-col gap-5 p-7 rounded-3xl
                 bg-white dark:bg-slate-900
                 border border-slate-200/80 dark:border-slate-800
                 hover:border-eltek-500/40 dark:hover:border-eltek-500/30
                 shadow-sm hover:shadow-glow
                 transition-all duration-300"
    >
      {/* Hover shimmer */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer pointer-events-none" />

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-2xl ${service.accentBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className={`w-6 h-6 ${service.accent}`} strokeWidth={1.75} />
      </div>

      {/* Copy */}
      <div className="flex flex-col gap-2">
        <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white">
          {service.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Feature list */}
      <ul className="flex flex-col gap-2 mt-auto" role="list">
        {service.features.map((feat) => (
          <li key={feat} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <span className={`w-1.5 h-1.5 rounded-full ${service.accentBg.replace('/10', '')} flex-shrink-0`} />
            {feat}
          </li>
        ))}
      </ul>

      {/* Learn more link */}
      <div className={`flex items-center gap-1 text-xs font-semibold ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        Learn more <ArrowUpRight className="w-3.5 h-3.5" />
      </div>
    </motion.article>
  );
}

/**
 * Services section — showcases the four core service offerings.
 */
export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative section-padding bg-slate-50/50 dark:bg-slate-900/40"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-16">
          <SectionHeader
            eyebrow="What We Do"
            title="Comprehensive IT"
            titleHighlight="Services"
            description="From securing your infrastructure to building your next product — ElTek delivers end-to-end technology solutions that scale with your ambition."
           
          />
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
