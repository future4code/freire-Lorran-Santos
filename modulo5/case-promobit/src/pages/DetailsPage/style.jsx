import styled from 'styled-components';

export const Container = styled.div`
  #officialCast {
    padding-left: 5vw;
  }
  @media (min-width: 780px) {
    #officialCast {
      padding-top: 5vw;
    }
  }
  @media (min-width: 2000px) {
    #officialCast {
      padding-top: 3vw;
    }
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  width: 90vw;
  gap: 16px;
  margin: 20px auto;
  overflow-x: scroll;
`;
