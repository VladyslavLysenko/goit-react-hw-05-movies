import React from 'react';
import api from 'Fetch/Fetch';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { baseUrl, key } from 'Fetch/Fetch';
export const MovieDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    api.FetchMovieDetails(baseUrl, id, key).then(resp => console.log(resp));
  }, [id]);

  //
  return <h2>{id}</h2>;
};
