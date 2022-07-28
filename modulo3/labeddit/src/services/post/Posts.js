import { clear } from '@testing-library/user-event/dist/clear';
import axios from 'axios';
import React from 'react';
import { BASE_URL, token } from '../../constants/urls';

export const CreatePost = (body, clear) => {
  axios
    .post(`${BASE_URL}/posts`, body, token)
    .then((res) => {
      console.log(res.data);
      clear();
    })
    .catch((err) => {
      console.log(err);
    });
};
