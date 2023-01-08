import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
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

  if (query) {
    onSubmit(query);
  }

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
