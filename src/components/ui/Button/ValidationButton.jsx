import Text from '@components/ui/Text';
import PropTypes from 'prop-types';
import styled from 'styled-components';

ValidationButton.propTypes = {
  children: PropTypes.string.isRequired,
  error: PropTypes.string,
};

const ButtonStyle = styled.button`
  background-color: ${(props) => (props.disabled ? 'var(--gray-05)' : 'var(--gray-08)')};
  padding: 7px 16px;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;
`;

function ValidationButton({ children, ...rest }) {
  return (
    <>
      <ButtonStyle {...rest}>
        <Text color="white" typography="medium_s">
          {children}
        </Text>
      </ButtonStyle>
    </>
  );
}

export default ValidationButton;
