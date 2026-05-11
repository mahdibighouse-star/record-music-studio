import { motion } from "motion/react";
import { ArrowRight, Globe } from "lucide-react";
import { AnimatedLetterText } from "./AnimatedLetterText";

export function AboutHayce() {
  return (
    <section
      id="studio"
      className="py-28 md:py-36 px-4 md:px-6 bg-brand-bg text-white relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-brand-accent/15 blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-accent font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              L'homme derrière le studio
            </motion.div>
            <AnimatedLetterText
              text="Hayce Lemsi"
              el="h2"
              className="block text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[0.95]"
            />
            <AnimatedLetterText
              text="& sa vision"
              el="h2"
              className="block text-5xl md:text-6xl lg:text-7xl font-serif italic font-light text-white/80 leading-[0.95] mt-2"
              delay={0.3}
            />
          </div>

          <div className="flex items-center gap-3">
            {["X", "in", "IG"].map((s, i) => (
              <a
                key={i}
                href="#"
                className={`w-11 h-11 rounded-full flex items-center justify-center border border-white/15 text-white/80 text-sm hover:bg-brand-accent hover:border-brand-accent transition-colors ${
                  i === 1 ? "bg-white text-brand-bg" : ""
                }`}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Content split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5] relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1800&auto=format&fit=crop"
                alt="Hayce Lemsi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/40 via-transparent to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-bg/60" />
            </div>
          </motion.div>

          {/* Copy + cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-white/75 text-base md:text-lg font-light leading-relaxed max-w-xl"
            >
              <p>
                Au Record Music Studio, on accompagne les artistes qui veulent
                plus qu'une simple session : une vraie direction vocale, un
                regard artistique, une structure de morceau et une stratégie
                pour transformer une idée en morceau solide.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Globe size={16} className="text-brand-accent" />
                <span className="text-white/60 text-sm">
                  100+ artistes accompagnés · 12 pays
                </span>
                <div className="flex -space-x-2 ml-2">
                  {[
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=120&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120&auto=format&fit=crop",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-6 h-6 rounded-full border-2 border-brand-bg object-cover"
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1 — trusted artists */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-brand-card/80 border border-white/10 rounded-2xl p-7"
              >
                <div className="text-5xl font-serif font-bold text-white">
                  400+
                </div>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-2">
                  Sessions livrées
                </p>
                <div className="mt-6 grid grid-cols-3 gap-2 opacity-70">
                  {["Lemsi", "Soprano", "Sinik", "Tunisiano", "BMG", "UMG"].map(
                    (b) => (
                      <span
                        key={b}
                        className="text-[10px] tracking-widest text-white/60 text-center"
                      >
                        {b}
                      </span>
                    )
                  )}
                </div>
                <a
                  href="#contact"
                  className="mt-6 block w-full text-center bg-brand-accent hover:bg-white hover:text-brand-bg text-white font-medium text-sm py-3 rounded-full transition-colors"
                >
                  Book a call
                </a>
              </motion.div>

              {/* Card 2 — projects/fact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-brand-card via-[#2a1145] to-brand-accent/40 border border-brand-accent/30 rounded-2xl p-7 relative overflow-hidden"
              >
                <div className="flex items-center justify-between text-xs text-white/70 uppercase tracking-widest">
                  <span>RMS Fact</span>
                  <span>01/04</span>
                </div>
                <div className="text-5xl md:text-6xl font-serif font-bold text-white mt-10">
                  230+
                </div>
                <p className="text-white/70 text-xs uppercase tracking-widest mt-2 max-w-[180px]">
                  Projets sortis avec succès
                </p>
                <ArrowRight
                  size={20}
                  className="absolute bottom-6 right-6 text-white/80"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
