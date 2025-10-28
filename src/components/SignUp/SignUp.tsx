import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (recaptchaSiteKey && !recaptchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    const payload = {
      ...formData,
      [SignUpField.recaptchaToken]: recaptchaToken ?? '',
    };

    console.log('Submitting payload:', payload);

    handleSubmit({
      e,
      action,
      formData: payload,
      setError,
      recaptchaToken,
    });
  };

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

      {recaptchaSiteKey && (
        <ReCAPTCHA
          sitekey={recaptchaSiteKey}
          onChange={(token) => {
            setRecaptchaToken(token);
            setFormData((prev) => ({
              ...prev,
              [SignUpField.recaptchaToken]: token ?? '',
            }));
          }}
        />
      )}

      <S.StyledButton text="Create Account" type="submit" />
    </S.SignUpContainer>
  );
};
