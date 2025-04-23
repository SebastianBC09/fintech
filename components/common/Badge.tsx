import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export type BadgeVariant = 'category' | 'status' | 'new' | 'promoted';
export type BadgeSize = 'small' | 'medium';

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    size?: BadgeSize;
    icon?: React.ReactNode;
    className?: string;
    'aria-label'?: string;
}

interface StyledBadgeProps {
    $variant: BadgeVariant;
    $size: BadgeSize;
}

const variantStyles = {
    category: css`background-color: #E3F2FD; color: #0F4C81;`,
    status: css`background-color: #F5F5F5; color: #424242;`,
    new: css`background-color: #E8F5E9; color: #4CAF50;`,
    promoted: css`background-color: #FFF8E1; color: #FFD700;`,
};

const sizeStyles = {
    small: css`font-size: 0.75rem; padding: 0.125rem 0.5rem;`,
    medium: css`font-size: 0.875rem; padding: 0.25rem 0.625rem;`,
};

const StyledBadge = styled(motion.span)<StyledBadgeProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border-radius: 9999px;
    white-space: nowrap;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    ${(props) => variantStyles[props.$variant]}
    ${(props) => sizeStyles[props.$size]}
`;


export const Badge: FC<BadgeProps> = ({ children, variant = 'category', size = 'medium', icon, className = '', 'aria-label': ariaLabel }) => (
  <StyledBadge
    className={className}
    $variant={variant}
    $size={size}
    role={variant === 'status' || variant === 'promoted' ? 'status' : undefined}
    aria-label={ariaLabel}
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 500, damping: 30 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
  >
      {icon && <motion.span
        style={{ marginRight: '0.25rem', display: 'flex', alignItems: 'center' }}
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.3 }}
      >{icon}</motion.span>}
      {children}
  </StyledBadge>
)