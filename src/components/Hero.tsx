import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { AnimatedLetterText } from "./AnimatedLetterText";

const slides = [
  {
    id: 1,
    image: "/images/studio-wide.jpg",
    alt: "Record Music Studio — vue d'ensemble"
  },
  {
    id: 2,
    image: "/images/hayce-sunglasses.jpg",
    alt: "Hayce Lemsi dans le studio"
  },
  {
    id: 3,
    image: "/images/hayce-gesture.jpg",
    alt: "Hayce Lemsi en session"
  }
];

const SLIDE_DURATION = 8000;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-brand-ink overflow-hidden flex flex-col justify-center">

      {/* Automated Cross-fading Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" }
            }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-brand-bg/70 z-10" />
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Huge, Elegant Typography Centered Over the Images */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center px-6 pointer-events-none mt-20">
        <div className="text-center max-w-5xl mx-auto">
          <AnimatedLetterText
            text="RECORD"
            el="h1"
            className="text-7xl md:text-8xl lg:text-[140px] leading-[0.9] tracking-tight font-serif text-white pointer-events-auto"
            delay={0.2}
          />
          <AnimatedLetterText
            text="MUSIC STUDIO"
            el="h1"
            className="text-6xl md:text-7xl lg:text-[120px] leading-[1.1] tracking-tight font-serif font-bold text-white pointer-events-auto block"
            delay={0.8}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-8 text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto pointer-events-auto leading-relaxed"
          >
            Studio d'enregistrement & direction artistique au Luxembourg avec <span className="font-bold">Hayce Lemsi</span> aux commandes.
          </motion.p>

          {/* CTA button — scroll to contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-10 flex justify-center pointer-events-auto"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-brand-accent hover:bg-white hover:text-brand-bg text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors duration-300"
            >
              Réserver une session
              <ArrowDown
                size={16}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Custom Horizontal Progress Bars */}
      <div className="absolute bottom-12 left-0 w-full z-20 px-6 md:px-12 flex flex-col items-center gap-4">
        <div className="flex gap-4 w-full max-w-sm">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className="h-1 flex-1 bg-white/20 overflow-hidden relative cursor-pointer"
              onClick={() => setCurrentSlide(idx)}
            >
              {idx === currentSlide && (
                <motion.div
                  key={`progress-${idx}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  className="absolute inset-0 bg-white origin-left"
                />
              )}
              {idx < currentSlide && (
                <div className="absolute inset-0 bg-white" />
              )}
            </div>
          ))}
        </div>
        <div className="text-white/60 font-mono text-xs uppercase tracking-[0.2em]">
          0{currentSlide + 1} / 0{slides.length}
        </div>
      </div>

    </section>
  );
}
