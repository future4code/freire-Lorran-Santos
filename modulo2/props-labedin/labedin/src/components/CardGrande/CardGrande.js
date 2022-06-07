import React from 'react';
import style from 'styled-components';

const BigcardContainer = style.div`
display: flex;
align-items: center;
border: 1px solid black;
border-radius: 4px;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
`

const Image = style.img`
width: 70px;
margin-right: 10px;
border-radius: 50%;
`

const Title = style.h4`
margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <BigcardContainer>
            <Image src={ props.imagem } />
            <div>
                <Title>{ props.nome }</Title>
                <p>{ props.descricao }</p>
            </div>
        </BigcardContainer>
    )
}

export default CardGrande;