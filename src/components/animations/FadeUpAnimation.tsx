"use client";

import { motion } from "framer-motion";

export const fadeUpVariant = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

interface Props {
  children: React.ReactNode;
}

const FadeUpAnimation = ({ children }: Props) => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 | 0.9 }} // Triggers once when 20% of the component is in view
    >
      {children}
    </motion.div>
  );
};

export default FadeUpAnimation;
