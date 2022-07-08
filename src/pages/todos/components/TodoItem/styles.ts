import styled from '@emotion/styled';

import { TodoItemProps } from '.';

export const TodoItemWrapper = styled.li<Pick<TodoItemProps, 'todo'>>`
  background-color: ${({ theme }) => theme.colors.white};
  padding-block: 25px;
  padding-inline: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-left: 5px solid
    ${({ theme, todo: { isDone } }) => (isDone ? theme.colors.primary : 'transparent')};
`;
