import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setPets, setTotal } from "../config/redux/petsSlice";
import { login, likePet } from "../config/redux/userSlice";

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
      toast.success(`Hola ${data.user.name} 🐶👋`);
      return response;
    } catch (error) {
      if (error.status === 401) {
        toast.error("Credenciales inválidas");
      } else {
        toast.error("Ocurrió un error inesperado");
      }
    }
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
      dispatch(likePet(data));
      return response;
    } catch (error) {
      return error;
    }
  };

  return {
    fetchPets,
    fetchAndStorePets,
    userLogin,
    likePetRequest,
  };
};
