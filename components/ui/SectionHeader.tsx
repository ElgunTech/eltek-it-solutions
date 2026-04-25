"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <motion.div
      className={cn("flex flex-col gap-4 max-w-3xl", alignClass, className)}
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {eyebrow && (
        <motion.div variants={fadeUpVariant}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-widest uppercase bg-eltek-500/10 text-eltek-500 dark:text-eltek-400 border border-eltek-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-eltek-500 animate-pulse" />
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={fadeUpVariant}
        className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-slate-900 dark:text-white"
      >
        {title}{" "}
        {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUpVariant}
          className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
