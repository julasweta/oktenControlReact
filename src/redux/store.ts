import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './slices/MoviesSlice';
import { genresReducer } from './slices/GenresSlice';
// ...

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres:genresReducer,
  },
})

// типізація всіх states
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch