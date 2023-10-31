import React from 'react';
import { Link } from 'react-router-dom';

const genres = ['Action', 'Comedy', 'Drama', 'Fantasy'];

const GenreListPage = () => {
  return (
    <div>
      <h1>Movie Genres</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>
            <Link to={`/movies/genre/${genre.toLowerCase()}`}>{genre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreListPage;
