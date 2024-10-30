import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import useUserApis from '@hooks/apis/useUserApis.mjs';
import Button from '@components/ui/Button/Button';
import Input from '@components/ui/Input';
import TextArea from '@components/ui/TextArea';
import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import { useGetUserInfo } from '@hooks/queries/user';
import * as S from '@styles/mypage/mypageEdit.style';
import Modal from '@components/ui/Modal';
import Toast from '@components/ui/Toast';
import { useModalStore } from '@zustand/modalStore.mjs';
import DefaultProfile from '@assets/DefaultProfile';

function MyPageEdit() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetUserInfo(_id);
  const { patchMyInfo } = useUserApis();
  const [showToast, setShowToast] = useState(false);
  const toggleModal = useModalStore((state) => state.toggleModal);

  const {
    register,
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      introduction: '',
    },
  });

  const user = data?.item;

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        password: user.password,
        introduction: user.introduction,
      });
    }
  }, [user]);

  const onSubmit = async (formData) => {
    try {
      await patchMyInfo(_id, formData);
      toggleModal();
      setShowToast(true);
    } catch (err) {
      console.log(err);
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach((error) => setError(error.path, { message: error.msg }));
      } else if (err.response?.data.message) {
        alert(err.response?.data.message);
        toggleModal();
      }
    }
  };

  return (
    <Section>
      <S.MyPageWrapper>
        {showToast && <Toast setToast={setShowToast} text="회원 정보가 수정되었습니다." />}
        <S.MyPageContent>
          <Text color="black" display="block" typography="display_l">
            내정보 수정하기
          </Text>
          <Text typography="light_l" color="black" display="block">
            빵라다이스에 공유하고 싶은 레시피나 베이킹 이야기를 자유롭게 공유해주세요.
          </Text>
          <S.MyPageButton>
            <div>
              <Button color="var(--primary-01)" onClick={toggleModal}>
                수정 완료
              </Button>
            </div>
            <div>
              <Button
                color="var(--gray-07)"
                onClick={() => {
                  navigate(-1);
                }}
              >
                수정 취소
              </Button>
            </div>
          </S.MyPageButton>
        </S.MyPageContent>
        {user && (
          <S.MyPageForm onSubmit={handleSubmit(onSubmit)}>
            <Modal handleSubmit={handleSubmit} contentText="회원정보를 수정하시겠습니까?" submitText="예" closeText="아니오" />
            <div>
              <Input
                type="text"
                id="name"
                label="이름"
                height="40px"
                typography="semibold_m"
                placeholder="이름을 입력하세요"
                error={errors.name && errors.name.message}
                {...register('name', {
                  required: '이름을 입력하세요.',
                  minLength: {
                    value: 2,
                    message: '이름을 2글자 이상 입력하세요.',
                  },
                })}
              />
            </div>
            <div>
              <Input type="email" id="email" label="이메일" placeholder="이메일을 입력하세요" error={errors.email && errors.email.message} {...register('email')} disabled />
            </div>
            <S.MyPageProfilWrapper>
              <Text typography="semibold_s" display="block">
                프로필 이미지
              </Text>

              {user.profileImage && user.profileImage.length > 0 ? (
                <S.EditProfileImage src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user.profileImage}`} alt="프로필 이미지" />
              ) : (
                <DefaultProfile width={71} height={71} stroke="gray" />
              )}
            </S.MyPageProfilWrapper>
            <div>
              <TextArea label="자기소개 (40자 이내)" type="txt" id="introduction" placeholder="자기소개를 입력해주세요" rows="5" {...register('introduction')} />
            </div>
          </S.MyPageForm>
        )}
      </S.MyPageWrapper>
    </Section>
  );
}

export default MyPageEdit;
