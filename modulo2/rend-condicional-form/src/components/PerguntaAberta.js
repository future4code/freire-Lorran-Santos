import React from "react";
import styled from "styled-components";

const Teste = styled.label`
line-height: 3;
`;

class PerguntaAberta extends React.Component {
  render() {
    return (
      <div>
        <Teste htmlFor={this.props.nome}>{this.props.pergunta}</Teste>
        <input type="text" id={this.props.nome} />
      </div>
    );
  }
}

export default PerguntaAberta;
