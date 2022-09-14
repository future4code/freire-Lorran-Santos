import {
  ThumbDownOffAlt,
  ThumbUpOffAlt,
  ChatBubbleOutline,
  ThumbUpAlt,
  ThumbDownAlt,
} from '@mui/icons-material';
import { Badge, Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import Comment from '../../components/Comment/Comment';
import PostsContext from '../../context/PostsContext';
import {
  ChangeVote,
  DeletePostVote,
  VoteData,
} from '../../services/vote/VoteData';
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
  const id = props.postId;
  const userVote = props.userVote;

  const comments = () => {
    setCommentSection(!commentSection);
  };

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
            <Button
              onClick={() => {
                userVote > 0 ? DeletePostVote(props.postId) : VoteData(id);
              }}
            >
              {userVote > 0 ? <ThumbUpAlt /> : <ThumbUpOffAlt />}
            </Button>
          </Badge>
          {props.vote >= 0 ? (
            <Vote>{props.vote}</Vote>
          ) : (
            <VoteZero>{props.vote}</VoteZero>
          )}
          <Button
            onClick={() => {
              userVote < 0 ? DeletePostVote(id) : ChangeVote(id);
            }}
          >
            {userVote < 0 ? (
              <ThumbDownAlt color="error" />
            ) : (
              <ThumbDownOffAlt color="error" />
            )}
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
