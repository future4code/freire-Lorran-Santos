import React from 'react';
import logo from '../../img/logo.jpg';
import { ContainerLogin, LogoImage, Divider } from './styles';
import LoginForm from './LoginForm';
import { Button } from '@mui/material';

const LoginPage = () => {
  return (
    <ContainerLogin>
      <LogoImage src={logo} />
      <LoginForm />
    </ContainerLogin>
  );
};

export default LoginPage;
