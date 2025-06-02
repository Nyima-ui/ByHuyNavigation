import "./App.css";
import Mobilenav from "./components/Mobilenav";
import Nav from "./components/nav";
import Slidemenu from "./components/Slidemenu";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function App() {
  const secondSectionRef = useRef(null);
  const navButtonRef = useRef(null);
  const isInView = useInView(secondSectionRef, {
    margin: "0px 0px -100% 0px",
    once: false,
  });
  const [isClicked, setisClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [isClicked]);

  const parentVariant = {
    visible: {
      opacity : 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        type: "linear",
      },
    },
    hidden: {
      opacity : 0,
      y: 50,
      transition: {
        when: "afterChildren",
        type: "linear",
      },
    },
  };

  const childVariant = {
    visible: { y: 0, transition: { type: "linear", duration : 0.3 }},
    hidden: { y: 100,  },
  };

  return (
    <>
      {isClicked && (
        <motion.div
          className="dark-overlay absolute inset-0 w-full h-full bg-black/40 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "linear", duration: 0.3 }}
        ></motion.div>
      )}
      <Nav />
      <Mobilenav
        isInView={isInView}
        isClicked={isClicked}
        setisClicked={setisClicked}
        navButtonRef={navButtonRef}
      />
      <AnimatePresence>
        {isClicked && (
          <Slidemenu
            navButtonRef={navButtonRef}
            setisClicked={setisClicked}
            isInView={isInView}
          />
        )}
      </AnimatePresence>

      <section className="h-screen w-screen bg-lime-200 flex items-center justify-center">
        <motion.ul
          className="text-[72px] font-bold leading-[69px]"
          variants={parentVariant}
          initial="hidden"
          animate="visible"
        >
        <motion.div className="overflow-y-clip">
          <motion.li className=" overflow-hidden" variants={childVariant} >
              <motion.a >HOME</motion.a>
            </motion.li>
        </motion.div>
        <motion.div className="overflow-y-clip">
          <motion.li className=" overflow-hidden" variants={childVariant} >
              <motion.a >SERVICES</motion.a>
            </motion.li>
        </motion.div>
        <motion.div className="overflow-y-clip">
          <motion.li className=" overflow-hidden" variants={childVariant} >
              <motion.a >CONTACT</motion.a>
            </motion.li>
        </motion.div>

        </motion.ul>
      </section>
      <section
        className="h-screen w-screen bg-zinc-500"
        ref={secondSectionRef}
      ></section>

      <section className="h-screen w-screen bg-pink-300 flex items-center justify-center"></section>
    </>
  );
}

export default App;
