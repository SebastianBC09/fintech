import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.375rem;
  color: #212121;
`;

const StyledInput = styled.input<{
  hasError: boolean;
}>`
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid ${({ hasError }) => (hasError ? '#D32F2F' : '#BDBDBD')};
  border-radius: 0.375rem;
  &:focus {
    outline: none;
    border-color: #0F4C81;
    box-shadow: 0 0 0 3px rgba(15, 76, 129, 0.3);
  }
`;

const ErrorMessage = styled.span`
  color: #D32F2F;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const Input: React.FC<InputProps> = ({ label, id, error, ...props }) => {
  const inputId = id || `input_${label.replace(/\s+/g, '_').toLowerCase()}`;
  return (
    <Wrapper>
      <StyledLabel htmlFor={inputId}>{label}</StyledLabel>
      <StyledInput id={inputId} hasError={!!error} aria-invalid={!!error} {...props} />
      {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default Input;