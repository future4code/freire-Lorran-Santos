import React from "react";
import "./App.css";
import axios from "axios";
import UsersList from "./components/ListaDeUsuarios";
import CadastrarUsuario from "./components/CadastrarUsuario";
import ListaDeUsuarios from "./components/ListaDeUsuarios";

class App extends React.Component {
  state = {
    pagina: true,
  };
  onClickPagina = () => {
    this.setState({ pagina: !this.state.pagina });
    console.log(this.state.pagina);
  };

  render() {
    const renderizarTela = this.state.pagina ? (
      <CadastrarUsuario />
    ) : (
      <ListaDeUsuarios />
    );

    return (
      <div className="App">
        {renderizarTela}
        <button onClick={this.onClickPagina}>
          {this.state.pagina
            ? "Ir Para Lista de Usuarios"
            : "Voltar para cadastro"}
        </button>
      </div>
    );
  }
}

export default App;
