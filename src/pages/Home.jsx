import "./Home.css";

import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import PetSection from "../components/Home/PetSection";

function Home() {
  return (
    <>
      <main className="Home">
        <Hero />
        <PetSection />
        <HowItWorks />
      </main>
    </>
  );
}

export default Home;
