import { motion } from "motion/react";
import { ArrowRight, ArrowDown, Globe } from "lucide-react";
import { AnimatedLetterText } from "./AnimatedLetterText";

const partners = ["BIG LEMSI", "BMG", "UMG", "SACEM", "SPOTIFY"];

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-brand-bg overflow-hidden pt-28 pb-12 px-4 md:px-6">
      {/* Purple glow gradient backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] rounded-full bg-brand-accent/30 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-accent/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto rounded-3xl bg-gradient-to-br from-[#1a0f2e] via-[#2a1145] to-brand-accent/40 overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(146,84,245,0.25)]">
        {/* Inner glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-20 w-[600px] h-[600px] rounded-full bg-brand-accent/40 blur-[120px]" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 lg:p-14 min-h-[88vh]">
          {/* LEFT — copy + CTAs + stats */}
          <div className="lg:col-span-7 flex flex-col justify-between relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70 mb-10"
              >
                <Globe size={14} className="text-brand-accent" />
                <span>Hayce Lemsi aux commandes</span>
                <span className="text-white/40">/ Luxembourg</span>
              </motion.div>

              <AnimatedLetterText
                text="Record Music"
                el="h1"
                className="block text-[54px] md:text-[88px] lg:text-[112px] leading-[0.92] tracking-tight font-serif font-bold text-white"
                delay={0.1}
              />
              <AnimatedLetterText
                text="Studio"
                el="h1"
                className="block text-[54px] md:text-[88px] lg:text-[112px] leading-[0.92] tracking-tight font-serif italic font-light text-white"
                delay={0.5}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-8 max-w-xl text-white/80 text-base md:text-lg leading-relaxed font-light"
              >
                Studio d'enregistrement & direction artistique au Luxembourg.
                Viens avec une idée. Repars avec une direction.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-10 flex flex-col sm:flex-row sm:items-center items-stretch gap-4 sm:gap-5 sm:flex-wrap"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center sm:justify-start gap-3 bg-brand-accent hover:bg-white hover:text-brand-bg text-white pl-7 pr-2 py-2 rounded-full font-medium transition-colors duration-300"
                >
                  Réserver une session
                  <span className="w-10 h-10 rounded-full bg-white text-brand-bg flex items-center justify-center group-hover:bg-brand-bg group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={16} />
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center sm:justify-start gap-2 border border-white/25 hover:border-white hover:bg-white/5 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
                >
                  Voir le formulaire
                  <ArrowDown
                    size={16}
                    className="group-hover:translate-y-0.5 transition-transform"
                  />
                </a>

                <div className="hidden sm:flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        className="w-9 h-9 rounded-full border-2 border-brand-bg object-cover"
                      />
                    ))}
                  </div>
                  <div className="text-white/80 text-sm leading-tight">
                    <p className="font-bold">100+ Artistes</p>
                    <p className="text-white/50 text-xs">accompagnés</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stat cards bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-14 flex gap-4"
            >
              <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-5 w-[160px] relative overflow-hidden">
                <div className="absolute top-3 right-3 text-brand-accent text-xs">✦</div>
                <div className="text-4xl font-serif font-bold text-white">650€</div>
                <p className="text-white/60 text-xs mt-2 uppercase tracking-wider">
                  Pack single
                </p>
              </div>
              <div className="bg-brand-accent/90 border border-brand-accent rounded-2xl p-5 w-[160px] relative overflow-hidden">
                <div className="absolute top-3 right-3 text-white text-xs">✦</div>
                <div className="text-4xl font-serif font-bold text-white">99€</div>
                <p className="text-white/80 text-xs mt-2 uppercase tracking-wider">
                  Par heure
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — image with glow + overlay info */}
          <div className="lg:col-span-5 relative min-h-[440px] lg:min-h-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2400&auto=format&fit=crop"
                alt="Record Music Studio"
                className="w-full h-full object-cover"
              />
              {/* purple tint overlay to match brand */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/60 via-brand-accent/20 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/70 via-transparent to-transparent" />

              {/* Top-right floating stat */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute top-5 right-5 flex flex-col items-end"
              >
                <span className="text-brand-accent text-xs tracking-widest uppercase font-medium">
                  + 12 ans d'expérience
                </span>
                <span className="text-white/70 text-xs mt-1">
                  Rap, R&B, Urban
                </span>
              </motion.div>

              {/* Bottom watermark text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 1.4, delay: 1.8 }}
                className="absolute bottom-2 left-2 text-[80px] md:text-[120px] font-serif font-black text-white leading-none tracking-tight"
              >
                RMS
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Partners strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="relative z-10 border-t border-white/10 px-6 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span className="text-white/60 text-xs uppercase tracking-widest">
            Ils nous font confiance
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partners.map((p) => (
              <span
                key={p}
                className="text-white/70 hover:text-white text-sm font-bold tracking-[0.2em] uppercase transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
