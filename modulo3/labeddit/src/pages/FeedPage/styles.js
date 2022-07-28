import styled from 'styled-components';
import { Button } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding-top: 2vh;
`;

export const StyledButton = styled(Button)`
  background-image: linear-gradient(to right, #ff4081, #ffdb58);
`;
