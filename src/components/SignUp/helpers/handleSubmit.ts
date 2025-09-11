import { Dispatch, FormEvent, SetStateAction } from 'react';
import { z } from 'zod';
import { FormData, SignUpProps } from '../SignUp.types';
import { validate } from './validate';

export type FieldError = Partial<Record<keyof FormData, string>>;

type Props = {
  e: FormEvent<HTMLFormElement>;
  action: SignUpProps['action'];
  formData: FormData;
  setError: Dispatch<SetStateAction<FieldError>>;
};

/**
 * Handles form submission for the sign-up flow.
 *
 * This helper:
 * 1. Prevents the browser's default form submission behavior.
 * 2. Validates the provided form data using the local `validate` helper.
 * 3. Collects and normalizes frontend validation errors (if any).
 * 4. Updates the error state via `setError`.
 * 5. If validation passes, clears all errors and sends the form data
 *    to the given backend endpoint via a `POST` request.
 *
 * @param e - The React `FormEvent` triggered by form submission.
 * @param action - The URL endpoint to which the validated form data should be sent.
 * @param formData - The raw form values collected from user input.
 * @param setError - React state setter for updating frontend errors.
 *
 * @returns A `Promise<void>` that resolves after validation and (if successful)
 * the fetch request completes.
 *
 */
export const handleSubmit = async ({
  e,
  action,
  formData,
  setError,
}: Props) => {
  e.preventDefault();

  const validationResult = validate({ formData });

  if (!validationResult.success) {
    const fieldErrors: FieldError = {};
    const flattened = z.flattenError(validationResult.error);

    const properties = flattened.fieldErrors ?? {};
    for (const [field, messages] of Object.entries(properties)) {
      if (messages && messages.length > 0) {
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
    body: JSON.stringify(validationResult.data),
  });
};
