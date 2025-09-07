import { type LibraryData } from './ComponentLibrary.types';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { SignUp } from './components/SignUp/SignUp';

export const LIBRARY_DATA: LibraryData = [
  {
    metaData: {
      title: 'Button',
    },
    component: <Button text="Click Me" />,
  },
  {
    metaData: {
      title: 'Input',
    },
    component: (
      <Input
        label="Label"
        placeholder="Placeholder"
        errorMessage="*You've fucked up"
      />
    ),
  },
  {
    metaData: {
      title: 'SignUp',
    },
    component: <SignUp action="" />,
  },
];
