import styled from '@emotion/styled';

import { CheckBoxProps } from '.';

export const StyledTodoCheckbox = styled.input`
  min-width: 18px;
  height: 18px;
  margin: 4px;
  align-self: center;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledTodoText = styled.label<Pick<CheckBoxProps, 'checked'>>`
  user-select: none;
  margin-left: 8px;
  word-break: break-all;
  margin-right: auto;
  ${({ checked }) => (checked ? 'text-decoration:line-through;' : '')};
`;
