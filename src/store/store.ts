import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characters/characterSlice";

const store = configureStore({
    reducer: {
        //ajouter les reducer ici 
        characters: characterReducer, 
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;