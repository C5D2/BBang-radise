import ArrowIcon from '@assets/ArrowIcon';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const MainPageRecipeCard = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  background-color: var(--gray-02);
  padding: 5px 16px 5px 4px;
  border-radius: 10px;

  &:hover {
    background-color: white;

    & .recipe-hover {
      display: flex;
    }
  }
`;

const MainPageRecipeArrow = styled.div`
  display: none;
`;

const MainPageRecipeImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 10px;
  object-fit: cover;
  margin-left: 3px;
`;

const MainPageRecipeTitle = styled.div`
  font-family: pretendard, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.4rem;
  color: var(--gray-08);
  line-height: 1.5;
`;

MainPageRecipe.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

function MainPageRecipe({ title, img }) {
  const navigate = useNavigate();
  return (
    <MainPageRecipeCard onClick={() => navigate(`/recipe`)}>
      <MainPageRecipeArrow className="recipe-hover">
        <ArrowIcon width="13px" stroke="var(--primary-01)" />
      </MainPageRecipeArrow>
      <MainPageRecipeImg src={img} alt="레시피 대표 이미지" />
      <MainPageRecipeTitle>{title}</MainPageRecipeTitle>
    </MainPageRecipeCard>
  );
}

export default MainPageRecipe;
