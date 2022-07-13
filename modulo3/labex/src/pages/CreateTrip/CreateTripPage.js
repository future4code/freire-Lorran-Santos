import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToBack } from '../../routes/coordinator';
import { Background, Container, Form, Buttons } from './styles';

const TripDetailsPage = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <Container>
        <h1>Criar Viagem</h1>
        <Form>
          <form>
            <input placeholder='Nome'/>
            <input placeholder='Escolha um Planeta'/>
            <input placeholder='dd / mm / aa'/>
            <input placeholder='Descrição'/>
            <input placeholder='Duração em dias'/>
          </form>
        </Form>
        <Buttons>
          <button onClick={() => goToBack(navigate)}>Voltar</button>
          <button>Criar</button>
        </Buttons>
      </Container>
    </Background>
  );
};

export default TripDetailsPage;
