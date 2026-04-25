"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, TrendingUp, Headphones, CheckCircle2 } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

const ADVANTAGES = [
  {
    icon: Zap,
    title: "Sürətli Çatdırılma",
    description: "Çevik metodologiyalar və sınaqdan keçmiş proseslər sayəsində keyfiyyətdən ödün vermədən vaxtında çatdırılma.",
    color: "amber",
  },
  {
    icon: ShieldCheck,
    title: "Təhlükəsizlik Prioritetdir",
    description: "Qurduğumuz hər həll ISO 27001 standartlarına uyğundur. Təhlükəsizlik heç vaxt əlavə düşünülmür — arxitekturanın özündədir.",
    color: "emerald",
  },
  {
    icon: Clock,
    title: "99.9% Uptime Zəmanəti",
    description: "Proaktiv monitorinq və ehtiyatlı infrastruktur — sistemləriniz ən vacib anlarda işlək qalır.",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Genişlənə Bilən Dizayn",
    description: "Startapdan korporasiyaya qədər böyüyən həllər qururuq — bahalı yenidən yazma və ya miqrasiya olmadan.",
    color: "purple",
  },
  {
    icon: Headphones,
    title: "Fərdi Dəstək Komandası",
    description: "Şəxsi hesab menecerləri və 7/24 texniki dəstək — ehtiyac duyanda həmişə yanınızdayıq.",
    color: "cyan",
  },
  {
    icon: CheckCircle2,
    title: "Şəffaf Tərəfdaşlıq",
    description: "Aydın müqavilələr, dürüst qiymətlər, mütəmadi hesabatlar. Layihənizin gedişatını həmişə bilirsiniz.",
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

function AdvantageCard({ advantage, index }: { advantage: (typeof ADVANTAGES)[0]; index: number }) {
  const Icon = advantage.icon;
  const colors = colorMap[advantage.color];
  return (
    <motion.article
      variants={fadeUpVariant}
      custom={index}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      className="group flex flex-col gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:shadow-glow-sm hover:border-eltek-500/30 transition-all duration-300"
    >
      <div className={`w-11 h-11 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-5 h-5 ${colors.icon}`} strokeWidth={1.75} />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white">{advantage.title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{advantage.description}</p>
      </div>
    </motion.article>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-title"
      className="relative section-padding bg-slate-50/50 dark:bg-slate-900/40 overflow-hidden"
    >
      <div className="absolute left-0 bottom-0 w-[600px] h-[400px] rounded-full bg-eltek-500/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex justify-center mb-16">
          <SectionHeader
            eyebrow="Niyə ElTek?"
            title="Doğru Tərəfdaşı"
            titleHighlight="Seçməyin Üstünlükləri"
            description="Yüzlərlə şirkət ElTek-ə inanır, çünki texniki dərinliyi həqiqi tərəfdaşlıqla birləşdiririk — real fərq yaradan nadir kombinasiya."
          />
        </div>

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

        {/* CTA bölməsi */}
        <motion.div
          className="mt-16 relative rounded-3xl overflow-hidden"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop"
            alt="Müasir ofis mühiti"
            className="w-full h-56 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-eltek-900/90 via-eltek-800/80 to-eltek-700/70 flex flex-col sm:flex-row items-center justify-between gap-6 p-8">
            <div className="text-center sm:text-left">
              <h3 className="font-display font-bold text-xl text-white">
                IT infrastrukturunuzu modernləşdirməyə hazırsınız?
              </h3>
              <p className="text-eltek-200 text-sm mt-1">
                Pulsuz 30 dəqiqəlik strategiya sessiyasında hədəflərinizi müzakirə edək.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-display font-semibold text-sm text-eltek-600 bg-white hover:bg-eltek-50 shadow-sm transition-all duration-200 active:scale-[0.97]"
            >
              Pulsuz Konsultasiya Al
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
