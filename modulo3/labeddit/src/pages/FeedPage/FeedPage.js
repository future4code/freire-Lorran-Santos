import React, { useContext } from 'react';
import Card from '../../components/Card/Card';
import PostsContext from '../../context/PostsContext';
import GetPosts from '../../services/GetPosts';
import { Container } from './styles';

const FeedPage = () => {
  const { posts } = useContext(PostsContext);
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
        commentCount={post.commentCount}
      />
    );
  });

  return (
    <Container>
      <h1>FeedPage</h1>
      {renderPosts}
    </Container>
  );
};

export default FeedPage;
