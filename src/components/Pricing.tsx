import { motion } from "motion/react";
import { AnimatedLetterText } from "./AnimatedLetterText";

const offers = [
  {
    title: "SESSION STUDIO",
    price: "99 €",
    unit: "PAR HEURE",
    highlight: false,
    description: "Formule flexible pour enregistrer, travailler une idée ou bénéficier d'un accompagnement direct.",
    features: [
      "Enregistrement & direction vocale",
      "Conseil artistique & structure du morceau",
      "Discussion stratégique",
      "Mix léger selon durée",
      "1 accompagnateur inclus (+15 € / pers. supp.)"
    ]
  },
  {
    title: "TICKET GOLD",
    subtitle: "SINGLE SESSION",
    price: "650 €",
    unit: "PACK SINGLE",
    highlight: true,
    badge: "RECOMMANDER",
    description: "Le pack parfait pour sortir un single propre avec une vraie direction artistique.",
    features: [
      "4h de studio",
      "Enregistrement + mix compris",
      "Direction vocale & conseil interprétation",
      "Conseil stratégie de sortie",
      "Jusqu'à 3 accompagnateurs"
    ]
  },
  {
    title: "TICKET DIAMOND",
    subtitle: "EP / PROJET COURT",
    price: "4 500 €+",
    unit: "À PARTIR DE",
    highlight: false,
    description: "Pensé pour construire un projet court cohérent : couleur musicale, cohérence, titres forts, stratégie et communication.",
    features: [
      "Jusqu'à 5 morceaux, sessions planifiées",
      "Enregistrement + mix + direction artistique globale",
      "Conseil écriture & stratégie de sortie",
      "2 productions sur mesure incluses",
      "Accompagnement sur l'ordre de sortie"
    ]
  },
  {
    title: "TICKET BLACK DIAMOND",
    subtitle: "ALBUM / RÉSIDENCE",
    price: "15 000 €+",
    unit: "À PARTIR DE",
    highlight: false,
    description: "L'offre premium pour un artiste, une équipe, un manager ou un label qui veut structurer un projet complet.",
    features: [
      "Jusqu'à 15 titres, sessions planifiées sur plusieurs jours / semaines",
      "Enregistrement, mix, direction artistique complète & coaching",
      "Conseil écriture / topline & stratégie single / EP / album",
      "5 productions sur mesure incluses",
      "Mise en relation possible (producteurs, topliners, artistes)",
      "Accompagnateurs à définir selon le planning"
    ]
  }
];

export function Pricing() {
  return (
    <section id="tarifs" className="py-32 px-6 md:px-12 bg-brand-bg text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <AnimatedLetterText 
            text="DES FORMULES CLAIRES"
            className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight mb-4"
          />
          <AnimatedLetterText 
            text="POUR CHAQUE OBJECTIF"
            className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight text-brand-accent/80"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offers.map((offer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex flex-col rounded-3xl overflow-hidden p-8 md:p-12 ${
                offer.highlight 
                  ? "bg-brand-card shadow-[0_0_40px_rgba(146,84,245,0.2)] border border-brand-accent/30" 
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {offer.badge && (
                <div className="absolute top-0 right-0 bg-white text-brand-bg text-xs font-bold uppercase tracking-wider px-6 py-2 rounded-bl-2xl">
                  {offer.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-sans font-bold uppercase tracking-widest text-white mb-2">
                  {offer.title}
                  {offer.subtitle && <span className="block text-brand-accent mt-1">{offer.subtitle}</span>}
                </h3>
                <div className="mt-6 flex items-baseline gap-2">
                  {offer.unit === "À PARTIR DE" && <span className="text-sm font-bold uppercase tracking-wider text-brand-muted">À partir de</span>}
                  <span className="text-5xl font-serif font-bold text-white">{offer.price}</span>
                  {offer.unit !== "À PARTIR DE" && <span className="text-sm font-bold uppercase tracking-wider text-brand-muted">{offer.unit}</span>}
                </div>
              </div>

              <p className="text-brand-muted mb-8 text-lg font-light leading-relaxed">
                {offer.description}
              </p>

              <div className="mt-auto">
                <ul className="space-y-4">
                  {offer.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-4 items-start text-white/80 font-light">
                      <div className="mt-1 w-2 h-2 rounded-full bg-brand-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="#contact" 
                className={`mt-10 block text-center py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                  offer.highlight 
                    ? "bg-brand-accent text-white hover:bg-white hover:text-brand-bg" 
                    : "bg-white/10 text-white hover:bg-brand-accent hover:text-white"
                }`}
              >
                Réserver
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
