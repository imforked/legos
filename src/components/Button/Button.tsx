import { type ButtonProps } from './Button.types';
import * as S from './Button.styles';

export const Button = ({
  text,
  variant,
  href,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  return (
    <S.Button {...props} onClick={onClick} className={className}>
      {text}
    </S.Button>
  );
};
