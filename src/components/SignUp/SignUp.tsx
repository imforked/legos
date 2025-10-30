import { useEffect, useState } from 'react';
import {
  SignUpVariant,
  type SignUpProps,
  type FormData,
  SignUpField,
} from './SignUp.types';
import * as S from './SignUp.styles';
import { Input } from '../Input/Input';
import { handleOnChange, handleSubmit } from './helpers';
import { type FieldError } from './helpers/handleSubmit';

export const SignUp = ({
  variant = SignUpVariant.FullName,
  action = 'http://localhost:4000/signup',
  recaptchaSiteKey,
}: SignUpProps) => {
  const [formData, setFormData] = useState<FormData>({
    [SignUpField.firstName]: '',
    [SignUpField.lastName]: '',
    [SignUpField.email]: '',
    [SignUpField.emailCheck]: '',
    [SignUpField.password]: '',
    [SignUpField.passwordCheck]: '',
    [SignUpField.recaptchaToken]: '',
  });

  const [error, setError] = useState<FieldError>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (recaptchaSiteKey && window.grecaptcha?.enterprise) {
      try {
        const token = await window.grecaptcha.enterprise.execute(
          recaptchaSiteKey,
          { action: 'sign-up' }
        );
        setRecaptchaToken(token);

        const payload = {
          ...formData,
          [SignUpField.recaptchaToken]: token,
        };

        console.log('Submitting payload:', payload);

        handleSubmit({
          e,
          action,
          formData: payload,
          setError,
          recaptchaToken: token,
        });
      } catch (err) {
        console.error('⚠️ reCAPTCHA execute failed:', err);
      }
    } else {
      console.error('⚠️ reCAPTCHA not loaded or site key missing');
    }
  };

  useEffect(() => {
    if (!recaptchaSiteKey) return;

    const checkRecaptcha = () => {
      const enterprise = window.grecaptcha?.enterprise;
      if (enterprise?.ready) {
        console.log('✅ reCAPTCHA Enterprise loaded');
        enterprise.ready(() => {
          enterprise
            .execute(recaptchaSiteKey, { action: 'sign-up' })
            .then((token: string) => {
              setRecaptchaToken(token);
              setFormData((prev) => ({
                ...prev,
                [SignUpField.recaptchaToken]: token,
              }));
            })
            .catch((err) => console.error('reCAPTCHA execute error:', err));
        });
      }

      return false;
    };

    const interval = setInterval(() => {
      if (checkRecaptcha()) clearInterval(interval);
    }, 300);

    return () => clearInterval(interval);
  }, [recaptchaSiteKey]);

  return (
    <S.SignUpContainer
      action={action}
      method="POST"
      onSubmit={handleFormSubmit}
    >
      <S.FieldGroup>
        <Input
          label="First Name"
          name={SignUpField.firstName}
          value={formData.firstName}
          onChange={(e) => handleOnChange({ e, setState: setFormData })}
          errorMessage={error.firstName}
        />
        <Input
          label="Last Name"
          name={SignUpField.lastName}
          value={formData.lastName}
          onChange={(e) => handleOnChange({ e, setState: setFormData })}
          errorMessage={error.lastName}
        />
        <Input
          label="Email"
          name={SignUpField.email}
          value={formData.email}
          onChange={(e) => handleOnChange({ e, setState: setFormData })}
          errorMessage={error.email}
        />
        <Input
          label="Re-Type Email"
          name={SignUpField.emailCheck}
          value={formData.emailCheck}
          onChange={(e) => handleOnChange({ e, setState: setFormData })}
          errorMessage={error.emailCheck}
        />
      </S.FieldGroup>
      <S.FieldGroup>
        <Input
          type="password"
          label="Password"
          name={SignUpField.password}
          value={formData.password}
          onChange={(e) => handleOnChange({ e, setState: setFormData })}
          errorMessage={error.password}
        />
        <Input
          type="password"
          label="Re-Type Password"
          name={SignUpField.passwordCheck}
          value={formData.passwordCheck}
          onChange={(e) => handleOnChange({ e, setState: setFormData })}
          errorMessage={error.passwordCheck}
        />
      </S.FieldGroup>
      <S.StyledButton text="Create Account" type="submit" />
    </S.SignUpContainer>
  );
};
