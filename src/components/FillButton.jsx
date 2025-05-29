import React, { useState } from "react";
import { motion, } from "framer-motion";

const FillButton = ({ children, isInView }) => {
  const [ishovering, setishovering] = useState(false);
  return (
    <motion.button
      className="px-7 py-5 bg-[#3A3733] text-[#E2E2DD] uppercase rounded-full cursor-pointer relative overflow-hidden"
      initial={{ scale: 0 }}
      animate={{ scale: isInView ? 1 : 0 }}
      transition={{
        type: "linear",
        duration: 0.25,
        ease: "easeOut",
        delay: 0.25,
      }}
      onHoverStart={() => setishovering(true)}
      onHoverEnd={() => setishovering(false)}
    >
      <motion.p
        animate={{ y: ishovering ? -40 : 0 }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3 }}
      >
        {children}
      </motion.p>

      <motion.p
        className="absolute top-1/2 transform -translate-y-1/2 z-10"
        animate={{ y: ishovering ? 0 : 40 }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3 }}
      >
        {children}
      </motion.p>

      <motion.div
        className="absolute top-full left-0 h-full w-full rounded-full bg-[#8B8B72]"
        animate={{
          y: ishovering ? "-100%" : "0%",
          scaleX: ishovering ? 1 : 0.4,
        }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3 }}
      ></motion.div>
    </motion.button>
  );
};

export default FillButton;

// <motion.button
//   className="px-7 py-5 bg-[#3A3733] text-[#E2E2DD] uppercase rounded-full cursor-pointer relative overflow-hidden"
//   onHoverStart={() => setishovering(true)}
//   onHoverEnd={() => setishovering(false)}
// >
//   <motion.p
//     animate={{ y: ishovering ? -40 : 0 }}
//     transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3 }}
//   >
//     {children}
//   </motion.p>

//   <motion.div
//     className="absolute top-full left-0 h-full w-full rounded-full bg-[#8B8B72] flex items-center justify-center"
//     animate={{
//       y: ishovering ? "-100%" : "0%",
//       scaleX: ishovering ? 1 : 0.4,
//     }}
//     transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3 }}
//   >
//     <motion.p>{children}</motion.p>
//   </motion.div>
// </motion.button>

{
  /* <motion.p
    className="absolute top-full z-10"
    animate={{ y: ishovering ? -44 : 0 }}
    transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3 }}
  >
    {children}
  </motion.p> */
}
