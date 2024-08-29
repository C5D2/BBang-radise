import styled from 'styled-components';

export const LoginWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media all and (min-width: 768px) {
    width: 100%;
    position: relative;
    padding-top: 120px;
    padding-right: 10px;
    flex-direction: row;
  }
`;

export const LoginTitleText = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media all and (min-width: 768px) {
    width: 30%;
  }
`;

export const StyledForm = styled.form`
  @media all and (min-width: 768px) {
    display: flex;
    flex-grow: 1;
    width: 70%;
  }
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media all and (min-width: 768px) {
    width: 80%;
  }
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 50px;
`;

export const LoginButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
