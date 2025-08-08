import "./App.css";

import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import AdoptionForm from "./pages/AdoptionForm";
import PublicRoutes from "./routes/PublicRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PetDetail from "./pages/PetDetail";
import PetList from "./pages/PetList";
import AboutUs from "./pages/AboutUs";
import LikedPets from "./pages/LikedPets";
import ShelterDetail from "./pages/ShelterDetail";
import ProfileUser from "./pages/ProfileUser";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/sobre-este-proyecto" element={<AboutUs />} />
            <Route path="/refugios" element={<ShelterDetail />} />
            <Route path="/mascotas" element={<PetList />} />
            <Route path="/mascotas/:idMascota" element={<PetDetail />} />{" "}
            <Route path="/perfil" element={<ProfileUser />} />
            <Route path="/lista/idLista" element={<LikedPets />} />
            <Route path="/:id/formulario-adopcion" element={<AdoptionForm />} />
          </Route>
        </Routes>
        <Footer />
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
