import Input from '@components/ui/Input';
import QuillEditor from '@components/ui/QuillEditor/QuillEditor';
import Select from '@components/ui/Select';
import Text from '@components/ui/Text';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from '@styles/recipe/recipeadd.style';
import Section from '@components/ui/Section';
import Submit from '@components/ui/Button/Submit';
import Button from '@components/ui/Button/Button';
import useFileApis from '@hooks/apis/useFileApis.mjs';
import { useEffect, useState } from 'react';
import DefaultImagePreview from '@assets/DefaultImagePreview.png';

function RecipeAdd() {
  const [quillValue, setquillValue] = useState();
  const { postSingleFile } = useFileApis();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();
  const [mainImagesPreview, setMainImagesPreview] = useState('');

  const axios = useCustomAxios();
  const navigate = useNavigate();
  const mainImages = watch('extra');

  useEffect(() => {
    if (mainImages && mainImages.length > 0) {
      const file = mainImages[0];
      setMainImagesPreview(URL.createObjectURL(file));
    }
  }, [mainImages]);

  const onSubmit = async (formData) => {
    try {
      formData.content = quillValue;
      formData.type = 'recipe';

      if (formData.extra.length > 0) {
        const fileRes = await postSingleFile(formData.extra[0]);
        formData.extra = fileRes.data.item[0].name;
      } else {
        delete formData.extra;
      }

      const res = await axios.post('/posts', formData);
      navigate(`/recipe/${res.data.item._id}`);
    } catch (err) {
      console.log(err);
      // AxiosError(네트워크 에러-response가 없음, 서버의 4xx, 5xx 응답 상태 코드를 받았을 때-response 있음)
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach((error) => setError(error.path, { message: error.msg }));
      } else if (err.response?.data.message) {
        alert(err.response?.data.message);
      }
    }
  };

  useEffect(() => {}, [quillValue]);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.RecipeAddWrapper>
          <S.RecipeAddSideBar>
            <Text color="black" display="block" typography="display_l">
              베이킹 레시피 등록하기
            </Text>
            <Text typography="light_l" color="black" display="block">
              빵라다이스에 공유하고 싶은 레시피나 베이킹 이야기를 자유롭게 공유해주세요.
            </Text>
            <S.RecipeAddButton>
              <Submit>등록하기</Submit>
              <Button color="var(--gray-06)" onClick={() => navigate('/recipe')}>
                취소하기
              </Button>
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
              <Input
                type="file"
                accept="image/*"
                id="extra"
                label="대표 이미지 (1개)"
                placeholder="이미지를 선택하세요"
                {...register('extra', {
                  required: '대표 이미지를 등록해주세요.',
                })}
              />
              <S.FileInputBoxStyle>
                {mainImagesPreview && mainImagesPreview.length > 0 ? (
                  <S.PreviewImageWrapper>
                    <S.PreviewImageStyle src={mainImagesPreview} className="hidden" width="160" height="160" alt="main_image" />
                    {/* <S.DeleteButtonWrapper>
                    <S.DeleteButtonStyle type="button" onClick={deleteMainImage}>
                      x
                    </S.DeleteButtonStyle>
                  </S.DeleteButtonWrapper> */}
                  </S.PreviewImageWrapper>
                ) : (
                  <S.PreviewImageWrapper>
                    <S.PreviewImageStyle src={DefaultImagePreview} alt="기본이미지" />
                  </S.PreviewImageWrapper>
                )}
              </S.FileInputBoxStyle>
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

export default RecipeAdd;
