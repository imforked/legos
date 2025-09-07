import styled from 'styled-components';
import { Button } from '../Button/Button';
import { theme } from '../../constants/theme';

export const SignUpContainer = styled.form`
  border: 1px solid ${theme.colors.white};
  padding: 10px;
  border-radius: 10px;
`;

export const FieldGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 0 8px;
`;

export const StyledButton = styled(Button)`
  margin-top: 4px;
`;
