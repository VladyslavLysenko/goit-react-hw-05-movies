import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const CommonBox = styled.div`
  width: 100%;
  padding: 30px;
  background: rgba(247, 40, 40, 0.68);
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  font-size: 25px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: #fff;
  }
`;
