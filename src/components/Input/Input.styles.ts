import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

export const Label = styled.label`
  color: ${theme.colors.white};
  font-size: 14px;
`;

export const Input = styled.input`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  padding: 5px;
  width: 100%;
  margin: 4px 0;

  &::placeholder {
    color: ${theme.colors.white};
  }
`;

export const ErrorMessage = styled.span`
  color: #ff4d4f;
  font-size: 14px;
  text-align: start;
`;
