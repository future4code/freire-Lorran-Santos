import styled from "styled-components";

export const ListaMatches = styled.ul`
  list-style: none;
  text-align: left;
  font-size: 24px;
  display: flex;
`;

export const FotoMatch = styled.img`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
`;

export const ItemLista = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 75px;
  padding: 0px 4px;
  &:hover {
    background-color: #a624a8;
    border: none;
    border-radius: 4px;
    transition: 0.3s;
  }
`;

export const ContainerMatches = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 400px;
  height: 600px;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
  background-color: #6c186d;
`;

export const BotaoLimpaMatch = styled.div`
  position: absolute;
  bottom: 16px;
  display: flex;
  justify-content: center;
  width: 368px;
  button {
    padding: 4px 8px;
    border: none;
    border-radius: 4px;
    background-color: #a624a8;
    cursor: pointer;
  }
`;
