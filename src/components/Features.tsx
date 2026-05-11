import { motion } from "motion/react";
import { Music, Mic, Compass } from "lucide-react";
import { AnimatedLetterText } from "./AnimatedLetterText";

const features = [
  {
    icon: Music,
    image:
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1600&auto=format&fit=crop",
    tag: "01 — Le Concept",
    title: "Sessions pensées pour les artistes sérieux",
    description:
      "Single, EP, album, résidence artistique ou simple session de travail. Un cadre studio pro à Luxembourg.",
  },
  {
    icon: Mic,
    image: null,
    tag: "02 — La Valeur Forte",
    title: "Direction vocale & culture rap",
    description:
      "Hayce Lemsi apporte un regard d'artiste, une direction vocale et une vraie crédibilité auprès des artistes urbains.",
  },
  {
    icon: Compass,
    image: null,
    tag: "03 — La Promesse",
    title: "Viens avec une idée. Repars avec une direction.",
    description:
      "Record Music Studio est pensé pour les artistes qui veulent être pris au sérieux et construire un projet solide.",
  },
];

export function Features() {
  return (
    <section
      id="services"
      className="py-28 md:py-36 px-4 md:px-6 bg-brand-bg text-white relative"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-accent font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            C'est plus qu'un simple studio
          </motion.div>
          <AnimatedLetterText
            text="Design With Purpose."
            el="h2"
            className="block text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight"
          />
          <AnimatedLetterText
            text="Build With Impact."
            el="h2"
            className="block text-4xl md:text-6xl lg:text-7xl font-serif italic font-light text-white/80 tracking-tight mt-1"
            delay={0.3}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto mt-8 text-white/70 text-base md:text-lg font-light leading-relaxed"
          >
            On aide les artistes à transformer leurs idées en morceaux solides
            grâce à un accompagnement créatif, une direction artistique claire
            et une vraie stratégie de sortie.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="group relative rounded-2xl overflow-hidden bg-brand-card/70 border border-white/10 hover:border-brand-accent/40 transition-colors p-7 flex flex-col gap-6 min-h-[340px]"
              >
                {/* Tag row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-brand-accent font-medium">
                    {f.tag}
                  </span>
                  <Icon size={18} className="text-white/60" />
                </div>

                <div className="flex-1 flex flex-col justify-end gap-4">
                  <h3 className="text-2xl md:text-[26px] font-serif font-bold leading-tight text-white">
                    {f.title}
                  </h3>
                  <p className="text-white/65 text-sm md:text-base font-light leading-relaxed">
                    {f.description}
                  </p>
                </div>

                {/* hover glow */}
                <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-brand-accent/0 group-hover:bg-brand-accent/20 blur-3xl transition-all duration-700 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
