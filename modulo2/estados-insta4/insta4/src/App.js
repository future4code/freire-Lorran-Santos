import React from 'react';
import styled from 'styled-components'
import Feed from './components/Feed/Feed';
import Post from './components/Post/Post';

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
        <Post
          nomeUsuario={'Lorran'}
          fotoUsuario={'https://picsum.photos/50/50?=a:1'}
          fotoPost={'https://picsum.photos/200/150?=a:2'}
        />
        <Post
          nomeUsuario={'Fernanda'}
          fotoUsuario={'https://picsum.photos/50/50?=a:3'}
          fotoPost={'https://picsum.photos/200/150?=a:4'}
        />
        <Post
          nomeUsuario={'Claudio'}
          fotoUsuario={'https://picsum.photos/50/50?=a:5'}
          fotoPost={'https://picsum.photos/200/150?=a:6'}
        />

        <Feed />
      </MainContainer>
    );
  }
}

export default App;
