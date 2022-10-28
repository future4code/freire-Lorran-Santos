import styled from 'styled-components';

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
