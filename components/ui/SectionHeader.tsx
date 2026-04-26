"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeader({ eyebrow, title, titleHighlight, description, align = "center", className }: SectionHeaderProps) {
  const alignClass = { left: "items-start text-left", center: "items-center text-center", right: "items-end text-right" }[align];
  return (
    <div className={`flex flex-col gap-4 max-w-3xl ${alignClass} ${className || ""}`}>
      {eyebrow && (
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-medium tracking-widest uppercase" style={{ color: "#C9A84C" }}>
          — {eyebrow}
        </motion.span>
      )}
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: "#E8EDF5" }}>
        {title} {titleHighlight && <span className="gold-text">{titleHighlight}</span>}
      </motion.h2>
      {description && (
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-base leading-relaxed" style={{ color: "rgba(232,237,245,0.55)" }}>
          {description}
        </motion.p>
      )}
    </div>
  );
}
