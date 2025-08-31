import { type InputProps } from './Input.types';
import * as S from './Input.styles';

export const Input = ({
  label,
  placeholder,
  showError,
  errorMessage,
}: InputProps) => {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.Input placeholder={placeholder} />
      {showError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputContainer>
  );
};
