import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setPets, setTotal } from "../config/redux/petsSlice";
import { login, logout, likePet, updateUser } from "../config/redux/userSlice";

export const useApi = () => {
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.user?.token);

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const fetchPets = async () => {
    return await api.get("/pets");
  };

  const fetchPetById = async (petId) => {
    const { data } = await api.get(`/pets/${petId}`);
    return data.pet;
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

  const updateUserProfile = async (userId, newUserData) => {
    try {
      const response = await api.patch(
        `/users/${userId}`,
        newUserData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      const data = response.data;
      dispatch(updateUser(newUserData));
      toast.success("Perfil actualizado correctamente 🐾");

      return data;
    } catch (error) {
      console.error(error);
      toast.error("No se pudo actualizar el perfil");
      throw error;
    }
  };

  const fetchShelters = async (filters = {}) => {
    const response = await api.get("/shelters", { params: filters })
    return response
  }

  const getShelterById = async (id) => {
    const response = await api.get(`/shelters/${id}`)
    return response
  }


  return {
    fetchPets,
    fetchPetById,
    fetchAndStorePets,
    userLogin,
    likePetRequest,
    submitAdoptionRequest,
    updateUserProfile,
    fetchShelters,
    getShelterById
  };
};
