"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
const JOIN_US_LINK = "https://forms.gle/X9voJbvsggq3GfCf6";

const STATS = [
  { value: "500+", label: "Tamamlanan Layihə" },
  { value: "200+", label: "Korporativ Müştəri" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "10+", label: "İllik Təcrübə" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />

      {/* Radial glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(30,110,255,0.08) 0%, rgba(201,168,76,0.04) 40%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? "#C9A84C" : "#1E6EFF",
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 20}%`,
            opacity: 0.4,
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center text-center gap-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-4"
        >
          {/* Logo large */}
          <div className="flex justify-center mb-2">
            <img
              src="https://www.eltekdataloggers.co.uk/cdn/shop/files/eltek.png?v=1769206426&width=1500"
              alt="ElTek"
              className="h-16 md:h-20 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight" style={{ color: "#E8EDF5" }}>
            Rəqəmsal Gələcəyiniz üçün{" "}
            <br className="hidden md:block" />
            <span className="gold-text">İnnovativ IT Həlləri</span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl leading-relaxed"
          style={{ color: "rgba(232,237,245,0.6)" }}
        >
          Kibertəhlükəsizlikdən fərdi proqram həllərinə qədər — ElTek müəssisənizi
          müasir texnologiyalarla gücləndirir və rəqəmsal transformasiyanızı sürətləndirir.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-gold">
            Pulsuz Konsultasiya Al
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#services" className="btn-outline">
            Xidmətlərimizə Bax
          </a>
          <a href={JOIN_US_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Bizə Qoşulun
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-8 w-full max-w-3xl"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            >
              <span className="font-display font-bold text-2xl md:text-3xl gold-text">{value}</span>
              <span className="text-xs text-center" style={{ color: "rgba(232,237,245,0.5)" }}>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Aşağı dayan"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.5)" }}>Kəşfet</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" style={{ color: "#C9A84C" }} />
        </motion.div>
      </motion.a>
    </section>
  );
}
