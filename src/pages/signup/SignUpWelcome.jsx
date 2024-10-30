import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Section from '@components/ui/Section';
import Button from '@components/ui/Button/DefaultButton';
import * as S from '@styles/signup/signup.style';
import Text from '@components/ui/Text';

function SignUpWelcome() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  useEffect(() => {
    if (!user) {
      return navigate('/');
    }
  }, []);

  return (
    <>
      {user && (
        <Section>
          <S.SignUpWrapper>
            <div style={{ marginBottom: '70px' }}>
              <Text typography="display_l">
                빵라다이스의 주민이 되신 <br />
                {user.name}님 환영합니다!
                <br />
                <br />
                빵라다이스에 로그인하여 <br />
                다양한 주민 혜택을 즐겨보세요.
              </Text>
            </div>
            <S.SignUpWelcomeButton>
              <Button
                type="button"
                color="var(--primary-01)"
                onClick={() => {
                  navigate('/login');
                }}
              >
                로그인
              </Button>
            </S.SignUpWelcomeButton>
          </S.SignUpWrapper>
        </Section>
      )}
    </>
  );
}

export default SignUpWelcome;
