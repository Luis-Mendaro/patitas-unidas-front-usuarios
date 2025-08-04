import "./Home.css";

import { useEffect } from "react";
import axios from "axios";

import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import PetSection from "../components/Home/PetSection";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPets } from "../config/redux/petsSlice";
import { useSelector } from "react-redux";
import { useApi } from "../hooks/useApi";

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
        </main>
      </>
    )
  );
}

export default Home;
