import { configureStore } from "@reduxjs/toolkit";
import { genresReducer } from "./slices/GenresSlice";
import { moviesReducer } from "./slices/MoviesSlice";
// ...

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresReducer,
  },
});

// типізація всіх states
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
