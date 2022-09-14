import axios from 'axios';
import { useContext, useEffect } from 'react';
import { BASE_URL, token } from '../../constants/urls';
import PostsContext from '../../context/PostsContext';

export const CreateComment = (id, body) => {
  axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, token)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetComment = (id) => {
  const { comment, setComment } = useContext(PostsContext);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/${id}/comments`, token)
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => console.log(err.res.data.message));
  }, [comment]);
};

export const CreateCommentVote = (id) => {
  const body = {
    direction: 1,
  };
  axios
    .post(`${BASE_URL}/comments/${id}/votes`, body, token)
    .then((res) => console.log(res.data))
    .cath((err) => console.log(err));
};

export const ChangeCommentVote = (id) => {
  const body = {
    direction: -1,
  };
  axios
    .post(`${BASE_URL}/comments/${id}/votes`, body, token)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DeleteCommentVote = (id) => {
  axios
    .delete(`${BASE_URL}/comments/${id}/votes`, token)
    .then((res) => console.log(res.data).catch((err) => console.log(err)));
};
