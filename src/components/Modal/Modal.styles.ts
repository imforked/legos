import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const Container = styled.div``;

export const Blur = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`;

export const ContentContainer = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 800px;
  background: ${theme.colors.black};
  border: 1px solid ${theme.colors.white};
  border-radius: 10px;
  padding: 20px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${theme.colors.white};
  font-size: 40px;
  align-self: flex-end;
`;

export const Content = styled.div`
  height: 100%;
`;
