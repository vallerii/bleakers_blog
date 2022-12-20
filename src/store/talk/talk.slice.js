const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentStep: 1,
  inTouch: false,
  userEmail: "",
  userIdeaData: null,
  userContacts: null,
};

const talkSlice = createSlice({
  name: "talk",
  initialState,
  reducers: {
    setInTouch: (state, action) => {
      state.inTouch = action.payload;
    },
    nextStep: (state) => {
      state.currentStep = state.currentStep + 1;
    },
    prevStep: (state) => {
      state.currentStep = state.currentStep - 1;
    },
    resetStep: (state) => {
      state.currentStep = 1;
      state.userIdeaData = null;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setUserIdeaData: (state, action) => {
      state.userIdeaData = { ...state.userIdeaData, ...action.payload };
    },
    setUserContacts: (state, action) => {
      state.userContacts = { ...state.userContacts, ...action.payload };
    },
  },
});
export const {
  setInTouch,
  nextStep,
  prevStep,
  resetStep,
  setUserEmail,
  setUserIdeaData,
  setUserContacts,
} = talkSlice.actions;
export default talkSlice.reducer;
