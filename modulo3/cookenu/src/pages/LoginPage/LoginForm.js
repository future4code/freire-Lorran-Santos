import React from 'react';
import { InputsContainer, ScreenContainer } from './styles';
import { Button, TextField } from '@mui/material';
import useForm from '../../hooks/useForm';
import { login } from '../../services/user';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: '', password: '' });
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate);
  };

  return (
    <ScreenContainer>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            type={'email'}
            name={'email'}
            value={form.email}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            fullWidth
            margin={'dense'}
          />
          <TextField
            type={'password'}
            name={'password'}
            value={form.password}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            fullWidth
            margin={'dense'}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color={'primary'}
            margin={'dense'}
          >
            Fazer Login
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
};

export default LoginForm;
