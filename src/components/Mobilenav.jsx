import React from "react";
import { motion } from "framer-motion";
import FillButton from "./FillButton";
import NavButton from "./NavButton";

const Mobilenav = () => {
  return (
    <div className="mobileNav absolute top-10% left-[75%] flex items-center gap-3">
        <FillButton>Book a call ↗</FillButton>
        <NavButton></NavButton>
    </div>
  );
};

export default Mobilenav;

