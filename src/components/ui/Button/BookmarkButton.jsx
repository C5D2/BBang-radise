import BookmarkIcon from '@assets/BookmarkIcon';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BookmarkButtonStyle = styled.button`
  width: 23px;
  height: 32px;
`;

BookmarkButton.propTypes = {
  toggle: PropTypes.string,
};

function BookmarkButton({ toggle = false }) {
  return (
    <BookmarkButtonStyle>
      <BookmarkIcon fill={toggle ? 'var(--primary-01' : 'var(--gray-03'} stroke={toggle ? 'var(--primary-01' : 'var(--gray-05'}></BookmarkIcon>
    </BookmarkButtonStyle>
  );
}

export default BookmarkButton;
