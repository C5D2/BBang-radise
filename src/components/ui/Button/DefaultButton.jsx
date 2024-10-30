import Text from '@components/ui/Text';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
};

const ButtonStyle = styled.button`
  background-color: ${(props) => (props.type == 'submit' ? 'var(--primary-01)' : props.disabled ? 'var(--gray-05)' : props.color)};
  width: 100%;
  padding: 8px 0px;
  border-radius: 30px;
  box-shadow: 1px 4px 5px 0 rgba(179, 179, 179, 0.4);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 1px 1px 8px 4px ${(props) => (props.type == 'submit' ? 'var(--primary-01)' : props.disabled ? '0' : props.color)};
    cursor: pointer;
  }
`;

function Button({ children, type = 'button', color = 'black', ...rest }) {
  return (
    <ButtonStyle type={type} color={color} {...rest}>
      <Text color="white" typography="semibold_m">
        {children}
      </Text>
    </ButtonStyle>
  );
}

export default Button;
