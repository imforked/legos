import * as z from 'zod';

export enum SignUpField {
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  emailCheck = 'emailCheck',
  password = 'password',
  passwordCheck = 'passwordCheck',
  recaptchaToken = 'recaptchaToken',
}

export const SignUpSchema = z
  .object({
    [SignUpField.firstName]: z.string().min(1, 'First name is required'),
    [SignUpField.lastName]: z.string().min(1, 'Last name is required'),
    [SignUpField.email]: z.string().email('Enter a valid email address'),
    [SignUpField.emailCheck]: z.string().email('Enter a valid email address'),
    [SignUpField.password]: z
      .string()
      .min(5, 'Password needs to be at least 5 characters'),
    [SignUpField.passwordCheck]: z.string(),
    [SignUpField.recaptchaToken]: z.string().min(1, 'Complete the reCAPTCHA'),
  })
  .refine(
    (data) => data[SignUpField.password] === data[SignUpField.passwordCheck],
    {
      message: 'Passwords do not match',
      path: [SignUpField.passwordCheck],
    }
  )
  .refine(
    (data) => data[SignUpField.email] === data[SignUpField.emailCheck],
    {
      message: 'Emails do not match',
      path: [SignUpField.emailCheck],
    }
  );
