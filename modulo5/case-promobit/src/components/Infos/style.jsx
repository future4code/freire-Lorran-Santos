import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2d0c5e;
  color: #ffffff;
  padding: 0vh 0vw 5vh;
  min-width: 100%;
  @media (max-width: 780px) {
    max-width: 100%;
    padding: 16px;
  }
`;

export const ContainerContent = styled.div`
  text-align: center;
  width: 100%;
  min-width: 100%;
  max-width: 1290px;
  padding: 5vh 5vw;
  display: flex;
  justify-content: flex-start;
  /* margin-bottom: -150px; */
  gap: 16px;
  h1 {
    font-size: 24px;
  }
  img {
    width: 32vw;
    max-width: 400px;
    /* height: 600px; */
    border-radius: 4px;
    box-shadow: 0 0 4px #1e1e1e;
    margin-bottom: -150px;
  }
  @media (max-width: 780px) {
    margin-bottom: 0px;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    img {
      margin: 0px;
    }
  }
`;

export const Avarage = styled.div`
  position: relative;
  width: 60px;
  #avarageCircle {
    color: #14ff00;
    background-color: #ffffff11;
    border-radius: 50px;
    position: initial;
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #14ff00;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  text-align: left;
`;

export const mainInfos = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Genres = styled.div`
  p ~ p::before {
    content: ', ';
  }
  display: flex;
`;

export const Synopsis = styled.div`
  line-height: 1.3;
`;

export const Crew = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  /* grid: repeat(2, 60px) / repeat(3, 1fr); */
  /* display: flex;
  flex-wrap: wrap; */
  gap: 16px;
  /* padding: 5vh 0vw; */
`;
