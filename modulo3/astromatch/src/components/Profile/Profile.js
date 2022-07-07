import axios from "axios";
import { useEffect, useState } from "react";
import Home from "../Home/Home";
import Loader from "../Loader/Loader";

const Profile = () => {
  const [perfil, setPerfil] = useState([]);
  const [loader, setLoader] = useState(false);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lorran-santos-freire/person"
      )
      .then((response) => {
        setLoader(true);
        setPerfil(response.data.profile);
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
        setLoader(true)
        getProfile();
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getProfile();
    }, 1000);
  }, []);

  return (
    <div>
      <Home
        nome={perfil.name}
        idade={perfil.age}
        foto={perfil.photo}
        bio={perfil.bio}
        botao={getProfile}
        botaoMatch={choosePerson}
      />
      {!loader && <Loader />}
      
    </div>
  );
};

export default Profile;
