"use client";

import { motion } from "framer-motion";
import { HeadphonesIcon, Network, ShieldCheck, Code2, ArrowUpRight, type LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  accent: string;
}

const SERVICES: Service[] = [
  {
    icon: HeadphonesIcon,
    number: "01",
    title: "IT Konsaltinq və Dəstək",
    description: "Strateji texnologiya rəhbərliyi və 7/24 texniki dəstək. Sistemləriniz daim optimal işləsin, IT hədəfləriniz biznes məqsədlərinizlə uyğunlaşsın.",
    features: ["7/24 Texniki Dəstək", "Strateji Planlaşdırma", "IT Audit", "SLA Zəmanəti"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format&fit=crop",
    accent: "#1E6EFF",
  },
  {
    icon: Network,
    number: "02",
    title: "Şəbəkə və Sistem Həlləri",
    description: "Korporativ infrastrukturun dizaynı, qurulması və idarəsi. LAN/WAN-dan hibrid bulud arxitekturalarına qədər etibarlı həllər.",
    features: ["Bulud Miqrasiyası", "SD-WAN Qurulumu", "Server İdarəetməsi", "Fövqəladə Bərpa"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop",
    accent: "#C9A84C",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Kibertəhlükəsizlik",
    description: "Hərtərəfli təhlükəsizlik qiymətləndirilməsi və müdafiə sistemləri. Məlumatlarınızı müasir təhdidlərdən qoruyuruq.",
    features: ["Penetrasiya Testi", "SOC Monitorinqi", "ISO/GDPR Uyğunluğu", "Zero-Trust Arxitektura"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80&auto=format&fit=crop",
    accent: "#10B981",
  },
  {
    icon: Code2,
    number: "04",
    title: "Fərdi Proqram Təminatı",
    description: "Konsepsiyadan tətbiqə qədər tam proqram mühəndisliyi. İş axınınıza uyğun hazırlanmış web, mobil və korporativ həllər.",
    features: ["Web və Mobil Tətbiqlər", "API İnteqrasiyası", "ERP / CRM Sistemləri", "DevOps və CI/CD"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80&auto=format&fit=crop",
    accent: "#8B5CF6",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        boxShadow: `0 10px 24px ${service.accent}10`,
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 20%, ${service.accent}20 60%, rgba(5,13,26,0.95) 100%)` }} />

        {/* Number */}
        <div className="absolute top-4 right-4 font-display font-bold text-4xl" style={{ color: `${service.accent}30`, lineHeight: 1 }}>
          {service.number}
        </div>

        {/* Icon badge */}
        <div
          className="absolute bottom-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: `${service.accent}20`, border: `1px solid ${service.accent}40`, backdropFilter: "blur(10px)" }}
        >
          <Icon className="w-5 h-5" style={{ color: service.accent }} strokeWidth={1.75} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <h3 className="font-display font-semibold text-lg" style={{ color: "#E8EDF5" }}>{service.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(232,237,245,0.55)" }}>{service.description}</p>

        <ul className="flex flex-col gap-2 mt-auto">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2 text-xs" style={{ color: "rgba(232,237,245,0.6)" }}>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.accent }} />
              {feat}
            </li>
          ))}
        </ul>

        <div
          className="flex items-center gap-1 text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: service.accent }}
        >
          Ətraflı <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative section" style={{ background: "var(--navy-2)" }}>
      <div className="dot-pattern absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#C9A84C" }}>
              — Nə Edirik
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: "#E8EDF5" }}>
              Hərtərəfli IT<br />
              <span className="gold-text">Xidmətləri</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base max-w-sm leading-relaxed"
            style={{ color: "rgba(232,237,245,0.55)" }}
          >
            İnfrastrukturunuzu qorumaqdan növbəti məhsulunuzu yaratmağa qədər —
            ambisiyalarınızla böyüyən texnoloji həllər.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
