import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 4px;
`;

export const InputComment = styled(TextField)`
  background-color: #ffffff;
  border-radius: 12px;
`;

export const TextComment = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  /* padding: 8px 16px;
  border: none;
  border-radius: 16px;
  width: 70%;
  max-width: 400px;
  background-color: #ececec;
  box-shadow: 0px 0px 4px #000000; */
  /* margin: 16px 0px; */
  p {
    margin: 0px;
  }
`;

export const User = styled.div`
  border: none;
  border-radius: 50%;
  padding: 4px;
`;

export const CommentaryContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 16px 0px;
  padding: 4px 16px;
  border: none;
  border-radius: 16px;
  width: 70%;
  max-width: 400px;
  background-color: #ececec;
  box-shadow: 0px 0px 4px #000000;
`;

export const Likes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    height: 25px;
    width: 25px;
    border-radius: 100%;
    background-color: #ff0000;
  }
`;
