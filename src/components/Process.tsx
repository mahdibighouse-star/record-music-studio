import { motion } from "motion/react";
import { AnimatedLetterText } from "./AnimatedLetterText";

const processSteps = [
  {
    title: "Écoute de l'idée",
    description: "Comprendre l'univers, la prod, le texte, l'intention et l'objectif du morceau."
  },
  {
    title: "Structuration",
    description: "Organiser le morceau : couplet, refrain, pont, énergie, placement et parties fortes."
  },
  {
    title: "Direction vocale",
    description: "Travailler l'interprétation, le ton, la précision, les intentions et les variations."
  },
  {
    title: "Enregistrement",
    description: "Poser les voix dans un cadre studio professionnel."
  },
  {
    title: "Mix",
    description: "Donner une première finition propre au morceau selon la formule choisie."
  },
  {
    title: "Conseil stratégique",
    description: "Réfléchir à la sortie : visuel, cover, teasing, contenu et ordre de sortie."
  }
];

export function Process() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white text-brand-bg relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <AnimatedLetterText 
              text="POUR CRÉER & DÉVELOPPER"
              className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-6 block"
            />
            <AnimatedLetterText 
              text="Un cadre professionnel"
              className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight text-brand-bg leading-tight"
            />
          </div>
          <div className="text-brand-muted text-lg font-light leading-relaxed">
            L'artiste peut venir avec une prod, un texte, une mélodie, une idée de refrain ou un projet encore flou. L'objectif : transformer une idée en morceau, puis transformer un morceau en projet sérieux.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-50 border border-gray-100 p-10 rounded-2xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="text-4xl font-serif font-bold text-brand-accent/30 group-hover:text-brand-accent transition-colors duration-500 mb-6 italic">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-sans font-bold uppercase tracking-wider mb-4 text-brand-bg">
                {step.title}
              </h3>
              <p className="text-brand-muted leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block border-l-4 border-brand-accent bg-gray-50 p-8 md:p-12 max-w-4xl rounded-r-2xl"
          >
            <h4 className="text-2xl md:text-4xl font-serif italic text-brand-bg mb-4 font-bold">
              "Viens avec une idée. Repars avec une direction."
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
