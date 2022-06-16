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

class Etapa2 extends React.Component {
  render() {
    return (
      <Conteiner>
        <h2>Etapa 2 - Informações do Ensino Superior</h2>
        <Formulario action="#">
          <Label htmlFor="curso">5. Qual curso?</Label>
          <input type="text" id="curso" />

          <Label htmlFor="instituicao">2. Qual a unidade de ensino?</Label>
          <input type="text" id="instituicao" />
        </Formulario>
      </Conteiner>
    );
  }
}

export default Etapa2;
