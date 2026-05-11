import { motion } from "motion/react";
import { AnimatedLetterText } from "./AnimatedLetterText";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-white text-brand-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <AnimatedLetterText 
            text="RÉSERVER UNE SESSION"
            className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tight mb-6 text-brand-bg"
          />
          <p className="text-brand-muted text-lg md:text-xl font-light leading-relaxed mb-12">
            Record Music Studio s'engage à fournir un cadre professionnel, un accompagnement artistique et une méthode de travail sérieuse. Contactez-nous pour planifier votre prochaine session.
          </p>
          
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-brand-accent mb-2">Adresse</h4>
              <p className="font-sans text-brand-bg text-lg">7 Cote d'Eich, Ville-Haute Luxembourg</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-brand-accent mb-2">Email</h4>
              <a href="mailto:contact@recordmusicstudio.com" className="font-sans text-brand-bg text-lg relative group inline-block">
                contact@recordmusicstudio.com
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-bg scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-brand-card p-8 md:p-12 rounded-2xl shadow-xl border border-brand-accent/10"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest font-medium text-brand-muted">Nom / Nom d'artiste</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-brand-bg/50 border border-brand-muted/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest font-medium text-brand-muted">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-brand-bg/50 border border-brand-muted/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs uppercase tracking-widest font-medium text-brand-muted">Offre souhaitée</label>
              <select 
                id="subject" 
                className="bg-brand-bg/50 border border-brand-muted/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors appearance-none"
              >
                <option value="">Sélectionnez une offre</option>
                <option value="session">Session Studio (99€/h)</option>
                <option value="gold">Ticket Gold - Single Session (650€)</option>
                <option value="diamond">Ticket Diamond - EP / Projet Court</option>
                <option value="black-diamond">Ticket Black Diamond - Album / Résidence</option>
                <option value="other">Autre demande</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest font-medium text-brand-muted">Votre projet</label>
              <textarea 
                id="message" 
                rows={4}
                className="bg-brand-bg/50 border border-brand-muted/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                placeholder="Décrivez votre idée, vos besoins en direction artistique, etc."
              ></textarea>
            </div>

            <button className="mt-4 bg-brand-accent text-white font-bold uppercase tracking-widest text-sm py-4 rounded-lg hover:bg-white hover:text-brand-bg transition-colors duration-300">
              Envoyer la demande
            </button>
            <p className="text-xs text-brand-muted text-center mt-2">
              Toute demande spéciale fait l'objet d'un devis personnalisé.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
