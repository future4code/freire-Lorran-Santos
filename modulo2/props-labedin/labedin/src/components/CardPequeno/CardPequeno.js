import React from "react";
import style from "styled-components";

const SmallCardContainer = style.div`
display: flex;
border: 1px solid #000000;
border-radius: 4px;
margin-bottom: 10px;
align-items: center;
padding: 10px;
`;

const Image = style.img`
width: 50px;
margin-right: 20px;
`;

const Title = style.h4`
margin-right: 5px;
color: #afafaf;
`;

const Text = style.p`
color: #afafaf;
`

const CardPequeno = (props) => {
  return (
    <SmallCardContainer>
      <Image src={props.imagem} />
      <Title>{props.titulo}</Title>
      <Text>{props.texto}</Text>
    </SmallCardContainer>
  );
};

export default CardPequeno;
