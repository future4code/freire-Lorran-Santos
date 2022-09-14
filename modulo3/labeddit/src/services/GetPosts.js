import axios from 'axios';
import { useContext, useEffect } from 'react';
import { BASE_URL, token } from '../constants/urls';
import PostsContext from '../context/PostsContext';

const GetPosts = () => {
  const { page, setPosts, setLoading } = useContext(PostsContext);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts?page=${page}`, token)
      .then((res) => {
        setPosts(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
}, [`${BASE_URL}/posts?page=${page}`]);
};

export default GetPosts;
