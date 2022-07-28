import { Button } from '@mui/material';
import React, { useState, useContext } from 'react';
import Card from '../../components/Card/Card';
import PostsContext from '../../context/PostsContext';
import GetPosts from '../../services/GetPosts';
import { Container, StyledButton } from './styles';
import Loading from '../../components/Loading/Loading';
import PostPage from '../PostPage/PostPage';
import useProtectedPage from '../../hooks/usePotectedPage';

const FeedPage = () => {
  useProtectedPage();
  const { posts, loading } = useContext(PostsContext);
  const [newPost, setNewPost] = useState(false);

  GetPosts();
  // console.log(posts);
  const renderPosts = posts.map((post) => {
    return (
      <Card
        key={post.id}
        postId={post.id}
        userId={post.userId}
        body={post.body}
        name={post.username}
        vote={post.voteSum}
        commentCount={post.commentCount}
      />
    );
  });

  // Post Page
  const createPost = () => {
    setNewPost(!newPost);
    // console.log(newPost);
  };

  return (
    <Container>
      {newPost ? <PostPage /> : null}
      {newPost ? (
        <StyledButton variant="contained" onClick={createPost}>
          Descartar
        </StyledButton>
      ) : (
        <StyledButton variant="contained" onClick={createPost}>
          Criar Post
        </StyledButton>
      )}
      {/* <Button variant="contained" onClick={createPost}>
        Criar Post
      </Button> */}
      {renderPosts}
      {!loading && <Loading />}
    </Container>
  );
};

export default FeedPage;
