import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(#050040, #6200c3);
  color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
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

export const ContainerAdminTrips = styled.div`
  margin: 5vh auto;
  width: 90vw;
  text-align: center;
`;

export const CardTrip = styled.div`
  width: 100%;
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    width: 100%;
    text-align: left;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0px 0px 4px #000000;
    background-color: #03008d;
    color: #ffffff;
  }
`;

