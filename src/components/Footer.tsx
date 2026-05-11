import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-brand-bg pt-32 pb-12 px-6 md:px-12 border-t border-brand-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-brand-ink">
              Envie de <span className="text-brand-accent italic font-light">réserver</span> ?
            </h2>
            <a 
              href="mailto:contact@recordmusicstudio.com" 
              className="inline-flex items-center gap-2 text-brand-ink font-medium uppercase tracking-widest text-sm group"
            >
              contact@recordmusicstudio.com
              <span className="w-12 h-[1px] bg-brand-ink group-hover:w-24 transition-all duration-500" />
            </a>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-muted mb-6">Social</h4>
            <ul className="flex flex-col gap-4">
              {['Instagram', 'TikTok', 'YouTube'].map(social => (
                <li key={social}>
                  <a href="#" className="hover:text-brand-accent transition-colors font-sans text-brand-ink">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-muted mb-6">Studio</h4>
            <ul className="flex flex-col gap-4 text-brand-ink font-sans">
              <li>
                <p>Luxembourg</p>
                <p className="text-brand-muted text-sm mt-1">7 Cote d'Eich, Ville-Haute</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-accent/20 text-xs font-sans text-brand-muted uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Record Music Studio. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-ink transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-brand-ink transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
