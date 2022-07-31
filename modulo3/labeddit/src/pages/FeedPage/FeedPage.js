import React, { useState, useContext } from 'react';
import Card from '../../components/Card/Card';
import PostsContext from '../../context/PostsContext';
import GetPosts from '../../services/GetPosts';
import {
  Container,
  RefreshButton,
  StyledButton,
  StyledBackToTop,
} from './styles';
import Loading from '../../components/Loading/Loading';
import PostPage from '../PostPage/PostPage';
import useProtectedPage from '../../hooks/usePotectedPage';
import Paginations from '../../components/Paginations/Paginations';
import { KeyboardArrowUp, Refresh } from '@mui/icons-material';
import Header from '../../components/Header/Header';

const FeedPage = () => {
  useProtectedPage();
  const { posts, loading } = useContext(PostsContext);
  const [newPost, setNewPost] = useState(false);

  GetPosts();

  const renderPosts = posts.map((post) => {
    return (
      <Card
        key={post.id}
        postId={post.id}
        userId={post.userId}
        body={post.body}
        name={post.username}
        vote={post.voteSum}
        userVote={post.userVote}
        commentCount={post.commentCount}
      />
    );
  });

  // Post Page
  const createPost = () => {
    setNewPost(!newPost);
  };

  return (
    <Container>
      <Header />
      {newPost ? <PostPage /> : null}
      <RefreshButton onClick={() => window.location.reload()}>
        <Refresh />
      </RefreshButton>
      {newPost ? (
        <StyledButton variant="contained" onClick={createPost}>
          Fechar
        </StyledButton>
      ) : (
        <StyledButton variant="contained" onClick={createPost}>
          Criar Post
        </StyledButton>
      )}
      {renderPosts}
      <StyledBackToTop
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <KeyboardArrowUp />
      </StyledBackToTop>
      <Paginations />
      {!loading && <Loading />}
    </Container>
  );
};

export default FeedPage;
