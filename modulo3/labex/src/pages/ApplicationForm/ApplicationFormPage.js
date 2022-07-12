import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToBack } from '../../routes/coordinator';
import { Background, Container, Form, Buttons } from './styles';

const ApplicationFormPage = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <Container>
        <h1>Inscreva-se para uma viagem inesquecível:</h1>
        <Form>
          <form>
            <input placeholder="Escolha uma viagem" />
            <input placeholder="Nome" />
            <input placeholder="Idade" />
            <input placeholder="Texto de candidatura" />
            <input placeholder="Profissão" />
            <input placeholder="Escolha um país" />
          </form>
          <Buttons>
            <button onClick={() => goToBack(navigate)}>Voltar</button>
            <button>Inscrever-se</button>
          </Buttons>
        </Form>
      </Container>
    </Background>
  );
};

export default ApplicationFormPage;
