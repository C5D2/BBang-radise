import ArrowIcon from '@assets/ArrowIcon';
import Badge from '@components/ui/Badge';
import Text from '@components/ui/Text';
import BookmarkButton from '@components/ui/button/BookmarkButton';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import useBadge from '@hooks/utils/useBadge';

const ClassCardContainer = styled.article`
  width: 100%;
  position: relative;

  &:hover .card-hover {
    display: block;
    flex-shrink: 0;
  }
`;

const ClassCardBookmark = styled.div`
  position: absolute;
  z-index: 1;
  right: 17px;
  top: -12px;
`;

const ClassCardNavigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  @media all and (min-width: 768px) {
    gap: 12px;
  }
`;

const ClassCardImgLayout = styled.div`
  width: 100%;
  height: 170px;
  background-color: var(--gray-07);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

const ClassCardImg = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`;

const ClassCardBadge = styled.div`
  position: absolute;
  top: 11px;
  left: 13px;
`;

const ClassCardImgCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgb(47, 34, 25);
  mix-blend-mode: color;
`;

const ClassCardContent = styled.div`
  margin: 0px 7px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media all and (min-width: 768px) {
    gap: 6px;
  }
`;

const ClassCardTitle = styled.div`
  font-weight: 700;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

const ClassCardHover = styled.div`
  display: none;
  width: 8px;
  margin-top: 1px;
  margin-right: 10px;

  @media all and (min-width: 768px) {
    width: 9.5px;
    margin-top: 1.5px;
  }
`;

const ClassCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const ClassCardActive = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ClassCardStatic = styled.div`
  display: flex;
  justify-content: space-between;
`;

ClassCard.propTypes = {
  item: PropTypes.object.isRequired,
};

function ClassCard({ item }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const mainImage = item.mainImages ? item?.mainImages[0]?.name : item?.image.name;
  const { badgeType, quantityColor, textColor, expired } = useBadge(item);
  return (
    <ClassCardContainer>
      <ClassCardBookmark>
        <BookmarkButton toggle="true" />
      </ClassCardBookmark>

      <ClassCardNavigation onClick={() => navigate(`/class/${item._id}`)}>
        <ClassCardImgLayout>
          <ClassCardImg src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${mainImage}`} alt="클래스 대표 이미지" />
          {expired && <ClassCardImgCover />}
          <ClassCardBadge>
            <Badge type={badgeType}></Badge>
          </ClassCardBadge>
        </ClassCardImgLayout>

        <ClassCardContent>
          <Text color={textColor} typography="black_m">
            <ClassCardTitle>
              <ClassCardHover className="card-hover">
                <ArrowIcon width="100%" stroke="var(--primary-01)"></ArrowIcon>
              </ClassCardHover>

              <H1>
                <Text color={textColor} typography="black_m">
                  {item.name}
                </Text>
              </H1>
            </ClassCardTitle>
          </Text>

          <ClassCardInfo>
            <ClassCardActive>
              <Text typography="bold_m" color={textColor}>
                {item.extra.classAt}
              </Text>
              <Text typography="black_s" color={quantityColor}>
                {pathname.includes('mypage') ? item.extra.address : `${item.buyQuantity}/${item.quantity}명`}
              </Text>
            </ClassCardActive>

            <ClassCardStatic>
              <Text typography="extrabold_s" color={textColor}>
                {pathname.includes('mypage') ? null : item.extra.address}
              </Text>
              <Text typography="extrabold_s" color={textColor}>
                {pathname.includes('mypage') ? null : item.seller?.name}
              </Text>
            </ClassCardStatic>
          </ClassCardInfo>
        </ClassCardContent>
      </ClassCardNavigation>
    </ClassCardContainer>
  );
}

export default ClassCard;
