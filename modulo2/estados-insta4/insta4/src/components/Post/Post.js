import React from "react";
import styled from "styled-components";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import iconeSalvarBranco from "../../img/salvarBranco.png";
import iconeSalvarPreto from "../../img/salvarPreto.png";
import iconeCompartilhar from "../../img/compartilhar.png";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhar: false,
  };

  onClickCurtida = () => {
    if (this.state.curtido === false) {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1,
      });
      console.log("Curtiu!");
    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1,
      });
      console.log("Descurtiu!");
    }
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  onClickSalvar = () => {
    if (this.state.salvo === false) {
      this.setState({
        salvo: true,
      });
    } else {
      this.setState({
        salvo: false,
      });
    }
  };
  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar,
    });
  }

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let iconeSalvar;

    if (this.state.salvo) {
      iconeSalvar = iconeSalvarPreto;
    } else {
      iconeSalvar = iconeSalvarBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
          <IconeComContador
            icone={iconeCompartilhar}
            onClick={this.onClickCompartilhar}
          />
          <IconeComContador
            icone={iconeSalvar}
            onClickIcone={this.onClickSalvar}
          />
        </PostFooter>

        {componenteComentario}
      </PostContainer>
    );
  }
}

export default Post;
