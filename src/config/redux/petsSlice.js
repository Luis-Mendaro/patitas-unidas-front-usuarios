import { createSlice } from "@reduxjs/toolkit";

const petsSlice = createSlice({
  name: "pets",
  initialState: { items: [], total: 0, selectedPet: {} },
  reducers: {
    setPets: (state, action) => {
      state.items = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setSelectedPet: (state, action) => {
      state.selectedPet = action.payload;
    },
  },
});

const { actions, reducer } = petsSlice;
export const { setPets, setTotal, setSelectedPet } = actions;
export default reducer;
