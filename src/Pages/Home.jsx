import React, { useEffect } from "react";
import { Hero, OurStory, Services, CustomerReview } from "../Components";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main
      initial={{ filter: "blur(8px) " }}
      animate={{ filter: "blur(0) " }}
      exit={{
        filter: "blur(8px)",
        transition: { duration: 0.01 },
      }}
    >
      <Hero />
      <OurStory />
      <Services />
      <CustomerReview />
    </motion.main>
  );
};

export default Home;
