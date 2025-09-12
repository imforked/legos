import { type InputProps } from './Input.types';
import * as S from './Input.styles';

export const Input = ({
  name,
  label,
  placeholder,
  errorMessage,
  onChange,
  ...props
}: InputProps) => {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.Input
        {...props}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputContainer>
  );
};
