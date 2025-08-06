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
  },
});

const { actions, reducer } = userSlice;
export const { login, logout, likePet } = actions;
export default reducer;
