import axios from 'axios';
import { useContext, useEffect } from 'react';
import { BASE_URL, token } from '../constants/urls';
import PostsContext from '../context/PostsContext';

const GetPosts = () => {
  const { setPosts, setLoading } = useContext(PostsContext);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts`, token)
      .then((res) => {
        setPosts(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [`${BASE_URL}/posts`]);
};

export default GetPosts;
