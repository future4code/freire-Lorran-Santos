import React from 'react';
import logo from '../../img/logo.jpg';
import { ContainerLogin, LogoImage } from './styles';
import SignupForm from './SignupForm';

const SignUpPage = () => {
  return (
    <ContainerLogin>
      <LogoImage src={logo} />
      <SignupForm />
    </ContainerLogin>
  );
};

export default SignUpPage;
