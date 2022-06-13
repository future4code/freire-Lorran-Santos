import React from "react";
import styled from "styled-components";

const Pergunta = styled.label`
line-height: 3;
`
class PerguntaOpcoes extends React.Component {
  render() {
    return (
      <div>
        <Pergunta htmlFor={this.props.nome}>{this.props.pergunta}</Pergunta>
        <select name={this.props.nome} id={this.props.nome}>
          <option>{this.props.opcoes[0]}</option>
          <option>{this.props.opcoes[1]}</option>
          <option>{this.props.opcoes[2]}</option>
          <option>{this.props.opcoes[3]}</option>
        </select>
      </div>
    );
  }
}

export default PerguntaOpcoes;
