import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1290px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

export const Card = styled.div`
  width: 25%;
  min-width: 150px;
  max-width: 200px;
  img {
    max-width: 100%;
    border-radius: 4px;
  }
  h3 {
    font-size: 16px;
  }
  p{
    font-size: 14px;
    font-weight: bold;
    color: #646464;
  }
`;
