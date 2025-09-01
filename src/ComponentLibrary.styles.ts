import styled from 'styled-components';
import { theme } from './constants/theme';

export const ComponentContainer = styled.div`
  width: 100%;
  border-bottom: 1px dashed ${theme.colors.white};
  padding: 20px 10px;
`;

export const MetaDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${theme.colors.white};
`;

export const Description = styled.span`
  color: ${theme.colors.white};
`;
