import { createSlice } from "@reduxjs/toolkit";
import { languagesType } from "../../services/types";

type reduxLanguageInitialState = {
    motherLanguage: languagesType,
    learningLanguage: languagesType
}

const initialState: reduxLanguageInitialState = {
  motherLanguage : "",
  learningLanguage: ""
}

const languageSlice = createSlice({
    name: "languageSlice",
    initialState: initialState,
    reducers: {
          setMotherLanguage (state, action) {
            state.motherLanguage = action.payload;
          },
          setLearningLanguage (state, action) {
            state.learningLanguage = action.payload;
          }
        }
})

export const { setMotherLanguage , setLearningLanguage } = languageSlice.actions;

export default languageSlice.reducer;