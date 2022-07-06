import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Home from "../Home/Home";

const Profile = () => {
  const [perfil, setPerfil] = useState([]);
  const [match, setMatch] = useState([]);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lorran-santos-freire/person"
      )
      .then((response) => {
        setPerfil(response.data.profile);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const onClickTrocaPerfil = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lorran-santos-freire/person"
      )
      .then((response) => {
        setPerfil(response.data.profile);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const choosePerson = () => {
    const body = {
      id: perfil.id,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lorran-santos-freire/choose-person",
        body
      )
      .then(() => {
        getProfile();
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Home
      nome={perfil.name}
      idade={perfil.age}
      foto={perfil.photo}
      bio={perfil.bio}
      botao={onClickTrocaPerfil}
      botaoMatch={choosePerson}
    />
  );
};

export default Profile;
