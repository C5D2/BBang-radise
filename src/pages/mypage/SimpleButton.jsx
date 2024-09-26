import Text from '@components/ui/Text';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SimpleButtonStyle = styled.button`
  cursor: pointer;
`;

const SimpleButton = ({ children, ...rest }) => {
  return (
    <SimpleButtonStyle type="button" {...rest}>
      <Text typography="light_s" color="gray07">
        {children}
      </Text>
    </SimpleButtonStyle>
  );
};

SimpleButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default SimpleButton;
