import React from 'react';
import logo from '../../img/logo.jpg';
import { ContainerLogin, LogoImage } from './styles';
import LoginForm from './LoginForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = () => {
  useUnprotectedPage();
  return (
    <ContainerLogin>
      <LogoImage src={logo} />
      <LoginForm />
    </ContainerLogin>
  );
};

export default LoginPage;
