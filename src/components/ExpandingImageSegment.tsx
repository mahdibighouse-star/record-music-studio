import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ExpandingImageSegment() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Scale from a smaller centered box (e.g. 0.8) to full size (1)
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // Optional: add a slight border radius that reduces as it fills
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);

  return (
    <section ref={containerRef} className="h-screen w-full flex items-center justify-center bg-brand-bg relative z-10 overflow-hidden px-4 md:px-12 py-24">
      <motion.div 
        style={{ scale, borderRadius }}
        className="w-full h-full overflow-hidden relative shadow-2xl"
      >
        <img 
          src="/images/hayce-client.jpg"
          alt="Hayce Lemsi avec un artiste à Record Music Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-ink/20 pointer-events-none" />
      </motion.div>
    </section>
  );
}
