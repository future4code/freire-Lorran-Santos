import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToRecipesList } from '../routes/coordinator';

export const login = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      clear();
      goToRecipesList(navigate);
    })
    .catch((err) => {
      alert('Ops! Ocorreu um erro ao efetuar o Login!');
    });
};

export const signUp = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      clear();
      goToRecipesList(navigate);
    })
    .catch((err) => {
      alert('Ops! Ocorreu um erro ao efetuar o Login!');
    });
};
