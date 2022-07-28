import { useState } from 'react';
import PostsContext from '../context/PostsContext';

const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState([]);
  const [votes, setVotes] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        comment,
        setComment,
        votes,
        setVotes,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
