import BookmarkButton from '@components/ui/Button/BookmarkButton';
import Badge from '@components/ui/Badge';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  MainPageClassAdress,
  MainPageClassBadge,
  MainPageClassBookmark,
  MainPageClassCard,
  MainPageClassContent,
  MainPageClassImg,
  MainPageClassInfo,
  MainPageClassQuantity,
  MainPageClassText,
  MainPageClassTitle,
} from '@styles/mainpage/mainpageclass.style';

MainPageClass.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  toggle: PropTypes.string,
  adress: PropTypes.string,
  quantity: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
};

function MainPageClass({ img, title, text, toggle, adress, quantity, srcSet, sizes }) {
  const navigate = useNavigate();

  return (
    <MainPageClassCard onClick={() => navigate(`/class`)}>
      <MainPageClassImg src={img} srcSet={srcSet} sizes={sizes} alt="Main Cover" />

      <MainPageClassBookmark>
        <BookmarkButton toggle={toggle} />
      </MainPageClassBookmark>

      <MainPageClassBadge>
        <Badge type="active" />
      </MainPageClassBadge>

      <MainPageClassTitle>{title}</MainPageClassTitle>

      <MainPageClassInfo>
        <MainPageClassAdress>{adress}</MainPageClassAdress>
        <MainPageClassQuantity>{quantity}명</MainPageClassQuantity>
      </MainPageClassInfo>

      <MainPageClassContent className="card-contents">
        <MainPageClassText className="card-txt">{text}</MainPageClassText>
      </MainPageClassContent>
    </MainPageClassCard>
  );
}

export default MainPageClass;
