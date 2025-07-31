import "./App.css";

import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import PublicRoutes from "./routes/PublicRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PetDetail from "./pages/PetDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/petDetail" element={<PetDetail />} />
        </Route>
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
