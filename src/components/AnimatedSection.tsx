import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import type { Variants } from "framer-motion";

type AnimatedSectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function AnimatedSection({ id, className = "", children }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}
