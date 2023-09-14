import { IMovie, IOneMovie, ISearchquery } from "../interfaces";
import { IRes, apiService } from "./ApiServices";

const movieService = {
  getMovies: (page: number, gener: number): IRes<{ results: IMovie[] }> =>
    apiService.get(`discover/movie?page=${page}&with_genres=${gener}`),
  getOneMovie: (id: number): IRes<IOneMovie> => apiService.get(`movie/${id}`),
  searchMovie: (params: ISearchquery): IRes<{ results: IMovie[] }> =>
    apiService.get(`search/movie`, { params: params }),
  getPoster: (id: number): IRes<any> => apiService.get(`movie/${id}/images`),
};

export { movieService };
