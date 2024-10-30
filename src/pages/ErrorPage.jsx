import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import Button from '@components/ui/Button/DefaultButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorTitle = styled.div`
  font-family: dunkel-sans-variable, sans-serif;
  font-variation-settings: 'GLAT' 1000, 'wdth' 850;
  font-size: 8rem;
  line-height: 1.5;
  color: var(--primary-01);
`;

const ErrorText = styled.div`
  font-family: dunkel-sans-variable, sans-serif;
  font-variation-settings: 'GLAT' 1000, 'wdth' 950;
  font-size: 3rem;
  line-height: 1.5;
  color: var(--black);
`;

const ErrorButton = styled.div`
  margin-top: 80px;
  width: 80%;

  @media all and (min-width: 768px) {
    width: 300px;
  }
`;

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <ErrorPageWrapper>
        <ErrorTitle>ERROR</ErrorTitle>
        <ErrorText>에러가 발생했습니다</ErrorText>
        <ErrorButton>
          <Button color="var(--primary-02)" onClick={() => navigate(`/`)}>
            메인페이지로 돌아가기
          </Button>
        </ErrorButton>
      </ErrorPageWrapper>
      <Footer />
    </>
  );
}

export default ErrorPage;
