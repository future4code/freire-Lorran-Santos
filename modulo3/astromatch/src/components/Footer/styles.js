import styled from "styled-components";

export const Icones = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 100%;
  button {
    background-color: #00000000;
    border: none;
    border-radius: 50%;
    box-shadow: 0px 0px 10px #fff;
  }
  p {
    font-size: 60px;
    color: #ff261b;
    padding: 0px 16px;
  }
  button:hover {
    cursor: pointer;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px #000;
    transform: scale(1.3);
    transition: 0.3s;
  }
`;
