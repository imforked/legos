// TODO: remove this file and, instead, use the schema defined in the `components` directory
import * as z from 'zod';

enum SignUpField {
  firstName = 'firstName',
  lastName = 'lastName',
  password = 'password',
  passwordCheck = 'passwordCheck',
}

export const SignUpSchema = z
  .object({
    [SignUpField.firstName]: z.string().min(1, 'First name is required'),
    [SignUpField.lastName]: z.string().min(1, 'Last name is required'),
    [SignUpField.password]: z
      .string()
      .min(5, 'Password needs to be at least 5 characters'),
    [SignUpField.passwordCheck]: z.string(),
  })
  .refine(
    (data) => data[SignUpField.password] === data[SignUpField.passwordCheck],
    {
      message: 'Passwords do not match',
      path: [SignUpField.passwordCheck],
    }
  );
