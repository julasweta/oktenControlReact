import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from 'axios';
import { movieService } from '../../services/MovieServices';
import { IIMAGE, IMovie, ISearchquery } from "../../interfaces";

interface MoviesState
{
  movies: IMovie[];
  page: number;
  template: boolean;
  searchValue: string | null;
  images: IIMAGE[],
  showMenu: boolean;
}

const initialState: MoviesState = {
  movies: [],
  page: 1,
  template: true,
  searchValue: null,
  images: [],
  showMenu: false,
};

/*-----------------AsyncThunk -------------------------------  */
//отримання всіх відео
const getMovies = createAsyncThunk<IMovie[], { page: number, gener: number; }>(
  'moviesSlice/getMovies',
  async ({ page, gener }, { rejectWithValue, dispatch }) =>
  {
    try
    {
      const { data } = await movieService.getMovies(page, gener);
      return data.results;
    } catch (e)
    {
      const err = e as AxiosError;
      return rejectWithValue(err);
    }
  }
);

//отримання відео з пошуку
const getSearchMovies = createAsyncThunk<IMovie[], { params: ISearchquery; }>(
  'moviesSlice/getSearchMovies',
  async ({ params }, { rejectWithValue }) =>
  {
    try
    {
      const { data } = await movieService.searchMovie(params);
      return data.results;
    } catch (e)
    {
      const err = e as AxiosError;
      return rejectWithValue(err);
    }
  }
);

// отримання фото з вибраного фільму
const getPoster = createAsyncThunk<any, { id: number; }>(
  'moviesSlice/getPoster',
  async ({ id }, { rejectWithValue }) =>
  {
    try
    {
      const { data } = await movieService.getPoster(id);
      return data.posters;
    } catch (e)
    {
      const err = e as AxiosError;
      return rejectWithValue(err);
    }
  }
);



/*--------------------- SLICE--------------------  */

export const MoviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    setPage: (state, action) =>
    {
      state.page = action.payload;
    },
    setTemplate: (state) =>
    {
      state.template = !state.template;
    },
    setSearchValue: (state, action) =>
    {
      state.searchValue = action.payload;
    },
    setShowMenu: (state, action) =>
    {
      state.showMenu = action.payload;
    },

  },

  extraReducers: (builder) =>
    builder.addCase(getMovies.fulfilled, (state, action) =>
    {
      state.movies = action.payload;
    })
      .addCase(getSearchMovies.fulfilled, (state, action) =>
      {
        state.movies = action.payload;
      })
      .addCase(getPoster.fulfilled, (state, action) =>
      {
        state.images = action.payload;
      }),
});

const { reducer: moviesReducer, actions } = MoviesSlice;

const moviesActions = {
  ...actions,
  getMovies,
  getSearchMovies,
  getPoster
};

export { moviesActions, moviesReducer };

