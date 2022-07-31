import React from 'react';
import logo from '../../img/logo.jpg';
import { ContainerSignup, LogoImage } from './styles';
import SignupForm from './SignupForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const SignUpPage = () => {
  useUnprotectedPage();
  return (
    <ContainerSignup>
      <LogoImage src={logo} />
      <SignupForm />
    </ContainerSignup>
  );
};

export default SignUpPage;
