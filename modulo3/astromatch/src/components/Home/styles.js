import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 400px) {
    gap: 40px;
  }
`;
export const PerfilCompleto = styled.div`
  position: relative;
  box-shadow: 0px 0px 10px #000000;
  border-radius: 8px;
  @media (max-width: 400px) {
    width: 300px;
    display: flex;
  }
  
  animation-name: slide;
  animation-duration: 2s;
  @keyframes slide {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const Imagem = styled.img`
  width: 400px;
  height: 500px;
  border-radius: 8px;
  @media (max-width: 400px) {
    width: 300px;
    height: 450px;
  }
`;

export const Descricao = styled.div`
  position: absolute;
  background-image: linear-gradient(#00000000, #000000);
  bottom: 0px;
  z-index: 2;
  height: 30%;
  text-align: left;
  padding: 20px;
  width: 90%;
  border-radius: 8px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    width: 260px;
  }
`;

export const NomeIdade = styled.div`
  display: flex;
  gap: 8px;
  font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
  h3 {
    font-size: 32px;
  }
  p {
    font-size: 24px;
  }
`;

export const Icones = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
