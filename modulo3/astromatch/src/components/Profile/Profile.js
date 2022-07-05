import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Profile = () => {
  const [perfil, setPerfil] = useState([]);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lorran/person"
      )
      .then((response) => {
        setPerfil(response.data.profile);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);
  return <Card 
  nome={perfil.name} 
  idade={perfil.age}
  foto={perfil.photo}
  bio={perfil.bio}
  />;
};

export default Profile;
