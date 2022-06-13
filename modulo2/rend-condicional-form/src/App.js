import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0px auto;
  align-content: center;
  text-align: center;
`;
const Botao = styled.button`
  width: 150px;
  margin: 20px auto;
`;

class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        break;
    }
  };

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <Container>
        {this.renderizaEtapa()}
        {this.state.etapa < 4 ? (
          <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>
        ) : (
          ""
        )}
      </Container>
    );
  }
}

export default App;
