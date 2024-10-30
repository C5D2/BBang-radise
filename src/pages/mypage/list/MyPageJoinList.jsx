import Text from '@components/ui/Text';
import ClassCard from '@components/ui/Card/ClassCard';
import { ClassListContent } from '@styles/class/classList.style';
import { MyPageListAlert } from '@styles/mypage/mypageList.style';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

MyPageJoinList.propTypes = {
  myJoinClass: PropTypes.object,
  isLoading: PropTypes.any,
  error: PropTypes.string,
};

function MyPageJoinList({ myJoinClass }) {
  const navigate = useNavigate();

  const classList = myJoinClass?.item.map((item) => <ClassCard key={item._id} item={item.products[0]} />);

  return (
    <>
      {myJoinClass.item.length > 0 ? (
        <ClassListContent>{classList}</ClassListContent>
      ) : (
        <MyPageListAlert>
          <Text typography="regular_m" color="gray06" onClick={() => navigate(`/class`)}>
            아직 신청하신 클래스가 없습니다
            <br />
            <br />
            만들어보고 싶은 빵이 있나요? 빵라다이스에는 베이킹 마스터님들이 진행하는 다양한 베이킹 클래스가 진행되고 있습니다. 빵에 대한 사랑을 한층 더 쌓을 수 있는 다양한 클래스를 만나보세요
            <br />
            <br />- 베이킹 클래스 둘러보기 -
          </Text>
        </MyPageListAlert>
      )}
    </>
  );
}

export default MyPageJoinList;
