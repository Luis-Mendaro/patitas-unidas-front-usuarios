import "./App.css";

import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
