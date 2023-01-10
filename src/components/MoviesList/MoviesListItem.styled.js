import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;

  :hover {
    color: orangered;
  }
`;

export const MovieTitle = styled.div`
  text-align: center;
`;
