import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { genreService } from "../../services/GenreServices";
import { Genre } from '../../interfaces';

interface GenresState {
    genres: Genre[];
    activeGenre:number;
    activeBtn:string;
}

const initialState: GenresState = {
    activeGenre: null,
    activeBtn:'all',
    genres: [],
}

/*-----------------AsyncThunk -------------------------------  */
export const getGenres = createAsyncThunk(
    'moviesSlice/getGenres',
    async (_, thunkAPI) => {
        try {
            const { data } = await genreService.getGenres();
            return  {genres:data.genres} ;
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err);
        }
    }
);


/*--------------------- SLICE--------------------  */

export const GenresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        setActiveGenre: (state, action) => {
            state.activeGenre = action.payload;
        },
        setActiveBtn: (state, action) => {
            state.activeBtn = action.payload;
        },

    },

    extraReducers: (builder) =>
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload.genres;
        }),
});

const { reducer: genresReducer, actions } = GenresSlice;

const genresActions = {
    ...actions,
    getGenres,
};

export { genresActions, genresReducer };