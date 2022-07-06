import styled from "styled-components";

export const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0px;
  font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
  button {
    background-color: #00000000;
    padding: 8px;
    border: none;
    cursor: pointer;
  }
  h3:hover {
    color: #ffffff;
    transform: scale(1.3);
    transition: 0.3s;
    cursor: pointer;
  }
  h1 {
    padding: 0px 4px;
    border-radius: 4px;
    &:hover {
    box-shadow: 0px 9px 16px #000000;
    }
  }
  span {
    color: #ffffff;
    font-family: "Rubik Moonrocks", Arial, Helvetica, sans-serif;

  }
`;
