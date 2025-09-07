export enum SignUpVariant {
  FullName = 'full-name',
  UserName = 'user-name',
  All = 'all',
}

export type SignUpProps = {
  hasRECAPTCHA?: boolean;
  variant?: SignUpVariant;
};

export enum SignUpField {
  firstName = 'firstName',
  lastName = 'lastName',
  password = 'password',
  passwordCheck = 'passwordCheck',
}

export type FormData = {
  [SignUpField.firstName]: string;
  [SignUpField.lastName]: string;
  [SignUpField.password]: string;
  [SignUpField.passwordCheck]: string;
};
