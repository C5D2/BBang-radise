import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useUserApis from '@hooks/apis/useUserApis.mjs';
import useFileApis from '@hooks/apis/useFileApis.mjs';
import { useState } from 'react';
import Section from '@components/ui/Section';
import * as S from '@styles/signup/signup.style';
import Text from '@components/ui/Text';
import Toast from '@components/ui/Toast';
import Required from '@pages/signup/Required';
import Optional from '@pages/signup/Optional';
import useFormStore from '@zustand/formStore.mjs';

function SignUp() {
  const navigate = useNavigate();
  const { postSignUp } = useUserApis();
  const { postSingleFile } = useFileApis();
  const { setError } = useForm({ mode: 'onChange' });
  const [toast, setToast] = useState({
    show: false,
    message: '',
  });
  const [step, setStep] = useState(0);
  const setFormData = useFormStore((state) => state.setFormData);

  const handleRequiredSubmit = () => {
    setStep(1);
  };

  const handleSaveFormData = () => {
    setStep(0);
  };

  const handleOptionalSubmit = async (formData) => {
    try {
      formData.type = 'user';
      formData.extra = { confirm: true };

      if (formData.profileImage.length > 0) {
        const fileRes = await postSingleFile(formData.profileImage[0]);
        formData.profileImage = fileRes.data.item[0].name;
      } else {
        delete formData.profileImage;
      }

      const res = await postSignUp(formData);
      navigate('/signup-alert', { state: { user: res.data.item } });
      setFormData(null);
    } catch (err) {
      console.log(err);
      // AxiosError(네트워크 에러-response가 없음, 서버의 4xx, 5xx 응답 상태 코드를 받았을 때-response 있음)
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach((error) => setError(error.path, { message: error.msg }));
      } else if (err.response?.data.message) {
        setToast({ show: true, message: err.response?.data.message });
      }
    }
  };

  return (
    <Section>
      <S.SignUpWrapper>
        <S.SignUpTitleText>
          <Text typography="display_l">회원가입</Text>
        </S.SignUpTitleText>
        {toast.show && <Toast setToast={setToast} text={toast.message} />}
        <S.SignUpInputWrapper>
          {step === 0 && <Required setStep={setStep} onSubmit={handleRequiredSubmit} />}
          {step === 1 && <Optional setStep={setStep} onSaveFormData={handleSaveFormData} onSubmit={handleOptionalSubmit} />}
        </S.SignUpInputWrapper>
      </S.SignUpWrapper>
    </Section>
  );
}

export default SignUp;
