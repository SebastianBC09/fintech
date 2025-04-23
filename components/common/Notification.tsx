import React, { FC, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { CheckCircle, Info, Warning, X } from 'phosphor-react';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  type?: NotificationType;
  message: string;
  duration?: number;
  onClose?: () => void;
}

interface ContainerProps {
  type: NotificationType;
  $exiting: boolean;
}

const slideIn = keyframes`
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
`;

const slideOut = keyframes`
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-20px); opacity: 0; }
`;

const Container = styled.div<ContainerProps>`
    min-width: 18rem;
    margin: 1rem auto;
    padding: 1.25rem;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    animation: ${props => props.$exiting ? slideOut : slideIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    position: relative;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: ${props => {
            switch (props.type) {
                case 'success':
                    return '#38A169';
                case 'info':
                    return '#0F4C81';
                case 'warning':
                    return '#D69E2E';
                case 'error':
                    return '#E53E3E';
                default:
                    return '#0F4C81';
            }
        }};
    }

    ${props => {
        switch (props.type) {
            case 'success':
                return css`
                    background-color: #F0FFF4;
                    color: #276749;
                `;
            case 'info':
                return css`
                    background-color: #EBF8FF;
                    color: #2C5282;
                `;
            case 'warning':
                return css`
                    background-color: #FFFAF0;
                    color: #975A16;
                `;
            case 'error':
                return css`
                    background-color: #FFF5F5;
                    color: #C53030;
                `;
            default:
                return css`
                    background-color: #EBF8FF;
                    color: #2C5282;
                `;
        }
    }}

    @media (max-width: 768px) {
      padding: 1rem;
      min-width: auto;
      width: 90%;
    }
`;

const IconContainer = styled.div<{ type: NotificationType }>`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    flex-shrink: 0;

    ${props => {
        switch (props.type) {
            case 'success':
                return css`
                    background-color: rgba(56, 161, 105, 0.15);
                    color: #38A169;
                `;
            case 'info':
                return css`
                    background-color: rgba(15, 76, 129, 0.15);
                    color: #0F4C81;
                `;
            case 'warning':
                return css`
                    background-color: rgba(214, 158, 46, 0.15);
                    color: #D69E2E;
                `;
            case 'error':
                return css`
                    background-color: rgba(229, 62, 62, 0.15);
                    color: #E53E3E;
                `;
            default:
                return css`
                    background-color: rgba(15, 76, 129, 0.15);
                    color: #0F4C81;
                `;
        }
    }}

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
`;

const MessageContainer = styled.div`
    flex: 1;
    font-size: 0.95rem;
    line-height: 1.5;
    font-weight: 500;
`;

export const Notification: FC<NotificationProps> = ({ type = 'info', message, duration = 5000, onClose }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (duration && onClose) {
      timer = setTimeout(() => {
        setExiting(true);
        setTimeout(onClose, 400);
      }, duration);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success': return <CheckCircle size={22} weight="fill" />;
      case 'info': return <Info size={22} weight="fill" />;
      case 'warning': return <Warning size={22} weight="fill" />;
      case 'error': return <X size={22} weight="fill" />;
      default: return <Info size={22} weight="fill" />;
    }
  };

  return (
    <Container
      role="alert"
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      type={type}
      $exiting={exiting}
    >
      <IconContainer type={type} aria-hidden="true">
        {getIcon()}
      </IconContainer>
      <MessageContainer>{message}</MessageContainer>
    </Container>
  );
};
