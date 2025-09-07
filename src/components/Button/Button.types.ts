import { ButtonHTMLAttributes } from 'react';

export enum ButtonVariant {
  Base = 'base',
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
};
