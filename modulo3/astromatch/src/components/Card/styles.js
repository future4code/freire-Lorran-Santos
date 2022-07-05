import styled from "styled-components";

export const Container = styled.div`
  * {
    margin: 0px;
    padding: 0px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  text-align: center;
  width: 500px;
  height: 720px;
  border: 2px solid #000000;
  border-radius: 8px;
`;

export const PerfilCompleto = styled.div`
  position: relative;
  box-shadow: 0px 0px 10px #000000;
  border-radius: 8px;
`;
export const Imagem = styled.img`
  width: 400px;
  height: 500px;
  border-radius: 8px;
`;

export const Descricao = styled.div`
  position: absolute;
  background-image: linear-gradient(#00000000, #000000);
  bottom: 0px;
  z-index: 2;
  width: 90%;
  height: 30%;
  text-align: left;
  padding: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 18px;
  }
`;

export const NomeIdade = styled.div`
  display: flex;
  gap: 8px;
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
  .semMatch {
  }
`;
