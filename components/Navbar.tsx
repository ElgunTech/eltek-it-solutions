"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Xidmətlər", href: "#services" },
  { label: "Haqqımızda", href: "#about" },
  { label: "Niyə Biz?", href: "#why-us" },
  { label: "Əlaqə", href: "#contact" },
];
const JOIN_US_LINK = "https://forms.gle/X9voJbvsggq3GfCf6";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5,13,26,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="https://www.eltekdataloggers.co.uk/cdn/shop/files/eltek.png?v=1769206426&width=1500"
            alt="ElTek"
            className="h-8 w-auto brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={label}>
                <a
                  href={href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: isActive ? "#C9A84C" : "rgba(232,237,245,0.7)" }}
                  onMouseEnter={(e) => { if (!isActive) (e.target as HTMLElement).style.color = "#E8EDF5"; }}
                  onMouseLeave={(e) => { if (!isActive) (e.target as HTMLElement).style.color = "rgba(232,237,245,0.7)"; }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA + mobile */}
        <div className="flex items-center gap-3">
          <a
            href={JOIN_US_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-gold text-xs px-5 py-2.5"
          >
            Bizə Qoşulun
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
            style={{ background: "rgba(255,255,255,0.05)", color: "#E8EDF5" }}
            aria-label="Menyu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(5,13,26,0.98)", borderTop: "1px solid rgba(201,168,76,0.1)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150"
                  style={{ color: "rgba(232,237,245,0.8)" }}
                >
                  {label}
                </a>
              ))}
              <a
                href={JOIN_US_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="btn-gold mt-3 justify-center"
              >
                Bizə Qoşulun
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
