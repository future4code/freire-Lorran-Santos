import React, { useContext } from 'react';
import { TextField, Button, FormControlLabel, Switch } from '@mui/material';
import { ContainerForm, Form, TextEmphasis } from './styles';
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { SignUp } from '../../services/user/user';
import PostsContext from '../../context/PostsContext';
import { goToLogin } from '../../router/coordinator';

const SignupForm = () => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({
    username: '',
    email: '',
    password: '',
  });

  // Funcionamento do checkbox/switch
  const { setChecked } = useContext(PostsContext);

  const onChangeTerms = (event) => {
    setChecked(event.target.checked);
  };

  // Função do formulário
  const onSubmitForm = (event) => {
    event.preventDefault();
    SignUp(form, clear, navigate);
  };

  return (
    <ContainerForm>
      <Form onSubmit={onSubmitForm}>
        <TextField
          fullWidth
          type={'text'}
          name={'username'}
          value={form.username}
          variant={'outlined'}
          onChange={onChange}
          label={'Nome'}
          required
        />
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
        <p>
          Ao continuar, você concorda com o nosso{' '}
          <TextEmphasis>Contrato de usuário</TextEmphasis> e nossa
          <TextEmphasis> Política de Privacidade</TextEmphasis>
        </p>
        <FormControlLabel
          control={<Switch required onChange={onChangeTerms} />}
          label="Eu concordo em receber emails sobre coisas legais no Labeddit"
        />
        <Button
          fullWidth
          type={'submit'}
          variant={'contained'}
          style={{
            background: 'linear-gradient(to right, #ff4081 , #ffdb58)',
          }}
          sx={{ borderRadius: '2' }}
        >
          Cadastrar
        </Button>
      </Form>
      <Button onClick={() => goToLogin(navigate)} fullWidth variant="outlined">
        Login
      </Button>
    </ContainerForm>
  );
};

export default SignupForm;
