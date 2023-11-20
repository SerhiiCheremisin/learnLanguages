import { configureStore } from '@reduxjs/toolkit';

// slices
import languageReducer from './reducers/languageReducer';

const store = configureStore({
    reducer: {
        languageReducer
    }
})

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;