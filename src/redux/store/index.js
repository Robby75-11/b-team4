import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers";

const rootReducer = combineReducers({
  profile: profileReducer, // Cambiato da "esperienze" a "profile"
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
