import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
`;
export const FotoPerfil = styled.img`
  box-sizing: border-box;
  max-width: 300px;
  max-height: 300px;
`;

export const IdadePerfil = styled.span`
  font-size: 16px;
`;

export const Botoes = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    padding: 4px 8px;
  }
`;
