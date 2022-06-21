import React from "react";
import "./App.css";
import CadastrarUsuario from "./components/CadastrarUsuario";
import ListaDeUsuarios from "./components/ListaDeUsuarios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 50vh;
  margin: 0px auto;
  align-items: center;
  background-color: #3f3f3f;
`
const Botao = styled.button`
padding: 4px 8px;
border: none;
border-radius: 4px;
`

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
      <Container>
        {renderizarTela}
        <Botao onClick={this.onClickPagina}>
          {this.state.pagina
            ? "Ir Para Lista de Usuarios"
            : "Voltar para cadastro"}
        </Botao>
      </Container>
    );
  }
}

export default App;
