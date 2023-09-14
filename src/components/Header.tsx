import React, { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Link } from "react-router-dom";
import { genresActions, moviesActions } from "../redux/slices";
import { GenreBadge } from "./GenreBadge";


const Header: React.FC = () =>
{
  const { genres, activeBtn } = useAppSelector((state: RootState) => state.genres);
  const { showMenu, template } = useAppSelector((state: RootState) => state.movies);
  const dispatch = useAppDispatch();
  const [userBlock, setUserBlock] = useState(false);
  const user = { name: "Svitlana", role: "admin", skills: ["htmls", "css", "js"] };


  useEffect(() =>
  {
    dispatch(genresActions.getGenres());
  }, []);

  // привязка localStorage до template
  useEffect(() =>
  {
    if (localStorage.getItem('template') === undefined)
    {
      localStorage.setItem('template', 'black');
      dispatch(moviesActions.setTemplate(true));
    } if (localStorage.getItem('template') === 'black')
    {
      localStorage.setItem('template', 'white');
      dispatch(moviesActions.setTemplate(false));
    } else
    {
      localStorage.setItem('template', 'black');
      dispatch(moviesActions.setTemplate(true));
    }
  }, []);

  //відобрження userBlock 
  useEffect(() =>
  {

  }, [userBlock, setUserBlock]);


  // зміна template
  const changeTemplate = () =>
  {
    if (localStorage.getItem('template') === 'black')
    {
      localStorage.setItem('template', 'white');
      dispatch(moviesActions.setTemplate(false));
    } else
    {
      localStorage.setItem('template', 'black');
      dispatch(moviesActions.setTemplate(true));
    }
  };





  const resetAll = () =>
  {
    dispatch(genresActions.setActiveGenre(null));
    dispatch(genresActions.setActiveBtn('all'));
    dispatch(moviesActions.setPage(1));
    dispatch(moviesActions.setShowMenu(false));

  };


  const onAll = () =>
  {
    dispatch(genresActions.setActiveGenre(null));
    dispatch(genresActions.setActiveBtn('all'));
  };

  const onGenres = () =>
  {
    dispatch(moviesActions.setSearchValue(null));
    dispatch(moviesActions.setShowMenu(!showMenu));
    dispatch(moviesActions.setPage(1));
  };




  return (
    <div className={template ? 'header' : 'header header-white'}>

      <Link className="menu-button home-btn" to={`/`} onClick={resetAll}>
        The Movies
      </Link>

      <Link to={'/'} className="menu-button" onClick={onGenres}>
        Genres
      </Link>

      {showMenu && (
        <div className="genres">
          <Link className={activeBtn === 'all' ? 'red' : 'genre'} onClick={onAll} to={`/`}>
            All
          </Link>
          {genres &&
            genres.map((genre) => (
              <GenreBadge
                genre={genre}
                key={genre.id}
                activeBtn={activeBtn}
              />
            ))}
        </div>
      )}

      <button
        onClick={() => changeTemplate()}
        className={template ? 'menu-button btn-white' : 'menu-button btn-dark'}
        title="Change Theme">{template ? 'Theme: White' : 'Theme: Dark'}
      </button>

      <Link to={'/userinfo'}
        className="menu-button user-link"
        onClick={() => dispatch(moviesActions.setShowMenu(false))}
        onMouseEnter={() => setUserBlock(true)}
        onMouseOut={() => setUserBlock(false)}
      >UserInfo
      </Link>

      {userBlock && <div className="active-user"><p>user: {user.name}</p>
        <p>role: {user.role}</p>
      </div>}

    </div>
  );
};

export default Header;