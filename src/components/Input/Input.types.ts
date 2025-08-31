export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  errorMessage?: string;
  showError?: boolean;
}
