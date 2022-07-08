import styled from '@emotion/styled';

import { theme } from '@styles/theme';

export const StyledTodoInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin-block: 20px;
  font-size: 20px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
`;

export const StyledTodoForm = styled.form`
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 5px;

  input:focus {
    outline: none;
    border: 1px solid ${theme.colors.grey};
  }
`;

export const StyledTodosContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-block: 30px;
  margin-inline: auto;
  padding-inline: 30px;
`;
