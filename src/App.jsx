import "./App.css";
import "./pages/AdoptionForm.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import AdoptionForm from "./pages/AdoptionForm";
import PublicRoutes from "./routes/PublicRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/adopcion" element={<AdoptionForm />} />
        </Route>
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
