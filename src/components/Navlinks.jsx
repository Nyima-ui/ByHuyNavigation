import React, { useState } from "react";
import { motion } from "framer-motion";

const linkVariants = {
  hidden: { y: 120 },
  show: { y: 0, transition: { type: "linear", duration: 0.5 } },
};

const Navlinks = ({ children }) => {
  const [isHovering, setisHovering] = useState(false);
  return (
    <motion.li
      className="flex items-center space-x-0 overflow-y-clip"
      onHoverStart={() => setisHovering(true)}
      onHoverEnd={() => setisHovering(false)}
    >
      <motion.div
        className="h-0 rounded-full bg-[#CECEC4] w-0"
        animate={{
          height: isHovering ? "13px" : "0px",
          width: isHovering ? "13px" : "0",
        }}
        transition={{ type: "easeOut" }}
      ></motion.div>
      <motion.a
        href=""
        className="text-[72px] leading-[69px] uppercase text-[#CECEC4] font-bold"
        animate={{ x: isHovering ? 25 : 0 }}
        variants={linkVariants}
        transition={{ type: "easeOut" }}
      >
        {children}
      </motion.a>
    </motion.li>
  );
};

export default Navlinks;
