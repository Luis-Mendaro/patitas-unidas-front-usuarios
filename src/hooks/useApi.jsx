import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setPets, setTotal } from "../config/redux/petsSlice";
import { login, logout, likePet } from "../config/redux/userSlice";

export const useApi = () => {
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.user?.token);

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const fetchPets = async () => {
    return await api.get("/pets");
  };

  const fetchAndStorePets = async (filters = {}) => {
    const response = await api.get("/pets", { params: filters });
    dispatch(setPets(response.data.pets));
    dispatch(setTotal(response.data.total));
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

  const likePetRequest = async (loggedUserId, petId) => {
    try {
      const response = await api.patch(
        `/users/${loggedUserId}/likePet/${petId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;
      console.log(data);
      dispatch(likePet(data));
      return response;
    } catch (error) {
      return error;
    }
  };

  const submitAdoptionRequest = async (requestData) => {
    try {
      await api.post("/requests", requestData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchPets,
    fetchAndStorePets,
    userLogin,
    userLogout,
    likePetRequest,
    submitAdoptionRequest,
  };
};
