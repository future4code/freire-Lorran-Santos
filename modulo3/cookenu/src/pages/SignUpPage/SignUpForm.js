import React from 'react';
import { InputsContainer, ScreenContainerSignUp } from './styles';
import { Button, TextField } from '@mui/material';
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../services/user';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate);
  };

  return (
    <ScreenContainerSignUp>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            type={'text'}
            name={'name'}
            value={form.name}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            margin={'dense'}
          />
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
    </ScreenContainerSignUp>
  );
};

export default SignUpForm;
