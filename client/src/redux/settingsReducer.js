import {createSlice} from '@reduxjs/toolkit';
import lang from '../utils/language.json';


const initialState = {
    language: lang.en,
    darkMode: true,
};
export const languageSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setLanguage: (state, action) => {

            state.language = action.payload;
        }
    },
});
export const {setLanguage} = languageSlice.actions;
export default languageSlice.reducer;
