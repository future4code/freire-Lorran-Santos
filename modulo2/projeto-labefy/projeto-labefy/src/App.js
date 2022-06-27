import React from "react";
import styled from "styled-components";
import Biblioteca from "./components/Biblioteca/Biblioteca";
import Buscar from "./components/Buscar/Buscar";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";

const Container = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: #000000;
  color: #ffffff;
  min-height: 100vh;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Menu />
      </Container>
    );
  }
}

export default App;
