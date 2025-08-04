import "./Home.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import PetSection from "../components/Home/PetSection";
import { useApi } from "../hooks/useApi";
import ReturnToTopButton from "../components/ReturnToTopButton";

function Home() {
  const pets = useSelector((state) => state.pets);
  const dispatch = useDispatch();
  const { fetchAndStorePets } = useApi();

  useEffect(() => {
    fetchAndStorePets();
  }, []);

  return (
    pets.length > 0 && (
      <>
        <main>
          <Hero />
          <PetSection />
          <HowItWorks />
          <ReturnToTopButton />
        </main>
      </>
    )
  );
}

export default Home;
