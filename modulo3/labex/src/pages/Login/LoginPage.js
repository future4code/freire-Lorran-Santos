import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToAdminHomePage, goToBack } from '../../routes/coordinator';
import { Background, Container, Form, Buttons } from './styles';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <Container>
        <h1>Login</h1>
        <Form>
          <form>
          <input placeholder="Email" />
          <input placeholder="Senha" />
        </form>
        <Buttons>
          <button onClick={() => goToBack(navigate)}>Voltar</button>
          <button onClick={() => goToAdminHomePage(navigate)}>Entrar</button>
        </Buttons>
        </Form>
        
      </Container>
    </Background>
  );
};

export default LoginPage;
