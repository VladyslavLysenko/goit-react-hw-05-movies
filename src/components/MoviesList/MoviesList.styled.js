import styled from 'styled-components';

export const MovieListUl = styled.ul`
  margin-top: 10px;
  margin-left: 20px;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 20px;
  }
  @media screen and (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 20px;
  }
  @media screen and (min-width: 1240px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 20px;
  }
`;

export const Item = styled.div``;

