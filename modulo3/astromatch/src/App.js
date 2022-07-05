import "./App.css";
import styled from "styled-components";
import Card from "./componentes/Card/Card";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
  border-radius: 8px;
  width: 40vw;
  height: 60vh;
  max-width: 600px;
`;
function App() {
  return (
    <Background>
      <Container>
        <h3>Astromatch</h3>
        <Card />
      </Container>
    </Background>
  );
}

export default App;
