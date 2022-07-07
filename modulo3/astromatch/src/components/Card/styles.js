import styled from "styled-components";

export const Container = styled.div`
  * {
    margin: 0px;
    padding: 0px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 720px;
  border: 2px solid #331343;
  border-radius: 8px;
  background-image: linear-gradient(#6c186d, #a624a8);
  @media (max-width: 400px) {
    width: 400px;
    height: 100vh;
  }
  @media (max-width: 400px) {
    border-radius: 0px;
    width: 100vw;
    height: 100vh;
    border: none;
  }
`;
