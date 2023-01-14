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
        {casts.length ? (
          casts.map(item => (
            <Item key={item.id}>
              <CastItem item={item} />
            </Item>
          ))
        ) : (
          <p>We do not have any casts for this movie.</p>
        )}
      </Wrapper>
    </section>
  );
};

export default Cast;