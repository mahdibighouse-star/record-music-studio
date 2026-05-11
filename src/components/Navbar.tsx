import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 flex items-center justify-between pointer-events-auto backdrop-blur-md bg-brand-bg/60 text-white uppercase text-xs tracking-widest font-sans border-b border-white/10"
    >
      <div className="font-bold text-lg tracking-[0.1em] relative z-10 flex gap-2">
        <span className="text-white">RECORD</span>
        <span className="text-brand-accent">MUSIC</span>
      </div>

      <nav className="hidden md:flex gap-8 relative z-10">
        {["Studio", "Services", "Tarifs", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="relative overflow-hidden group py-2">
            <span className="relative z-10 group-hover:text-brand-accent transition-colors duration-300">{item}</span>
            <span className="absolute bottom-1 left-0 w-full h-[1px] bg-brand-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </a>
        ))}
      </nav>

      <button className="md:hidden relative z-10" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className="hidden md:block relative z-10">
        <a
          href="#contact"
          className="relative group overflow-hidden border border-brand-accent/30 bg-brand-accent px-6 py-3 rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <div className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
          <span className="relative z-10 text-white group-hover:text-brand-bg transition-colors duration-300 font-bold tracking-widest">
            Réserver
          </span>
        </a>
      </div>
    </motion.header>
  );
}
