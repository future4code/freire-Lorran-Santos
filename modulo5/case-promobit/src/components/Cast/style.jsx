import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 90%;
  gap: 16px;
  padding: 4px 0px;
  margin-top: 0px;
  #officialCast {
    margin-left: 3vw;
  }
`;

export const Card = styled.div`
  width: 178px;
  height: 340px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 4px;
  img {
    width: 160px;
    border-radius: 4px;
  }
`;
