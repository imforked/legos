import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const Button = styled.button`
  width: fit-content;
  padding: 10px 20px;
  background: ${theme.colors.black};
  border: 1px solid ${theme.colors.white};
  border-radius: 4px;
  color: ${theme.colors.white};
  cursor: pointer;
`;
