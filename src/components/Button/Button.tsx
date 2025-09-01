import { type ButtonProps } from './Button.types';
import * as S from './Button.styles';

export const Button = ({
  text,
  variant,
  href,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <S.Button onClick={onClick} className={className}>
      {text}
    </S.Button>
  );
};
