import styled from 'styled-components';

export const ContainerSignup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 2vh;
  padding-bottom: 2vh;
`;

export const LogoImage = styled.img`
  width: 70vw;
  max-width: 450px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  max-width: 450px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80vw;
  max-width: 450px;
  text-align: center;
  margin-bottom: 16px;
`;

export const Divider = styled.span`
  margin: 2vh 0px;
  height: 2px;
  width: 80vw;
  max-width: 450px;
  background: linear-gradient(to right, #ff4081, #ffdb58);
  border: none;
  border-radius: 4px;
`;

export const TextEmphasis = styled.span`
  color: #0000ff;
`;
