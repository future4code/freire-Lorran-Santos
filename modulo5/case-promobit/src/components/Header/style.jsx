import styled from 'styled-components';

export const ContainerTitle = styled.div`
  width: 100%;
  padding: 4px 4px;
  background: #5c16c5;
  display: flex;
  justify-content: center;
`;

export const SiteTitle = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  gap: 16px;
  span {
    background-color: #ffffff;
    width: 6vw;
    height: 2vh;
    border-radius: 50px;
  }
`;

export const ContainerContent = styled.div`
  background-color: #2d0c5e;
  color: #ffffff;
  text-align: center;
  width: 100%;
  padding: 5vh 5vw;
  text-transform: uppercase;
  h2 {
    margin-bottom: 16px;
  }
`;

export const Categories = styled.div`
  padding-top: 16px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ButtonCategory = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #323232;
  padding: 8px 16px;
  background-color: #ffffff;
  cursor: pointer;
`;
