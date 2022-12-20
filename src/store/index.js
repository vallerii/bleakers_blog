import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import errorsSlice from "./errors/errors.slice";
import talkSlice from "./talk/talk.slice";

const store = configureStore({
  reducer: { talk: talkSlice, errors: errorsSlice },
  middleware: [thunk],
});

export default store;
