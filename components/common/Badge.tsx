import React, {FC} from 'react';
import styled, { css } from 'styled-components';

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

const StyledBadge = styled.span<{
    variant: BadgeVariant;
    size: BadgeSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 9999px;
  white-space: nowrap;
  ${(props) => variantStyles[props.variant]}
  ${(props) => sizeStyles[props.size]}
`;

export const Badge: FC<BadgeProps> = ({children, variant = 'category', size = 'medium', icon, className = '', 'aria-label': ariaLabel}) => (
    <StyledBadge
        className={className}
        variant={variant}
        size={size}
        role={variant === 'status' || variant === 'promoted' ? 'status' : undefined}
        aria-label={ariaLabel}
    >
        {icon && <span style={{ marginRight: '0.25rem' }}>{icon}</span>}
        {children}
    </StyledBadge>
)