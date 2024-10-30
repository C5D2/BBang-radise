import AddIcon from '@assets/AddIcon';
import EditIcon from '@assets/EditIcon';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoundButtonStyle = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 200px;
  position: fixed;
  bottom: 18px;
  right: 15px;
  background-color: ${(props) => (props.disabled ? 'var(--gray-05)' : 'var(--primary-02)')};
  box-shadow: 1px 2px 7px 1px rgba(20, 20, 20, 0.45);
  transition: all 0.2s ease-in-out;
  z-index: 99;

  &:hover {
    box-shadow: 0 0 8px 5px rgba(85, 68, 57, 0.7);
  }

  @media all and (min-width: 768px) {
    width: 77px;
    height: 77px;
    bottom: 30px;
    right: 38px;
  }
`;

const IconDiv = styled.div`
  margin: 17px;
  @media all and (min-width: 768px) {
    margin: 22px;
  }
`;

RoundButton.propTypes = {
  page: PropTypes.string,
};

function RoundButton({ page, ...rest }) {
  return (
    <RoundButtonStyle type="button" page={page} {...rest}>
      <IconDiv>{page == 'add' ? <AddIcon stroke="var(--white)"></AddIcon> : <EditIcon stroke="var(--white)"></EditIcon>}</IconDiv>
    </RoundButtonStyle>
  );
}

export default RoundButton;
