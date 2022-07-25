import React from 'react';
import { LogoImage, ScreenContainer, SignUpButtonContainer } from './styles';
import logo from '../../assets/logo.png';
import { Button } from '@mui/material';
import LoginForm from './LoginForm';
import { goToSignUp } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = () => {
  const navigate = useNavigate();
  useUnprotectedPage();

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm />
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
    </ScreenContainer>
  );
};

export default LoginPage;
