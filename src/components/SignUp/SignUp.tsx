import { SignUpVariant, type SignUpProps } from './SignUp.types';
import * as S from './SignUp.styles';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const SignUp = ({ variant = SignUpVariant.FullName }: SignUpProps) => {
  return (
    <S.SignUpContainer>
      <S.FieldGroup>
        <Input label="First Name" />
        <Input label="Last Name" />
      </S.FieldGroup>
      <S.FieldGroup>
        <Input label="Password" />
        <Input label="Re-Type Password" />
      </S.FieldGroup>
      <S.StyledButton text="Create Account" />
    </S.SignUpContainer>
  );
};
