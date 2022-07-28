import { Button, TextField } from '@mui/material';
import React from 'react';
import { Card, Form } from './styles';
import useForm from '../../hooks/useForm';
import { CreatePost } from '../../services/post/Posts';

const PostPage = () => {
  const [form, onChange, clear] = useForm({ title: '', body: '' });

  const submit = (event) => {
    event.preventDefault();
    CreatePost(form, clear);
  };

  return (
    <Card>
      <Form onSubmit={submit}>
        <TextField
          fullWidth
          size={'small'}
          label="Titulo"
          placeholder="Digíte o título"
          variant="outlined"
          name={'title'}
          onChange={onChange}
          value={form.title}
          required
        />
        <TextField
          fullWidth
          label="Post"
          placeholder="Digite sua publicação"
          multiline
          rows={4}
          name={'body'}
          onChange={onChange}
          value={form.body}
          required
        />
        {/* <TextField
          fullWidth
          type={'text'}
          name={'body'}
          // value={form.body}
          onChange={onChange}
          placeholder="Digite a sua publicação"
          multiline
        /> */}
        <Button type={'submit'} variant="outlined">
          Publicar
        </Button>
      </Form>
    </Card>
  );
};

export default PostPage;
