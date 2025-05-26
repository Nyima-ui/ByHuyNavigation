import React, { useState } from "react";
import { motion } from "framer-motion";

const Mobilenav = () => {
  return (
    <div className="mobileNav absolute top-10% left-[75%]">
         <button className="button">
             Book a Call ↗
         </button>
    </div>
  );
};

export default Mobilenav;

{/* <motion.button
  whileHover="hover"
  initial="initial"
  className="tracking-widest uppercase text-xl cursor-pointer rounded-full bg-[#3A3733] text-[#E7E7E2] font-bold px-6 py-5 relative overflow-hidden"
>
  <motion.span
    variants={{
      initial: { scaleY: 0 },
      hover: { scaleY: 1 },
    }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="absolute inset-0 origin-bottom bg-[#8A8A72]"
  />
  <span className="relative z-10">Book a call</span>
</motion.button> */}
{
  /* <button className="tracking-widest uppercase text-xl cursor-pointer rounded-full bg-[#3A3733] text-[#E7E7E2] font-bold px-6 py-5 relative overflow-hidden group">
  <span className="relative z-10">Book a Call ↗</span>
  <span className="absolute inset-0 bg-[#8A8A72] origin-bottom scale-y-0 transition-transform duration-300 ease-in-out group-hover:scale-y-100 "></span>
</button> */
}
