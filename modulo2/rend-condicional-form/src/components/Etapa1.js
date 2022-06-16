import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 250px;
`;

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Etapa 1 - Dados gerais</h2>
        <Formulario action="#">
          <PerguntaAberta nome="nome" pergunta="1. Qual seu nome?" />
          <PerguntaAberta nome="idade" pergunta="2. Qual sua idade?" />
          <PerguntaAberta nome="email" pergunta="3.Qual seu email?" />

          <PerguntaOpcoes
            nome="escolaridade"
            pergunta="4. Qual a sua escolaridade?"
            opcoes={[
              "Ensino médio incompleto",
              "Ensino médio completo",
              "Ensino superior incompleto",
              "Ensino superior completo",
            ]}
            />
        </Formulario>
      </div>
    );
  }
}

export default Etapa1;
