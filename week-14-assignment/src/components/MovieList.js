import React from "react";
import Movie from "./Movie";
import Navbar from "./Navbar";

const MovieList = ({ movies }) => {
  return (
      <div className="movie-list">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
  );
};

export default MovieList;
