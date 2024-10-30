import Search from '@components/ui/Search';
import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import { useGetClassInfo } from '@hooks/queries/class';
import ClassCard from '@components/ui/Card/ClassCard';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import RoundButton from '@components/ui/Button/RoundButton';
import Modal from '@components/ui/Modal';
import useMemberStore from '@zustand/memberStore.mjs';
import { ClassListContent, ClassListPage, ClassListSearch, ClassListSub, ClassListText, ClassListWrapper } from '@styles/class/classList.style';
import { useModalStore } from '@zustand/modalStore.mjs';
import MetaTag from '@components/ui/MetaTag';
import ClassCardSkeleton from '@components/ui/Card/ClassCardSkeleton';

function ClassList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page');
  const { isLoading, data, error, refetch } = useGetClassInfo(page, searchParams);

  useEffect(() => {
    refetch();
  }, [searchParams.toString()]);

  const handleSearch = (keyword) => {
    searchParams.set('keyword', keyword);
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  };

  const user = useMemberStore().user;
  const navigate = useNavigate();
  const toggleModal = useModalStore((state) => state.toggleModal);

  const handleAddClass = () => {
    if (!user) {
      toggleModal();
    } else {
      navigate(`/class/add`);
    }
  };

  const handleConfirm = () => {
    toggleModal();
    navigate(`/login`);
    toggleModal();
  };

  const classList = data?.item.map((item) => <ClassCard key={item._id} item={item} />);
  const path = `${import.meta.env.VITE_BASE_URL}/class`;
  const cardCount = data?.item.length
  const skeletons = Array(cardCount || 8).fill(0).map((_, index) =>  {
    return (
      <ClassCardSkeleton key={`skeleton-${index}`}/>
    );
  });

  return (
    <Section>
      <MetaTag title={'베이킹 클래스 목록'} description={'베이킹 클래스 목록입니다.'} url={path} />

      <ClassListWrapper>
        <ClassListPage>
          <ClassListText>
            <Text typography="display_l" display="block" color="black">
              베이킹 클래스
            </Text>

            <Text typography="light_l" color="black" display="block">
              빵라다이스에서는 베이킹 마스터 주민분들께서 다양한 베이킹 클래스를 진행하고 있습니다. 베이킹 마스터분들이 진행하는 다양한 클래스에 참여하며 빵라다이스의 거주민 혜택을 누려보세요.
            </Text>
            <ClassListSub>
              <Text typography="light_s" color="black" display="block">
                *
              </Text>
              <Text typography="light_s" color="black" display="block">
                베이킹 마스터 등급이 되시면 베이킹 클래스를 주최할 수 있어요!
              </Text>
            </ClassListSub>
          </ClassListText>
          <ClassListSearch>
            <Search onClick={handleSearch}></Search>
          </ClassListSearch>
        </ClassListPage>

        <ClassListContent>
        {isLoading ? (skeletons) : error ? (<div>{error.message}</div>) : (classList)}
      </ClassListContent>
      </ClassListWrapper>
      <RoundButton page="add" onClick={handleAddClass} />
      <Modal handleConfirm={handleConfirm} contentText="베이킹 클래스는 빵라다이스의 주민들을 위한 활동입니다. 로그인 후 빵라다이스를 즐겨주세요!" confirmText="로그인" closeText="돌아가기" />
    </Section>
  );
}

export default ClassList;
