import styled, { keyframes } from 'styled-components';

const popup = keyframes`
  0% {
    opacity: 0;
  } 


  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const MainPageCoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & img {
    width: 100%;
    max-width: 1200px;
    height: auto;
    transition: all 0.3s ease;

    @media (max-width: 767px) {
      max-width: 80%;
    }
  }

  & img:first-of-type {
    margin-top: -280px;

    @media (max-width: 767px) {
      margin-top: -220px;
    }
  }

  & img:last-child {
    margin-bottom: 400px;

    @media (max-width: 767px) {
      margin-bottom: 200px;
    }
  }
`;

export const MainPageClassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding-top: 100px;
  @media all and (min-width: 768px) {
    padding-top: 140px;
  }
  @media (max-width: 767px) {
    padding-top: 70px;
    gap: 20px;
  }
`;

export const MainPageRecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 240px 0;

  @media all and (min-width: 768px) {
    padding: 340px 0;
  }
`;

export const MainPageBottomWrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media all and (min-width: 768px) {
    margin: 0 -70px;
    height: 150vh;
    padding-top: 200px;
  }
  @media (max-width: 767px) {
    height: 40vh;
  }
`;

export const MainPageContent = styled.div`
  position: sticky;
  top: 28vh;
  padding-top: 50px;
  animation: ${popup} 2s ease-in-out;
`;

export const MainPageArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  transform: rotate(90deg);
`;

export const H1 = styled.h1`
  font-family: dunkel-sans-variable, sans-serif;
  font-variation-settings: 'GLAT' 1000, 'wdth' 850;
  font-size: 5rem;
  line-height: 1.3;
  color: var(--black);
  word-break: keep-all;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
  padding: 0 20px;
  animation: ${popup} 3s ease-in-out;

  @media all and (min-width: 768px) {
    max-width: 540px;
  }
`;

export const H2 = styled.h2`
  font-family: dunkel-sans-variable, sans-serif;
  font-variation-settings: 'GLAT' 1000, 'wdth' 850;
  font-size: 2.5rem;
  line-height: 1.5;
  color: var(--black);
  word-break: keep-all;
  text-align: center;
  padding: 0 20px;
  margin: 0 auto;

  & span {
    color: var(--primary-01);
  }

  @media all and (min-width: 768px) {
    max-width: 440px;
    padding: unset;
  }
`;

export const MainPageButton = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media all and (min-width: 768px) {
    max-width: 400px;
  }
`;

export const MainPageClassSwiper = styled.div`
  margin: 0 -14px;
  margin-top: 20px;

  & swiper-slide {
    width: 78%;
    overflow: visible;
  }

  & .swiper-slide-active {
    & .card-contents {
      background-color: var(--primary-02);
    }

    & .card-txt {
      color: var(--white);
    }
  }

  @media all and (min-width: 768px) {
    margin: 0 -70px;
    margin-top: 50px;
    & swiper-slide {
      width: 340px;
    }
  }
`;

export const MainPageRecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const MainPageBottomImg = styled.img`
  margin: 0 -14px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: calc(100% + 28px);
  z-index: -1;
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);

  @media all and (min-width: 768px) {
    margin: 0 -70px;
    width: calc(100% + 140px);
  }
`;
