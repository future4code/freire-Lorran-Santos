import { useState } from 'react';
import PostsContext from '../context/PostsContext';

const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState([]);
  const [votes, setVotes] = useState();
  const [loading, setLoading] = useState(false);
  const [likePost, setLikePost] = useState(false);
  const [page, setPage] = useState(1);

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
        likePost,
        setLikePost,
        page,
        setPage,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
