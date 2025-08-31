import { SignUpVariant, type SignUpProps } from './SignUp.types';
import * as S from './SignUp.styles';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const SignUp = ({ variant = SignUpVariant.FullName }: SignUpProps) => {
  return (
    <S.SignUpContainer>
      <Input label="First Name" />
      <Input label="Last Name" />
      <Input label="Password" />
      <Input label="Re-Type Password" />
      <Button text="Submit" />
    </S.SignUpContainer>
  );
};
