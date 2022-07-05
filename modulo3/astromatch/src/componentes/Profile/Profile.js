import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, FotoPerfil, IdadePerfil, Botoes } from "./style";

const Profile = () => {
  const [perfil, setPerfil] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lorran/person"
      );
      setPerfil(response.data.profile);
    } catch (error) {}
  };
  console.log(perfil);

  return (
    <Container>
      <h1>{perfil.name}</h1>
      <FotoPerfil src={perfil.photo} alt={perfil.photo_alt} />
      <h2>
        {perfil.name}, <IdadePerfil>{perfil.age}</IdadePerfil>
      </h2>
      <Botoes>
        <button>x</button>
        <button>v</button>
      </Botoes>
    </Container>
  );
};

export default Profile;
