import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";
import { Genre } from "../interfaces";
import { genresActions } from "../redux/slices/GenresSlice";

interface IGenreBadge {
  genre: Genre;
  key: number;
  activeBtn: string;
}

const GenreBadge: React.FC<IGenreBadge> = ({
  genre,
  key,
  activeBtn,
}: IGenreBadge) => {
  const dispatch = useAppDispatch();

  // Обробник кліку на жанр
  const onActive = (): void => {
    dispatch(genresActions.setActiveGenre(genre.id));
    dispatch(genresActions.setActiveBtn(genre.name));
  };

  return (
    <Link
      onClick={onActive}
      to={`/`}
      className={activeBtn === genre.name ? "genre red" : "genre"}
    >
      {genre.name}
    </Link>
  );
};

export { GenreBadge };
