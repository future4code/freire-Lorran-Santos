import React from 'react';
import { TextField, Button } from '@mui/material';
import { ContainerForm, Form, Divider } from './styles';
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../services/user/user';
import { goToSignUp } from '../../router/coordinator';

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: '', password: '' });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    Login(form, clear, navigate);
  };

  return (
    <ContainerForm>
      <Form onSubmit={onSubmitForm}>
        <TextField
          fullWidth
          type={'email'}
          name={'email'}
          value={form.email}
          variant={'outlined'}
          onChange={onChange}
          label={'Email'}
          required
        />
        <TextField
          fullWidth
          name={'password'}
          type={'password'}
          value={form.password}
          onChange={onChange}
          variant={'outlined'}
          label={'Senha'}
          required
        />
        <Button
          fullWidth
          type={'submit'}
          variant={'contained'}
          // color={'primary'}
          style={{ background: 'linear-gradient(to right, #ff4081 , #ffdb58)' }}
          sx={{ borderRadius: '2' }}
        >
          Entrar
        </Button>
      </Form>
      <Divider />
      <Button
        fullWidth
        variant={'outlined'}
        color={'primary'}
        sx={{ borderRadius: '2' }}
        onClick={() => goToSignUp(navigate)}
      >
        Crie uma conta!
      </Button>
    </ContainerForm>
  );
};

export default LoginForm;
