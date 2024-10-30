import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import Button from '@components/ui/Button/DefaultButton';
import useMemberStore from '@zustand/memberStore.mjs';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ClassOrderWrapper = styled.div`
  width: 100%;
  position: reltaive;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media all and (min-width: 768px) {
    justify-content: space-between;
    width: 100%;
    position: relative;
    padding-top: 120px;
    max-width: 500px;
    gap: 70px;
  }
`;

const ClassOrderText = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ClassOrderButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media all and (min-width: 768px) {
    width: 86%;
  }
`;

function ClassOrder() {
  const user = useMemberStore().user;
  const id = user?._id;
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state;

  return (
    <Section>
      <ClassOrderWrapper>
        <ClassOrderText>
          <Text typography="display_l" display="block" color="black">
            베이킹 클래스 신청 완료
          </Text>
          <Text typography="light_l" color="black" display="block">
            {name}을(를) 신청해주셔서 감사합니다! 신청 클래스는 내정보의 신청 목록에서 확인하실 수 있습니다.
          </Text>
        </ClassOrderText>

        <ClassOrderButton>
          <Button
            color="var(--primary-01)"
            onClick={() => {
              navigate(`/mypage/${id}`);
            }}
          >
            내정보에서 확인하기
          </Button>
          <Button color="var(--primary-02)" onClick={() => navigate(`/class`)}>
            다른 클래스도 둘러보기
          </Button>
        </ClassOrderButton>
      </ClassOrderWrapper>
    </Section>
  );
}

export default ClassOrder;
