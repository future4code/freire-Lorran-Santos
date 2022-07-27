import {
  ThumbDownOffAlt,
  ThumbUpOffAlt,
  ChatBubbleOutline,
} from '@mui/icons-material';
import { Badge, Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import Comment from '../../components/Comment/Comment';
import PostsContext from '../../context/PostsContext';
import { GetComment } from '../../services/createComment/CreateComment';
import { VoteData } from '../../services/VoteData';
import {
  CardPost,
  Likes,
  ButtonsCard,
  CommentCount,
  Vote,
  VoteZero,
} from './styles';

const Card = (props) => {
  const { votes } = useContext(PostsContext);
  const [commentSection, setCommentSection] = useState(false);
  // Comentário
  const id = props.postId;
  const comments = () => {
    setCommentSection(!commentSection);
  };

  return (
    <CardPost>
      <p>enviado por: {props.name}</p>
      <p>{props.body}</p>
      <p>{votes}</p>
      <ButtonsCard>
        <Likes>
          {/* Botões de Like e Deslike */}
          <Badge color={'primary'}>
            <Button onClick={() => VoteData(props.postId)}>
              <ThumbUpOffAlt />
            </Button>
          </Badge>
          {props.vote > 0 ? (
            <Vote>{props.vote}</Vote>
          ) : (
            <VoteZero>{props.votes}</VoteZero>
          )}
          <Button>
            <ThumbDownOffAlt />
          </Button>
          {/* Fim Botões Like Deslike */}
        </Likes>
        {/* Início seção comentário */}
        <Badge color={'primary'}>
          <Button onClick={comments}>
            <ChatBubbleOutline />
            <CommentCount>{props.commentCount}</CommentCount>
          </Button>
        </Badge>
      </ButtonsCard>
      {commentSection ? <Comment postId={props.postId} /> : null}
      {/* Final seção comentário */}
    </CardPost>
  );
};

export default Card;
