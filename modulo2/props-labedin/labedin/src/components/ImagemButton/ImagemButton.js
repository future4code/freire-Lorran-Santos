import React from 'react';
import style from 'styled-components';

const ImageButtonContainer = style.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #3c3c3c;
border-radius: 50px;
width: 200px;
padding: 15px 30px;
margin: 10px auto;
background-color: #3c3c3c;
`

const Image = style.img`
width: 30px;
margin-right: 10px;
`

const Text = style.p`
color: #ffffff
`

function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <Image src={ props.imagem }/>
            <Text>{ props.texto }</Text>
        </ImageButtonContainer>

    )
}

export default ImagemButton;