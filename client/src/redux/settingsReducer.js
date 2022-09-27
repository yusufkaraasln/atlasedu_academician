import { createSlice } from "@reduxjs/toolkit";
import lang from "../utils/language.json";

const initialState = {
  language: JSON.parse(localStorage.getItem("language")) || lang.tr,
  darkMode: JSON.parse(localStorage.getItem("theme")) ||  false,
};
 
export const languageSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});
export const { setLanguage,setDarkMode } = languageSlice.actions;
export default languageSlice.reducer;
