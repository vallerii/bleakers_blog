import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorsData: null,
};

const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    loadError: (state, action) => {
      if (!Array.isArray(state.errorsData)) state.errorsData = [];
      state.errorsData.push(action.payload);
    },
    clearError: (state) => {
      state.errorsData = null;
    },
  },
});

export const { loadError, clearError } = errorsSlice.actions;

export default errorsSlice.reducer;
