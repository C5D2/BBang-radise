import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from '@styles/recipe/recipelistitem.style';
import BookmarkButton from '@components/ui/Button/BookmarkButton';
import Text from '@components/ui/Text';
import ArrowIcon from '@assets/ArrowIcon';

RecipeListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function RecipeListItem({ item }) {
  const navigate = useNavigate();

  return (
    <S.RecipeListItemContainer onClick={() => navigate(`/recipe/${item._id}`)}>
      <S.RecipeListItemHover className="item-hover">
        <ArrowIcon width="100%" stroke="var(--primary-01)" />
      </S.RecipeListItemHover>
      <S.RecipeListItemImage src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.extra}`} alt="" />
      <S.RecipeListItemContent>
        <S.RecipeListItemTitle>
          <Text style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', wordBreak: 'break-all', maxWidth: '500px' }} color="gray08" typography="semibold_m" display="block">
            {item.title}
          </Text>
        </S.RecipeListItemTitle>
        <S.RecipeListItemInfo>
          <S.RecipeListDate>
            <Text color="gray07" typography="semibold_s">
              {item.updatedAt.substr(0, 10)}
            </Text>
          </S.RecipeListDate>
          <Text color="gray07" typography="semibold_s">
            {item.user.name}
          </Text>
        </S.RecipeListItemInfo>
      </S.RecipeListItemContent>
      <S.RecipeListBookmark>
        <BookmarkButton />
      </S.RecipeListBookmark>
    </S.RecipeListItemContainer>
  );
}

export default RecipeListItem;
