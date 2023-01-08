import React from 'react';
import api from 'Fetch/Fetch';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseUrl, key } from 'Fetch/Fetch';
import { Link, Outlet } from 'react-router-dom';
import { BackLink } from 'components/BackLink';

const MovieDetails = () => {
  const [film, setFilm] = useState({ genres: [] });
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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
  let releaseDate = new Date(film.release_date);

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <img
        src={'https://www.themoviedb.org/t/p/w400' + film.poster_path}
        alt={film.title}
      />
      <h2>
        {film.title} , release:
        {releaseDate
          ? (releaseDate = new Date(releaseDate).getFullYear())
          : (releaseDate = '')}
      </h2>
      <p>User score: {film.vote_average}</p>
      <h2>Overview</h2>
      <p>{film.overview}</p>
      <h2>Genres</h2>
      <p>{genres}</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
