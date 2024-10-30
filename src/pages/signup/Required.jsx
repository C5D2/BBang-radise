import Text from '@components/ui/Text';
import Input from '@components/ui/Input';
import ValidationButton from '@components/ui/Button/ValidationButton';
import useUserApis from '@hooks/apis/useUserApis.mjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from '@styles/signup/signup.style';
import Submit from '@components/ui/Button/Submit';
import useFormStore from '@zustand/formStore.mjs';
import PropTypes from 'prop-types';

Required.propTypes = {
  setStep: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function Required({ setStep, onSubmit }) {
  const [emailMsg, setEmailMsg] = useState('');
  const { getEmailVerify } = useUserApis();
  const {
    register,
    watch,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const { email } = watch();
  const setFormData = useFormStore((state) => state.setFormData);
  // const { formData, setFormData } = useFormStore((state) => ({
  //   formData: state.formData,
  //   setFormData: state.setFormData,
  // }));

  // useEffect(() => {
  //   if (formData)
  //     reset({
  //       name: formData.name,
  //       email: formData.email,
  //       password: formData.password,
  //     });
  // }, [formData]);

  const checkDuplicateEmail = async () => {
    try {
      const res = await getEmailVerify(email);
      if (res.status === 200) {
        setEmailMsg('회원가입 가능한 이메일입니다.');
      }
    } catch (err) {
      setEmailMsg(err.response?.data.message);
    }
  };

  const onRequiredSubmit = (data) => {
    setFormData(data);
    onSubmit(data);
    setStep(1);
  };

  return (
    <>
      <S.SignUpForm onSubmit={handleSubmit(onRequiredSubmit)}>
        <div>
          <Input
            type="text"
            id="name"
            label="이름"
            height="40px"
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
        <S.SignUpEmailWrapper>
          <div>
            <Input
              type="email"
              id="email"
              label="이메일"
              placeholder="이메일을 입력하세요"
              error={errors.email && errors.email.message}
              {...register('email', {
                required: '이메일을 입력하세요.',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: '이메일 형식이 아닙니다.',
                },
              })}
            />
          </div>
          <S.SignUpValidation>
            {emailMsg && (
              <Text typography="bold_s" color="primary02">
                {emailMsg}
              </Text>
            )}
            <ValidationButton type="button" disabled={email === '' || errors.email ? true : false} onClick={checkDuplicateEmail}>
              중복 확인
            </ValidationButton>
          </S.SignUpValidation>
        </S.SignUpEmailWrapper>
        <div>
          <Input
            type="password"
            id="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            error={errors.password && errors.password.message}
            {...register('password', {
              required: '비밀번호를 입력하세요.',
            })}
          />
        </div>
        <div>
          <Submit>다음</Submit>
        </div>
      </S.SignUpForm>
    </>
  );
}

export default Required;
