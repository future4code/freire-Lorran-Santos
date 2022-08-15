import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-image: linear-gradient(#050040, #6200c3);
  color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  text-align: center;
`;

export const Form = styled.div`
  width: 100%;
  text-align: center;
  form {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  select {
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 4px #000000;
    padding: 8px 16px;
    margin: 8px auto;
    width: 60vw;
  }
  input {
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 4px #000000;
    padding: 8px 16px;
    margin: 8px auto;
    width: 60%;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  button {
    color: #ffffff;
    background-color: #03008d;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    box-shadow: 0px 0px 4px #000000;
  }
`;
