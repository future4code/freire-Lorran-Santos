import React from "react";
import {
  Imagem,
  PerfilCompleto,
  Descricao,
  NomeIdade,
  Icones,
  Container,
} from "./styles";
import { TiDeleteOutline, TiHeartFullOutline } from "react-icons/ti";
import Footer from "../Footer/Footer";

const Home = (props) => {
  return (
    <Container>
      <PerfilCompleto>
        <Imagem src={props.foto} />
        <Descricao>
          <NomeIdade>
            <h3>{props.nome},</h3>
            <p>{props.idade}</p>
          </NomeIdade>
          <p>{props.bio}</p>
        </Descricao>
      </PerfilCompleto>
      {/* <Icones>
        <button onClick={props.botao}>
          <TiDeleteOutline size="80px" color="red" />
        </button>
        <button onClick={props.botaoMatch}>
          <TiHeartFullOutline size="80px" color="green" />
        </button>
      </Icones> */}
      <Footer botao={props.botao} botaoMatch={props.botaoMatch} />
    </Container>
  );
};
export default Home;
