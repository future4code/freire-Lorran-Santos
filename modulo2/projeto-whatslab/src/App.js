import styled from "styled-components";
import Header from "./componentes/Header/Header";
import InputsUsuario from "./componentes/InputsUsuario";

const ContainerApp = styled.div`
  text-align: center;
  box-sizing: border-box;
  max-width: 600px;
  border: 1px solid #000000;
  margin: 0px auto;
  height: 100vh;
  /* background-color: #afafaf; */
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
`;

const Footer = styled.div`
  text-align: center;
  box-sizing: border-box;
  max-width: 600px;
  position: absolute;
  bottom: 0px;
`;

function App() {
  return (
    <ContainerApp>
      <Header />
      <Footer>
        <InputsUsuario />
      </Footer>
    </ContainerApp>
  );
}

export default App;
