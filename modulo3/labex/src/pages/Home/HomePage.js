import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToListTripsPage, goToLoginPage } from '../../routes/coordinator';
import { Background, Container, Buttons } from './styles';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <Container>
        <h1>Encontre novos horizontes com o Labe X</h1>
        <Buttons>
          <button onClick={() => goToListTripsPage(navigate)}>
            Ver Viagens
          </button>
          <button onClick={() => goToLoginPage(navigate)}>Administrador</button>
        </Buttons>
      </Container>
    </Background>
  );
};

export default HomePage;
