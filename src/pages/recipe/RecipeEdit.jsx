import Input from '@components/ui/Input';
import Modal from '@components/ui/Modal';
import QuillEditor from '@components/ui/QuillEditor/QuillEditor';
import Section from '@components/ui/Section';
import Select from '@components/ui/Select';
import Text from '@components/ui/Text';
import Button from '@components/ui/Button/DefaultButton';
import Submit from '@components/ui/Button/Submit';
import useFileApis from '@hooks/apis/useFileApis.mjs';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import * as S from '@styles/recipe/recipeadd.style';
import { useQuery } from '@tanstack/react-query';
import { useModalStore } from '@zustand/modalStore.mjs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function RecipeEdit() {
  const { postSingleFile } = useFileApis();
  const { _id } = useParams();

  const {
    register,
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      extra: '',
      content: '',
    },
  });

  const axios = useCustomAxios();
  const navigate = useNavigate();
  const toggleModal = useModalStore((state) => state.toggleModal);

  const { data } = useQuery({
    queryKey: ['posts', _id],
    queryFn: () => axios.get(`/posts/${_id}`),
    select: (response) => response.data,
    suspense: true,
  });

  const item = data?.item;

  const [quillValue, setquillValue] = useState(item.content);

  useEffect(() => {}, [quillValue]);

  useEffect(() => {
    if (item) {
      reset({
        title: item.title,
        extra: item.extra,
        content: item.content,
      });
    }
  }, [item]);

  const onSubmit = async (formData) => {
    try {
      formData.content = quillValue;
      formData.type = 'recipe';

      if (formData.extra) {
        const fileRes = await postSingleFile(formData.extra[0]);
        if (fileRes.data.item.length > 0) {
          formData.extra = fileRes.data.item[0].name;
        } else {
          formData.extra = item.extra;
        }
      }

      const res = await axios.patch(`/posts/${_id}`, formData);

      navigate(`/recipe/${_id}`);
    } catch (err) {
      // AxiosError(네트워크 에러-response가 없음, 서버의 4xx, 5xx 응답 상태 코드를 받았을 때-response 있음)
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach((error) => setError(error.path, { message: error.msg }));
      } else if (err.response?.data.message) {
        alert(err.response?.data.message);
      }
    }
  };

  const handleDelete = async () => {
    await axios.delete(`/posts/${_id}`);
    toggleModal();
    navigate('/recipe');
  };

  const optionData = [
    { value: '빵', label: '빵' },
    { value: '케이크&컵케이크&머핀', label: '케이크&컵케이크&머핀' },
    { value: '타르트&파이', label: '타르트&파이' },
    { value: '쿠키&구움과자', label: '쿠키&구움과자' },
    { value: '초콜릿', label: '초콜릿' },
    { value: '떡&젤리&기타', label: '떡&젤리&기타' },
  ];

  return (
    <Section>
      <Modal handleSubmit={handleDelete} contentText="정말 삭제하시겠습니까?" submitText="예" closeText="아니오" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <S.RecipeAddWrapper>
          <S.RecipeAddSideBar>
            <Text color="black" display="block" typography="display_l">
              베이킹 레시피 수정하기
            </Text>

            <S.RecipeAddButton>
              <Button color="var(--gray-06)" onClick={toggleModal}>
                삭제하기
              </Button>

              <Button color="var(--primary-02)" onClick={() => navigate(`/recipe/${_id}`)}>
                수정 취소
              </Button>
              <Submit>수정 완료</Submit>
            </S.RecipeAddButton>
          </S.RecipeAddSideBar>

          <S.RecipeAddForm>
            <div className="input-title">
              <Input
                id="title"
                type="text"
                label="제목 (30자 이내)"
                placeholder="제목을 입력하세요"
                error={errors.title && errors.title.message}
                {...register('title', {
                  required: '제목을 입력해주세요',
                  maxLength: {
                    value: 30,
                    message: '제목은 30자 이내로 입력 가능합니다',
                  },
                })}
              />
            </div>
            <div className="select-category">
              <Select id="category" label="카테고리" placeholder="레시피 카테고리를 선택해주세요" optionData={optionData} />
            </div>
            <div className="upload-mainimage">
              <Input type="file" accept="image/*" id="extra" label="대표 이미지" {...register('extra')} />
            </div>
            <div className="input-content">
              <Text typography="semibold_s" display="block" color="gray08">
                레시피 내용
              </Text>
              <QuillEditor id="content" name="content" values={quillValue} setValues={setquillValue} className="quillWrapper" />
              {/* <Input type="text" id="content" label="레시피 내용" {...register('content', { required: '내용을 입력해주세요' })} /> */}
            </div>
          </S.RecipeAddForm>
        </S.RecipeAddWrapper>
      </form>
    </Section>
  );
}

export default RecipeEdit;
