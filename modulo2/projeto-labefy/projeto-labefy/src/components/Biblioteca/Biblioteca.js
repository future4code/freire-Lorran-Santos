import React from "react";
import styled from "styled-components";
import axios from "axios";

class Biblioteca extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount = () => {
    this.pegarPlaylists();
  };

  pegarPlaylists = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    try {
      const resposta = await axios.get(url, {
        headers: { Authorization: "lorran-santos-freire" },
      });
      this.setState({ playlists: resposta.data.result.list });
    } catch (error) {
      console.log(error.resposta.data);
    }
  };

  deletarPlaylists = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    try {
      const resposta = await axios.delete(url, {
        headers: { Authorization: "lorran-santos-freire" },
      });
      this.pegarPlaylists();
    } catch (error) {
      console.log(error.resposta.data);
    }
  };

  render() {
    const renderizaPlaylist = this.state.playlists.map((item) => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <button
            value={item.id}
            onClick={() => this.deletarPlaylists(item.id)}
          >
            Deletar
          </button>
        </div>
      );
    });
    return (
      <div>
        <h1>Biblioteca</h1>
        {renderizaPlaylist}
      </div>
    );
  }
}

export default Biblioteca;
