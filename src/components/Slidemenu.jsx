import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Navlinks from "./Navlinks";
import { useRef } from "react";

const listVariants = {
   hidden: {}, 
   show : {
    transition : {
       staggerChildren : 0.1,
    }
   }
}

const Slidemenu = ({ navButtonRef, setisClicked }) => {
  const slideMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedOutsideMenu =
        slideMenuRef.current && !slideMenuRef.current.contains(e.target);

      const clickedOutsideNavButton =
        navButtonRef.current && !navButtonRef.current.contains(e.target);

      if (clickedOutsideMenu && clickedOutsideNavButton) {
        setisClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navButtonRef, setisClicked]);
  return (
    <motion.section
      ref={slideMenuRef}
      className="fixed h-screen w-[50%] top-0 z-20 right-0 bg-[#393632]"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      transition={{ type: "easeInout", duration: 0.7 }}
    >
      <div className="absolute right-8 top-0 scale-130 opacity-30">
        <img
          src="https://www.byhuy.com/_next/static/media/menusvg.1e0fc15a.svg"
          alt="Image for design"
        />
      </div>
      <motion.ul className=" mt-25 ml-15 space-y-2"
         variants={listVariants}
         initial="hidden"
         animate="show"
         >
        <Navlinks>Home</Navlinks>
        <Navlinks>Services</Navlinks>
        <Navlinks>Works</Navlinks>
        <Navlinks>About</Navlinks>
        <Navlinks>Testimonials</Navlinks>
        <Navlinks>Contact</Navlinks>
      </motion.ul>
    </motion.section>
  );
};

export default Slidemenu;
