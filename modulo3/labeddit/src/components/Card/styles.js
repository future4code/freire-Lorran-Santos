import styled from 'styled-components';

export const CardPost = styled.div`
  box-shadow: 0px 0px 4px #000000;
  box-sizing: border-box;
  padding: 8px;
  width: 80vw;
  max-width: 450px;
  border: none;
  border-radius: 4px;
  margin-bottom: 16px;
  word-wrap: break-word;
`;

export const ButtonsCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Likes = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #0000ff;
  border-radius: 20px;
`;

export const CommentCount = styled.p`
  position: absolute;
  top: -3px;
  right: 27px;
`;

export const Vote = styled.p`
  color: #0000ff;
`;

export const VoteZero = styled.p`
  color: #ff0000;
`;
