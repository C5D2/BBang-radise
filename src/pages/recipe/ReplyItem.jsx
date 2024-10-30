import DefaultProfile from '@assets/DefaultProfile';
import CommentDeleteButton from '@components/ui/Button/CommentDeleteButton';
import CommentEditButton from '@components/ui/Button/CommentEditButton';
import ReplyEdit from '@pages/recipe/ReplyEdit';
import useMemberStore from '@zustand/memberStore.mjs';
import PropTypes from 'prop-types';
import { useState } from 'react';
import * as S from '@styles/recipe/replyitem.style';
import Text from '@components/ui/Text';
import { useModalStore } from '@zustand/modalStore.mjs';
import Modal from '@components/ui/Modal';

ReplyItem.propTypes = {
  item: PropTypes.object.isRequired,
  postUserId: PropTypes.number,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};

function ReplyItem({ item, postUserId, handleDelete, handleUpdate }) {
  const user = useMemberStore().user;
  const [editMode, setEditMode] = useState(false);
  const toggleModal = useModalStore((state) => state.toggleModal);

  // 댓글 수정 후 수정모드 off
  const handleUpdateAndSetEditMode = async (formData) => {
    if (await handleUpdate(item._id, formData)) {
      setEditMode(false);
    }
  };

  const handleDeleteModal = () => {
    handleDelete(item._id);
    toggleModal();
  };

  return (
    <S.ReplyItemContainer>
      <S.ReplyItemHeader>
        <S.ReplyItemHeaderleft>
          {item.user.profile ? (
            <S.ReplyItemProfileImage src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.user.profile}`} alt="" />
          ) : (
            <DefaultProfile stroke="var(--gray-06)" width="50px" />
          )}
          <S.ReplyItemUserName href="">
            <Text typography="semibold_s">{item.user.name}</Text>
          </S.ReplyItemUserName>
          {postUserId === item.user._id && <S.ReplyItemWriterBadge>작성자</S.ReplyItemWriterBadge>}
        </S.ReplyItemHeaderleft>

        <div className="replyitem-date">
          <time dateTime={item.updatedAt}>
            <Text typography="semibold_s">{item.updatedAt.substr(0, 10)}</Text>
          </time>
        </div>
      </S.ReplyItemHeader>
      <div>
        {editMode ? (
          <ReplyEdit content={item.content} setEditMode={setEditMode} handleUpdate={handleUpdateAndSetEditMode} />
        ) : (
          <>
            <S.ReplyItemContent>
              <Text typography="semibold_s">{item.content}</Text>
            </S.ReplyItemContent>
            {user?._id === item.user._id && (
              <S.ReplyItemButtonContainer>
                <CommentEditButton width="14px" onClick={() => setEditMode(true)} />
                <CommentDeleteButton width="12px" onClick={toggleModal} />
                <Modal handleSubmit={handleDeleteModal} contentText="정말 삭제하시겠습니까?" submitText="예" closeText="아니오" />
              </S.ReplyItemButtonContainer>
            )}
          </>
        )}
      </div>
    </S.ReplyItemContainer>
  );
}

export default ReplyItem;
