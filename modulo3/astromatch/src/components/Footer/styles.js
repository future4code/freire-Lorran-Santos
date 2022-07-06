import styled from "styled-components";

export const Icones = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 100%;
  button {
    background-color: #00000000;
    border: 1px solid #6c186d;
    border-radius: 50%;
  }
  p {
    font-size: 60px;
    color: #ff261b;
    padding: 0px 16px;
  }
  button:hover {
    transform: scale(1.3);
    transition: 0.3s;
  }
`;
