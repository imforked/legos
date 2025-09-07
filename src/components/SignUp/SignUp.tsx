import { FormEvent, ChangeEvent, useState } from 'react';
import {
  SignUpVariant,
  type SignUpProps,
  type FormData,
  SignUpField,
} from './SignUp.types';
import * as S from './SignUp.styles';
import { Input } from '../Input/Input';

export const SignUp = ({
  variant = SignUpVariant.FullName,
  action,
}: SignUpProps) => {
  const [formData, setFormData] = useState<FormData>({
    [SignUpField.firstName]: '',
    [SignUpField.lastName]: '',
    [SignUpField.password]: '',
    [SignUpField.passwordCheck]: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <S.SignUpContainer action={action} method="POST" onSubmit={handleSubmit}>
      <S.FieldGroup>
        <Input
          label="First Name"
          name={SignUpField.firstName}
          value={formData.firstName}
          onChange={handleOnChange}
        />
        <Input
          label="Last Name"
          name={SignUpField.lastName}
          value={formData.lastName}
          onChange={handleOnChange}
        />
      </S.FieldGroup>
      <S.FieldGroup>
        <Input
          type="password"
          label="Password"
          name={SignUpField.password}
          value={formData.password}
          onChange={handleOnChange}
        />
        <Input
          type="password"
          label="Re-Type Password"
          name={SignUpField.passwordCheck}
          value={formData.passwordCheck}
          onChange={handleOnChange}
        />
      </S.FieldGroup>
      <S.StyledButton text="Create Account" type="submit" />
    </S.SignUpContainer>
  );
};
