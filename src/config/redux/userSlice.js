import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: () => {
      return null;
    },
    likePet: (state, action) => {
      const updatedLikedPets = action.payload;
      state.user.likedPet.pets = updatedLikedPets;
    },
    updateUser(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

const { actions, reducer } = userSlice;
export const { login, logout, likePet, updateUser } = actions;
export default reducer;
