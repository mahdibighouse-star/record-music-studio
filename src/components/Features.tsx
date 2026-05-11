import { motion } from "motion/react";
import { useRef } from "react";
import { AnimatedText } from "./AnimatedText";
import { AnimatedLetterText } from "./AnimatedLetterText";

const features = [
  {
    number: "01",
    title: "Le concept",
    description: "Un studio pensé pour les artistes sérieux : single, EP, album, résidence artistique ou simple session de travail."
  },
  {
    number: "02",
    title: "La valeur forte",
    description: "Hayce Lemsi apporte un regard d'artiste, une direction vocale, une culture rap et une vraie crédibilité auprès des artistes urbains."
  },
  {
    number: "03",
    title: "La promesse",
    description: "Record Music Studio est pensé pour les artistes qui veulent être pris au sérieux. Viens avec une idée. Repars avec une direction."
  }
];

export function Features() {
  const containerRef = useRef(null);

  return (
    <section className="py-32 px-6 md:px-12 relative z-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          <div className="lg:col-span-4 sticky top-32 h-fit">
            <AnimatedText
              text="Le Studio"
              className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-6 block"
            />
            <AnimatedLetterText
              text="C'EST PLUS QU'UN SIMPLE STUDIO"
              className="text-4xl md:text-5xl font-serif text-white leading-tight"
            />
            <div className="mt-8 overflow-hidden rounded-xl shadow-2xl">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                src="/images/studio-wide.jpg"
                alt="Record Music Studio — Luxembourg"
                className="w-full aspect-[4/5] object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="lg:col-start-6 lg:col-span-7 flex flex-col gap-10 lg:gap-14 pt-12 lg:pt-32">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * idx }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col md:flex-row gap-6 md:gap-8 relative group bg-[#160D24] text-white p-10 rounded-2xl shadow-xl hover:shadow-brand-accent/20 transition-all duration-500 border border-white/5"
              >
                <div className="w-16 shrink-0 border-r border-white/10 pr-6 flex items-center justify-center">
                  <span className="font-serif text-3xl md:text-4xl italic text-brand-accent/80 group-hover:text-brand-accent transition-colors duration-500">
                    {feature.number}
                  </span>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h3 className="text-2xl font-sans font-bold uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed font-light text-base md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
