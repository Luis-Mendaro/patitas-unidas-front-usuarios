import "./Home.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import PetSection from "../components/Home/PetSection";
import { useApi } from "../hooks/useApi";
import ReturnToTopButton from "../components/ReturnToTopButton";
import constants from "../utils/constants";

function Home() {
  const { fetchAndStorePets } = useApi();
  const { listenToScrollPosition, handleScroll } = constants;

  const [showButton, setShowButton] = useState(false);
  const pets = useSelector((state) => state.pets.items);


  useEffect(() => {
    fetchAndStorePets();
    const scrollHandler = () => handleScroll(setShowButton);
    listenToScrollPosition(scrollHandler);
  }, []);

  return (
    pets.length > 0 && (
      <>
        <main className="mb-5">
          <Hero />
          <PetSection />
          <HowItWorks />
          {showButton && <ReturnToTopButton />}
        </main>
      </>
    )
  );
}

export default Home;
