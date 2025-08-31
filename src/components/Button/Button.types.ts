export enum ButtonVariant {
  Base = 'base',
}

export type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
};
