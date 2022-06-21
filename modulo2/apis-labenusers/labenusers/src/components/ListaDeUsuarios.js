import React from "react";
import axios from "axios";

class ListaDeUsuarios extends React.Component {
  state = {
    usuarios: [],
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
        <p key={item.id}>
          {item.name}
          <button value={item.id} onClick={() => this.deleteUser(item.id)}>
            Deletar
          </button>
        </p>
      );
    });
    return <div>{renderizaUsuarios}</div>;
  }
}
export default ListaDeUsuarios;
