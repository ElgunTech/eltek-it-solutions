"use client";

import { motion } from "framer-motion";
import { Target, Eye, CheckCircle } from "lucide-react";

const STATS = [
  { value: "200+", label: "Korporativ Müştəri" },
  { value: "98%", label: "Məmnuniyyət Faizi" },
  { value: "50+", label: "Sertifikatlı Mütəxəssis" },
  { value: "10+", label: "İllik Təcrübə" },
];

const VALUES = [
  "Müştəri mərkəzli yanaşma",
  "Şəffaf ünsiyyət",
  "Texniki üstünlük",
  "Vaxtında çatdırılma",
  "Davamlı dəstək",
  "Innovativ həllər",
];

export default function About() {
  return (
    <section id="about" className="relative section overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Decorative */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left – visuals */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
                alt="ElTek komandası"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,13,26,0.6) 0%, transparent 60%)" }} />

              {/* Overlay badge */}
              <div
                className="absolute bottom-6 left-6 px-5 py-4 rounded-xl"
                style={{ background: "rgba(5,13,26,0.9)", border: "1px solid rgba(201,168,76,0.2)", backdropFilter: "blur(12px)" }}
              >
                <p className="font-display font-bold text-2xl gold-text">10+ İl</p>
                <p className="text-xs mt-1" style={{ color: "rgba(232,237,245,0.6)" }}>Azərbaycanda IT Liderliyi</p>
              </div>
            </div>

            {/* Second image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mt-4 rounded-2xl overflow-hidden h-40"
              style={{ border: "1px solid rgba(30,110,255,0.15)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop"
                alt="Texnologiya infrastrukturu"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: "rgba(5,13,26,0.5)" }} />
            </motion.div>

            {/* Stats overlay */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="p-4 rounded-xl text-center"
                  style={{
                    background: i === 0 ? "rgba(201,168,76,0.1)" : "rgba(255,255,255,0.03)",
                    border: i === 0 ? "1px solid rgba(201,168,76,0.25)" : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className={`font-display font-bold text-2xl ${i === 0 ? "gold-text" : ""}`} style={{ color: i === 0 ? undefined : "#E8EDF5" }}>{value}</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(232,237,245,0.5)" }}>{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#C9A84C" }}>— Haqqımızda</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: "#E8EDF5" }}>
                Etibar üzərində qurulmuş,{" "}
                <span className="gold-text">İnnovasiya ilə idarə olunan</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(232,237,245,0.6)" }}>
                ElTek Azərbaycanın aparıcı IT şirkətidir. Bizi seçən müəssisələr yalnız texniki xidmət deyil,
                etibarlı bir tərəfdaş qazanır. Hər layihədə müştərinin uğurunu öz uğurumuz kimi qəbul edirik.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Target,
                  label: "Missiyamız",
                  text: "Hər ölçüdə olan təşkilatları etibarlı, innovativ və təhlükəsiz texnoloji həllərlə gücləndirmək.",
                  color: "#1E6EFF",
                },
                {
                  icon: Eye,
                  label: "Vizyonumuz",
                  text: "Bölgənin ən etibarlı texnologiya tərəfdaşı olmaq — mühəndislik mükəmməlliyi ilə insan mərkəzli dizaynın birləşdiyi şirkət.",
                  color: "#C9A84C",
                },
              ].map(({ icon: Icon, label, text, color }) => (
                <div
                  key={label}
                  className="flex gap-4 p-5 rounded-2xl transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm mb-1" style={{ color: "#E8EDF5" }}>{label}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(232,237,245,0.55)" }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium tracking-widest uppercase" style={{ color: "rgba(232,237,245,0.4)" }}>Dəyərlərimiz</p>
              <div className="grid grid-cols-2 gap-2">
                {VALUES.map((val) => (
                  <div key={val} className="flex items-center gap-2 text-sm" style={{ color: "rgba(232,237,245,0.7)" }}>
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
                    {val}
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact" className="btn-gold self-start">
              Bizimlə Əlaqə Saxla
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
