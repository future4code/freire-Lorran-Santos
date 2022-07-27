import axios from 'axios';
import { useContext, useEffect } from 'react';
import { BASE_URL, token } from '../constants/urls';
import PostsContext from '../context/PostsContext';

const GetPosts = () => {
  const { posts, setPosts } = useContext(PostsContext);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts`, token)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};

export default GetPosts;
