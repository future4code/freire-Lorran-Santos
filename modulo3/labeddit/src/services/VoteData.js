import axios from 'axios';
import { BASE_URL, token } from '../constants/urls';

export const VoteData = (id) => {
  const body = {
    direction: 1,
  };
  axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, token)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
