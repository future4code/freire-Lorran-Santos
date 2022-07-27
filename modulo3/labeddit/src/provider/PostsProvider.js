import { useState } from 'react';
import PostsContext from '../context/PostsContext';

const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState([]);
  const [votes, setVotes] = useState();
  const [color, setColor] = useState('');

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        comment,
        setComment,
        votes,
        setVotes,
        color,
        setColor,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
