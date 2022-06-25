import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerLista = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  text-align: center;
  background-color: #1f1f1f;
  margin: 10px;
  border-radius: 4px;
`;

const Botao = styled.button`
  padding: 4px;
  border: none;
  border-radius: 4px;
`;

const Container = styled.div`
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

  getAllUsers = async () => {
    // axios
    //   .get(
    //     "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    //     { headers: { Authorization: "lorran-santos-freire" } }
    //   )
    //   .then((response) => {
    //     this.setState({ usuarios: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //   });
    try {
      const resposta = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        { headers: { Authorization: "lorran-santos-freire" } }
      );
      this.setState({ usuarios: resposta.data });
    } catch (error) {
      console.log(error.resposta.data);
    }
  };

  deleteUser = async (id) => {
    // axios
    // .delete(
    //   `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    //   { headers: { Authorization: "lorran-santos-freire" } }
    // )
    // .then(() => {
    // this.getAllUsers();
    // alert("Usuário deletado com sucesso");
    // });

    try {
      const resposta = await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        { headers: { Authorization: "lorran-santos-freire" } }
      );
      this.getAllUsers();
      alert("Usuário deletado com sucesso");
    } catch (error) {
      this.getAllUsers();
      alert("Usuário deletado com sucesso");
    }
  };

  render() {
    const renderizaUsuarios = this.state.usuarios.map((item) => {
      return (
        <ContainerLista key={item.id}>
          <p>{item.name}</p>
          <Botao value={item.id} onClick={() => this.deleteUser(item.id)}>
            Deletar
          </Botao>
        </ContainerLista>
      );
    });
    return <Container>{renderizaUsuarios}</Container>;
  }
}
export default ListaDeUsuarios;
