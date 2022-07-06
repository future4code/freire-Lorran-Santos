import styled from "styled-components";

export const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0px;
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
  }
  span {
    color: #ffffff;
  }
`;
