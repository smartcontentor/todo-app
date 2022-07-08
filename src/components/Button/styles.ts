import styled from '@emotion/styled';

import { ButtonProps } from '.';

export const StyledButton = styled.button<Pick<ButtonProps, 'color' | 'colorIcon'>>`
  border: none;
  white-space: nowrap;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, color }) => (color ? `${theme.colors[color]}` : 'transparent')};

  i {
    ${({ theme, colorIcon }) => (colorIcon ? `color:${theme.colors[colorIcon]}` : '')}
  }

  &:active {
    transform: scale(0.98);
  }
`;
