import styled from "styled-components";

export const Cabecalho = styled.header`
  * {
    margin: 0px;
  }
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0px;
  font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
  button {
    background-color: #00000000;
    border: none;
    cursor: pointer;
  }
  h3:hover {
    color: #ffffff;
    transform: scale(1.3);
    transition: 0.3s;
    cursor: pointer;
  }
  h3 {
    padding: 8px;
  }
  h1 {
    padding: 0px 4px;
    border-radius: 4px;
    &:hover {
      transform: scale(1.3);
      transition: 0.3s;
    }
  }
  @media (max-width: 400px) {
    h1:hover {
      transform: none;
      transition: none;
    }
    h1:active {
      transform: scale(1.3);
    }
  }
  span {
    color: #ffffff;
    font-family: "Rubik Moonrocks", Arial, Helvetica, sans-serif;
  }

  @media (max-width: 400px) {
    padding: 4px 0px 20px 0px;
    h3:hover {
      transform: none;
      transition: none;
    }
    h3:active {
      transform: scale(1.3);
    }
  }
`;
