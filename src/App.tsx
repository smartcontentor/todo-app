import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import TodosComponent from '@pages/todos';
import { globalStyles, theme } from '@styles/theme';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <TodosComponent />
    </ThemeProvider>
  );
}

export default App;
