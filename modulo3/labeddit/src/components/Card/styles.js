import styled from 'styled-components';

export const CardPost = styled.div`
  box-shadow: 0px 0px 4px #000000;
  box-sizing: border-box;
  padding: 8px;
  width: 80vw;
  max-width: 450px;
  border: none;
  border-radius: 12px;
  margin-bottom: 16px;
  word-wrap: break-word;
  background-color: #fafafa;
`;

export const ButtonsCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const UserPost = styled.p`
  font-size: 12px;
  color: #9c9c9c;
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Likes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #0000ff;
  border-radius: 20px;
`;

export const Vote = styled.p`
  color: #0000ff;
  margin: 0px;
`;

export const VoteZero = styled.p`
  color: #ff0000;
  margin: 0px;
`;
