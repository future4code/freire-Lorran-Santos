import React from "react";
import foto from "./img/foto-lorran.jpg";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import style from "styled-components";

const Container = style.body`
padding: 0px;
margin: 0px;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 30px;
background-color: #2f2f2f
`;

const SectionPage = style.div`
  width: 40vw;
  margin: 10px 0;
`;

const Title = style.h2`
display: flex;
justify-content: center;
margin-bottom: 20px;
`;

function App() {
  return (
    <Container>
      <SectionPage>
        <Title>Dados pessoais</Title>
        <CardGrande
          imagem={foto}
          nome="Lorran"
          descricao="Oi, eu sou o Lorran. Sou aluno da Labenu. Adoro aprender coisas novas relacionadas a tecnologia e programação."
        />

        <ImagemButton
          imagem="https://i.pinimg.com/originals/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/128/6805/6805971.png"
          titulo="Email:"
          texto="lorransantos99@outlook.com"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/128/6948/6948648.png"
          titulo="Endereço:"
          texto="Brasil - Rio Grande do Sul"
        />
      </SectionPage>

      <SectionPage>
        <Title>Experiências profissionais</Title>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5efbb5055f2478ba2bc322d0_icone_gif.gif"
          nome="Labenu"
          descricao="Formação em Desenvolvimento Front End"
        />

        <CardGrande
          imagem="https://img.icons8.com/color/480/nasa.png"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </SectionPage>

      <SectionPage>
        <Title>Minhas redes sociais</Title>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </SectionPage>
    </Container>
  );
}

export default App;
