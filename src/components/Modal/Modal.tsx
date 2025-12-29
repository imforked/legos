import { ReactNode, Dispatch, SetStateAction } from 'react';
import * as S from './Modal.styles';

export const Modal = ({
  content,
  isOpen,
  setIsOpen,
}: {
  content: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <S.Container>
      <S.Blur $isVisible={isOpen} />
      <S.ContentContainer $isOpen={isOpen}>
        <S.CloseButton onClick={() => setIsOpen(false)}>X</S.CloseButton>
        <S.Content>{content}</S.Content>
      </S.ContentContainer>
    </S.Container>
  );
};
