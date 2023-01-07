import { useEffect, useState } from 'react';
import api from 'Fetch/Fetch';
import { baseUrl, key } from 'Fetch/Fetch';
import { useParams } from 'react-router-dom';
import { ReviewsItem } from './ReviewsItem';
import toast from 'react-hot-toast';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    api
      .FetchReviews(baseUrl, key, movieId)
      .then(resp => setReviews(resp.results))
      .catch(() => {
        toast.error('Ups... Something is wrong.', {
          duration: 4000,
          position: 'top-center',
        });
      });
  }, [movieId]);

  console.log(reviews);
  return (
    <>
  
        <ul>
          {reviews.map(({ id,author,content }) => (
            <li key={id}>
              <ReviewsItem author={author} content={content} />
            </li>
          ))}
        </ul>
    
    </>
  );
};
