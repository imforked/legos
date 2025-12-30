import { type LibraryData } from './ComponentLibrary.types';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { SignUp } from './components/SignUp/SignUp';
import { Modal } from './components/Modal/Modal';
import { useState } from 'react';

export const LIBRARY_DATA: LibraryData = [
  {
    metaData: {
      title: 'Button',
    },
    component: () => <Button text="Click Me" />,
  },
  {
    metaData: {
      title: 'Input',
    },
    component: () => (
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
    component: () => <SignUp action="" />,
  },
  {
    metaData: {
      title: 'Modal',
    },
    component: () => {
      const [modalIsOpen, setModalIsOpen] = useState(false);
      return (
        <>
          <Modal
            isOpen={modalIsOpen}
            setIsOpen={setModalIsOpen}
            content={
              <div style={{ height: '100%', background: 'red' }}>
                Modal content goes here.
              </div>
            }
          />
          <Button text="Show Modal" onClick={() => setModalIsOpen(true)} />
        </>
      );
    },
  },
];
