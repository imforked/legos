import { SignUpSchema } from '../SignUp.schema';
import { FormData } from '../SignUp.types';

type Props = {
  formData: FormData;
};

export const validate = ({ formData }: Props) => {
  return SignUpSchema.safeParse(formData);
};
