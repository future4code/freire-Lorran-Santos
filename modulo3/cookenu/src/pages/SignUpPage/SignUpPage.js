import React from 'react';
import {
  LogoImage,
  ScreenContainerSignUp,
  SignUpButtonContainer,
} from './styles';
import logo from '../../assets/logo.png';
import { Button } from '@mui/material';
import { goToSignUp } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const SignUpPage = () => {
  const navigate = useNavigate();
  useUnprotectedPage();

  

  return (
    <ScreenContainerSignUp>
      <LogoImage src={logo} />
      <SignUpForm />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(navigate)}
          fullWidth
          variant={'outlined'}
          color={'primary'}
          margin={'normal'}
        >
          Não Possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainerSignUp>
  );
};

export default SignUpPage;
