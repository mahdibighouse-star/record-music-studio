import { motion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Studio", href: "#studio", hasDropdown: true },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "À propos", href: "#about" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Process", href: "#process" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 pt-5 pointer-events-auto"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-white font-bold">
          <span className="w-7 h-7 rounded-md bg-brand-accent flex items-center justify-center text-sm">
            ✦
          </span>
          <span className="tracking-tight text-lg">Record</span>
        </a>

        {/* Pill nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-full px-2 py-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-4 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown size={12} className="text-white/50" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-brand-bg px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent hover:text-white transition-colors"
          >
            Réserver
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-3 mx-auto max-w-[1400px] bg-brand-card/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-2"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center bg-brand-accent text-white px-5 py-2.5 rounded-full text-sm font-medium"
          >
            Réserver
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
