"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users, Award } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

const PILLARS = [
  {
    icon: Target,
    label: "Missiyamız",
    text: "Hər ölçüdə olan təşkilatları etibarlı, innovativ və təhlükəsiz texnoloji həllərlə gücləndirmək — ölçülə bilən nəticələr və davamlı inkişaf üçün.",
  },
  {
    icon: Eye,
    label: "Vizyonumuz",
    text: "Bölgənin ən etibarlı texnologiya tərəfdaşı olmaq — mühəndislik mükəmməlliyi ilə insan mərkəzli dizaynın birləşdiyi, daha yaxşı rəqəmsal gələcəyi şəkilləndirən şirkət.",
  },
];

const STATS = [
  { icon: Users, value: "200+", label: "Korporativ Müştəri" },
  { icon: Award, value: "98%", label: "Müştəri Məmnuniyyəti" },
  { icon: Users, value: "50+", label: "Sertifikatlı Mütəxəssis" },
  { icon: Award, value: "10+", label: "İllik Təcrübə" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-eltek-500/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sol – mətn */}
          <motion.div
            className="flex flex-col gap-10"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionHeader
              eyebrow="Haqqımızda"
              title="Etibar üzərində qurulmuş,"
              titleHighlight="İnnovasiya ilə idarə olunan"
              description="ElTek müasir bizneslərin texnoloji problemlərini həll etmək üçün yaradılmış Azərbaycanın aparıcı IT şirkətidir. Bizi seçən müəssisələr yalnız texniki xidmət deyil, etibarlı bir tərəfdaş qazanır."
              align="left"
            />

            {/* Missiya/Vizyon kartları */}
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
                    <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-white mb-1">{label}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Şəkil */}
            <motion.div variants={fadeUpVariant} className="relative rounded-3xl overflow-hidden h-52">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
                alt="ElTek komandası işdə"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-eltek-900/60 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-display font-bold text-lg">Peşəkar Komandamız</p>
                  <p className="text-eltek-200 text-sm mt-1">Mühəndislər, arxitektlər və təhlükəsizlik analitikləri</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sağ – statistikalar */}
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
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 0 ? "bg-white/20" : "bg-eltek-500/10"}`}>
                  <Icon className={`w-5 h-5 ${i === 0 ? "text-white" : "text-eltek-500"}`} strokeWidth={1.75} />
                </div>
                <div>
                  <p className={`font-display font-bold text-3xl leading-none ${i === 0 ? "text-white" : "text-slate-900 dark:text-white"}`}>{value}</p>
                  <p className={`text-sm mt-1 ${i === 0 ? "text-eltek-100" : "text-slate-500 dark:text-slate-400"}`}>{label}</p>
                </div>
              </motion.div>
            ))}

            {/* Texnologiya banneri */}
            <motion.div
              variants={fadeUpVariant}
              className="col-span-2 relative rounded-3xl overflow-hidden h-48"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop"
                alt="Texnologiya infrastrukturu"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 flex items-center p-6 gap-4">
                <div className="flex -space-x-2">
                  {["#3370ff", "#00d4ff", "#7b6eff", "#10b981"].map((color) => (
                    <div key={color} className="w-8 h-8 rounded-full border-2 border-slate-800 flex items-center justify-center" style={{ backgroundColor: `${color}30`, borderColor: `${color}60` }}>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Çoxsahəli komanda</p>
                  <p className="text-xs text-slate-400">Mühəndislər, arxitektlər və analitiklər</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
