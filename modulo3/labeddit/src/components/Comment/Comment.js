import {
  ThumbDownAlt,
  ThumbDownAltOutlined,
  ThumbUpAlt,
  ThumbUpAltOutlined,
} from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import PostsContext from '../../context/PostsContext';
import useForm from '../../hooks/useForm';
import {
  ChangeCommentVote,
  CreateComment,
  CreateCommentVote,
  DeleteCommentVote,
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

  // Mostrar comentários
  GetComment(id);

  // Renderizar os comentários
  const renderComments = comment.map((comments, index) => {
    return (
      <CommentaryContainer key={index}>
        {/* início foto e comentário do usuário */}
        <TextComment>
          <User>
            <p>{comments.username.substr(0, 2).toUpperCase()}</p>
          </User>
          <p>{comments.body[0].toUpperCase() + comments.body.substr(1)}</p>
        </TextComment>
        {/* fim foto e comentário do usuário */}
        {/* início seção de likes */}
        <Likes>
          <Button
            onClick={() => {
              comments.userVote > 0
                ? DeleteCommentVote(comments.id)
                : CreateCommentVote(comments.id);
            }}
          >
            {comments.userVote > 0 ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
          </Button>
          {comments.voteSum ? <p>{comments.voteSum}</p> : null}
          <Button
            onClick={() => {
              comments.userVote < 0
                ? DeleteCommentVote(comments.id)
                : ChangeCommentVote(comments.id);
            }}
          >
            {comments.userVote < 0 ? (
              <ThumbDownAlt color="error" />
            ) : (
              <ThumbDownAltOutlined color="error" />
            )}
          </Button>
        </Likes>
        {/* fim seção de likes */}
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
