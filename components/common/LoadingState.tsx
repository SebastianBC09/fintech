import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoadingStateProps {
  fullPage?: boolean;
  message?: string;
}

const breathe = keyframes`
    0% { transform: scale(0.95); opacity: 0.7; }
    50% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0.95); opacity: 0.7; }
`;

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const Wrapper = styled.div<{ $fullPage: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: ${fadeIn} 0.3s ease-out;

  ${({ $fullPage }) =>
    $fullPage
      ? `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(250, 250, 250, 0.9);
        backdrop-filter: blur(5px);
        z-index: 1000;
      `
      : ''}
`;

const LoaderContainer = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  animation: ${breathe} 2s infinite ease-in-out;
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border: 0.25rem solid rgba(15, 76, 129, 0.1);
  border-top: 0.25rem solid #0f4c81;
  border-radius: 50%;
  animation: ${spin} 1.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) infinite;
`;

const InnerSpinner = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  border: 0.25rem solid rgba(76, 175, 80, 0.1);
  border-top: 0.25rem solid #4caf50;
  border-radius: 50%;
  animation: ${spin} 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) infinite reverse;
`;

const Message = styled.span`
  margin-top: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: #0f4c81;
  text-align: center;
  opacity: 0.9;
  max-width: 80%;
`;

export const LoadingState: React.FC<LoadingStateProps> = ({
  fullPage = false,
  message = 'Cargando...',
}) => (
  <Wrapper $fullPage={fullPage} role="status" aria-live="polite">
    <LoaderContainer>
      <Spinner aria-hidden="true" />
      <InnerSpinner aria-hidden="true" />
    </LoaderContainer>
    <Message>{message}</Message>
  </Wrapper>
);
