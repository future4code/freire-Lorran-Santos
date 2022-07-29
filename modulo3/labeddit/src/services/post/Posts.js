import axios from 'axios';
import { BASE_URL, token } from '../../constants/urls';

export const CreatePost = (body, clear) => {
  axios
    .post(`${BASE_URL}/posts`, body, token)
    .then((res) => {
      clear();
    })
    .catch((err) => {
      console.log(err);
    });
};
