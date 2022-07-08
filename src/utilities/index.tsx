import React from 'react';
import { ThemeProvider } from '@emotion/react';

import { theme } from '@styles/theme';
import { render, RenderResult } from '@testing-library/react';

export function renderWithThemeProvider(children: React.ReactElement): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
