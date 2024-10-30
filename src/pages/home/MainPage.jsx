import Section from '@components/ui/Section';
import Button from '@components/ui/Button/DefaultButton';
import MainPageClass from '@pages/home/MainPageClass';
import { register } from 'swiper/element/bundle';
import MainPageRecipe from '@pages/home/MainPageRecipe';
import MainPageCover from '@pages/home/MainPageCover';
import { useNavigate } from 'react-router-dom';
import {
  H1,
  H2,
  MainPageArrow,
  MainPageBottomImg,
  MainPageBottomWrapper,
  MainPageButton,
  MainPageClassSwiper,
  MainPageClassWrapper,
  MainPageContent,
  MainPageCoverWrapper,
  MainPageRecipeContainer,
  MainPageRecipeWrapper,
} from '@styles/mainpage/mainpage.style';
import ArrowIcon from '@assets/ArrowIcon';
register();

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <MainPageCoverWrapper>
        <MainPageContent>
          <H2>빵이 가득한 파라다이스,</H2>
          <H1>빵라다이스에 오신 여러분을 환영합니다!</H1>
          <MainPageArrow>
            <ArrowIcon width="23px" stroke="var(--primary-01)" />
          </MainPageArrow>
        </MainPageContent>

        <MainPageCover
          srcSet="/homeSample/main03.webp 1200w, 
            /homeSample/main03_m.webp 800w"
          sizes="(max-width: 767px) 80vw, 100vw"
          src="/homeSample/main03.webp"
          width="94%"
          alt="메인 빵 첫번째 사진"
        />
        <MainPageCover
          srcSet="/homeSample/main06.webp 1200w, 
            /homeSample/main06_m.webp 800w"
          sizes="(max-width: 767px) 80vw, 100vw"
          src="/homeSample/main06.webp"
          width="90%"
          alt="메인 빵 두번째 사진"
        />

        <MainPageCover
          srcSet="/homeSample/main07.webp 1200w, 
            /homeSample/main07_m.webp 800w"
          sizes="(max-width: 767px) 80vw, 100vw"
          src="/homeSample/main07.webp"
          width="95%"
          alt="메인 빵 세번째 사진"
        />
        <MainPageCover
          srcSet="/homeSample/main05.webp 1200w, 
            /homeSample/main05_m.webp 800w"
          sizes="(max-width: 767px) 80vw, 100vw"
          src="/homeSample/main05.webp"
          width="95%"
          marginTop="70px"
          alt="메인 빵 네번째 사진"
        />
        <MainPageCover
          srcSet="/homeSample/main04.webp 1200w, 
            /homeSample/main04_m.webp 800w"
          sizes="(max-width: 767px) 80vw, 100vw"
          src="/homeSample/main04.webp"
          width="100%"
          marginTop="30px"
          marginLeft="20px"
          alt="메인 빵 다섯번째 사진"
        />
      </MainPageCoverWrapper>

      <MainPageClassWrapper>
        <H2>
          빵라다이스에서는 베이킹 마스터들의 다양한 <span>베이킹 클래스</span>가 열리고 있습니다
        </H2>
        <MainPageButton>
          <Button color="var(--primary-01)" onClick={() => navigate(`/class`)}>
            베이킹 클래스 신청하기
          </Button>
        </MainPageButton>
        <MainPageClassSwiper>
          <swiper-container
            slides-per-view="auto"
            effect="coverflow"
            coverflow-effect-depth="20"
            coverflow-effect-rotate="8"
            coverflow-effect-scale="0.9"
            coverflow-effect-slide-shadows="false"
            centered-slides="true"
            space-between="40"
            autoplay-delay="1700"
            loop="true"
            speed="1500"
          >
            <swiper-slide>
              <MainPageClass
                img="/homeSample/class01.webp"
                title="속은 촉촉, 겉은 바삭! 브리오슈 만들기"
                text="브리오슈를 집에서 쉽고 맛있게 만들어보세요! 이 강의에서는 촉촉하고 부드러운 내용물과 바삭한 겉을 가진 프랑스 빵의 비법을 배우게 됩니다. 전문적인 레시피와 기술을 통해 집에서도 프랑스 베이커리의 풍미를 경험할 수 있습니다. 집에..."
                toggle="true"
                adress="서울 마포구"
                quantity="11/14"
                alt="메인 클래스 첫번째 사진"
              />
            </swiper-slide>

            <swiper-slide>
              <MainPageClass
                img="/homeSample/class02.webp"
                title="화이트 초콜릿과 크랜베리 스콘 베이킹 모집"
                text="초보자부터 숙련자까지 모두 화이트 초콜릿과 크랜베리의 풍부한 맛을 느낄 수 있는 시그니처 레시피와 함께, 스콘의 기본 기술과 레시피 변형법을 배웁니다. 아침 식사나 오후의 티타임에 어울리는 이 특별한 스콘을 만들어서 가족과 친구들에게 자랑해보세요!"
                adress="성남시 분당구"
                quantity="15/20"
                alt="메인 클래스 두번째 사진"
              />
            </swiper-slide>

            <swiper-slide>
              <MainPageClass
                img="/homeSample/class03.webp"
                sizes="(max-width: 767px) 80vw, 100vw"
                title="담백하고 고소한 호밀빵 클래스 오픈!"
                text="이번에는 담백하고 고소한 호밀빵을 만들어보는 클래스를 열어요!호밀빵의 기본적인 레시피와 베이킹 요령부터 시작해서, 집에서도 호텔 베이커리 수준의 맛과 향을 내는 비법을 배울 거예요. 언제나 즐겨 먹을 수 있는 담백하고 고소한 호밀빵을 직접 만들어보세요!"
                adress="부산시 해운대구"
                quantity="3/8"
                alt="메인 클래스 세번째 사진"
              />
            </swiper-slide>

            <swiper-slide>
              <MainPageClass
                type="active"
                toggle="true"
                img="/homeSample/class04.webp"
                sizes="(max-width: 767px) 80vw, 100vw"
                title="레몬 번트 케이크: 집에서 프로의 솜씨로!"
                text="레몬 번트 케이크 베이킹 모집! 달콤한 향과 부드러운 식감의 번트 케이크를 만들어보세요. 모든 재료와 도구를 제공하며, 초보자도 쉽게 참여할 수 있습니다. 케이크를 만들며 즐거운 시간을 보내고, 더 나은 베이킹 기술을 습득하세요. 빠른 신청 서두르세요!"
                adress="대구시 수성구"
                quantity="9/10"
                alt="메인 클래스 네번째 사진"
              />
            </swiper-slide>

            <swiper-slide>
              <MainPageClass
                toggle="true"
                img="/homeSample/class05.webp"
                title="비밀 레시피로 배우는 애플 크럼블 파이!"
                text="🍏애플 크럼블 파이 클래스 모집합니다🥧 집에서 따뜻한 파이 향기를 즐기며 새로운 요리 기술을 배울 수 있는 기회! 신선한 사과와 바삭한 크럼블을 조합하여 완벽한 맛을 낼 수 있는 레시피를 배워보세요. 재료는 준비되어 있으니, 여유로운 분위기 속에서 친구들과 함께 즐거운 파이 만들기를 시작해봐요! "
                adress="서울시 종로구"
                quantity="4/10"
                alt="메인 클래스 다섯번째 사진"
              />
            </swiper-slide>

            <swiper-slide>
              <MainPageClass
                type="active"
                img="/homeSample/class06.webp"
                sizes="(max-width: 767px) 80vw, 100vw"
                title="남부의 맛을 집에서 즐기는 법 ~ 피칸파이"
                text="달콤한 피칸과 부드러운 크림이 어우러진 맛있는 파이를 함께 만들어보세요. 특별한 레시피와 실전 팁을 전해드립니다. 처음이신 분도 환영! 재료는 모두 제공되며, 베이킹의 재미를 경험해보세요. 피칸 파이의 풍부한 맛과 향기로운 시간을 보내고 싶은 분들을 모십니다. 함께하는 모임에서 새로운 친구들과 소중한 추억을 만들어보세요. 지금 바로 신청해보세요!"
                adress="광주시 서구"
                quantity="9/10"
                alt="메인 클래스 여섯번째 사진"
              />
            </swiper-slide>

            <swiper-slide>
              <MainPageClass
                toggle="true"
                img="/homeSample/class07.webp"
                sizes="(max-width: 767px) 80vw, 100vw"
                title="간편한 블루베리 머핀 만들기 모집합니다"
                text="특별한 블루베리 머핀 베이킹 클래스 오픈! 상큼한 블루베리의 달콤한 맛이 가득한 머핀을 함께 만들어보세요. 베이킹 전문가의 가이드와 함께하는 실전 레슨으로, 누구나 쉽게 따라할 수 있어요. 재료와 도구는 모두 준비되어 있으니, 당신의 열정만 가져오세요! 새로운 친구들과 함께하는 베이킹 클래스로 달콤한 블루베리 머핀을 만들며 즐거운 추억을 만들어봐요. 놓치지 마세요!"
                adress="강원도 춘천시"
                quantity="5/6"
                alt="메인 클래스 일곱번째 사진"
              />
            </swiper-slide>

            <swiper-slide>
              <MainPageClass
                img="/homeSample/class08.jpg"
                title="상큼한 여름 디저트 클래스"
                text="상큼한 여름 디저트 클래스 참가자를 모집합니다! 신선한 과일과 상큼한 시트러스 향이 어우러진 레시피로 여름을 더욱 즐겁게 보낼 준비가 되어 있습니다. 시원한 머스크멜론 샐러드, 상큼한 레몬 파운드 케이크, 혹은 상쾌한 베리 타르트 등 다양한 디저트를 만들어보면서 여름의 매력을 느껴보세요. 특별한 여름 추억을 함께 만들 준비가 되어 있으니, 지금 바로 신청하세요!"
                adress="울산시 남구"
                quantity="4/8"
                alt="메인 클래스 여덟번째 사진"
              />
            </swiper-slide>
          </swiper-container>
        </MainPageClassSwiper>
      </MainPageClassWrapper>

      <MainPageRecipeWrapper>
        <H2>
          빵라다이스의 주민들은 서로가 가진 다양한 <span>베이킹 레시피</span>를 공유합니다
        </H2>
        <MainPageButton>
          <Button color="var(--primary-01)" onClick={() => navigate(`/recipe`)}>
            베이킹 레시피 찾기
          </Button>
        </MainPageButton>
        <MainPageRecipeContainer>
          <MainPageRecipe img="/homeSample/recipe01.webp" title="우리나라 전통 약과도 사랑해주기를 바라는 마음에 만들어봄!" alt="메인 레시피 첫번째 사진" />
          <MainPageRecipe img="/homeSample/recipe02.webp" title="커피대신 커피번 먹고 정신 차리기" alt="메인 레시피 두번째 사진" />
          <MainPageRecipe img="/homeSample/recipe03.webp" title="지옥에서 온 츄러스..." alt="메인 레시피 세번째 사진" />
          <MainPageRecipe img="/homeSample/recipe04.webp" title="베이킹 시작하고 금손 소리 듣는 중인 내가 사실 똥손인 것에 대하여" alt="메인 레시피 네번째 사진" />
          <MainPageRecipe img="/homeSample/recipe05.webp" title="딸기가 제철이라 만들어본 🍓딸기 타르트🍓" alt="메인 레시피 다섯번째 사진" />
          <MainPageRecipe img="/homeSample/recipe06.webp" title="여행가서 먹은 에그타르트 재현해봤는데..." alt="메인 레시피 여섯번째 사진" />
          <MainPageRecipe img="/homeSample/recipe07.webp" title="집에서 만드는 컵케이크 레시피 공유 🧁" alt="메인 레시피 일곱번째 사진" />
          <MainPageRecipe img="/homeSample/recipe08.webp" title="오븐 없이 에어프라이어로 베이킹 기록 (진짜 핵초보 주의)" alt="메인 레시피 여덟번째 사진" />
          <MainPageRecipe img="/homeSample/recipe09.webp" title="당 걱정돼서 베이킹할 때 설탕 안 넣으면 이렇게 됨.webp" alt="메인 레시피 아홉번째 사진" />
          <MainPageRecipe img="/homeSample/recipe10.webp" title="홈 베이킹 초보~ 식빵 구웠다~" alt="메인 레시피 열번째 사진" />
          <MainPageRecipe img="/homeSample/recipe11.webp" title="베이킹 고수들아 나 좀 도와줘 (어디서 부터 잘못된 걸까..)" alt="메인 레시피 열한번째 사진" />
          <MainPageRecipe img="/homeSample/recipe12.webp" title="슈가파우더 대신 황설탕 쓴 후기 공유" alt="메인 레시피 열두번째 사진" />
          <MainPageRecipe img="/homeSample/recipe13.webp" title="베이킹이 취미인 사람 베이킹 기록 보고가~!" alt="메인 레시피 열세번째 사진" />
        </MainPageRecipeContainer>
      </MainPageRecipeWrapper>

      <MainPageBottomWrapper>
        <H2>빵라다이스의 주민이 되어 다양한 주민 혜택을 즐겨보세요!</H2>

        <MainPageButton>
          <Button color="var(--primary-02)" onClick={() => navigate(`/signup`)}>
            주민 등록하기
          </Button>
          <Button color="var(--primary-01)" onClick={() => navigate(`/login`)}>
            로그인
          </Button>
        </MainPageButton>
        <MainPageBottomImg src="/homeSample/bottom.webp" alt="bottom" />
      </MainPageBottomWrapper>
    </Section>
  );
};

export default MainPage;
