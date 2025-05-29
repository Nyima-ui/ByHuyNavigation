import React from "react";
import { motion, scale } from "framer-motion";
import FillButton from "./FillButton";
import NavButton from "./NavButton";

const Mobilenav = ({ isInView }) => {
  return (
    <motion.div
      className="mobileNav fixed top-15 right-15 flex items-center gap-3"
    >
      <FillButton isInView={isInView}>Book a call ↗</FillButton>
      <NavButton isInView={isInView}></NavButton>
    </motion.div>
  );
};

export default Mobilenav;
