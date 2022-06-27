import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

import { renderWithThemeProvider } from '@utilities';
import TodosComponent from '@pages/todos';
import { initialState } from '@store';
import { within } from '@testing-library/react';

describe('Todos Page', () => {
  it('should add a new todo item', async () => {
    const inputTodoText = 'test';

    renderWithThemeProvider(<TodosComponent />);
    await userEvent.type(screen.getByPlaceholderText(/Enter Todo Text/i), inputTodoText);
    await userEvent.click(screen.getByRole('button', { name: /Add New/i }));

    expect(screen.getByLabelText(inputTodoText)).toBeVisible();
  });

  it('should change status of todo item when user clicked on checkbox', async () => {
    const firstTodoItem = initialState.todos[0];

    renderWithThemeProvider(<TodosComponent />);
    await userEvent.click(screen.getByLabelText(firstTodoItem.text));

    expect(screen.getByLabelText(firstTodoItem.text)).not.toBeChecked();
  });

  it('should remove todo item when user clicked delete button', async () => {
    const firstTodoItem = initialState.todos[0];

    renderWithThemeProvider(<TodosComponent />);
    const todoItems = screen.getAllByRole('listitem');
    await userEvent.click(within(todoItems[0]).getByRole('button', { name: 'delete-button' }));

    expect(screen.queryByText(firstTodoItem.text)).not.toBeInTheDocument();
  });
});
