"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, TrendingUp, Headphones, CheckCircle2 } from "lucide-react";

const ADVANTAGES = [
  { icon: Zap, title: "Sürətli Çatdırılma", description: "Çevik metodologiyalar ilə keyfiyyətdən ödün vermədən vaxtında çatdırılma.", color: "#F59E0B" },
  { icon: ShieldCheck, title: "Təhlükəsizlik Prioritetdir", description: "ISO 27001 standartlarına uyğun həllər. Təhlükəsizlik arxitekturanın özündədir.", color: "#10B981" },
  { icon: Clock, title: "99.9% Uptime Zəmanəti", description: "Proaktiv monitorinq və ehtiyatlı infrastruktur — sistemlər həmişə işlək qalır.", color: "#1E6EFF" },
  { icon: TrendingUp, title: "Genişlənə Bilən Dizayn", description: "Startapdan korporasiyaya böyüyən həllər — bahalı yenidən yazma olmadan.", color: "#8B5CF6" },
  { icon: Headphones, title: "Fərdi Dəstək Komandası", description: "Şəxsi hesab menecerləri və 7/24 texniki dəstək — həmişə yanınızdayıq.", color: "#06B6D4" },
  { icon: CheckCircle2, title: "Şəffaf Tərəfdaşlıq", description: "Aydın müqavilələr, dürüst qiymətlər — layihənizin gedişatını həmişə bilirsiniz.", color: "#C9A84C" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative section overflow-hidden" style={{ background: "var(--navy-2)" }}>
      {/* Background accent */}
      <div
        className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(30,110,255,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "#C9A84C" }}
          >
            — Niyə ElTek?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight"
            style={{ color: "#E8EDF5" }}
          >
            Doğru Tərəfdaşı<br />
            <span className="gold-text">Seçməyin Üstünlükləri</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base mt-4 max-w-xl mx-auto"
            style={{ color: "rgba(232,237,245,0.55)" }}
          >
            Texniki dərinliyi həqiqi tərəfdaşlıqla birləşdiririk — real fərq yaradan kombinasiya.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {ADVANTAGES.map(({ icon: Icon, title, description, color }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: `0 10px 24px ${color}10`,
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}
              >
                <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.75} />
              </div>

              <h3 className="font-display font-semibold text-base mb-2" style={{ color: "#E8EDF5" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(232,237,245,0.55)" }}>{description}</p>
            </motion.article>
          ))}
        </div>

        {/* CTA strip with image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80&auto=format&fit=crop"
            alt="Müasir ofis"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-12"
            style={{ background: "linear-gradient(135deg, rgba(5,13,26,0.92) 0%, rgba(5,13,26,0.7) 100%)" }}
          >
            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-2xl md:text-3xl" style={{ color: "#E8EDF5" }}>
                IT infrastrukturunuzu modernləşdirməyə hazırsınız?
              </h3>
              <p className="mt-2 text-sm" style={{ color: "rgba(232,237,245,0.6)" }}>
                Pulsuz 30 dəqiqəlik strategiya sessiyasında hədəflərinizi müzakirə edək.
              </p>
            </div>
            <a href="#contact" className="btn-gold flex-shrink-0 whitespace-nowrap">
              Pulsuz Konsultasiya Al
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
