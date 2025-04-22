import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

interface LoadingStateProps {
  fullPage?: boolean;
  message?: string;
}

const Wrapper = styled.div<{ fullPage: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ fullPage }) =>
  fullPage
    ? 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.8); z-index: 1000;'
    : ''}
`;

const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.5rem solid #f3f3f3;
  border-top: 0.5rem solid #0F4C81;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Message = styled.span`
  margin-top: 1rem;
  font-size: 1rem;
  color: #424242;
`;

export const LoadingState: React.FC<LoadingStateProps> = ({ fullPage = false, message = 'Cargando...' }) => (
  <Wrapper fullPage={fullPage} role="status" aria-live="polite">
    <Spinner aria-hidden="true" />
    <Message>{message}</Message>
  </Wrapper>
);

export default LoadingState;