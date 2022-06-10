import React from "react";
import styled from "styled-components";
import iconeEnviar from "../img/icone-enviar.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  background-color: #128c7e;
  padding: 10px;
  box-shadow: 0px 0px 3px #000000;
  &:hover {
    background-color: #25d366;
  }
`;

const IconeEnviar = styled.img`
  width: 20px;
  height: 20px;
`;

const ContainerMensagem = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  width: 25%;
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 10px;
  word-wrap: break-word;
  text-align: left;
`;

const Usuario = styled.p`
  color: #9aac8c;
  font-size: 0.8em;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 0.2em;
`;

const MensagemDoUsuario = styled.p`
  padding: 0px;
  margin: 0px;
`;

const ContainerMensagemEu = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  width: 25%;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  word-wrap: break-word;
  text-align: right;
  align-self: flex-end;
`;

class InputsUsuario extends React.Component {
  state = {
    usuario: [],
    inputNome: "",
    inputMensagem: "",
  };

  onChangeInputUsuario = (event) => {
    this.setState({ inputNome: event.target.value });
    console.log();
  };

  onChangeInputMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value });
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      nome: this.state.inputNome,
      mensagem: this.state.inputMensagem,
    };
    const mensagemNova = [...this.state.usuario, novaMensagem];
    this.setState({ usuario: mensagemNova, inputNome: "", inputMensagem: "" });
  };

  render() {
    const mensagemAtualizada = this.state.usuario.map((usuario) => {
      if (usuario.nome.toLowerCase() === "eu") {
        return (
          <ContainerMensagemEu key={Math.random()}>
            <MensagemDoUsuario>{usuario.mensagem}</MensagemDoUsuario>
          </ContainerMensagemEu>
        );
      } else {
        return (
          <ContainerMensagem key={Math.random()}>
            <Usuario>{usuario.nome}:</Usuario>
            <MensagemDoUsuario>{usuario.mensagem}</MensagemDoUsuario>
          </ContainerMensagem>
        );
      }
    });

    return (
      <Container>
        {mensagemAtualizada}
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
          <BotaoEnviar type="submit" onClick={this.adicionaMensagem}>
            <IconeEnviar src={iconeEnviar} />
          </BotaoEnviar>
        </ContainerInputs>
      </Container>
    );
  }
}

export default InputsUsuario;
