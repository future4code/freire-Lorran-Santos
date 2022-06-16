import React from 'react';
import styled from 'styled-components'
import Feed from './components/Feed/Feed';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Feed />
      </MainContainer>
    );
  }
}

export default App;
