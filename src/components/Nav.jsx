import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import UpandNew from "./UpandNew";

const Nav = () => {
  const trademarkRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      trademarkRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <nav className="flex justify-between py-6 text-xl px-9.5">
      <motion.a
        href="#"
        className="font-bold text-[#171715]"
        ref={trademarkRef}
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        ByHuy<sup>&copy;</sup>
      </motion.a>

      <p className="text-[#6C655E]">(Web Designer & Developer)</p>

      <ul className="flex text-[#6C655E]">
         <UpandNew>Services</UpandNew>
         <UpandNew>Works</UpandNew>
         <UpandNew>About</UpandNew>
         <UpandNew>Testimonials</UpandNew>
         <UpandNew hideComma>Contact</UpandNew>
      </ul>
    </nav>
    
  );
};

export default Nav;
