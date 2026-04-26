import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Home page – assembles all major sections in order.
 * Each section is a self-contained component with its own animations.
 */
export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* ─── Navigation ─── */}
      <Navbar />

      {/* ─── Sections ──── */}
      <div className="pt-20">
        <Hero />
      </div>

      <div className="border-t border-white/5">
        <Services />
      </div>
      <div className="border-t border-white/5">
        <About />
      </div>
      <div className="border-t border-white/5">
        <WhyChooseUs />
      </div>
      <div className="border-t border-white/5">
        <Contact />
      </div>

      {/* ─── Footer ────── */}
      <Footer />
    </main>
  );
}
