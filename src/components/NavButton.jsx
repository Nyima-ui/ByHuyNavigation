import React, { useState } from "react";
import { motion } from "framer-motion";

const NavButton = ({ isInView, isClicked, setisClicked, navButtonRef }) => {
  return (
    <motion.div
      ref={navButtonRef}
      className="size-16 p-4  rounded-full bg-[#BBBBAE] flex flex-col justify-center gap-2 items-center cursor-pointer hover:transform hover:scale-90 transition-all duration-500 group"
      initial={{ scale: 0 }}
      animate={{ scale: isInView ? 1 : 0 }}
      transition={{ type: "linear", duration: 0.25, ease: "easeOut" }}
      onClick={() => setisClicked((prev) => !prev)}
    >
      <motion.span
        className="h-[2.3px] rounded-xl w-full bg-[#0D0D0C] group-hover:h-[1.5px]"
        initial={false}
        animate={{ rotate: isClicked ? 45 : 0, y: isClicked ? 5 : 0 }}
        transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
      ></motion.span>
      <motion.span
        className="h-[2px] rounded-xl w-full bg-[#0D0D0C] group-hover:h-[1px]"
        initial={false}
        animate={{ rotate: isClicked ? -45 : 0, y: isClicked ? -5 : 0 }}
        transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
      ></motion.span>
    </motion.div>
  );
};

export default NavButton;
