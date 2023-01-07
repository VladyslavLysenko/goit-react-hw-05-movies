import React from 'react';
import api from 'Fetch/Fetch';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseUrl, key } from 'Fetch/Fetch';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const [film, setFilm] = useState({ genres: [] });
  const { movieId } = useParams();
  useEffect(() => {
    api.FetchMovieDetails(baseUrl, movieId, key).then(response => {
      setFilm({
        title: response.title,
        poster_path: response.poster_path,
        genres: response.genres,
        release_date: response.release_date,
        vote_average: response.vote_average,
        overview: response.overview,
      });
    });
  }, [movieId]);

  let genres = film.genres.map(item => item.name);
  genres = genres.join(', ');

  return (
    <div>
      <img
        src={'https://www.themoviedb.org/t/p/w400' + film.poster_path}
        alt={film.title}
      />
      <h2>
        {film.title} , release:{' '}
        {film.release_date
          ? (film.release_date = new Date(film.release_date).getFullYear())
          : (film.release_date = '')}
      </h2>
      <p>User score: {film.vote_average}</p>
      <h2>Overview</h2>
      <p>{film.overview}</p>
      <h2>Genres</h2>
      <p>{genres}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
