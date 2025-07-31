import "./App.css";
import "./pages/AdoptionForm.css";

import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import AdoptionForm from "./pages/AdoptionForm";
import PublicRoutes from "./routes/PublicRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PetDetail from "./pages/PetDetail";
import AboutUs from "./pages/AboutUs";

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
        </Route>
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
