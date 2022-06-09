import React from "react";
import styled from "styled-components";

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
  };


  render() {
    const postDoFeed = this.state.pessoas.map((pessoa) => {
      return (
        <div>
          {pessoa.foto} {pessoa.nome}
        </div>
      )
    })
    return (
      <div>
        {postDoFeed}
      </div>
    )
  }
}

export default Feed