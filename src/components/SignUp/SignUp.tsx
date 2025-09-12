import { useState } from 'react';
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
  action,
}: SignUpProps) => {
  const [formData, setFormData] = useState<FormData>({
    [SignUpField.firstName]: '',
    [SignUpField.lastName]: '',
    [SignUpField.password]: '',
    [SignUpField.passwordCheck]: '',
  });
  const [error, setError] = useState<FieldError>({});

  return (
    <S.SignUpContainer
      action={action}
      method="POST"
      onSubmit={(e) => handleSubmit({ e, action, formData, setError })}
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
