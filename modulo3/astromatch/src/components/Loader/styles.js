import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const BackgroundBlur = styled.div`
  position: absolute;
  background-color: #00000000;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const IconeLoader = styled.div`
  z-index: 4;
  animation: pulse 0.3s infinite;
  margin: 0 auto;
  display: table;
  margin-top: 50px;
  animation-direction: alternate;
  -webkit-animation-name: pulse;
  animation-name: pulse;

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -webkit-filter: brightness(100%);
    }
    100% {
      -webkit-transform: scale(1.1);
      -webkit-filter: brightness(200%);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      filter: brightness(100%);
    }
    100% {
      transform: scale(1.1);
      filter: brightness(200%);
    }
  }
`;
