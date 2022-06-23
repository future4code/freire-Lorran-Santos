import React from "react";
import styled from "styled-components";
import Menu from "./components/Menu/Menu";

const Container = styled.div`
  * {
    margin: 0px;
    padding: 0px;
  }
  background-color: #000000;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
`;

const MenuLateral = styled.div`
  flex: 1;
`;

const Conteudo = styled.div`
  flex: 4;
  background-color: #2f2f2f;
`;

const ListaMenu = styled.ul`
  list-style: none;
  padding: 16px;
`;

const BotaoMenuLateral = styled.button`
  background-color: #00000000;
  color: #ffffff;
  font-size: 20px;
  margin: 5px 0px;
  padding: 4px;
  width: 100%;
  border: none;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`;

class App extends React.Component {
  state = {
    pagina: 0,
  };

  onClickInicio = () => {
    this.setState({ pagina: 0 });
  };
  onClickBuscar = () => {
    this.setState({ pagina: 1 });
  };
  onClickPlaylists = () => {
    this.setState({ pagina: 2 });
  };
  onClickCriarPlaylist = () => {
    this.setState({ pagina: 3 });
  };

  render() {
    const alteraPagina = () => {
      switch (this.state.pagina) {
        case 0:
          <App />
          break;
          case 1:
            
      
        default:
          break;
      }
    }
    return (
      <Container>
        <MenuLateral>
          <nav>
            <ListaMenu>
              <li>
                <BotaoMenuLateral onClick={this.onClickInicio}>
                  Início
                </BotaoMenuLateral>
              </li>
              <li>
                <BotaoMenuLateral onClick={this.onClickBuscar}>
                  Buscar
                </BotaoMenuLateral>
              </li>
              <li>
                <BotaoMenuLateral onClick={this.onClickPlaylists}>
                  Suas Playlists
                </BotaoMenuLateral>
              </li>
              <li>
                <BotaoMenuLateral onClick={this.onClickCriarPlaylist}>
                  Criar uma Playlist
                </BotaoMenuLateral>
              </li>
            </ListaMenu>
          </nav>
        </MenuLateral>
        <Conteudo>
          <h3>Teste</h3>
        </Conteudo>
      </Container>
    );
  }
}

export default App;
