import React from "react";
import axios from "axios";
import styled from "styled-components";

const Botao = styled.button`
  padding: 4px;
  border: none;
  border-radius: 4px;
  margin-left: 16px;
`;

const Teste = styled.div`
  width: 100%;
  text-align: center;
  color: #ffffff;
`;

class ListaDeUsuarios extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        { headers: { Authorization: "lorran-santos-freire" } }
      )
      .then((response) => {
        this.setState({ usuarios: response.data });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  deleteUser = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        { headers: { Authorization: "lorran-santos-freire" } }
      )
      .then(() => {
        this.getAllUsers();
        alert("Usuário deletado com sucesso");
      });
  };

  render() {
    const renderizaUsuarios = this.state.usuarios.map((item) => {
      return (
        <div>
          <p key={item.id}>
            {item.name}
            <Botao value={item.id} onClick={() => this.deleteUser(item.id)}>
              Deletar
            </Botao>
          </p>
        </div>
      );
    });
    return <Teste>{renderizaUsuarios}</Teste>;
  }
}
export default ListaDeUsuarios;
