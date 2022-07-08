import { css, Theme } from '@emotion/react';

export const theme: Theme = {
  colors: {
    primary: '#4caf50',
    error: '#f44336',
    background: '#fafafa',
    grey: '#eaeaea',
    white: '#ffffff',
  },
  shadows: {
    regular: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  },
};

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.background};
  }
`;
