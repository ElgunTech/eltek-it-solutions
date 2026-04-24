"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@eltek.solutions",
    href: "mailto:hello@eltek.solutions",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+994 12 555 0100",
    href: "tel:+994125550100",
  },
  {
    icon: MapPin,
    label: "Find Us",
    value: "Baku, Azerbaijan",
    href: "#",
  },
];

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

/**
 * Contact section with a form and contact details.
 * Form simulates submission with a loading + success state.
 */
export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  /* ── Validation ── */
  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  /* ── Submit handler ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    // Simulate API call — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /* ── Input style helper ── */
  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-2xl text-sm bg-slate-50 dark:bg-slate-800/60
     border transition-all duration-200 outline-none placeholder:text-slate-400
     text-slate-900 dark:text-white
     ${
       errors[field]
         ? "border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
         : "border-slate-200 dark:border-slate-700 focus:border-eltek-500 focus:ring-1 focus:ring-eltek-500/30"
     }`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative section-padding overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute -right-40 top-0 w-[500px] h-[500px] rounded-full bg-eltek-500/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute grid-bg inset-0 opacity-40"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-16">
          <SectionHeader
            eyebrow="Let's Talk"
            title="Start Your Digital"
            titleHighlight="Transformation"
            description="Tell us about your project or challenge — our experts will get back to you within one business day with tailored insights."
            
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* ── Contact info column ── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={fadeUpVariant} className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Whether you need a quick consultation or are ready to kick off a
              full-scale transformation, ElTek is here to partner with you
              every step of the way.
            </motion.p>

            {/* Contact cards */}
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                variants={fadeUpVariant}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-eltek-500/40 hover:shadow-glow-sm transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-eltek-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-eltek-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-eltek-500" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{label}</p>
                  <p className="text-sm text-slate-900 dark:text-white font-semibold mt-0.5">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Availability badge */}
            <motion.div
              variants={fadeUpVariant}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                We&apos;re currently accepting new projects
              </p>
            </motion.div>
          </motion.div>

          {/* ── Form column ── */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              {/* Success state */}
              {status === "success" ? (
                <motion.div
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                      Message Sent!
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xs">
                      Thank you for reaching out. Our team will be in touch within one business day.
                    </p>
                  </div>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", message: "" }); }}
                    className="mt-2 text-xs text-eltek-500 hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={inputClass("name")}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-rose-500" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={inputClass("email")}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-rose-500" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    <label htmlFor="company" className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      Company <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      autoComplete="organization"
                      className={inputClass("company")}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 mb-6">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, or challenges…"
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`${inputClass("message")} resize-none`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-rose-500" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-display font-semibold text-sm text-white bg-eltek-500 hover:bg-eltek-600 shadow-glow-sm hover:shadow-glow transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-xs text-slate-400">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
