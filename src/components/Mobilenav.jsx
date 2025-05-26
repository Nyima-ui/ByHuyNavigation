import React, { useState } from "react";
import { motion } from "framer-motion";
import FillButton from "./FillButton";

const Mobilenav = () => {
  const [isHovering, setisHovering] = useState(false);
  return (
    <div className="mobileNav absolute top-10% left-[75%]">
        <FillButton>Book a call ↗</FillButton>
      {/* <motion.button
        className="button"
        initial={false}
        onHoverStart={() => setisHovering(true)}
        onHoverEnd={() => setisHovering(false)}
      >
        <motion.p
          className="buttonTitle"
          initial={false}
          transition={{ type: "easeInOut", duration: 0.2 }}
          animate={{ y: isHovering ? -40 : 0 }}
        >
          Book a Call ↗
        </motion.p>

        <motion.p
          className="buttonTitle2"
          initial={false}
          transition={{ type: "easeInOut", duration: 0.2 }}
          animate={{ y: isHovering ? 0 : 40 }}
        >
          Book a Call ↗
        </motion.p>

        <motion.div
          className="buttonBackground"
          initial={false}
          transition={{ type: "easeInOut", duration: 0.2 }}
          animate={{
            y: isHovering ? "0%" : "100%",
            scaleX: isHovering ? 1 : 0.5,
          }}
        ></motion.div>
      </motion.button> */}
    </div>
  );
};

export default Mobilenav;

{
  /* <motion.button
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
</motion.button> */
}
{
  /* <button className="tracking-widest uppercase text-xl cursor-pointer rounded-full bg-[#3A3733] text-[#E7E7E2] font-bold px-6 py-5 relative overflow-hidden group">
  <span className="relative z-10">Book a Call ↗</span>
  <span className="absolute inset-0 bg-[#8A8A72] origin-bottom scale-y-0 transition-transform duration-300 ease-in-out group-hover:scale-y-100 "></span>
</button> */
}
