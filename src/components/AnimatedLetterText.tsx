import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

interface AnimatedLetterTextProps {
  text: string;
  el?: React.ElementType;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function AnimatedLetterText({ 
  text, 
  el: Wrapper = "p", 
  className = "", 
  delay = 0,
  once = true
}: AnimatedLetterTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  
  // Split the text into words first so we can manage spacing and line breaks
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  };

  return (
    <Wrapper className={className} ref={ref}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-block"
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap" style={{ marginRight: '0.25em' }}>
            {word.split("").map((letter, letterIndex) => (
              <motion.span 
                key={letterIndex} 
                variants={letterVariants} 
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
