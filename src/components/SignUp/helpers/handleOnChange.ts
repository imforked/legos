import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FormData } from '../SignUp.types';

type Props = {
  e: ChangeEvent<HTMLInputElement>;
  setState: Dispatch<SetStateAction<FormData>>;
};

export const handleOnChange = ({ e, setState }: Props) => {
  const { name, value } = e.target;

  setState((prev) => ({ ...prev, [name]: value }));
};
