import React from "react";
import styled from "styled-components";

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0px auto;
  text-align: center;
`
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


class Etapa3 extends React.Component {
  render() {
    return (
      <Conteiner>
        <h2>Etapa 3 - Informações Gerais de Ensino</h2>
        <Formulario action="#">
          <Label htmlFor="curso">5. Porque você não terminou um curso de graduação?</Label>
          <input type="text" id="curso" />

          <Label htmlFor="complementar">6. Você fez algum curso complementar?</Label>
          <select name="complementar" id="complementar">
            <option value="tecnico">Curso técnico</option>
            <option value="ingles">Cursos de inglês</option>
            <option value="nenhum">Não fiz nenhum curso complementar</option>
          </select>
        </Formulario>
      </Conteiner>
    );
  }
}

export default Etapa3;
