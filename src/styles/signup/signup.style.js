import styled from 'styled-components';

export const SignUpWrapper = styled.div`
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
export const SignUpTitleText = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media all and (min-width: 768px) {
    width: 30%;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media all and (min-width: 768px) {
    display: flex;
    width: 80%;
  }
`;

export const SignUpInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media all and (min-width: 768px) {
    flex-grow: 1;
    width: 80%;
  }
`;

export const SignUpEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const SignUpValidation = styled.div`
  margin-left: auto;
`;

export const SignUpWelcomeButton = styled.div`
  @media all and (min-width: 768px) {
    width: 64%;
  }
`;
