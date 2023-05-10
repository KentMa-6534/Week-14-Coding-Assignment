import React, { useState } from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="container mb-3 movie-container">
      <div className="form-group">
        <div className="movie">
          <h2>{movie.title}</h2>
          <img src={movie.poster}></img>
          <p>{movie.synopsis}</p>
          <iframe
            title={movie.title}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movie.videoId}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <ReviewList reviews={reviews} />
          <h3>Rate this movie:</h3>
          <Stars rating={rating} onRatingChange={handleRatingChange} />
          <ReviewForm addReview={addReview} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
