import React from "react";
import { motion } from "framer-motion";

const UpandNew = ({ children, hideComma = false }) => {
  return (
    <motion.li className="overflow-hidden flex px-0.5">
      <motion.a
        href="#"
        className="block h-[24px]  relative"
        whileHover="hover"
        initial="initial"
      >
        {/* first span  */}
        <motion.span
          variants={{
            initial: { y: 0 },
            hover: { y: -24 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="block"
        >
          {children}
        </motion.span>

        {/* second span  */}
        <motion.span
          variants={{
            initial: { y: 24 },
            hover: { y: 0 },
          }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="absolute inset-0"
        >
          {children}
        </motion.span>
      </motion.a>
      {!hideComma && <span>,</span>}
    </motion.li>
  );
};

export default UpandNew;
