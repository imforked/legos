import { type ButtonProps } from './Button.types';
import * as S from './Button.styles';

export const Button = ({ text, variant, href, onClick }: ButtonProps) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};
