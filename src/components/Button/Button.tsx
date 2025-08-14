import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import MuiButton, { ButtonProps } from '@mui/material/Button';

export type { ButtonProps } from '@mui/material/Button';

interface Props extends ButtonProps, PropsWithChildren {}

const Button = ({ children, ...props }: Props) => (
  <StyledButton {...props} disableRipple>
    {children}
  </StyledButton>
);

export default Button;

const StyledButton = styled(MuiButton)<Partial<Props>>`
  display: grid;
  &.MuiButton-root {
    border-radius: 80px;
    font-size: ${({ theme }) => theme.typography.sizes.p1};
    font-weight: ${({ theme }) => theme.typography.weights.extraBold};
    font-family: 'Rubik';
    line-height: unset;
    min-width: fit-content;
    ${({ size }) =>
      typeof size !== 'undefined' &&
      {
        small: css`
          height: 48px;
        `,
        medium: css`
          height: 55px;
        `,
        large: css`
          height: 60px;
        `,
      }[size]}

    .MuiButton-startIcon {
      margin-left: 12px;

      svg {
        width: 24px;
        height: 24px;
      }
    }
    .MuiButton-endIcon {
      margin-right: 12px;
    }

    &.MuiButton-containedPrimary {
      background-color: ${({ theme }) =>
        theme.colors.button.primary.contained.background?.enabled};
      color: ${({ theme }) =>
        theme.colors.button.primary.contained.text?.enabled};
      &.Mui-disabled {
        background-color: ${({ theme }) =>
          theme.colors.button.primary.contained.background?.disabled};
        color: ${({ theme }) =>
          theme.colors.button.primary.contained.text?.disabled};
      }
      :hover {
        background-color: ${({ theme }) =>
          theme.colors.button.primary.contained.background?.hover};
        color: ${({ theme }) =>
          theme.colors.button.primary.contained.text?.hover};
      }
      :active {
        background-color: ${({ theme }) =>
          theme.colors.button.primary.contained.background?.active};
        color: ${({ theme }) =>
          theme.colors.button.primary.contained.text?.active};
      }
    }
    &.MuiButton-outlinedPrimary {
      background-color: ${({ theme }) =>
        theme.colors.button.primary.outlined.background?.enabled};
      color: ${({ theme }) =>
        theme.colors.button.primary.outlined.text?.enabled};
      border: ${({ theme }) =>
        theme.colors.button.primary.outlined.border?.enabled};
      &.Mui-disabled {
        background-color: ${({ theme }) =>
          theme.colors.button.primary.outlined.background?.disabled};
        color: ${({ theme }) =>
          theme.colors.button.primary.outlined.text?.disabled};
        border: transparent;
      }
      :hover {
        background-color: ${({ theme }) =>
          theme.colors.button.primary.outlined.background?.hover};
        color: ${({ theme }) =>
          theme.colors.button.primary.outlined.text?.hover};
        border: ${({ theme }) =>
          theme.colors.button.primary.outlined.border?.hover};
      }
      :active {
        background-color: ${({ theme }) =>
          theme.colors.button.primary.outlined.background?.active};
        color: ${({ theme }) =>
          theme.colors.button.primary.outlined.text?.active};
        border: ${({ theme }) =>
          theme.colors.button.primary.outlined.border?.active};
      }
    }
    &.MuiButton-textPrimary {
      width: ${({ fullWidth }) => !fullWidth && 'fit-content'};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.button.primary.text.text?.enabled};
      &.Mui-disabled {
        background-color: transparent;
        color: ${({ theme }) =>
          theme.colors.button.primary.text.text?.disabled};
      }
      :hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.button.primary.text.text?.hover};
      }
      :active {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.button.primary.text.text?.active};
      }
    }
    &.MuiButton-containedSecondary {
      background-color: ${({ theme }) =>
        theme.colors.button.secondary.contained.background?.enabled};
      color: ${({ theme }) =>
        theme.colors.button.secondary.contained.text?.enabled};
      &.Mui-disabled {
        background-color: ${({ theme }) =>
          theme.colors.button.secondary.contained.background?.disabled};
        color: ${({ theme }) =>
          theme.colors.button.secondary.contained.text?.disabled};
      }
      :hover {
        background-color: ${({ theme }) =>
          theme.colors.button.secondary.contained.background?.hover};
        color: ${({ theme }) =>
          theme.colors.button.secondary.contained.text?.hover};
      }
      :active {
        background-color: ${({ theme }) =>
          theme.colors.button.secondary.contained.background?.active};
        color: ${({ theme }) =>
          theme.colors.button.secondary.contained.text?.active};
      }
    }
    &.MuiButton-outlinedSecondary {
      background-color: ${({ theme }) =>
        theme.colors.button.secondary.outlined.background?.enabled};
      color: ${({ theme }) =>
        theme.colors.button.secondary.outlined.text?.enabled};
      border: ${({ theme }) =>
        theme.colors.button.secondary.outlined.border?.enabled};
      &.Mui-disabled {
        background-color: ${({ theme }) =>
          theme.colors.button.secondary.outlined.background?.disabled};
        color: ${({ theme }) =>
          theme.colors.button.secondary.outlined.text?.disabled};
        border: transparent;
      }
      :hover {
        background-color: ${({ theme }) =>
          theme.colors.button.secondary.outlined.background?.hover};
        color: ${({ theme }) =>
          theme.colors.button.secondary.outlined.text?.hover};
        border: ${({ theme }) =>
          theme.colors.button.secondary.outlined.border?.hover};
      }
      :active {
        background-color: ${({ theme }) =>
          theme.colors.button.secondary.outlined.background?.active};
        color: ${({ theme }) =>
          theme.colors.button.secondary.outlined.text?.active};
        border: ${({ theme }) =>
          theme.colors.button.secondary.outlined.border?.active};
      }
    }
    &.MuiButton-textSecondary {
      width: ${({ fullWidth }) => !fullWidth && 'fit-content'};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.button.secondary.text.text?.enabled};
      &.Mui-disabled {
        background-color: transparent;
        color: ${({ theme }) =>
          theme.colors.button.secondary.text.text?.disabled};
      }
      :hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.button.secondary.text.text?.hover};
      }
      :active {
        background-color: transparent;
        color: ${({ theme }) =>
          theme.colors.button.secondary.text.text?.active};
      }
    }
  }
`;
