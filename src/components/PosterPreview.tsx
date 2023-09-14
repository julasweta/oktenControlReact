import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { moviesActions } from "../redux/slices";
import { RootState } from "../redux/store";

const PosterPreview: React.FC = () => {
  const params = useParams();
  const [transyt, setTransyt] = useState<string>();
  const { images } = useAppSelector((state: RootState) => state.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(moviesActions.getPoster({ id: +params.id }));
  }, [params.id, dispatch]);

  return (
    <>
      <div className="transition-container">
        {images &&
          images.map((image) => (
            <img
              src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
              alt="poster"
              key={image.file_path}
              onClick={() =>
                setTransyt(transyt === image.file_path ? null : image.file_path)
              } // Змінюємо стан transyt на item.file_path або null, якщо вже було вибрано
              className={transyt === image.file_path ? "transition" : ""}
            ></img>
          ))}
      </div>
      {transyt && <div className="dark-overlay"></div>}
    </>
  );
};

export { PosterPreview };
