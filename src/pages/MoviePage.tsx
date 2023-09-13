import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieInfo } from '../components';
import { useAppDispatch } from '../hooks/hooks';
import { movieService } from '../services/MovieServices';
import { moviesActions } from '../redux/slices';

type Props = {}

const MoviePage = (props: Props) => {
  const [movie, setMovie] = useState(null); 
  const dispatch = useAppDispatch();



  const params = useParams();

  useEffect(() => {
    dispatch(moviesActions.setShowMenu(false))
    const fetchMovie = async () => {
      try {
        const response = await movieService.getOneMovie(+params.id);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [params.id, dispatch]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
    <MovieInfo movie={movie} />
  </div>
  )
}

export {MoviePage}