import {
  Container,
  Imagem,
  PerfilCompleto,
  Descricao,
  NomeIdade,
  Icones,
} from "./styles";
import { TiDeleteOutline, TiHeartFullOutline } from "react-icons/ti";

const Card = (props) => {
  return (
    <Container>
      <h1>astromatch</h1>
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
      <Icones>
        <TiDeleteOutline size="80px" color="red"/>
        <TiHeartFullOutline size="80px" color="green"/>
      </Icones>
    </Container>
  );
};

export default Card;
