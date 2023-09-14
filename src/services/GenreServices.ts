import { Genre } from "../interfaces/oneMoviesInterface";
import { IRes, apiService } from "./ApiServices";

const genreService = {
  getGenres: (): IRes<{ genres: Genre[] }> =>
    apiService.get(`genre/movie/list`),
};

export { genreService };
