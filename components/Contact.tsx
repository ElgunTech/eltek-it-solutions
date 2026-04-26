"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle2, Loader2, MessageCircle } from "lucide-react";

const PHONE = "+994993356909";
const PHONE_DISPLAY = "+994 99 335 69 09";

const CONTACT_INFO = [
  { icon: Phone, label: "Zəng Et", value: PHONE_DISPLAY, sub: "Birbaşa zəng", href: `tel:${PHONE}`, color: "#1E6EFF" },
  { icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, sub: "Mesaj göndər", href: `https://wa.me/${PHONE}`, color: "#25D366" },
  { icon: Mail, label: "E-poçt", value: "info@eltek.az", sub: "24 saat ərzində cavab", href: "mailto:info@eltek.az", color: "#C9A84C" },
  { icon: MapPin, label: "Ünvan", value: "Bakı, Azərbaycan", sub: "Ofisimizə gəlin", href: "#", color: "#8B5CF6" },
];

type FormState = { name: string; email: string; company: string; message: string };
type Status = "idle" | "loading" | "success";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Ad tələb olunur";
    if (!form.email.trim()) errs.email = "E-poçt tələb olunur";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Düzgün e-poçt daxil edin";
    if (!form.message.trim()) errs.message = "Mesaj tələb olunur";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const inputStyle = (field: keyof FormState) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    fontSize: "14px",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${errors[field] ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"}`,
    color: "#E8EDF5",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'DM Sans', sans-serif",
  });

  return (
    <section id="contact" className="relative section overflow-hidden" style={{ background: "var(--navy)" }}>
      <div className="grid-pattern absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-medium tracking-widest uppercase" style={{ color: "#C9A84C" }}>
            — Əlaqə
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight" style={{ color: "#E8EDF5" }}>
            Rəqəmsal Transformasiyanıza<br />
            <span className="gold-text">Başlayın</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <p className="text-sm leading-relaxed mb-2" style={{ color: "rgba(232,237,245,0.55)" }}>
              Sürətli konsultasiyadan tam miqyaslı transformasiyaya qədər — ElTek hər addımda yanınızdadır.
            </p>

            {CONTACT_INFO.map(({ icon: Icon, label, value, sub, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center gap-4 p-4 rounded-2xl group transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${color}35`;
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon className="w-4.5 h-4.5" style={{ color }} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: "rgba(232,237,245,0.45)" }}>{label}</p>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: "#E8EDF5" }}>{value}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(232,237,245,0.4)" }}>{sub}</p>
                </div>
              </motion.a>
            ))}

            {/* Status badge */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#10B981" }} />
              <p className="text-xs font-medium" style={{ color: "#10B981" }}>Hazırda yeni layihələr qəbul edirik</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-3xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)" }}>
                    <CheckCircle2 className="w-8 h-8" style={{ color: "#10B981" }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl" style={{ color: "#E8EDF5" }}>Mesaj Göndərildi!</h3>
                    <p className="text-sm mt-2" style={{ color: "rgba(232,237,245,0.55)" }}>Komandamız 1 iş günü ərzində sizinlə əlaqə saxlayacaq.</p>
                  </div>
                  <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", message: "" }); }} className="text-xs mt-2" style={{ color: "#C9A84C" }}>
                    Yeni mesaj göndər
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium" style={{ color: "rgba(232,237,245,0.5)" }}>Ad Soyad <span style={{ color: "#ef4444" }}>*</span></label>
                      <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Elçin Əliyev" style={inputStyle("name")}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#C9A84C"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = errors.name ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"; }}
                      />
                      {errors.name && <p className="text-xs" style={{ color: "#ef4444" }}>{errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium" style={{ color: "rgba(232,237,245,0.5)" }}>E-poçt <span style={{ color: "#ef4444" }}>*</span></label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="elcin@sirket.az" style={inputStyle("email")}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#C9A84C"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = errors.email ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"; }}
                      />
                      {errors.email && <p className="text-xs" style={{ color: "#ef4444" }}>{errors.email}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 mb-4">
                    <label className="text-xs font-medium" style={{ color: "rgba(232,237,245,0.5)" }}>Şirkət <span style={{ color: "rgba(232,237,245,0.35)" }}>(ixtiyari)</span></label>
                    <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Şirkət MMC" style={inputStyle("company")}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#C9A84C"; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 mb-6">
                    <label className="text-xs font-medium" style={{ color: "rgba(232,237,245,0.5)" }}>Mesaj <span style={{ color: "#ef4444" }}>*</span></label>
                    <textarea name="message" rows={5} value={form.message} onChange={handleChange}
                      placeholder="Layihəniz, hədəfləriniz və ya problemlər haqqında yazın…"
                      style={{ ...inputStyle("message"), resize: "none" }}
                      onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "#C9A84C"; }}
                      onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = errors.message ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"; }}
                    />
                    {errors.message && <p className="text-xs" style={{ color: "#ef4444" }}>{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={status === "loading"} className="btn-gold w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" />Göndərilir…</> : <>Mesaj Göndər <Send className="w-4 h-4" /></>}
                  </button>

                  <p className="mt-4 text-center text-xs" style={{ color: "rgba(232,237,245,0.35)" }}>Məxfiliyinizə hörmət edirik. Spam yoxdur.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
