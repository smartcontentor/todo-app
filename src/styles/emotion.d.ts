import '@emotion/react';

declare module '@emotion/react' {
  interface ThemeColors {
    primary: string;
    error: string;
    background: string;
    grey: string;
    white: string;
  }

  interface ThemeShadows {
    regular: string;
  }

  export interface Theme {
    colors: ThemeColors;
    shadows: ThemeShadows;
  }
}
