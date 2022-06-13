import React from "react";
import styled from "styled-components";

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 250px;
`
const Label = styled.label`
  margin: 20px 0px;
  text-align: left;
`


class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Etapa 1 - Dados gerais</h2>
        <Formulario action="#">
          <Label htmlFor="nome">1. Qual o seu nome?</Label>
          <input type="text" id="nome" />

          <Label htmlFor="idade">2. Qual sua idade?</Label>
          <input type="text" id="idade" />

          <Label htmlFor="email">3. Qual seu email?</Label>
          <input type="text" id="email" />

          <Label htmlFor="escolaridade">4. Qual a sua escolaridade?</Label>
          <select name="escolaridade" id="escolaridade">
            <option value="medioIncompleto">Ensino Médio Incompleto</option>
            <option value="medioCompleto">Ensino Médio Completo</option>
            <option value="superiorIncompleto">Ensino Superior Incompleto</option>
            <option value="superiorCompleto">Ensino Superior Completo</option>
          </select>
        </Formulario>
      </div>
    );
  }
}

export default Etapa1;
