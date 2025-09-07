import { Dispatch, FormEvent, SetStateAction } from 'react';
import { z } from 'zod';
import { FormData, SignUpProps } from '../SignUp.types';
import { validate } from './validate';

export type Error = Partial<Record<keyof FormData, string>>;

type Props = {
  e: FormEvent<HTMLFormElement>;
  action: SignUpProps['action'];
  formData: FormData;
  setError: Dispatch<SetStateAction<Error>>;
};

export const handleSubmit = async ({
  e,
  action,
  formData,
  setError,
}: Props) => {
  e.preventDefault();

  const validationResult = validate({ formData });

  if (!validationResult.success) {
    const fieldErrors: Error = {};
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
