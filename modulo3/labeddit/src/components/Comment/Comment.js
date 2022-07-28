import { ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import PostsContext from '../../context/PostsContext';
import useForm from '../../hooks/useForm';
import {
  ChangeCommentVote,
  CreateComment,
  CreateCommentVote,
  GetComment,
} from '../../services/createComment/CreateComment';
import {
  Form,
  TextComment,
  User,
  InputComment,
  CommentaryContainer,
  Likes,
} from './styles';

const Comment = (props) => {
  const { comment } = useContext(PostsContext);
  const [form, onChange, clear] = useForm({ body: '' });
  const id = props.postId;

  // Função enviar comentário
  const onSubmitComment = (event) => {
    event.preventDefault();
    clear();
    CreateComment(id, form);
  };

  // Gerar cores aleatóriamente
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColorRandom = 'rgb(' + x + ', ' + y + ', ' + z + ')';

  // Mostrar comentários
  GetComment(id);
  const renderComments = comment.map((comments, index) => {
    return (
      <CommentaryContainer key={index}>
        <TextComment>
          <User style={{ backgroundColor: `${bgColorRandom}` }}>
            <p>{comments.username.substr(0, 2).toUpperCase()}</p>
          </User>
          <p>{comments.body[0].toUpperCase() + comments.body.substr(1)}</p>
        </TextComment>
        <Likes>
          <Button onClick={() => CreateCommentVote(comments.id)}>
            <ThumbUpAltOutlined />
          </Button>
          <p>{comments.voteSum}</p>
          <Button onClick={() => ChangeCommentVote(comments.id)}>
            <ThumbDownAltOutlined />
          </Button>
        </Likes>
      </CommentaryContainer>
    );
  });

  return (
    <div>
      <Form onSubmit={onSubmitComment}>
        <InputComment
          fullWidth
          size={'small'}
          type={'text'}
          multiline
          placeholder="Enviar Comentário"
          name={'body'}
          value={form.body}
          onChange={onChange}
        />
        <Button type={'submit'} variant={'outlined'}>
          Enviar
        </Button>
      </Form>
      <div>{renderComments}</div>
    </div>
  );
};

export default Comment;
