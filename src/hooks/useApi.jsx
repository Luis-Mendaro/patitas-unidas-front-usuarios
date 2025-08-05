import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addPets } from "../config/redux/petsSlice";
import { login, logout } from "../config/redux/userSlice";

export const useApi = () => {
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
    } catch (error) {
      if (error.status === 401) {
        toast.error("Credenciales inválidas");
      } else {
        toast.error("Ocurrió un error inesperado");
      }
    }
  };

  //Preguntar a Lucho a ver si es mejor dejar este metodo aca o mover la linea 41 a la linea 11 de Navbar.jsx
  const userLogout = () => {
    dispatch(logout());
  };

  return {
    fetchPets,
    fetchAndStorePets,
    userLogin,
    userLogout,
  };
};
