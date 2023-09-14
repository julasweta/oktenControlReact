import React from 'react';
import { Link } from 'react-router-dom';
import { IOneMovie } from '../../interfaces/oneMoviesInterface';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { GenreBadge } from '../GenreBadge';

const MovieInfo: React.FC<{ movie: IOneMovie; }> = ({ movie }) =>
{
  const { template } = useAppSelector((state: RootState) => state.movies);
  const { activeBtn } = useAppSelector((state: RootState) => state.genres);

  return (
    <>
      {movie && (
        <div className={template ? 'movie' : 'movie movies-white'}>
          <div className="box-header">
            <h2>{movie.original_title}</h2>
            <div className="box-body">
              <div className="box-img">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                <Link to={`/image/${movie.id}`} className="menu-button view">
                  View all posters
                </Link>
              </div>
              <div className="box-poster">

                <span className="info">
                  {" "}
                  <b>Budget:</b> {movie.budget}
                </span>
                <span className="info">
                  <b>Date release:</b> {movie.release_date}
                </span>
                <h5>Spoken Languages</h5>
                <ol>
                  {movie.spoken_languages.map((item, index) => (
                    <li key={index}>{item.english_name}</li>
                  ))}
                </ol>
                <p className="overview">{movie.overview}</p>
                <div className="gener box-gener">
                  {movie.genres.map(item => (
                    <GenreBadge
                      genre={item}
                      key={item.id}
                      activeBtn={activeBtn}
                    />
                  ))}
                </div>
                <Link to={movie.homepage} target="_blank" className="menu-button">
              HomePage of Movie
            </Link>
              </div>
            </div>
          </div>

          <div className="box-footer">
           
            <div className="products">
              {movie.production_companies.map(item => (
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}
                  alt={item.name}
                  className="logo"
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { MovieInfo };
