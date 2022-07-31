import styled from 'styled-components';
import { Button, IconButton } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding-top: 2vh;
`;

export const RefreshButton = styled.button`
  position: absolute;
  left: 20px;
  border: none;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px #000000;
  background-image: linear-gradient(to right, #ff4081, #ffdb58);
  @media (min-width: 700px) {
    left: 100px;
  }
  @media (min-width: 1000px) {
    left: 220px;
  }
  @media (min-width: 1400px) {
    left: 400px;
  }
  @media (min-width: 2000px) {
    left: 1000px;
  }
`;

export const StyledButton = styled(Button)`
  background-image: linear-gradient(to right, #ff4081, #ffdb58);
`;

export const StyledBackToTop = styled.button`
  position: fixed;
  bottom: 50px;
  right: 10px;
  border: none;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  box-shadow: 0px 0px 4px #000000;
  background-image: linear-gradient(to right, #ff4081, #ffdb58);
`;
