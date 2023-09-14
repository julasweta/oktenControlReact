import React, { useState } from 'react';
import { IMovie } from '../../interfaces/movieInterface';
import { Link } from "react-router-dom";
import { StarsRating } from '../StarsRating';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';



const MoviesListCard: React.FC<{ card: IMovie; }> = ({ card }) =>
{
  const { template } = useAppSelector((state: RootState) => state.movies);


  const truncatedOverview =
    card.overview.length > 50
      ? card.overview.slice(0, 50) + "..."
      : card.overview;

  return (
   
      <Link
        className={template ? 'card' : 'card card-white'} to={`/movie/${card.id}`}
      >
        <h3>{card.title}</h3>
        <img src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} alt={card.title} title={truncatedOverview}></img>
        <span className="lng">{card.original_language}</span>
        <StarsRating rating={card.vote_average} />
        <span className="lng">{card.vote_count}</span>
      
      </Link>
 

  );
};

export { MoviesListCard };