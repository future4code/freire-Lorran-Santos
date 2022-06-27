import React from "react";
import styled from "styled-components";
import Biblioteca from "../Biblioteca/Biblioteca";
import Buscar from "../Buscar/Buscar";
import Home from "../Home/Home";
import Playlists from "../Playlists/Playlists";

const Container = styled.div`
  display: flex;
  * {
    margin: 0px;
    padding: 0px;
  }
`;

const MenuLateral = styled.nav`
  flex: 1;
`;

const ListaMenu = styled.ul`
  font-size: 20px;
  list-style: none;
  padding: 16px;
  line-height: 1.6;
`;
const ItemLista = styled.li`
  &:hover {
    cursor: pointer;
  }
`;

const Principal = styled.div`
  background-image: linear-gradient(#81b71a, #000000);
  flex: 6;
  min-height: 100vh;
  padding: 20px;
`;

class Menu extends React.Component {
  state = {
    pagina: 1,
  };

  onClickInicio = () => {
    this.setState({ pagina: 1 });
  };
  onClickBuscar = () => {
    this.setState({ pagina: 2 });
  };
  onClickBiblioteca = () => {
    this.setState({ pagina: 3 });
  };
  onClickCriarPlaylist = () => {
    this.setState({ pagina: 4 });
  };

  alteraPagina = () => {
    switch (this.state.pagina) {
      case 1:
        return <Home />;
      case 2:
        return <Buscar />;
      case 3:
        return <Biblioteca />;
      case 4:
        return <Playlists />;
      default:
        break;
    }
  };

  render() {
    return (
      <Container>
        <MenuLateral>
          <ListaMenu>
            <ItemLista onClick={this.onClickInicio}>Início</ItemLista>
            <ItemLista onClick={this.onClickBuscar}>Buscar</ItemLista>
            <ItemLista onClick={this.onClickBiblioteca}>Biblioteca</ItemLista>
            <ItemLista onClick={this.onClickCriarPlaylist}>
              Criar Playlist
            </ItemLista>
          </ListaMenu>
        </MenuLateral>
        <Principal>{this.alteraPagina()}</Principal>
      </Container>
    );
  }
}

export default Menu;
