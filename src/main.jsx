import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";
import store from "./config/redux/storeConfig.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
