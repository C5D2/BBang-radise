import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import TextArea from '@components/ui/TextArea';
import Button from '@components/ui/Button/DefaultButton';
import * as S from '@styles/recipe/replyedit.style';
import { useModalStore } from '@zustand/modalStore.mjs';
import Modal from '@components/ui/Modal';

ReplyEdit.propTypes = {
  content: PropTypes.string,
  setEditMode: PropTypes.func,
  handleUpdate: PropTypes.func,
};

function ReplyEdit({ content, setEditMode, handleUpdate }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: { content },
  });
  const toggleModal = useModalStore((state) => state.toggleModal);

  return (
    <S.ReplyEditContainer>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div>
          <TextArea
            {...register('content', {
              required: '내용을 입력하세요',
              minLength: {
                value: 2,
                message: '2글자 이상 입력하세요',
              },
            })}
            rows="3"
            placeholder="내용을 입력하세요."
          />

          {errors.content && <p>{errors.content.message}</p>}
        </div>
        <S.ReplyEditButtonContainer>
          <Button color="var(--primary-01)" onClick={toggleModal}>
            수정
          </Button>
          <Modal handleSubmit={handleSubmit} contentText="정말 수정하시겠습니까?" submitText="예" closeText="아니오" />
          <Button color="var(--gray-06)" onClick={() => setEditMode(false)}>
            취소
          </Button>
        </S.ReplyEditButtonContainer>
      </form>
    </S.ReplyEditContainer>
  );
}

export default ReplyEdit;
