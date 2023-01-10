import styled from 'styled-components';

export const InputBox = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  @media screen and (min-width: 480px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }
  display: flex;
  margin-top: 15px;
  margin-left: 30px;
  border-radius: 5px;
`;

export const Input = styled.input`
  border-radius: 5px;
  width: 200px;
  height: 40px;
  padding: 0;
`;

export const InputBtn = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background: rgba(247, 40, 40, 0.68);
  color: #fff;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
  :hover {
    color: orangered;
    background: rgba(247, 40, 40, 0.17);
  }
`;
