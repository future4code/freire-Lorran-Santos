import styled from 'styled-components';

export const Card = styled.div`
  width: 25%;
  min-width: 150px;
  max-width: 200px;
  padding: 0px;
  img {
    max-width: 100%;
    border-radius: 4px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    font-weight: bold;
    color: #646464;
  }
`;

export const ButtonCard = styled.button`
  background-color: #00000000;
  border: none;
  text-align: left;
`;
