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

export const Form = styled.div`
  form {
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  select {
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 4px #000000;
    padding: 8px 16px;
    margin: 8px auto;
    width: 60%;
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
