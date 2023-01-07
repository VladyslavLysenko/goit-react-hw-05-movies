import { useEffect, useState } from 'react';
import api from 'Fetch/Fetch';
import { baseUrl, key } from 'Fetch/Fetch';
import { useParams } from 'react-router-dom';
import { CastItem } from './CastItem';

export const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    api.FetchCredits(baseUrl, key, movieId).then(resp => setCasts(resp.cast));
  }, []);
    
    console.log(casts);
  return (
    <section>
      <ul>
        {casts.map(item => (
          <li key={item.id}>
                <CastItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
