'use client';
import { motion } from "framer-motion";

import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
};

export const FadeIn = ({ children, delay = 0 }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} // Start invisible and 20px down
    whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
    viewport={{ once: true, margin: "-50px" }} // Trigger once, slightly before it hits center
    transition={{ duration: 0.6, delay: delay }}
  >
    {children}
  </motion.div>
);