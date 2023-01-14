import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Input, InputBox, InputBtn } from './SearchBar.styled';

export const SearchBar = () => {
  const [_, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    let movieTitle = e.target.q.value;
    if (movieTitle.trim() === '') {
      toast('Please enter Movie Title here');
      return;
    }
    setSearchParams({ q: movieTitle });
  };

  return (
    <form onSubmit={handleSubmit} method="get">
      <InputBox>
        <label>
          <Input name="q" />
        </label>
        <InputBtn type="submit">Search movies</InputBtn>
      </InputBox>
    </form>
  );
};
