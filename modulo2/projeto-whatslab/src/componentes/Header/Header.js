import React from "react";
import iconeMenu from "../../img/icone-menu.png"
import styled from "styled-components";

const HeaderFreire = styled.div`
background-color: #128c7e;
padding: 20px;
display: flex;
align-items: center;
color: #ffffff;
justify-content: space-between;
`

const ImagemGrupoNome = styled.div`
display: flex;
align-items: center;
gap: 16px;
`

const NomeDoGrupo = styled.h2`
  margin: 0px;
  padding: 0px;
  font-size: 24px;
`

const IconeGrupo = styled.img`
width: 60px;
border-radius: 50%;
`

const MenuDoGrupo = styled.img`
width: 32px;
height: 32px;
`


class Header extends React.Component {
  render(){
    return(
      <HeaderFreire>
        <ImagemGrupoNome>
          <IconeGrupo src={'https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj'} />
        <NomeDoGrupo>Turma Freire - Labenu</NomeDoGrupo>
        </ImagemGrupoNome>
        <MenuDoGrupo src={iconeMenu} />
      </HeaderFreire>
    )
  }
}

export default Header