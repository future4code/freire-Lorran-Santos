import React from "react";
import axios from "axios";
import styled from "styled-components";

class Playlists extends React.Component {
  state = {
    playlists: [],
    inputNomePlaylist: "",
  };

  onChangeinputNomePlaylist = (event) => {
    this.setState({ inputNomePlaylist: event.target.value });
    console.log(this.state.inputNomePlaylist);
  };

  criarPlaylist = async () => {
    const body = {
      name: this.state.inputNomePlaylist,
    };
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    try {
      const resposta = await axios.post(url, body, {
        headers: { Authorization: "lorran-santos-freire" },
      });
      this.setState({
        playlists: resposta.data,
        inputNomePlaylist: "",
      });
      alert("Playlist criada com sucesso!");
    } catch (error) {
      console.log(error.resposta.data);
    }
  };

  render() {
    return (
      <div>
        <h1>Crie sua playlist</h1>
        <input
          value={this.inputNomePlaylist}
          onChange={this.onChangeinputNomePlaylist}
        />
        <button onClick={this.criarPlaylist}>Criar Playlist</button>
      </div>
    );
  }
}

export default Playlists;
