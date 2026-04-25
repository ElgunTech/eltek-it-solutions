"use client";

import { motion } from "framer-motion";
import {
  HeadphonesIcon, Network, ShieldCheck, Code2, ArrowUpRight, type LucideIcon,
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
  image: string;
}

const SERVICES: Service[] = [
  {
    icon: HeadphonesIcon,
    title: "IT Konsaltinq və Dəstək",
    description:
      "Strateji texnologiya rəhbərliyi və gündəlik texniki dəstək — sistemləriniz daim optimal işləsin, IT hədəfləriniz biznes məqsədlərinizlə uyğunlaşsın.",
    features: ["7/24 Texniki Dəstək", "Strateji Planlaşdırma", "IT Audit", "SLA Zəmanəti"],
    accent: "text-eltek-500",
    accentBg: "bg-eltek-500/10",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80&auto=format&fit=crop",
  },
  {
    icon: Network,
    title: "Şəbəkə və Sistem Həlləri",
    description:
      "Korporativ səviyyəli infrastrukturun dizaynı, qurulması və idarəsi — LAN/WAN-dan hibrid bulud arxitekturalarına qədər etibarlı həllər.",
    features: ["Bulud Miqrasiyası", "SD-WAN Qurulumu", "Server İdarəetməsi", "Fövqəladə Bərpa"],
    accent: "text-cyan-500",
    accentBg: "bg-cyan-500/10",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80&auto=format&fit=crop",
  },
  {
    icon: ShieldCheck,
    title: "Kibertəhlükəsizlik Xidmətləri",
    description:
      "Hərtərəfli təhlükəsizlik qiymətləndirilməsi və müdafiə sistemləri — məlumatlarınızı, endpointlərinizi və perimetrinizi müasir təhdidlərdən qoruyur.",
    features: ["Penetrasiya Testi", "SOC Monitorinqi", "ISO/GDPR Uyğunluğu", "Zero-Trust Arxitektura"],
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500/10",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&q=80&auto=format&fit=crop",
  },
  {
    icon: Code2,
    title: "Fərdi Proqram Təminatı",
    description:
      "Konsepsiyadan tətbiqə qədər tam proqram mühəndisliyi — iş axınınıza və böyümə hədəflərinizə uyğun hazırlanmış həllər.",
    features: ["Web və Mobil Tətbiqlər", "API İnteqrasiyası", "ERP / CRM Sistemləri", "DevOps və CI/CD"],
    accent: "text-purple-500",
    accentBg: "bg-purple-500/10",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80&auto=format&fit=crop",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.article
      variants={fadeUpVariant}
      custom={index}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative flex flex-col rounded-3xl overflow-hidden
                 bg-white dark:bg-slate-900
                 border border-slate-200/80 dark:border-slate-800
                 hover:border-eltek-500/40 dark:hover:border-eltek-500/30
                 shadow-sm hover:shadow-glow transition-all duration-300"
    >
      {/* Şəkil */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className={`absolute bottom-3 left-4 w-10 h-10 rounded-xl ${service.accentBg} backdrop-blur-sm flex items-center justify-center border border-white/20`}>
          <Icon className={`w-5 h-5 ${service.accent}`} strokeWidth={1.75} />
        </div>
      </div>

      {/* Məzmun */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex flex-col gap-2">
          <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
            {service.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {service.description}
          </p>
        </div>

        <ul className="flex flex-col gap-2 mt-auto" role="list">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${service.accent.replace("text-", "bg-")}`} />
              {feat}
            </li>
          ))}
        </ul>

        <div className={`flex items-center gap-1 text-xs font-semibold ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
          Ətraflı <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative section-padding bg-slate-50/50 dark:bg-slate-900/40"
    >
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex justify-center mb-16">
          <SectionHeader
            eyebrow="Nə Edirik"
            title="Hərtərəfli IT"
            titleHighlight="Xidmətləri"
            description="İnfrastrukturunuzu qorumaqdan tutmuş növbəti məhsulunuzu yaratmağa qədər — ElTek ambisiyalarınızla böyüyən texnoloji həllər təqdim edir."
          />
        </div>

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
