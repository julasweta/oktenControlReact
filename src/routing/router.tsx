import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { AppRoutes } from "./AppRoutes";
import { MoviePage, MoviesPage } from "../pages";
import { PosterPreview, UserInfo } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: AppRoutes.MOVIES,
        element: <MoviesPage />,
      },
      {
        path: AppRoutes.MOVIE,
        element: <MoviePage />,
      },
      {
        path: AppRoutes.IMAGE,
        element: <PosterPreview />,
      },
      {
        path: AppRoutes.USERINFO,
        element: <UserInfo />,
      },
    ],
  },
]);
