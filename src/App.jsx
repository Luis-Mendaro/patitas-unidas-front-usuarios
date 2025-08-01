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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/sobre-este-proyecto" element={<AboutUs />} />
          <Route path="/mascotas" element={<PetList />} />
          <Route path="/mascotas/idMascota" element={<PetDetail />} />{" "}
          {/* agregar mascota/:id */}
          <Route path="/lista/idLista" element={<LikedPets />} />
          <Route path="/formulario-adopcion" element={<AdoptionForm />} />{" "}
          {/* agregar /:id/formulario-adopcion */}
        </Route>
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
