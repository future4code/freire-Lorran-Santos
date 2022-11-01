import SideBar from './component/SideBar/SideBar';
import GlobalState from './global/GlobalState';
import GlobalStyle from './global/GlobalStyle';
import { Container } from './style';

const App = () => {
  return (
    <div>
      <GlobalState>
        <GlobalStyle />
        <Container>
          <SideBar />
        </Container>
      </GlobalState>
    </div>
  );
};

export default App;
