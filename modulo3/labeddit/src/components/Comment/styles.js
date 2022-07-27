import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const TextComment = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 16px;
  width: 70%;
  max-width: 400px;
  background-color: #ececec;
  box-shadow: 0px 0px 4px #000000;
  margin: 12px 0px;
  p {
    margin: 0px;
  }
`;

export const User = styled.div`
  border: none;
  border-radius: 50%;
  /* background-color: #ff0000; */
  padding: 4px;
`;
