import { motion } from "motion/react";
import { AnimatedLetterText } from "./AnimatedLetterText";

export function AboutHayce() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-brand-ink text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <AnimatedLetterText
            text="L'HOMME DERRIÈRE LE STUDIO"
            className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-6 block"
          />
          <AnimatedLetterText
            text="HAYCE LEMSI"
            className="text-5xl md:text-7xl font-serif font-bold uppercase tracking-tight mb-8"
          />

          <div className="space-y-6 text-brand-muted text-lg md:text-xl font-light leading-relaxed">
            <p>
              Hayce Lemsi, de son vrai nom Hayce Lemsi, est un rappeur franco-algérien né à Hassi Messaoud en Algérie et ayant grandi dans les quartiers nord du 17e arrondissement de Paris.
            </p>
            <p>
              Inspiré par Eminem, il débute sa carrière en 2008 et se fait connaître grâce à ses freestyles au flow extrêmement rapide, ce qui lui vaut les surnoms de « La Kalash Humaine » et « L'Insomniak ». Reconnu pour ses textes réalistes et techniques inspirés de la rue parisienne, il gagne rapidement le respect du milieu avec le soutien de Soprano et Sinik.
            </p>
            <p>
              Travailleur acharné, il enchaîne les projets et crée son label indépendant Big Lemsi Records afin de préserver sa liberté artistique.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 w-full grid gap-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden aspect-video"
          >
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2564&auto=format&fit=crop"
              alt="Hayce Lemsi in studio"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden aspect-[21/9]"
          >
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2564&auto=format&fit=crop"
              alt="Microphone"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
