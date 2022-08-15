import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goToAdminHomePage, goToBack, goToTripDetails } from '../../routes/coordinator';
import { Background, Container, Form, Buttons } from './styles';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    setEmail('');
    setPassword('');
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/lorran/login',
        body
      )
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        goToAdminHomePage(navigate);
      })
      .catch((err) => {
        console.log('Deu errado', err.data);
      });
  };

  return (
    <Background>
      <Container>
        <h1>Login</h1>
        <Form>
          <form>
            <input
              value={email}
              onChange={onChangeEmail}
              type="email"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={onChangePassword}
              type="password"
              placeholder="Senha"
            />
          </form>
          <Buttons>
            <button onClick={() => goToBack(navigate)}>Voltar</button>
            {/* <button onClick={() => goToAdminHomePage(navigate)}>Entrar</button> */}
            <button onClick={onSubmitLogin}>Entrar</button>
          </Buttons>
        </Form>
      </Container>
    </Background>
  );
};

export default LoginPage;
