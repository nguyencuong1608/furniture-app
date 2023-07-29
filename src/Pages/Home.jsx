import React, { useEffect } from "react";
import { Hero, OurStory, Services, CustomerReview } from "../Components";

const Home = () => {
  return (
    <main>
      <Hero />
      <OurStory />
      <Services />
      <CustomerReview />
    </main>
  );
};

export default Home;
