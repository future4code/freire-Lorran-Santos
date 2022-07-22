import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(#050040, #6200c3);
  color: #ffffff;
`;

export const Container = styled.div`
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  width: 90%;
  h1 {
    text-align: center;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  button {
    color: #ffffff;
    background-color: #03008d;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    box-shadow: 0px 0px 4px #000000;
  }
`;

export const ContainerTrip = styled.div`
  line-height: 1.3;
  width: 70vw;
  margin: 16px auto;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px #000000;
  padding: 0px 12px;
  span {
    font-weight: bold;
  }
  p {
    margin: 12px;
  }
`
