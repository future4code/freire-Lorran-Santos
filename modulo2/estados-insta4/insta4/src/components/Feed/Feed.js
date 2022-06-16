import React from "react";
import styled from "styled-components";
import Post from "../Post/Post";

const ContainerFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const PostFeed = styled.div`
  border: 1px solid #000000;
  margin-bottom: 10px;
`;

const FeedHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const FotoUsuario = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const FotoFeed = styled.img`
  width: 100%;
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

class Feed extends React.Component {
  state = {
    pessoas: [
      {
        nome: "Lorran",
        foto: "https://picsum.photos/50/50?=a:1",
        fotoPost: "https://picsum.photos/200/150?=a:2",
      },
      {
        nome: "Fernanda",
        foto: "https://picsum.photos/50/50?=a:3",
        fotoPost: "https://picsum.photos/200/150?=a:4",
      },
      {
        nome: "Claudio",
        foto: "https://picsum.photos/50/50?=a:5",
        fotoPost: "https://picsum.photos/200/150?=a:6",
      },
    ],
    valorInputNome: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: "",
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoPerfil: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  adicionaPost = () => {
    const novoPost = {
      nome: this.state.valorInputNome,
      foto: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputFotoPost,
    };
    const postNovo = [novoPost, ...this.state.pessoas];
    this.setState({
      pessoas: postNovo,
      valorInputNome: "",
      valorInputFotoPerfil: "",
      valorInputFotoPost: "",
    });
  };

  render() {
    const postDoFeed = this.state.pessoas.map((pessoa) => {
      return (
        <Post
          key={pessoa.nome}
          nomeUsuario={pessoa.nome}
          fotoUsuario={pessoa.foto}
          fotoPost={pessoa.fotoPost}
        />
      );
    });
    return (
      <div>
        <ContainerInputs>
          <input
            placeholder={"Nome"}
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
          />
          <input
            placeholder={"Link foto do perfil"}
            value={this.state.valorInputFotoPerfil}
            onChange={this.onChangeInputFotoPerfil}
          />
          <input
            placeholder={"Link foto do post"}
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
          />
          <button onClick={this.adicionaPost}>Postar</button>
        </ContainerInputs>
        {postDoFeed}
      </div>
    );
  }
}

export default Feed;
