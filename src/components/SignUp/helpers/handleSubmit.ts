import { Dispatch, FormEvent, SetStateAction } from 'react';
import { z } from 'zod';
import { FormData, SignUpProps, SignUpField } from '../SignUp.types';
import { SignUpSchema } from '../SignUp.schema';

export type FieldError = Partial<Record<keyof FormData, string>>;

type Props = {
  e: FormEvent<HTMLFormElement>;
  action: SignUpProps['action'];
  formData: FormData;
  setError: Dispatch<SetStateAction<FieldError>>;
  recaptchaToken?: string | null;
};

/**
 * Handles form submission for the signup flow.
 *
 * This helper:
 * 1. Prevents the browser's default form submission behavior.
 * 2. Validates the provided form data using the Zod `SignUpSchema`.
 * 3. Collects and normalizes frontend validation errors (if any).
 * 4. Updates the error state via `setError`.
 * 5. If validation passes, clears all errors and sends the form data
 *    to the given backend endpoint via a `POST` request.
 *
 * @param e - The React `FormEvent` triggered by form submission.
 * @param action - The URL endpoint to which the validated form data should be sent.
 * @param formData - The raw form values collected from user input.
 * @param setError - React state setter for updating frontend errors.
 * @param recaptchaToken - reCAPTCHA token obtained from Google's widget.
 *
 * @returns A `Promise<void>` that resolves after validation and (if successful)
 * the fetch request completes.
 */
export const handleSubmit = async ({
  e,
  action,
  formData,
  setError,
  recaptchaToken,
}: Props) => {
  e.preventDefault();

  const result = SignUpSchema.safeParse({
    ...formData,
    [SignUpField.recaptchaToken]: recaptchaToken ?? '',
  });

  if (!result.success) {
    const fieldErrors: FieldError = {};
    const flattened = z.flattenError(result.error);

    const properties = flattened.fieldErrors ?? {};
    for (const [field, messages] of Object.entries(properties)) {
      if (messages.length > 0) {
        fieldErrors[field as keyof FormData] = messages[0];
      }
    }

    setError(fieldErrors);
    return;
  }

  setError({});

  await fetch(action, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result.data),
  });
};
