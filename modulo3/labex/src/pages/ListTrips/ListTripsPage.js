import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, Container, Buttons } from './styles';

const ListTripsPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  const goToApplicationFormPage = () => {
    navigate('/applicationFormPage');
  };

  return (
    <Background>
      <Container>
        <Buttons>
          <button onClick={goToApplicationFormPage}>Inscrever-se</button>
          <button onClick={goToHomePage}>Início</button>
        </Buttons>

        <h1>Para vermos todas as viagens</h1>
      </Container>
    </Background>
  );
};

export default ListTripsPage;
