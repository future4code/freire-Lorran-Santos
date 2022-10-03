import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 0px;
  left: 2%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  h1 {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  img {
    width: 46px;
  }
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  background-color: #ffffff;
`
