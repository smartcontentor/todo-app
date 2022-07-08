import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

import CheckBoxComponent from '@components/CheckBox';
import { renderWithThemeProvider } from '@utilities/index';

describe('TodoChangeStatusComponent', () => {
  it('should change when user clicked', async () => {
    const onCallback = jest.fn();
    renderWithThemeProvider(
      <CheckBoxComponent id="1" labelText="test" checked={true} onChange={onCallback} />
    );

    await userEvent.click(screen.getByLabelText('test'));

    expect(onCallback).toHaveBeenCalledTimes(1);
  });
});
