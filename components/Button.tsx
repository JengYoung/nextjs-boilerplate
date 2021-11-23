import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface StyledButtonProps {
  width: number;
  height: number;
}

interface ButtonProps extends StyledButtonProps {
  children: string;
}

const StyledButton = styled.button`
  ${({ width, height }: ButtonProps) =>
    width &&
    height &&
    css`
      width: ${width}px;
      height: ${height}px;
      background: orange;
    `}
`;

const Button = ({ width, height, children }: ButtonProps) => {
  return (
    <StyledButton width={width} height={height}>
      {children}
    </StyledButton>
  );
};

export default Button;
