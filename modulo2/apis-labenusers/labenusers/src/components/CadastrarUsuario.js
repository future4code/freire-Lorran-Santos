import React from "react";
import axios from "axios";
import ListaDeUsuarios from "./ListaDeUsuarios";

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

  createUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        { headers: { Authorization: "lorran-santos-freire" } }
      )
      .then((response) => {
        this.setState({ usuarios: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  render() {
    return (
      <div className="App">
        <input
          value={this.state.inputNome}
          onChange={this.onChangeInputNome}
          placeholder="Nome"
        />
        <input
          value={this.state.inputEmail}
          onChange={this.onChangeInputEmail}
          placeholder="Email"
        />
        <button onClick={this.createUser}>Adicionar Usuário</button>
      </div>
    );
  }
}

export default CadastrarUsuario;
