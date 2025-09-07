import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  errorMessage?: string;
  showError?: boolean;
}
