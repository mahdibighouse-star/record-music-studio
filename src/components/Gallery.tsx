import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AnimatedLetterText } from "./AnimatedLetterText";

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="py-32 px-6 md:px-12 bg-brand-ink text-brand-bg overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <AnimatedLetterText 
            text="Selected Projects"
            className="text-4xl md:text-6xl font-serif text-balance"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div style={{ y: y1 }} className="flex flex-col gap-8 md:gap-16">
            <div className="group relative overflow-hidden rounded-sm cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
                  alt="Architecture project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between items-center uppercase tracking-widest text-xs">
                <span>Lumina Residence</span>
                <span className="text-brand-accent italic">Architecture</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-sm cursor-pointer md:mt-24">
              <div className="aspect-square overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src="https://images.unsplash.com/photo-1542665952-1451334e1ee3?q=80&w=2000&auto=format&fit=crop"
                  alt="Product design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between items-center uppercase tracking-widest text-xs">
                <span>Aura Collection</span>
                <span className="text-brand-accent italic">Product</span>
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="flex flex-col gap-8 md:gap-16 md:mt-32">
            <div className="group relative overflow-hidden rounded-sm cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=2000&auto=format&fit=crop"
                  alt="Interior design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between items-center uppercase tracking-widest text-xs">
                <span>The Pavilion</span>
                <span className="text-brand-accent italic">Interior</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-sm cursor-pointer md:mt-24">
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop"
                  alt="Abstract art"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="mt-4 flex justify-between items-center uppercase tracking-widest text-xs">
                <span>Echo Series</span>
                <span className="text-brand-accent italic">Direction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
