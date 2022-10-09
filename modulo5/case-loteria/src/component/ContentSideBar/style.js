import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 0px;
  left: 2%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  h1 {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  img {
    width: 46px;
  }
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  background-color: #ffffff;
`;

export const ContainerSorteio = styled.div`
  top: 50%;
  transform: translate(-50%);
  right: 0px;
  max-width: 800px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  margin: 0 40px;
  gap: 20px;
  justify-content: center;
  color: black;
  margin: 0px 40px;
  @media (min-width: 912px) {
    margin-right: 100px;
  }
  p {
    font-weight: bold;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 90px;
    height: 90px;
    border-radius: 50px;
    @media (min-width: 912px) {
      width: 75px;
      height: 75px;
    }
  }
`;
