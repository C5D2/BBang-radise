import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import RecipeListItem from '@pages/recipe/RecipeListItem';
import Text from '@components/ui/Text';
import { useEffect } from 'react';
import Search from '@components/ui/Search';
import Section from '@components/ui/Section';
import useMemberStore from '@zustand/memberStore.mjs';
import Modal from '@components/ui/Modal';
import RoundButton from '@components/ui/Button/RoundButton';
import * as S from '@styles/recipe/recipelist.style';
import { useModalStore } from '@zustand/modalStore.mjs';
import MetaTag from '@components/ui/MetaTag';

function RecipeList() {
  const axios = useCustomAxios();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page');

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ['posts?type=recipe', page],
    queryFn: () =>
      axios.get('/posts?type=recipe', {
        params: {
          page,
          limit: import.meta.env.VITE_POST_LIMIT,
          keyword: searchParams.get('keyword'),
        },
      }),
    select: (response) => response.data,
    // staleTime: 1000*100, // 쿼리 실행 후 캐시가 유지되는 시간(기본, 0)
    suspense: true,
  });

  useEffect(() => {
    refetch();
  }, [searchParams.toString()]);

  // 검색 요청시 주소의 query string 수정
  const handleSearch = (keyword) => {
    searchParams.set('keyword', keyword);
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  };

  const user = useMemberStore().user;
  const navigate = useNavigate();
  const toggleModal = useModalStore((state) => state.toggleModal);

  const handleAddRecipe = () => {
    if (!user) {
      // const gotoLogin = confirm('로그인 후 이용 가능합니다.\n로그인 페이지로 이동하시겠습니까?');
      // gotoLogin && navigate('/login');
      toggleModal();
    } else {
      navigate(`/recipe/add`);
    }
  };

  const handleConfirm = () => {
    toggleModal();
    navigate(`/login`);
  };

  const recipeList = data?.item.map((item) => <RecipeListItem key={item._id} item={item} />);
  const path = `${import.meta.env.VITE_BASE_URL}/recipe`;

  return (
    <Section>
      <MetaTag title={'베이킹 레시피 목록'} description={'베이킹 레시피 목록입니다.'} url={path} />

      <S.RecipeListWrapper>
        <S.RecipeListPage>
          <S.RecipeListText>
            <Text color="black" display="block" typography="display_l">
              베이킹 레시피
            </Text>
            <Text color="black" typography="light_l">
              이곳은 빵라다이스의 광장입니다. 빵라다이스의 거주민들은 서로 다양한 레시피를 공유하고 빵을 만들며 빵라다이스를 만들어 나가고 있습니다.
            </Text>
          </S.RecipeListText>
          <S.RecipeListSearch>
            <Search onClick={handleSearch} />
          </S.RecipeListSearch>
        </S.RecipeListPage>
        <S.RecipeListContent>
          <div className="content-list">
            {isLoading && '로딩 중..'}
            {error && error.message}
            {recipeList}
          </div>
        </S.RecipeListContent>
        <RoundButton page="add" onClick={handleAddRecipe} />
        <Modal handleConfirm={handleConfirm} contentText="로그인 후 이용 가능합니다. 로그인 페이지로 이동하시겠습니까?" confirmText="예" closeText="아니오" />
      </S.RecipeListWrapper>
    </Section>
  );
}

export default RecipeList;
