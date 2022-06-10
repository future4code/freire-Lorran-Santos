import React from "react";
import styled from "styled-components";
import iconeEnviar from "../img/icone-enviar.png";

const ContainerInputs = styled.div`
  box-sizing: border-box;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
`;

const InputUsuario = styled.input`
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  width: 20%;
  box-shadow: 0px 0px 3px #000000;
`;

const InputMensagem = styled.input`
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  width: 60%;
  box-shadow: 0px 0px 3px #000000;
`;

const BotaoEnviar = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #25d366;
  padding: 10px;
  box-shadow: 0px 0px 3px #000000;
  &:hover {
    background-color: #128c7e;
  }
`;

const IconeEnviar = styled.img`
  width: 20px;
  height: 20px;
`;

class InputsUsuario extends React.Component {
  state = {
    usuario: [],
    inputNome: "",
    inputMensagem: "",
  };

  onChangeInputUsuario = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value });
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      nome: this.state.inputNome,
      mensagem: this.state.inputMensagem,
    };
    const adicionarMensagem = [...this.state.usuario, novaMensagem];
    this.setState({ usuario: adicionarMensagem });
  };

  render() {
    const mensagemAtualizada = this.state.usuario.map((usuario) => {
      return (
        <div>
          <p>{usuario.inputNome}</p>
          <p>{usuario.inputMensagem}</p>
        </div>
      );
    });
    return (
      <div>
        <ContainerInputs>
          <InputUsuario
            placeholder="Usuário"
            onChange={this.onChangeInputUsuario}
            value={this.state.inputNome}
            />
          <InputMensagem
            placeholder="Mensagem"
            onChange={this.onChangeInputMensagem}
            value={this.state.inputMensagem}
            />
          <BotaoEnviar onClick={this.adicionaMensagem}>
            <IconeEnviar src={iconeEnviar} />
          </BotaoEnviar>
        </ContainerInputs>
        {mensagemAtualizada}
      </div>
    );
  }
}

export default InputsUsuario;
