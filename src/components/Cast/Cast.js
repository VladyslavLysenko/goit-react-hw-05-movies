import { useEffect, useState } from 'react';
import api from 'Fetch/Fetch';
import { baseUrl, key } from 'Fetch/Fetch';
import { useParams } from 'react-router-dom';
import { CastItem } from './CastItem';
import toast from 'react-hot-toast';
import { Wrapper, Item } from '../MoviesList/MoviesList.styled';

 const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    api
      .FetchCredits(baseUrl, key, movieId)
      .then(resp => setCasts(resp.cast))
      .catch(() => {
        toast.error('Ups... Something is wrong.', {
          duration: 4000,
          position: 'top-center',
        });
      });;
  }, [movieId]);

  return (
    <section>
      <Wrapper>
        {casts.map(item => (
          <Item key={item.id}>
            <CastItem item={item} />
          </Item>
        ))}
      </Wrapper>
    </section>
  );
};

export default Cast;