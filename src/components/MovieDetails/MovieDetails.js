import React from 'react';
import api from 'Fetch/Fetch';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseUrl, key } from 'Fetch/Fetch';
  let ganr = [];
export const MovieDetails = () => {
    // const [film, setFilm] = useState(null);
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  let [release, setRelease] = useState('')
  const [score, setScore] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([])
  const { movieId } = useParams();

 
  console.log(movieId);
  useEffect(() => {
    api.FetchMovieDetails(baseUrl, movieId, key).then(response => {
      console.log(response);
      // setFilm(response);
      setImg(response.poster_path);
      setTitle(response.title);
      setRelease(response.release_date);
      setScore(response.vote_average);
      setOverview(response.overview);
      ganr.push(response.genres.map(item => item.name))  ;
      // setGenres(response.genres.map(item => setGenres(item.name)));

     
    });
  }, []);
console.log('ganr',ganr);
  //
  return (
    <div>
      <img src={'https://www.themoviedb.org/t/p/w400' + img} alt={title} />
      <h2>
        {title} , release:{' '}
        {release ? (release = new Date(release).getFullYear()) : (release = '')}
      </h2>
      <p>User score: {score}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{ganr}</p>
    </div>
  );
};
