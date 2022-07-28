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
import { ChangeVote, VoteData } from '../../services/vote/VoteData';
import {
  CardPost,
  UserPost,
  Likes,
  ButtonsCard,
  Vote,
  VoteZero,
} from './styles';

const Card = (props) => {
  const { votes } = useContext(PostsContext);
  const [commentSection, setCommentSection] = useState(false);
  const [like, setLike] = useState(false);
  const id = props.postId;

  const comments = () => {
    setCommentSection(!commentSection);
  };

  const likeDesLike = () => {
    if (like === false) {
      setLike(true);
      VoteData(id);
    } else if (like === true) {
      setLike(false);
      ChangeVote(id);
    }
  };

  // Caso o Like deslike der errado => () => VoteData(props.postId)

  return (
    <CardPost>
      <UserPost>
        enviado por: <span>{props.name}</span>
      </UserPost>
      <p>{props.body}</p>
      <p>{votes}</p>
      <ButtonsCard>
        <Likes>
          {/* Botões de Like e Deslike */}
          <Badge color={'primary'}>
            <Button onClick={() => likeDesLike}>
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
        <Badge color={'primary'} badgeContent={props.commentCount}>
          <ChatBubbleOutline
            cursor={'pointer'}
            color={'primary'}
            onClick={comments}
          />
        </Badge>
      </ButtonsCard>
      {commentSection ? <Comment postId={props.postId} /> : null}
      {/* Final seção comentário */}
    </CardPost>
  );
};

export default Card;
