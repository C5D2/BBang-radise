import EditIcon from '@assets/EditIcon';
import styled from 'styled-components';

const CommentEditButtonStyle = styled.button`
  padding: 7px;
`;

function CommentEditButton({ type = 'button', onClick, width }) {
  return (
    <>
      <CommentEditButtonStyle type={type} onClick={onClick}>
        <EditIcon stroke="var(--primary-01)" strokeWidth="4.4px" width={width}></EditIcon>
      </CommentEditButtonStyle>
    </>
  );
}

export default CommentEditButton;
