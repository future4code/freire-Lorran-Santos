import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { goToFeed } from '../../router/coordinator';

export const Login = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      clear();
      goToFeed(navigate);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const SignUp = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      clear();
      goToFeed(navigate);
    })
    .catch((err) => {
      console.log(err);
    });
};
