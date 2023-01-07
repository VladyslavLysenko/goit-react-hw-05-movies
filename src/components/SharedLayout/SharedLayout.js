import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <Toaster />
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
