import { Button, TextField } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import PostsContext from '../../context/PostsContext';
import useForm from '../../hooks/useForm';
import {
  CreateComment,
  GetComment,
} from '../../services/createComment/CreateComment';
import { Form, TextComment, User } from './styles';

const Comment = (props) => {
  const { comment, color, setColor } = useContext(PostsContext);
  const [form, onChange, clear] = useForm({ body: '' });
  const id = props.postId;

  // Função enviar comentário
  const onSubmitComment = (event) => {
    event.preventDefault();
    clear();
    CreateComment(id, form);
  };

  // Gerar cores aleatóriamente
  // let x = Math.floor(Math.random() * 256);
  // let y = Math.floor(Math.random() * 256);
  // let z = Math.floor(Math.random() * 256);
  // let bgColorRandom = '"rgb(' + x + ', ' + y + ', ' + z + ')"';
  // console.log(bgColorRandom);

  // Mostrar comentários
  GetComment(id);
  const renderComments = comment.map((comments, index) => {
    return (
      <TextComment key={index}>
        <User>
          <p>{comments.username.substr(0, 2).toUpperCase()}</p>
        </User>
        <p>{comments.body}</p>
      </TextComment>
    );
  });

  return (
    <div>
      <Form onSubmit={onSubmitComment}>
        <TextField
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
