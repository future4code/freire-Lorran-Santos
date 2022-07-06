import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ListaMatches,
  ContainerMatches,
  FotoMatch,
  ItemLista,
  BotaoLimpaMatch,
} from "./styles";

const Matches = () => {
  const [matches, setMatches] = useState([]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lorran-santos-freire/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      });
  };

  const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lorran-santos-freire/clear"
      )
      .then(getMatches());
  };

  useEffect(() => {
    getMatches();
  }, []);

  const listaDeMatches = matches.map((item) => {
    return (
      <ListaMatches>
        <ItemLista>
          <FotoMatch src={item.photo} />
          {item.name}
        </ItemLista>
      </ListaMatches>
    );
  });

  return (
    <ContainerMatches>
      {listaDeMatches.length >= 1 ? (
        listaDeMatches
      ) : (
        <h3>Você ainda não fez match com ninguém</h3>
      )}
      <BotaoLimpaMatch>
        <button onClick={clear}>Limpar Matches</button>
      </BotaoLimpaMatch>
    </ContainerMatches>
  );
};

export default Matches;
