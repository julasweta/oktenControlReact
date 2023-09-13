import React, { useEffect, useMemo } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { ISearchquery } from '../../interfaces';
import { SearshForm } from '../SearshForm';
import { moviesActions } from '../../redux/slices';
import { MoviesListCard } from './MoviesListCard';

const MoviesList: React.FC = () =>
{
  const { movies, page, searchValue } = useAppSelector(
    (state: RootState) => state.movies
  );
  const { activeGenre } = useAppSelector((state: RootState) => state.genres);
  const dispatch = useAppDispatch();

  const params: ISearchquery = useMemo(
    () => ({
      query: searchValue,
      include_adult: 'true',
      page: page,
    }),
    [searchValue, page]
  );

  useEffect(() =>
  {
    if (searchValue === null || searchValue === '' || searchValue === undefined)
    {
      dispatch(moviesActions.getMovies({ page: page, gener: activeGenre }));
    } else
    {
      dispatch(moviesActions.getSearchMovies({ params: params }));
    }
  }, [dispatch, page, activeGenre, searchValue, params]);

  //перевріяємо чи номер сторінки більше 1
  const pageRequr = (page: number): boolean =>
  {
    return page > 1;
  };

  return (
    <>
      <div className="pages">
        <button
          onClick={() => pageRequr(page) && dispatch(moviesActions.setPage(page - 1))}
          className="menu-button page_btn"
        >
          {' <<< '} Prev page
          <p>{page - 1}</p>
        </button>
        <button className="menu-button page_btn">Page: {page}</button>
        <button
          onClick={() => dispatch(moviesActions.setPage(page + 1))}
          className="menu-button page_btn"
        >
          {page + 1} <p> Next page {' >>> '}</p>
        </button>
      </div>

      <SearshForm />

      <TransitionGroup className="cards">
        {movies &&
          movies.map((card) => (
            <CSSTransition key={card.id} timeout={300} classNames="fade">
              <MoviesListCard key={card.id} card={card} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </>
  );
};

export { MoviesList };
