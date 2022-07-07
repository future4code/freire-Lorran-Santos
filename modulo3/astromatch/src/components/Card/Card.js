import { Container } from "./styles";
import { useState } from "react";
import Header from "../Header/Header";
import Matches from "../Matches/Matches";
import Profile from "../Profile/Profile";

const Card = () => {
  const [pagina, setPagina] = useState("home");

  const trocaDePagina = () => {
    switch (pagina) {
      case "home":
        return <Profile />;
      case "matches":
        return <Matches />;
      default:
        break;
    }
  };

  const irHome = () => {
    setPagina("home");
  };

  const irMatches = () => {
    setPagina("matches");
  };

  return (
    <Container>
      <Header home={irHome} matches={irMatches} />
      {trocaDePagina()}
    </Container>
  );
};

export default Card;
