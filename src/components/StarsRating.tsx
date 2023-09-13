import React from 'react';
import StarRatings from 'react-star-ratings';

interface IStarsRating {
  rating: number
}

const StarsRating: React.FC<IStarsRating> = ({rating}) => {
  return (
    <div>
    <StarRatings
      rating={rating}
      starRatedColor="blue"
      numberOfStars={10}
      name="rating"
      starDimension="12px"
      starSpacing="2px"
    />
  </div>
  )
}

export { StarsRating };
