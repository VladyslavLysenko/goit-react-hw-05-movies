import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  margin-left: 25px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: rgba(247, 40, 40, 0.68);
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 25px;

  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
