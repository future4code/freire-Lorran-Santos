import React from "react";
import styled from "styled-components";

const ListaMenu = styled.ul`
  font-size: 20px;
  list-style: none;
  padding: 16px;
  line-height: 1.6;
`;

class Menu extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ListaMenu>
            <li>Início</li>
            <li>Buscar</li>
            <li>Suas Playlists</li>
            <li>Criar uma Playlist</li>
          </ListaMenu>
        </nav>
      </div>
    );
  }
}

export default Menu;
