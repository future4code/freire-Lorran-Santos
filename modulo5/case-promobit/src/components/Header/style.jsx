import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 4px 10vw;
  background: #5c16c5;
  display: flex;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const ContainerTitle = styled.div`
  width: 13vw;
  max-width: 200px;
`;

export const SiteTitle = styled.button`
  color: #ffffff;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #00000000;
  border: none;
  gap: 32px;
  span {
    background-color: #ffffff;
    width: 6vw;
    height: 2vh;
    border-radius: 50px;
    min-width: 70px;
    max-width: 100px;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
