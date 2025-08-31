import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Label = styled.label`
  color: #fffaf1;
  font-size: 14px;
`;

export const Input = styled.input`
  background: #1c1c1c;
  color: #fffaf1;
  border: 1px solid #fffaf1;
  padding: 5px;
  width: 100%;
  margin: 4px 0;

  &::placeholder {
    color: #fffaf1;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff4d4f;
  font-size: 14px;
`;
