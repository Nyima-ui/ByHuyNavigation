import React from "react";
import { motion } from "framer-motion";
import FillButton from "./FillButton";
import NavButton from "./NavButton";
import Slidemenu from "./Slidemenu";

const Mobilenav = ({ isInView, isClicked, setisClicked, navButtonRef }) => {
  return (
    <motion.div
      className="mobileNav fixed top-15 right-15 flex items-center gap-3 z-30"
    >
      <FillButton isInView={isInView}>Book a call ↗</FillButton>
      <NavButton isInView={isInView} isClicked={isClicked} setisClicked={setisClicked} navButtonRef={navButtonRef}></NavButton>
    </motion.div>
  );
};

export default Mobilenav;
