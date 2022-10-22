import React from 'react';

// router
import { Link } from 'react-router-dom';

// icons
import { FaStar } from 'react-icons/fa';

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imageURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link className='btn btn-link' to={`movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
