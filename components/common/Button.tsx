import React, {FC} from 'react';
import styled, {css} from "styled-components";


export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'icon';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    icon?: React.ReactNode;
    fullWidth?: boolean;
    ariaLabel?: string;
}

const variantStylesBtn = {
    primary: css`
    background-color: #0F4C81;
    color: white;
    &:hover { background-color: #0d3f6a; }
    &:active { background-color: #0b3559; }
  `,
    secondary: css`
    background-color: white;
    color: #0F4C81;
    border: 1px solid #0F4C81;
    &:hover { background-color: #f0f4f8; }
    &:active { background-color: #e1e7ef; }
  `,
    tertiary: css`
    background: transparent;
    color: #0F4C81;
    text-decoration: underline;
    &:hover { color: #0d3f6a; }
  `,
    icon: css`
    background-color: white;
    color: #0F4C81;
    border: 1px solid #0F4C81;
    border-radius: 9999px;
    &:hover { background-color: #f0f4f8; }
    &:active { background-color: #e1e7ef; }
  `,
};

const sizeStylesBtn = {
    small: css`font-size: 0.875rem; padding: 0.375rem 0.75rem;`,
    medium: css`font-size: 1rem; padding: 0.5rem 1rem;`,
    large: css`font-size: 1.125rem; padding: 0.75rem 1.5rem;`,
};

const StyledButton = styled.button<{
    variant: ButtonVariant;
    size: ButtonSize;
    fullWidth: boolean;
    isLoading: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.2s;
  outline: none;
  ${(props) => variantStylesBtn[props.variant]}
  ${(props) => sizeStylesBtn[props.size]}
  ${(props) => props.fullWidth && css`width: 100%;`}
  ${(props) => props.isLoading && css`opacity: 0.8; cursor: wait;`}
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(15, 76, 129, 0.5);
  }
`;

export const Button: FC<ButtonProps> = ({children, variant = 'primary', size = 'medium', isLoading = false, icon, fullWidth = false, ariaLabel, disabled, ...props
}) => (
    <StyledButton
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        isLoading={isLoading}
        aria-label={variant === 'icon' && !children ? ariaLabel : undefined}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
    >
        {isLoading && (
            <svg
                aria-hidden="true"
                className="animate-spin h-4 w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
        )}
        {icon && !isLoading && <span style={{ marginRight: children ? '0.5rem' : 0 }}>{icon}</span>}
        {children}
    </StyledButton>
);

