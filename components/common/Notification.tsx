import React, { FC, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  id: string;
  type?: NotificationType;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

const slideIn = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;
const slideOut = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100%); opacity: 0; }
`;

const Container = styled.div<{ type: NotificationType; exiting: boolean }>`
  min-width: 16rem;
  margin: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  background-color: ${(props) => {
  switch (props.type) {
    case 'success': return '#4CAF50';
    case 'info': return '#2196F3';
    case 'warning': return '#FFC107';
    case 'error': return '#F44336';
    default: return '#2196F3';
  }
}};
  animation: ${(props) => (props.exiting ? slideOut : slideIn)} 0.3s ease;
`;

const Notification: FC<NotificationProps> = ({ id, type = 'info', message, duration = 4000, onClose }) => {
  const [exiting, setExiting] = React.useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), duration);
    return () => clearTimeout(timer);
  }, [duration]);
  useEffect(() => {
    if (exiting) {
      const timer = setTimeout(() => onClose(id), 300);
      return () => clearTimeout(timer);
    }
  }, [exiting, id, onClose]);
  return (
    <Container role="alert" aria-live={type === 'error' ? 'assertive' : 'polite'} type={type} exiting={exiting}>
      {message}
    </Container>
  );
};

export default Notification;