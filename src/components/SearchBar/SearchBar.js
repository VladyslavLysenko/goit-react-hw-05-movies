import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Input, InputBox, InputBtn } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    let movieTitle = e.target.q.value;
    if (movieTitle.trim() === '') {
      toast('Please enter Movie Title here');
      return;
    }
    onSubmit(movieTitle);
    setSearchParams({ q: movieTitle });
  };
  useEffect(() => {
    if (query) {
      onSubmit(query);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <form onSubmit={handleSubmit} method="get">
      <InputBox>
        <label>
          <Input name="q" defaultValue={query} />
        </label>
        <InputBtn type="submit">Search movies</InputBtn>
      </InputBox>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
