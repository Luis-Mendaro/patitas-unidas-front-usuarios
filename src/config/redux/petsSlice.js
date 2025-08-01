import { createSlice } from "@reduxjs/toolkit";

const petsSlice = createSlice({
  name: "pets",
  initialState: [],
  reducers: {
    addPets: (state, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = petsSlice;
export const { addPets } = actions;
export default reducer;
