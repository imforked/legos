export enum SignUpVariant {
  FullName = 'full-name',
  UserName = 'user-name',
  All = 'all',
}

export type SignUpProps = {
  variant?: SignUpVariant;
  action: string;
  recaptchaSiteKey?: string;
};

export enum SignUpField {
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  emailCheck = 'emailCheck',
  password = 'password',
  passwordCheck = 'passwordCheck',
  recaptchaToken = 'recaptchaToken',
}

export type FormData = {
  [SignUpField.firstName]: string;
  [SignUpField.lastName]: string;
  [SignUpField.email]: string;
  [SignUpField.emailCheck]: string;
  [SignUpField.password]: string;
  [SignUpField.passwordCheck]: string;
  [SignUpField.recaptchaToken]: string;
};
