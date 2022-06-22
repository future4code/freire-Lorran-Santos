import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const Inputs = styled.input`
  padding: 8px;
  width: 60%;
  border: none;
  border-radius: 4px;
  margin: 0px auto;
`;

const Botao = styled.button`
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  margin-bottom: 10px;
`;

class CadastrarUsuario extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
    usuarios: [],
  };

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUser = async () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    // axios
    // .post(
    //   "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    //   body,
    //   { headers: { Authorization: "lorran-santos-freire" } }
    // )
    //   .then((response) => {
    // this.setState({
    //   usuarios: response.data,
    //   inputNome: "",
    //   inputEmail: "",
    // });
    //     alert("Usuário cadastrado com sucesso!");
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    // console.log(error.response.data);
    //   });

    try {
      const resposta = await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        { headers: { Authorization: "lorran-santos-freire" } }
      );
      this.setState({
        usuarios: resposta.data,
        inputNome: "",
        inputEmail: "",
      });
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.log(error.resposta.data);
    }
  };

  render() {
    return (
      <ContainerInputs>
        <Inputs
          value={this.state.inputNome}
          onChange={this.onChangeInputNome}
          placeholder="Nome"
        />
        <Inputs
          value={this.state.inputEmail}
          onChange={this.onChangeInputEmail}
          placeholder="Email"
        />
        <Botao onClick={this.createUser}>Adicionar Usuário</Botao>
      </ContainerInputs>
    );
  }
}

export default CadastrarUsuario;
