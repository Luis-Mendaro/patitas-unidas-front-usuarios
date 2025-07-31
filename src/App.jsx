import "./App.css";

import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import AdoptionForm from "./pages/AdoptionForm";
import PublicRoutes from "./routes/PublicRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PetDetail from "./pages/PetDetail";
import AboutUs from "./pages/AboutUs";
import LikedPets from "./pages/LikedPets";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/adopcion" element={<AdoptionForm />} />
          <Route path="/petDetail" element={<PetDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/:userId/likedPets" element={<LikedPets />} />
        </Route>
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
