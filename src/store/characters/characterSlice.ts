import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, CharactersResponse } from "../../types/character"
import axios from "axios";
import { API_URL } from "../../constants/apiConstant";

interface CharactersState {
    characters: CharactersResponse | null;
    loading: boolean;
    error: string | null;
    characterDetail: Character | null;
    selectedCharacterId: number | null;
}

const initialState: CharactersState = {
    characters: null,
    loading: false,
    error: null,
    characterDetail: null,
    selectedCharacterId: null,
};

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters: (state, action:PayloadAction<CharactersResponse>) => {
            state.characters = action.payload;
            state.error = null;
        },
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action:PayloadAction<string | null>) => {
            state.error = action.payload;
            state.loading = false;
        },
        setCharacterDetail: (state, action: PayloadAction<Character | null>) => {
            state.characterDetail = action.payload;
            state.error = null;
        },
        setSelectedCharacterId: (state, action: PayloadAction<number | null> ) => {
            state.selectedCharacterId = action.payload;
        },
        clearCharacterDetail: state => {
            state.characterDetail = null;
        },
        clearSelectedCharacterId : state => {
            state.selectedCharacterId = null;
        }
    },
});

export const {
    setCharacters,
    setLoading,
    setError,
    setCharacterDetail,
    setSelectedCharacterId,
    clearCharacterDetail,
    clearSelectedCharacterId
} = characterSlice.actions;

export const fetchCharacters = (page: number = 1, limit: number = 10) => async (dispatch: any) => {

    try {
        // on passe le state loading a true avant de faire la requete
        dispatch(setLoading(true));
        //on fait la requete
        const response = await axios.get<CharactersResponse>(`${API_URL}/characters?page=${page}&${limit}`);
        // on remplit le state characters avec les données de la requete
        dispatch(setCharacters(response.data));
        
    } catch (error) {
     const errorMessage= error instanceof Error ? error.message: 'une erreur est survenue';
     dispatch(setError(errorMessage));
     console.log("error du fetchCharacters", error);   
    } finally {
        dispatch(setLoading(false));
    }
}

export const fetchCharacterDetail = (id: number) => async (dispatch: any) => {

    try {
        // on passe le state loading a true avant de faire la requete
        dispatch(setLoading(true));
        //on fait la requete
        const response = await axios.get<Character>(`${API_URL}/characters/${id}`);
        // on remplit le state characters avec les données de la requete
        dispatch(setCharacterDetail(response.data));
        dispatch(setSelectedCharacterId(id)) 
    } catch (error) {
     const errorMessage= error instanceof Error ? error.message: 'une erreur est survenue';
     dispatch(setError(errorMessage));
     console.log("error du fetchCharacters", error);   
    } finally {
        dispatch(setLoading(false));
    }
}

export default characterSlice.reducer; 
