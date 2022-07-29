import axios from 'axios';
import { useContext } from 'react';
import { BASE_URL, token } from '../../constants/urls';
import PostsContext from '../../context/PostsContext';
import GetPosts from '../../services/GetPosts';

export const VoteData = (id) => {
  // const { setLikePost } = useContext(PostsContext);
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

export const ChangeVote = (id) => {
  const body = {
    direction: -1,
  };
  axios
    .put(`${BASE_URL}/posts/${id}/votes`, body, token)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DeletePostVote = (id) => {
  axios
    .delete(`${BASE_URL}/posts/${id}/votes`, token)
    .then(console.log('Deletou o voto'))
    .catch((err) => {
      console.log(err.response.data);
    });
};
