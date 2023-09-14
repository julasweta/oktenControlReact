import { MoviesList } from "../components";
import { useAppSelector } from "../hooks/hooks";
import { RootState } from "../redux/store";

const MoviesPage = () => {
  const { template } = useAppSelector((state: RootState) => state.movies);

  return (
    <div className="container">
      <div className="lightning"></div>
      <div className={template ? "movies" : "movies movies-white "}>
        <MoviesList />
      </div>
    </div>
  );
};
export { MoviesPage };
