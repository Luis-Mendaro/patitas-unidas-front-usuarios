import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import petsReducer from "./petsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pets: petsReducer,
  },
});

export default store;
