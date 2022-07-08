import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

import ButtonComponent from '@components/Button';
import { renderWithThemeProvider } from '@utilities/index';

describe('ButtonComponent', () => {
  it('should call the provided callback when clicked', async () => {
    const onCallBack = jest.fn();
    renderWithThemeProvider(<ButtonComponent color="primary" onClick={onCallBack} />);

    await userEvent.click(screen.getByRole('button'));

    expect(onCallBack).toHaveBeenCalledTimes(1);
  });
});
