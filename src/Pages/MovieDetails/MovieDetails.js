import React from 'react';
import api from 'Fetch/Fetch';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { baseUrl, key } from 'Fetch/Fetch';
import {  Outlet } from 'react-router-dom';
import { BackLink } from 'components/BackLink';
import { AdditionalInfo, Detail, DetailsWrapper, Float, StyledLink, Title } from './MovieDetails.stytled';

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
      <Float
        src={'https://www.themoviedb.org/t/p/w400' + film.poster_path}
        alt={film.title}
      />
      <DetailsWrapper>
        <Title>
          {film.title} , release:
          {releaseDate
            ? (releaseDate = new Date(releaseDate).getFullYear())
            : (releaseDate = '')}
        </Title>
        <Detail>User score: {film.vote_average}</Detail>
        <Title>Overview</Title>
        <Detail>{film.overview}</Detail>
        <Title>Genres</Title>
        <Detail>{genres}</Detail>
      </DetailsWrapper>
      <AdditionalInfo>
        <h2>Additional info</h2>
        <ul>
          <li>
            <StyledLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </StyledLink>
          </li>
        </ul>
      </AdditionalInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
