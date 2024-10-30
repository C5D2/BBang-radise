import Text from '@components/ui/Text';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@components/ui/Button/Button';
import Submit from '@components/ui/Button/Submit';
import { useModalStore } from '@zustand/modalStore.mjs';

const ModalOpen = keyframes`
from{
  opacity:0;
}
to {
  opacity:1;
}
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  animation: ${ModalOpen} 0.3s ease-out;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: linear-gradient(0deg, rgba(254, 245, 230, 0.95) 40%, rgba(255, 187, 53, 0.9) 100%);
`;

const ModalInner = styled.div`
  width: 400px;
  height: 163px;
  gap: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;

  & span {
    padding: 0 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
  flex-direction: column;

  @media all and (min-width: 768px) {
    flex-direction: row;
  }
`;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  handleModalToggle: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleConfirm: PropTypes.func,
  contentText: PropTypes.string,
  submitText: PropTypes.string,
  closeText: PropTypes.string,
  confirmText: PropTypes.string,
};

function Modal({ contentText, handleSubmit, handleConfirm, submitText, closeText, confirmText }) {
  const isOpen = useModalStore((state) => state.isOpen);
  const toggleModal = useModalStore((state) => state.toggleModal);
  if (!isOpen) {
    document.body.style.overflow = 'auto';
    return null;
  } else {
    document.body.style.overflow = 'hidden';
  }

  return (
    <ModalWrapper>
      <ModalBackground>
        <ModalInner>
          <Text typography="bold_l">{contentText}</Text>
          <ButtonContainer>
            {closeText && (
              <Button color="var(--gray-07)" onClick={toggleModal}>
                {closeText}
              </Button>
            )}
            {submitText && (
              <Submit color="var(--primary-01)" onClick={handleSubmit}>
                {submitText}
              </Submit>
            )}
            {confirmText && (
              <Button color="var(--primary-01)" onClick={handleConfirm}>
                {confirmText}
              </Button>
            )}
          </ButtonContainer>
        </ModalInner>
      </ModalBackground>
    </ModalWrapper>
  );
}

export default Modal;
