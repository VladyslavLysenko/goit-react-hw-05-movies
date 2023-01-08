import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Float = styled.img`
  float: left;
  margin-right: 15px;
  width: 400px;
  height: auto;
  border-radius: 10px;
  padding: 1em;
`;
export const DetailsWrapper = styled.div`
  margin-top: 50px;
  margin-left: 10px;
`;

export const AdditionalInfo = styled.div`
  clear: left;
  width: 100%;
  padding: 30px;
  background: rgba(247, 40, 40, 0.17);
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
`;

export const Title = styled.h2`
  font-size: 30px;
  padding-bottom: 20px;
  color: rgba(247, 40, 40, 0.68);
`;

export const Detail = styled.p`
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: 500;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 25px;
  font-weight: 500;
  &.active {
    color: #fff;
  }
`;
