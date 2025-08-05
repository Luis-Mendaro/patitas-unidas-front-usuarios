import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { setAuthData } from "../redux/authSlice";
import { toast } from "react-toastify";
import { addPets } from "../config/redux/petsSlice";
import { login } from "../config/redux/userSlice";
import { response } from "express";

export const useApi = () => {
  //   const { authUser, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const fetchPets = async () => {
    return await api.get("/pets");
  };

  const fetchAndStorePets = async () => {
    const response = await fetchPets();
    const data = response.data;
    dispatch(addPets(data.pets));
  };

  const userLogin = async (loginData) => {
    try {
      const response = await api.post("/auth/login", loginData);
      const data = response.data;
      dispatch(login(data));

      return response;
    } catch (error) {}
  };

  return {
    fetchPets,
    fetchAndStorePets,
    userLogin,
  };
};
