import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

interface AnimatedTextProps {
  text: string | React.ReactNode;
  el?: React.ElementType;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function AnimatedText({ 
  text, 
  el: Wrapper = "p", 
  className = "", 
  delay = 0,
  once = true
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  // If text is a string, we can split it into words or characters. 
  // Let's do a simple fade up per word for this bespoke component.
  const isString = typeof text === "string";
  
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom sophisticated ease
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      }
    }
  };

  return (
    <Wrapper className={className} ref={ref}>
      {isString ? (
        <motion.span
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block"
        >
          {text.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden" style={{ marginRight: '0.25em' }}>
              <motion.span variants={defaultVariants} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </motion.span>
      ) : (
        <motion.span 
          variants={{
             hidden: { opacity: 0, y: 30 },
             visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay } }
          }} 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block w-full"
        >
          {text}
        </motion.span>
      )}
    </Wrapper>
  );
}
